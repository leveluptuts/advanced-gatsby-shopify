import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProductsListing from "../components/ProductsListing/ProductsListing"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <ProductsListing />
  </Layout>
)

export default IndexPage
