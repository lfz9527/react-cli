import React, { Suspense } from "react"
import { RouterProvider } from "react-router-dom"
import router from "./router"
import Loading from "@/components/loading"

const App: React.FC = () => {
  return (
    <Suspense fallback={<Loading />}>
      <RouterProvider router={router} />
    </Suspense>
  )
}

export default App
