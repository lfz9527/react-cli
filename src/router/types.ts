import { type RouteObject } from "react-router-dom"
// 定义路由元数据类型 根据实际需求定义元数据类型
export type MetaObjectType = {
  title?: string
  [key: string]: string | number | boolean | object | undefined
}
export type RouteMetaType = { meta: string | number | MetaObjectType }

// 使用 type 关键字扩展 RouteObject 类型
type RouteConfigType = RouteObject & {
  meta?: MetaObjectType
}

export type { RouteConfigType }
