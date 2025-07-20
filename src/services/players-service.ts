import { PlayerModel } from "../models/player-model";
import * as PlayersRepository from "../repositories/players-respository";
import * as HttpResponse from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = await PlayersRepository.findAllPlayers();
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const getPlayerByIdService = async (id: number) => {
  //pedir pro repositório de dados
  const data = await PlayersRepository.findPlayerById(id);
  let response = null;

  if (data) {
    response = await HttpResponse.ok(data);
  } else {
    response = await HttpResponse.noContent();
  }

  return response;
};

export const createPlayerService = async (player: PlayerModel) => {
  let response = null;
  //verifica se está vazio
  if (Object.keys(player).length !== 0) {
    await PlayersRepository.insertPlayer(player);
    response = await HttpResponse.created();
  } else {
    response = await HttpResponse.badRequest();
  }

  return response;
};
