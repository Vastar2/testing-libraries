import { useQuery } from "react-query";
import axios from "axios";
import { getDefaultState } from "react-query/types/core/mutation";
// import { useState } from "react";

const useGetPokeData = () => {
  // const [isLoading, setIsLoading] = useState(false);

  const getData = (input) => {};

  const { data, status } = useQuery("data", async () => {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${input}`
    );

    const result = await data.json();

    const currentPoke = {
      id: result.id,
      name: result.name,
      abilities: result.abilities.map((value) => value.ability.name),
    };
    return currentPoke;
  });

  console.log(1, data, status);

  return { data, status, getData };
};

export default useGetPokeData;
