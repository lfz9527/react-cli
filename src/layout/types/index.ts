import type { MenuProps } from "antd"

type MenuType = Required<MenuProps>["items"][number]

type MenuOption = {
  selectKey: string[]
  openKeys: string[]
}

export type { MenuType, MenuOption }
