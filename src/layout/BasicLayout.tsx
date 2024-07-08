import React, { useState } from "react"
import { useNavigate, Outlet } from "react-router-dom"
import type { MenuProps } from "antd"
import { Menu, Layout, Button } from "antd"
import {
  EyeTwoTone,
  TagTwoTone,
  ShopTwoTone,
  MenuUnfoldOutlined,
  MenuFoldOutlined,
} from "@ant-design/icons"

const { Header, Content, Sider } = Layout
type MenuItem = Required<MenuProps>["items"][number]

const BasicLayout: React.FC = () => {
  const nav = useNavigate()

  // 设置菜单栏隐藏显示
  const [collapsed, setCollapsed] = useState(false)
  const [stateOpenKeys, setOpenKeys] = useState<string[]>([])
  const collapsedChange = () => {
    setCollapsed(!collapsed)
  }

  const item: MenuItem[] = [
    {
      key: "登录",
      label: "login",
      icon: <EyeTwoTone />,
    },
    {
      key: "404",
      label: "404",
      icon: <TagTwoTone />,
    },
    {
      key: "403",
      label: "403",
      icon: <ShopTwoTone />,
    },
  ]

  const menuClick = (data: any) => {
    console.log("data", data)

    // nav(data.item.props.path)
  }
  const onOpenChange: MenuProps["onOpenChange"] = (openKeys) => {
    setOpenKeys(openKeys.slice(-1))
  }

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider trigger={null} width={180} collapsible collapsed={collapsed}>
        <div className="logo-vertical" />
        <Menu
          mode="inline"
          defaultSelectedKeys={["1"]}
          items={item}
          style={{
            height: "100%",
            borderRight: 0,
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
          }}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          onClick={menuClick}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0, background: "#fff" }}>
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
            padding: 12,
            margin: 0,
            minHeight: 280,
          }}
        >
          <Outlet></Outlet>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
