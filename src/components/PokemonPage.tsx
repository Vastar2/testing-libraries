import { useEffect, useState } from "react";
import { useGetAllPokesData, useGetPokeData } from "../hooks/useGetPokeData";
import { Helmet } from "react-helmet-async";

const PokemonPage = () => {
  const [queryRequest, setQueryRequest] = useState("");
  const [queryRequestOnClick, setQueryRequestOnClick] = useState("");

  const {
    data: allPokes,
    isLoading: isLoadingAll,
    refetch: refetchAllPokes,
  } = useGetAllPokesData();

  useEffect(() => {
    refetchAllPokes();
  }, [refetchAllPokes]);

  const {
    data: currentPoke,
    isLoading,
    refetch,
  } = useGetPokeData(queryRequest || queryRequestOnClick);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    refetch();
  };

  return (
    <>
      <Helmet>
        <title>Poke</title>
      </Helmet>
      <div className="flex gap-8 justify-center pt-12">
        <div>
          <p className="mb-4 text-center">
            <b>Pokemons list</b> <br />
            <i>(Try to click)</i>
          </p>
          {allPokes ? (
            <ul className="flex gap-2 flex-wrap w-[408px] mt-4 justify-center">
              {allPokes.data.results.map(
                (item: { name: string }, index: number) => (
                  <li
                    key={index}
                    className="block w-[200px] rounded-custom border border-mainGray"
                  >
                    <button
                      type="button"
                      onClick={async () => {
                        setQueryRequest("");
                        await setQueryRequestOnClick(item.name);
                        await refetch();
                      }}
                      className="w-full h-full p-2 duration-300 hover:bg-accentLight"
                    >
                      <p>
                        <span className="underline">Name:</span> {item.name}
                      </p>
                    </button>
                  </li>
                )
              )}
            </ul>
          ) : null}
        </div>
        <div>
          <form onSubmit={handleSubmit} className="w-[200px] mb-7">
            <label>
              <p className="mb-4 text-center">
                <b>Pockemon name</b> <br />
                <i>(u can try "ditto")</i>
              </p>
              <input
                type="text"
                value={queryRequest}
                onChange={(e) => {
                  setQueryRequestOnClick("");
                  setQueryRequest(e.target.value);
                }}
                className="input-main mb-2"
              />
            </label>
            <button type="submit" className="button-main">
              Find
            </button>
          </form>
          {currentPoke ? (
            <>
              <p className="mb-2 text-center">
                <b>Result data</b>
              </p>
              <div className="block w-[200px] p-2 rounded-custom border border-mainGray">
                <p className="mb-1">
                  <span className="underline">Id:</span> {currentPoke.data.id}
                </p>
                <p className="mb-1">
                  <span className="underline">Name:</span>{" "}
                  {currentPoke.data.name}
                </p>
                <p className="w-[200px] flex flex-wrap gap-1">
                  <span className="underline">Abilities:</span>{" "}
                  {currentPoke.data.abilities?.map(
                    (value: { ability: { name: string } }, index: number) =>
                      index === currentPoke.data.abilities.length - 1
                        ? `${value.ability.name}.`
                        : `${value.ability.name}, `
                  )}
                </p>
              </div>
            </>
          ) : (
            <p className="text-center">None</p>
          )}
        </div>
        {(isLoading || isLoadingAll) && <p>Loading...</p>}
      </div>
    </>
  );
};

export default PokemonPage;
