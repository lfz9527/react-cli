import React from "react"
import { Dropdown, Layout, Button, theme, Avatar } from "antd"
import { type MenuType } from "@/layout/types"
import { MenuUnfoldOutlined, MenuFoldOutlined } from "@ant-design/icons"
import "./index.less"
const { Header } = Layout

type Props = {
  collapsed: boolean
  onChange: () => void
}

const LHeader: React.FC<Props> = ({ collapsed, onChange }) => {
  const { token } = theme.useToken()
  const { colorBgContainer } = token
  const items: MenuType[] = [
    {
      key: "1",
      label: "退出登录",
    },
    {
      key: "2",
      label: "设置",
    },
  ]

  return (
    <Header
      className="l-header"
      style={{ padding: 0, background: colorBgContainer }}
    >
      <Button
        type="text"
        icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
        onClick={onChange}
        style={{
          fontSize: "14px",
          width: 56,
          height: 56,
        }}
      />
      <div className="header-right-action">
        <div className="right-action-container">
          <div className="action-item">
            <Dropdown
              className="action-avatar"
              menu={{ items }}
              placement="bottomLeft"
            >
              <div className="action-avatar-wrap">
                <Avatar
                  style={{
                    backgroundColor: "#1677ff",
                    verticalAlign: "middle",
                  }}
                  size="small"
                >
                  L
                </Avatar>
                <span className="text">Admin</span>
              </div>
            </Dropdown>
          </div>
        </div>
      </div>
    </Header>
  )
}
export default LHeader
