import React from "react"
import ReactDOM from "react-dom/client"
import "@/design/index.less"
import App from "./App"
import { ConfigProvider } from "antd"

const root = ReactDOM.createRoot(document.getElementById("app")!)
root.render(
  <React.StrictMode>
    <ConfigProvider>
      <App />
    </ConfigProvider>
  </React.StrictMode>,
)
