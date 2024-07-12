import React from "react"
import { Spin } from "antd"
import "./index.less"

type Props = {
  text?: string
}

const Loading: React.FC<Props> = (props) => {
  const { text = "加载中" } = props
  const content = <div style={{ padding: 100 }} />

  return (
    <div className="loading">
      <Spin tip={text} size="large">
        {content}
      </Spin>
    </div>
  )
}

export default Loading
