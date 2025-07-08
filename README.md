# ShoppingCart Backend

This is the node application containing apis for the shopping cart.

🚀 Features

✅ Get list of all products

✅ Get individual product by it Id

✅ Get list of products in cart

✅ Update product in cart

✅ Delete product in cart

✅ Add product to the cart

## Getting Started

```bash
git clone https://github.com/ankita-chandekar/shopping-cart-backend.git
npm install
npm run start
```

## Development server

To start a local development server, run:

```bash
npm run start
```

Once the server is running, open your browser and navigate to `http://localhost:4000/products`. This will make get call and fetch list of products available.

## List of APIs

1. On GET `http://localhost:4000/products`, this will give list of products available

2. On GET `http://localhost:4000/products/1`, this will give product detail for the product with id as 1.

3. on GET `http://localhost:4000/cart`, this will give list of products added in the cart

4. on POST `http://localhost:4000/cart`, this will add the given product to the cart

5. on PUT `http://localhost:4000/cart`,this will update the product quantity of the products in the cart.

6. on DELETE `http://localhost:4000/cart`,this will remove the product from the cart
