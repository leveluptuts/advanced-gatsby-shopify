import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import AddToCart from "../Cart/AddToCart"

const ProductsListingItem = ({ product }) => {
  const {
    images: [firstImage],
    variants: [firstVariant],
  } = product
  return (
    <article className="column is-one-quarter content">
      <Link
        to={`/product/${product.handle}`}
        style={{ display: "block", marginBottom: "2rem" }}
      >
        <Image fluid={firstImage.localFile.childImageSharp.fluid} />
        <h3 className="title is-3">{product.title}</h3>
        <p className="subtitle is-4">${firstVariant.price}</p>
      </Link>
      <AddToCart />
    </article>
  )
}

export default ProductsListingItem
