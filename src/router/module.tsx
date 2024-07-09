import React, { lazy } from "react"
import type { RouteConfigType } from "./types"
import { BasicLayout } from "@/layout/index"

const lazyLoad = (component: string) => {
  const Module = lazy(async () => await import(`@/views/${component}`))
  return <Module />
}

const modules: RouteConfigType[] = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "dashboard",
        element: lazyLoad("dashboard/index"),
      },
      {
        path: "demo",
        element: lazyLoad("demo/index"),
      },
    ],
  },
]

export default modules
