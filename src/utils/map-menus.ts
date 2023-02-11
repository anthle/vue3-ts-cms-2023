function getLocalRoutes() {
	// 读取本地路由文件
	const localRoutes: any = []
	const files: Record<string, any> = import.meta.glob('@/router/main/**/*.ts', {
		eager: true
	})
	// 将路由文件转换为路由对象
	for (const key in files) {
		const module = files[key].default
		localRoutes.push(module)
	}
	return localRoutes
}

export let firstMenu: any = null
export default function mapMenusToRoutes(userMenus: any) {
	const localRoutes = getLocalRoutes()
	const menusRoutes = []
	// 遍历用户菜单，匹配本地路由
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			const route = localRoutes.find((item: any) => item.path === submenu.url)
			if (route) {
				menusRoutes.push(route)

				// 保存第一个菜单
				if (!firstMenu && route) {
					firstMenu = submenu
					console.log(firstMenu)
				}
			}
		}
	}
	return menusRoutes
}

/**
 *
 * @param path 当前路径
 * @param userMenus 用户菜单
 */
export function mapPathToMenu(path: string, userMenus: any[]) {
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			if (submenu.url === path) {
				return submenu
			}
		}
	}
}
