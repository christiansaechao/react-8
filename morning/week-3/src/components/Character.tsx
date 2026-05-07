import { useEffect, useState } from "react";

type CharacterType = {
  characters: {
    name: string;
    stats: {
      health: number;
      abilities: { name: string; attackPower: number; defenseStat: number }[];
    };
  }[];
};

export const Character = ({ characters }: CharacterType) => {
  const [health1, setHealth1] = useState(0);
  const [health2, setHealth2] = useState(0);

  useEffect(() => {
    characters.map((char, i) => {
          i == 0 && setHealth1(char.stats.health);
          i == 1 && setHealth2(char.stats.health);

    })
  }, [health1, health2])

  const handleAbility = (ability: any, char: any, index: number) => {
    let newHealth = char[index].stats.health;

    if (char[index + 1] == undefined && char[index - 1] !== undefined) {
      newHealth = char[index - 1].stats.health -= ability.attackPower ;
      setHealth1(newHealth);
    }

    if (char[index - 1] == undefined && char[index + 1] !== undefined) {
      newHealth = char[index + 1].stats.health -= ability.attackPower ;
      setHealth2(newHealth);
    }
  };

  return (
    <>
      {characters.map((char, i) => {
        return (
          <div
            key={i}
            className="w-1/2 bg-slate-700 rounded-4xl border-red-500 m-2 z-0  border-1 justify-items-center "
          >
            <div>{char.name}</div>
                    {i == 0 ? health1 : health2}            
                    {char.stats.abilities.map((ability) => {
              return (
                <div key={i}
                  className="z-1 cursor-pointer min-h-20  p-2 m-2 self-center flex-row flex w-1/2 bg-slate-600 border-red-500 border-1 rounded-4xl justify-evenly"
                  onClick={() => handleAbility(ability, characters, i)}
                >
                  <p>{ability.name}</p>
                  <p>atk: {ability.attackPower}</p>
                  <p>def: {ability.defenseStat}</p>
                </div>
              );
            })}
          </div>
        );
      })}
    </>
  );
};
