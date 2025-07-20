import { Router } from "express";
import * as PlayersController from "./controllers/players-controller";
import * as ClubsController from "./controllers/clubs-controller";

const router = Router();

/**
 * pode-se perceber que a rota /players se repete 3x,
 * porém, na verdade, o que muda é o método HTTP
 * de cada uma, sendo respectivamente: get, post e patch
 */
router.get("/players", PlayersController.getPlayer);
router.post("/players", PlayersController.postPlayer);
router.delete("/players/:id", PlayersController.deletePlayer);
router.patch("/players/:id", PlayersController.updatePlayer);
router.get("/players/:id", PlayersController.getPlayerById);

router.get("/clubs", ClubsController.getClubs);

export default router;
