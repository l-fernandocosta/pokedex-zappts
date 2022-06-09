export interface ResultsInterface {
  name: string;
  url: string;
}

export interface ResultsProps {
  next: string;
  previous?: string;
  count: number;
  results: ResultsInterface[];
}
/* ------------------------------------------------------------------------------- */

export interface Form {
  name: string;
}
export interface Type {
  type: {
    name:
      | "normal"
      | "fire"
      | "water"
      | "electric"
      | "grass"
      | "ice"
      | "fighting"
      | "poison"
      | "ground"
      | "flying"
      | "psychic"
      | "bug"
      | "rock"
      | "ghost"
      | "dragon"
      | "dark"
      | "steel"
      | "fairy"
      | "shadow"
      | "unknow";
  };
}
export interface Ability {
  ability: {
    name: string;
  };
}

export interface Move {
  move: {
    name: string;
  };
}

export interface Other {
  dream_world: {
    front_default: string;
  };
}

export interface Version {
  "generation-i": {
    "red-blue": {
      front_default: string;
    };
  };
  "generation-v": {
    "black-white": {
      animated: {
        front_default: string;
      };
    };
  };

  "generation-iv": {
    "diamond-pearl": {
      front_default: string;
    };
  };
}

export interface Stat {
  base_stat: number;
  stat: {
    name: string;
  };
}

export interface Sprite {
  front_default: string;
  other: Other;
  versions: Version;
}
export interface PokemonProps {
  base_experience: string;
  height: number;
  weight: number;
  id: string;
  sprites: Sprite;
  abilities: Ability[];
  moves: Move[];
  stats: Stat[];
  forms: Form[];
  types: Type[];
}

/* ----------------------------------------------- */
