import React from "react"

import Layout from "../components/layout/Layout"

const Error = () => {
  return (
    <Layout isShowForm={true} >
      <div className="error-page">
        <h1>404 not found</h1>
      </div>
    </Layout>
  )
}

export default Error
