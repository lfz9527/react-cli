import React from 'react'
import ReactDOM from 'react-dom/client'
import '@/design/index.less'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('app')!)
// v18 的新方法
root.render(<App />)