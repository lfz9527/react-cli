import { type RouteObject } from "react-router-dom"
type Router = RouteObject & {
  key?: string | number
  label?: string
  component?: React.FC
  meta?: {
    title?: string
    icon?: React.ReactNode
    hidden?: boolean
    roles?: string[]
  }
}

export type { Router }
