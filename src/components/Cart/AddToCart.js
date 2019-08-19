import React from "react"

const AddToCart = () => {
  return (
    <button
      class="button is-primary is-rounded"
      onClick={() => console.log("added to cart")}
    >
      Add To Cart
    </button>
  )
}

export default AddToCart
