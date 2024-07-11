import React, { useEffect } from "react"
import "./index.less"
import { theme, Button, Divider, Checkbox, Form, Input } from "antd"
import { UserOutlined, LockOutlined } from "@ant-design/icons"
import type { FormProps } from "antd"
import { useNavigate } from "react-router-dom"
const { Item } = Form

type FieldType = {
  username?: string
  password?: string
  remember?: boolean
}

const Login: React.FC = () => {
  const { token } = theme.useToken()
  const { borderRadiusLG } = token
  const nav = useNavigate()
  const [from] = Form.useForm()

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => {
      window.removeEventListener("keydown", handleKeyDown)
    }
  }, [])

  // 监听键盘事件回调函数
  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === "Enter") {
      from.submit()
    }
  }

  // 表单提交成功
  const onFinish: FormProps<FieldType>["onFinish"] = (values: FieldType) => {
    console.log("values", values)
    nav("/dashboard")
  }

  // 表单提交失败
  const onFinishFailed: FormProps<FieldType>["onFinishFailed"] = (
    errorInfo,
  ) => {
    // console.log("errorInfo", errorInfo)
  }

  return (
    <div className="login-container-wrap">
      <div className="login-container">
        <div className="container">
          <div className="form-info" style={{ borderRadius: borderRadiusLG }}>
            <h2 className="form-title">登录</h2>
            <Form
              name="login"
              form={from}
              size="large"
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              initialValues={{ remember: false }}
              autoComplete="off"
            >
              <Item<FieldType>
                name="username"
                rules={[{ required: true, message: "请输入账号" }]}
              >
                <Input placeholder="请输入账号" prefix={<UserOutlined />} />
              </Item>
              <Item<FieldType>
                name="password"
                rules={[{ required: true, message: "请输入密码" }]}
              >
                <Input.Password
                  placeholder="请输入密码"
                  prefix={<LockOutlined />}
                />
              </Item>
              <Item<FieldType> className="check-memory">
                <Item<FieldType>
                  name="remember"
                  valuePropName="checked"
                  noStyle
                >
                  <Checkbox>记住密码</Checkbox>
                </Item>
                <a className="login-form-forgot" href="">
                  忘记密码
                </a>
              </Item>
              <Item>
                <Button
                  block
                  type="primary"
                  htmlType="submit"
                  style={{ height: 48 }}
                >
                  登录
                </Button>
              </Item>
            </Form>
            {/* @TODO 实现其他方式登录 */}
            {/* <Divider plain>其他登录方式</Divider> */}
            <div className="form-footer-content">
              没有账户？
              <a className="login-form-register" href="">
                注册
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
