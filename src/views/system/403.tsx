import React from "react"
import { useNavigate } from "react-router-dom"
import { Button, Result } from "antd"
const Forbidden: React.FC = () => {
  const nav = useNavigate()
  const onBack = () => {
    nav("/login", { replace: true })
  }

  return (
    <Result
      status="403"
      title="403"
      subTitle="暂无权限"
      extra={
        <Button type="primary" onClick={onBack}>
          返回
        </Button>
      }
    />
  )
}

export default Forbidden
