import React from "react"
import { graphql, StaticQuery } from "gatsby"
import ProductsListingItem from "./ProductsListingItem"

const PRODUCTS_LISTING_QUERY = graphql`
  query ProductsListingQuery {
    products: allShopifyProduct(sort: { fields: publishedAt, order: ASC }) {
      edges {
        node {
          title
          id
          handle
          description
          productType
          variants {
            shopifyId
            title
            price
            availableForSale
          }
          images {
            id
            localFile {
              childImageSharp {
                fluid(maxWidth: 400, maxHeight: 400) {
                  ...GatsbyImageSharpFluid_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`

const ProductsListing = () => {
  return (
    <div>
      <h2 className="title">Level Up Products</h2>
      <StaticQuery
        query={PRODUCTS_LISTING_QUERY}
        render={({ products }) => {
          return (
            <div className="columns is-multiline">
              {products.edges.map(({ node: product }) => (
                <ProductsListingItem key={product.id} product={product} />
              ))}
            </div>
          )
        }}
      />
    </div>
  )
}

export default ProductsListing
