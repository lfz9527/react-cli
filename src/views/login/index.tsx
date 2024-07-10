import React from "react"
import "./index.less"
import { theme, Button, Checkbox, Form, Input } from "antd"

const Login: React.FC = () => {
  const { token } = theme.useToken()
  const { borderRadiusLG } = token

  type FieldType = {
    username?: string
    password?: string
    remember?: boolean
  }

  return (
    <div className="login-container-wrap">
      <div className="login-container">
        <div className="container">
          <div className="form-info" style={{ borderRadius: borderRadiusLG }}>
            <h2 className="form-title">登录</h2>
            <Form name="login" size="large">
              <Form.Item<FieldType>
                name="username"
                rules={[{ required: true, message: "请输入账号" }]}
              >
                <Input placeholder="请输入账号" />
              </Form.Item>
              <Form.Item<FieldType>
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input.Password placeholder="请输入密码" />
              </Form.Item>
              <Form.Item<FieldType>
                name="remember"
                valuePropName="checked"
                className="check-memory"
              >
                <Checkbox>记住密码</Checkbox>
              </Form.Item>
              <Form.Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ height: 48 }}
                >
                  登录
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
