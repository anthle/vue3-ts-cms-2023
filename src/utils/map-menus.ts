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
export function mapMenusToRoutes(userMenus: any) {
	const localRoutes = getLocalRoutes()
	const menusRoutes: any = []
	// 遍历用户菜单，匹配本地路由
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			const route = localRoutes.find((item: any) => item.path === submenu.url)
			if (route) {
				if (!menusRoutes.find((item: any) => item.path === menu.url)) {
					menusRoutes.push({ path: menu.url, redirect: route.path })
				}

				menusRoutes.push(route)

				// 保存第一个菜单
				if (!firstMenu && route) {
					firstMenu = submenu
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

export function mapPathToBreadcrumb(path: string, userMenus: any[]) {
	const breadcrumb = []
	for (const menu of userMenus) {
		for (const submenu of menu.children) {
			if (submenu.url === path) {
				breadcrumb.push({ name: menu.name, path: menu.url })
				breadcrumb.push({ name: submenu.name, path: submenu.url })
			}
		}
	}
	return breadcrumb
}

export function mapMenuListToIds(menuList: any[]) {
	const ids: number[] = []

	function recurseGetIds(menus: any[]) {
		for (const item of menus) {
			if (item.children) {
				recurseGetIds(item.children)
			} else {
				ids.push(item.id)
			}
		}
	}
	recurseGetIds(menuList)

	return ids
}

export function mapMenuListToPermissions(menuList: any[]) {
	const permissions: string[] = []

	function recurseGetPermissions(menus: any[]) {
		for (const item of menus) {
			if (item.type === 3) {
				permissions.push(item.permission)
			} else {
				recurseGetPermissions(item.children ?? [])
			}
		}
	}

	recurseGetPermissions(menuList)

	return permissions
}
