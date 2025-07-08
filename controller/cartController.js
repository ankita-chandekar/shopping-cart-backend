import data from "../data.json" with { type: "json" };

export const getCart = (req, res) => {
  if (!data.cart) {
    return res.status(500).send({ error: "Cart not found" });
  }
  if (data.cart.length === 0) {
    return res.status(500).send({ error: "Cart is Empty" });
  }

  return res.status(200).send({ data: data.cart });
};

export const addToCart = (req, res) => {
  const { id, quantity = 1 } = req.body;

  if (!data.products) {
    return res.status(500).send({ error: "Products not found" });
  }
  const product = data.products.find((ele) => ele.id == id);
  if (!product) {
    return res.status(500).send({ error: "Products not found" });
  }

  const productInCart = data.cart.find((ele) => ele.id == id);

  if(!productInCart){
    const cartProduct = {...product, quantity}
    data.cart.push(cartProduct);
    return res.status(200).send({ message: "Product added to Cart", data:cartProduct });
  }
  else{
    const cartProduct = {...productInCart,quantity: productInCart.quantity + quantity}
    // console.log(cartProduct, cartProduct, productInCart.quantity)
    data.cart = data.cart.map(ele => ele.id === cartProduct.id ? cartProduct : ele)
    return res.status(200).send({ message: "Product added to Cart", data:cartProduct });
  }
}; 


export const updateCart = (req, res) => {
    const { id, quantity } = req.body;

    if(data.cart.length === 0){
        return res.status(500).send({ error: "Cart is Empty" });
    }
    const product = data.cart.find((ele) => ele.id == id);
    if (!product) {
      return res.status(500).send({ error: "Product not found in Cart" });
    }
    const cartProduct = {...product, quantity : quantity}
    data.cart = data.cart.map(ele => ele.id == id ? cartProduct: ele)

    return res.status(200).send({ message: "Product updated in the cart", data:cartProduct });
  }; 

  export const deleteCart = (req, res) => {
    const { id } = req.body;

    if(data.cart.length === 0){
        return res.status(500).send({ error: "Cart is Empty" });
    }
    const product = data.cart.find((ele) => ele.id == id);
    if (!product) {
      return res.status(500).send({ error: "Product not found in Cart" });
    }

    data.cart = data.cart.filter((ele) => ele.id !== id);
    return res.status(200).send({ message: "Product deleted from the cart", data:product });
  }; 