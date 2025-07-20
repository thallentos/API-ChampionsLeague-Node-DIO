import { noContent, ok } from "../utils/http-helper";

export const getPlayerService = async () => {
  const data = { player: "Antony, o GOAT" };
  let response = null

  if (data) {
    response = await ok(data);
  } else {
    response = await noContent();
  }
  
  return response;
};
