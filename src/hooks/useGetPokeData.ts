import { useQuery } from "react-query";
import axiosClient from "../api/axios";
import toast from "react-hot-toast";

export const useGetAllPokesData = () => {
  const error = () => toast.error("No pokemons");

  const data = useQuery("GET_ALL_POKEMONS", () => axiosClient.get(`pokemon/`), {
    enabled: false,
    onError: () => error(),
  });
  return data;
};

export const useGetPokeData = (queryRequest: string) => {
  const error = () => toast.error("Wrong name");
  const data = useQuery(
    "GET_POKEMON",
    () => axiosClient.get(`pokemon/${queryRequest}`),
    {
      enabled: false,
      onError: () => error(),
    }
  );
  return data;
};
