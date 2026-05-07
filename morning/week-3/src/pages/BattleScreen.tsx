import { Characters } from "../constants/Characters";
import { Character } from "../components/Character";
export const BattleScreen = () => {
  const characters = Characters.slice(0, 2);

  return (
    <main className="w-full bg-slate-800">
      <Character characters={characters} />
    </main>
  );
};
