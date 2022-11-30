const Type = {
  CommonItem: `CommonItem`,
  Spell: `Spell`,
  TokenObject: `TokenObject`,
  Evidence: `Evidence`,
  Relic: `Relic`,
  Equipment: `Equipment`,
  HeavyWeapon: `Heavy Weapon`,
  BladedWeapon: `Bladed Weapon`,
  Firearm: `Firearm`,
  LightSource: `Light Source`,
  SkillImprovement: `Skill Improvement`,
  RiftEquipment: `Rift Equipment`,
  WaterEquipment: `Water Equipment`,
  PoisonEquipment: `Poison Equipment`,
  OvergrowthEquipment: `Overgrowth Equipment`,
  RubbleEquipment: ``,
  Unused: `Unused`,
  Monster: `Monster`,
  Key: `Key`,
  MeleeWeapon: `Melee Weapon`,
  MeleeWeaponSearch: `Melee Weapon Search`,
  FirearmSpecial: `Firearm Special`,
  EquipmentSpecial: `Equipment Special`,
  SpellSpecial: `Spell Special`,
};

const Item = {
  FireExtinguisher: `Fire Extinguisher`,
  HedgeShears: `Hedge Shears`,
};

const HazardType = {
  RANDOM: `Random`,
  FIRE: `Fire`,
  DARKNESS: `Darkness`,
  WATER: `Water`,
  RIFT: `Rift`,
  OVERGROWTH: `Overgrowth`,
  RUBBLE: `Rubble`,
  ALL: `All`,
  NONE: `None`,
  DEFAULT: `Default`,
};

let GameHazards = [
  HazardType.DEFAULT,
  HazardType.RANDOM,
  HazardType.FIRE,
  HazardType.DARKNESS,
  HazardType.NONE,
];

const Direction = {
  UP: `up`,
  DOWN: `down`,
  LEFT: `left`,
  RIGHT: `right`,
};

const MoveType = {
  PATROL: 'patrol',
  RANDOM: 'random',
  BOSS: 'boss'
};

const GenderType = {
  MALE: 'male',
  FEMALE: 'female'
};

const GameType = {
  INVESTIGATION: `Investigation`,
  ESCAPE: `Escape`,
};

const GameDifficulty = {
  NORMAL: `Normal`,
  HARD: `Hard`,
  INSANE: `Insane`
};

const GameDifficulties = [
  GameDifficulty.NORMAL,
  GameDifficulty.HARD,
  GameDifficulty.INSANE,
];

const GamePlayers = [ 2, 3, 4, 5, 6, 1 ];