import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Result } from "antd"
const NotFound: React.FC = () => {
  const nav = useNavigate()
  const onBack = () => {
    nav("/login", { replace: true })
  }

  return (
    <Result
      status="404"
      title="404"
      subTitle="对不起，您访问的页面不存在"
      extra={
        <Button type="primary" onClick={onBack}>
          返回
        </Button>
      }
    />
  )
}

export default NotFound
