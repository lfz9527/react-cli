import { Navigate, createHashRouter } from "react-router-dom"
import React, { lazy } from "react"
import type { RouteConfigType } from "./types"
import Error404 from "@/views/system/404"
import Error403 from "@/views/system/403"
import Login from "@/views/login/index"
import { BasicLayout } from "@/layout/index"

const systemRoutes: RouteConfigType[] = [
  {
    path: "/",
    element: <Navigate to="/login" />,
  },
  // {
  //   path: "*",
  //   element: <Navigate to="/404" />,
  // },
  // {
  //   path: "/403",
  //   element: <Error403 />,
  // },
  // {
  //   path: "/404",
  //   element: <Error404 />,
  // },
]

const routes: RouteConfigType[] = [
  {
    path: "/",
    element: <BasicLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },

      {
        path: "403",
        element: <Error403 />,
      },
      {
        path: "404",
        element: <Error404 />,
      },
    ],
  },
]

const BasicRouter: RouteConfigType[] = [...systemRoutes, ...routes]

const router = createHashRouter(BasicRouter)
export default router
