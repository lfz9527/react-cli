import React from "react"
import { Spin } from "antd"
import "./index.less"

type Props = {
  text?: string
}

const Loading: React.FC<Props> = (props) => {
  const { text = "数据加载中..." } = props

  return (
    <div className="loading">
      <Spin size="large" />
      <h3 className="loading-text">{text}</h3>
    </div>
  )
}

export default Loading
