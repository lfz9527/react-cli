import React, { useState, useEffect, Suspense } from "react"
import { useLocation, useNavigate, Outlet } from "react-router-dom"
import { Menu, Layout, theme } from "antd"
import { EyeTwoTone, TagTwoTone } from "@ant-design/icons"
import "./BasicLayout.less"
import {
  type MenuType,
  type MenuOption,
  type menuClickType,
} from "./types/index"
import LHeader from "./components/LHeader"
const { Content, Sider } = Layout

const BasicLayout: React.FC = () => {
  const nav = useNavigate()
  const loc = useLocation()
  const { token } = theme.useToken()
  const { borderRadiusLG } = token
  // 设置菜单栏收启显示
  const [collapsed, setCollapsed] = useState(false)
  // 菜单选项
  // * 保持菜单激活状态
  const [menuKeys, setMenuKeys] = useState<MenuOption>({
    selectKey: [],
    openKeys: [],
  })
  const [item, setItem] = useState<MenuType[]>([
    {
      key: "/dashboard",
      label: "dashboard",
      icon: <EyeTwoTone />,
    },
    {
      key: "/demo",
      label: "demo",
      icon: <TagTwoTone />,
    },
  ])

  // 监听路由变化
  useEffect(() => {
    setMenuKeys(getMenKeys)
  }, [loc])

  // 获取菜单key
  const getMenKeys = () => {
    const pathnames = loc.pathname
    const strArr = pathnames ? [pathnames] : []
    return {
      selectKey: strArr,
      openKeys: strArr,
    }
  }

  // 菜单收起展开
  const collapsedChange = () => {
    setCollapsed(!collapsed)
  }

  // 菜单点击
  const menuClick = ({ key, keyPath }: menuClickType) => {
    nav(key)
    setMenuKeys({ ...menuKeys, selectKey: [key] })
  }

  // 菜单展开收起
  const onMenuOpenChange = (keys: string[]) => {
    setMenuKeys({ ...menuKeys, openKeys: keys })
  }

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        className="fixed-side"
        trigger={null}
        width={180}
        collapsible
        collapsed={collapsed}
        collapsedWidth="50"
      >
        {/* log */}
        <div className="logo-vertical" />
        <Menu
          mode="inline"
          items={item}
          defaultOpenKeys={menuKeys.openKeys}
          selectedKeys={menuKeys.selectKey}
          style={{
            height: "100%",
            borderRight: 0,
            boxShadow: "0 0 10px rgba(0,0,0,.1)",
          }}
          onOpenChange={onMenuOpenChange}
          onClick={menuClick}
        />
      </Sider>
      <Layout>
        <LHeader collapsed={collapsed} onChange={collapsedChange} />
        <Content
          style={{
            padding: 8,
            minHeight: 280,
            overflow: "auto",
            borderRadius: borderRadiusLG,
          }}
        >
          {/* 二级路由出口 */}
          {/* <div style={{ height: 2000, width: 800, background: "red" }}></div> */}
          <Suspense>
            <Outlet />
          </Suspense>
        </Content>
      </Layout>
    </Layout>
  )
}

export default BasicLayout
