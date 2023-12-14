import {
  useState,
  // useEffect
} from "react";
import toast from "react-hot-toast";
import useGetPokeData from "../hooks/useGetPokeData";

const PokemonPage = () => {
  const [currentPoke, setCurrentPoke] = useState<{
    id: number;
    name: string;
    abilities: string[];
  } | null>(null);
  const [currentStatus, setCurrentStatus] = useState("");
  const [input, setInput] = useState("");

  const error = () => toast.error("Wrong name");

  const { data, status, getData } = useGetPokeData(input);

  console.log(2, currentPoke, currentStatus);

  //   const getPokeData = async () => {
  //     try {
  //       const data = await fetch(`https://pokeapi.co/api/v2/pokemon/${input}`);
  //       const result = await data.json();
  //       console.log(result);
  //       setCurrentPoke({
  //         id: result.id,
  //         name: result.name,
  //         abilities: result.abilities.map((value) => value.ability.name),
  //       });
  //     } catch (e) {
  //       setCurrentPoke(null);
  //       error();
  //     }
  //   };

  return (
    <div className="flex flex-col items-center pt-12">
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (input === "") {
            error();
            setCurrentPoke(null);
            return;
          }
          getData(input);
        }}
        className="w-[200px] mb-8"
      >
        <label>
          <p className="mb-4 text-center">
            <b>Pockemon name</b> <br />
            <i>(u can try "ditto")</i>
          </p>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="block w-full py-2 rounded-custom border border-mainGray mb-2 px-4"
          />
        </label>
        <button
          type="submit"
          className="block w-full py-2 rounded-custom border border-accent duration-300 hover:bg-accentLight"
        >
          Find
        </button>
      </form>
      {currentPoke ? (
        <div className="block w-[200px] p-2 rounded-custom border border-mainGray">
          <p className="mb-1">
            <span className="underline">Id:</span> {currentPoke?.id}
          </p>
          <p className="mb-1">
            <span className="underline">Name:</span> {currentPoke?.name}
          </p>
          <p className="w-[200px] flex flex-wrap gap-1">
            <span className="underline">Abilities:</span>{" "}
            {currentPoke.abilities?.map((value, index) =>
              index === currentPoke.abilities.length - 1
                ? `${value}.`
                : `${value}, `
            )}
          </p>
        </div>
      ) : (
        <p>Find your first pokemon by name</p>
      )}
    </div>
  );
};

export default PokemonPage;
