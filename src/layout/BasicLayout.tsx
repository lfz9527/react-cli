import React, { useState, useEffect, Suspense } from "react"
import { useLocation, useNavigate, Outlet } from "react-router-dom"
import { Menu, Layout, Button, theme } from "antd"
import {
  EyeTwoTone,
  TagTwoTone,
  ShopTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"
import "./BasicLayout.less"
import { type MenuType } from "./types/index"
const { Header, Content, Sider } = Layout

const BasicLayout: React.FC = () => {
  const nav = useNavigate()
  const loc = useLocation()
  const { token } = theme.useToken()
  const { colorBgContainer, borderRadiusLG } = token
  // 设置菜单栏收启显示
  const [collapsed, setCollapsed] = useState(false)
  const [item, setItem] = useState<MenuType[]>([
    {
      key: "/login",
      label: "登录",
      icon: <EyeTwoTone />,
    },
    {
      key: "/404",
      label: "404",
      icon: <TagTwoTone />,
    },
    {
      key: "/403",
      label: "403",
      icon: <ShopTwoTone />,
      children: [
        {
          key: "/404?name=1",
          label: "404",
          icon: <ShopTwoTone />,
        },
      ],
    },
  ])

  // 监听路由变化
  useEffect(() => {
    // const { pathname, search } = loc
  }, [loc])

  const collapsedChange = () => {
    setCollapsed(!collapsed)
  }

  const menuClick = ({ key = "" }) => {
    // const path = key
    // if (path) nav(path)
  }

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        className="fixed-side"
        trigger={null}
        width={180}
        collapsible
        collapsed={collapsed}
      >
        {/* log */}
        <div className="logo-vertical" />
        <Menu
          mode="inline"
          items={item}
          style={{
            height: "100%",
            borderRight: 0,

            boxShadow: "0 0 10px rgba(0,0,0,.1)",
          }}
          // onOpenChange={onOpenChange}
          onClick={menuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: colorBgContainer }}>
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={collapsedChange}
            style={{
              fontSize: "14px",
              width: 64,
              height: 64,
            }}
          />
        </Header>
        <Content
          style={{
            padding: 0,
            margin: 8,
            minHeight: 280,
            overflow: "auto",
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 二级路由出口 */}
          {/* @TODO 缺少Loading */}
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
