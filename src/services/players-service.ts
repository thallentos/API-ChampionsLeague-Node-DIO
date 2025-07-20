import * as PlayersRepository from "../repositories/players-respository";
import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayersRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }

  return response;
};
