import { ClubModel } from "../models/club-model";

const database = [
  {
    id: 1,
    name: "Paris Saint-German",
  },
];

export const findAllClubs = async (): Promise<ClubModel[]> => {
  return database;
};
