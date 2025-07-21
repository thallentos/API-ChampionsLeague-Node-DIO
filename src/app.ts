import express from "express";
import router from "./routes";
import cors from "cors"

function createApp() {
  const app = express();

  app.use(express.json());
  app.use("/api", router);

  /** configura o CORS para delimitar quem pode acessar 
   * a API e quais metodos podem ser usados
  */
  const corsOptions = {
    origin: ["http://localhost:3333"],
    methods: ["GET", "POST", "PATCH", "DELETE"], 
  }

  app.use(cors());

  return app;
}

