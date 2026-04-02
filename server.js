import "dotenv/config";
import express from "express";
import helmet from "helmet";

import userRoutes from "./src/routes/userRoutes.js";

const PORT = process.env.PORT;

const app = express();

app.use(express.json());
app.use(helmet());

// Global
app.get("/health", (req, res) => {
  res.json({
    status: "Ok",
  });
});

app.use("/api/users", userRoutes);

app.listen(PORT, () => {
  console.log(`Porta ${PORT} rodando`);
});
