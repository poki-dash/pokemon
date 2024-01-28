export const getTypeIcon = (type) => {
  switch (type.toLowerCase()) {
    case "normal":
      return "https://archives.bulbagarden.net/media/upload/3/39/NormalIC_Big.png";
    case "fighting":
      return "https://archives.bulbagarden.net/media/upload/6/67/FightingIC_Big.png";
    case "flying":
      return "https://archives.bulbagarden.net/media/upload/c/cb/FlyingIC_Big.png";
    case "poison":
      return "https://archives.bulbagarden.net/media/upload/3/3d/PoisonIC_Big.png";
    case "ground":
      return "https://archives.bulbagarden.net/media/upload/8/8f/GroundIC_Big.png";
    case "rock":
      return "https://archives.bulbagarden.net/media/upload/c/ce/RockIC_Big.png";
    case "bug":
      return "https://archives.bulbagarden.net/media/upload/c/c8/BugIC_Big.png";
    case "steel":
      return "https://archives.bulbagarden.net/media/upload/d/d4/SteelIC_Big.png";
    case "fire":
      return "https://archives.bulbagarden.net/media/upload/2/26/FireIC_Big.png";
    case "water":
      return "https://archives.bulbagarden.net/media/upload/5/56/WaterIC_Big.png";
    case "grass":
      return "https://archives.bulbagarden.net/media/upload/7/74/GrassIC_Big.png";
    case "electric":
      return "https://archives.bulbagarden.net/media/upload/4/4a/ElectricIC_Big.png";
    case "psychic":
      return "https://archives.bulbagarden.net/media/upload/6/60/PsychicIC_Big.png";
    case "dark":
          return "https://archives.bulbagarden.net/media/upload/5/56/DarkIC_Big.png";
      case "ghost":
          return "https://archives.bulbagarden.net/media/upload/7/73/GhostIC_Big.png"
    default:
      return "https://archives.bulbagarden.net/media/upload/3/3c/UnknownIC_Big.png";
  }
};
