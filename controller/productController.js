import data from "../data.json" with { type: "json" };

export const getAllProducts = (req, res) => {
  if (data.products) {
    return res.status(200).send({ data: data.products });
  } else {
    return res.status(500).send({ error: "Products not found" });
  }
};

export const getProduct = (req, res) => {
  const { id } = req.params;

  if (!data.products) {
    return res.status(500).send({ error: "Products not found" });
  }
  const product = data.products.find((ele) => ele.id === Number(id));

  if (!product) {
    return res.status(500).send({ error: "Product not found" });
  }
  return res.status(200).send({ data: product });
};
