import express from "express";
import productRouter from "./routes/productRoute.js";
import cartRouter from "./routes/cartRoute.js";
import cors from "cors";

const PORT = 4000;

const app = express();

app.use(cors());

app.use(express.json());

app.use("/cart", cartRouter);
app.use("/products", productRouter);

app.get("/hello", (req, res) => {
  res.send("Hello World");
});

app.listen(PORT, () => {
  console.log("Server Started at PORT", PORT);
});
