import React from "react"
const ErrorBoundary: React.FC<any> = (props) => {
  console.log(props)

  return (
    <div>
      <p>Something went wrong:</p>
      {/* <pre>{error.message}</pre> */}
    </div>
  )
}
export default ErrorBoundary
