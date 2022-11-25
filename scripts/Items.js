let CommonItems =  [];
let SpellItems = [];
let KeyItems = [];
let EvidenceItems = [];
let EquipmentItems =  [];
let RelicItems = [];
let PositiveConditions = [];
let NegativeConditions = [];

let AttackingSpells = [];
let AttackingSpellsCollected = [];

let NormalMonsters = [];
let PatrolMonsters = [];
let BossMonsters = [];
let BossHumanoidMonsters = [];

let AllHazards = [];

let KeysCollected = [];

let StartingItems = [];
let CommonItemsGenerated = [];
let CommonItemsCollected = [];
let SpellsCollected = [];
let EvidenceCollected = [];
let PositiveConditionsCollected = [];
let NegativeConditionsCollected = [];

let MonstersSpawned = [];

const ItemsType = {
  Common: {
    Name: `Common Items`,
    Items: CommonItems,
  },
  Spell: {
    Name: `Spells`,
    Items: SpellItems,
  },
};

const Items = {

  NUMBER_OF_CONDITION_CARDS: 5,
  NUMBER_OF_SPELL_CARDS: 5,

  Compile: function () {
    CommonItems = BaseItems.CommonItems;
    SpellItems = BaseItems.Spells;
    KeyItems = BaseItems.Keys;
    EvidenceItems = BaseItems.Evidence;
    EquipmentItems = BaseItems.Equipment;
    PositiveConditions = BaseItems.PositiveConditions;
    NegativeConditions = BaseItems.NegativeConditions;

    Items.AddExpansions('btt');
    Items.AddExpansions('soa');
    Items.AddExpansions('hj');

    RelicItems = SoaItems.Relic.filter(x => x.Name != 'Bone Pipes');
    AttackingSpells = [
      { Type: Type.Spell, Name: `Azure Flame`, Objects: [ `a spell`, ], },
      { Type: Type.Spell, Name: `Shriveling`, Objects: [ `a spell`, ], },
      { Type: Type.Spell, Name: `Storm of Spirits`, Objects: [ `a spell`, ], },
      { Type: Type.Spell, Name: `Wither`, Objects: [ `a spell`, ], },
      { Type: Type.Spell, Name: `Wrack`, Objects: [ `a spell`, ], },
    ];

    Items.GenerateStartingItems();
    Items.GenerateItems();
  },

  AddExpansions: function(ref) {
    if (ref == 'btt') {
      CommonItems.push(...BttItems.CommonItems);
      EvidenceItems.push(...BttItems.Evidence);
      SpellItems.push(...BttItems.Spells);
      NegativeConditions.push(...BttItems.NegativeConditions);
    }
    if (ref == 'soa') {
      CommonItems.push(...SoaItems.CommonItems);
      EvidenceItems.push(...SoaItems.Evidence);
      SpellItems.push(...SoaItems.Spells);
      PositiveConditions.push(...SoaItems.PositiveConditions);
    }
    if (ref == 'sot') {
      CommonItems.push(...SotItems.CommonItems);
      EvidenceItems.push(...SotItems.Evidence);
      SpellItems.push(...SotItems.Spells);
      PositiveConditions.push(...SotItems.NegativeConditions);
    }
    if (ref == 'hj') {
      CommonItems.push(...HjItems.CommonItems);
      EvidenceItems.push(...HjItems.Evidence);
      SpellItems.push(...HjItems.Spells);
      NegativeConditions.push(...HjItems.NegativeConditions);
    }
    if (ref == 'pots') {
      CommonItems.push(...PotsItems.CommonItems);
      EvidenceItems.push(...PotsItems.Evidence);
      SpellItems.push(...PotsItems.Spells);
      PositiveConditions.push(...PotsItems.PositiveConditions);
      NegativeConditions.push(...PotsItems.NegativeConditions);
    }
  },

  RemoveExpansions: function(ref) {
    if (ref == 'btt') {
      CommonItems = CommonItems.filter(item => !BttItems.CommonItems.includes(item));
      EvidenceItems = EvidenceItems.filter(item => !BttItems.Evidence.includes(item));
      SpellItems = SpellItems.filter(item => !BttItems.Spells.includes(item));
      NegativeConditions = NegativeConditions.filter(item => !BttItems.NegativeConditions.includes(item));
      NormalMonsters = NormalMonsters.filter(item => !BttMonsters.includes(item));
    }
    if (ref == 'soa') {
      CommonItems = CommonItems.filter(item => !SoaItems.CommonItems.includes(item));
      EvidenceItems = EvidenceItems.filter(item => !SoaItems.Evidence.includes(item));
      SpellItems = SpellItems.filter(item => !SoaItems.Spells.includes(item));
      PositiveConditions = PositiveConditions.filter(item => !SoaItems.PositiveConditions.includes(item));
      NormalMonsters = NormalMonsters.filter(item => !SoaMonsters.includes(item));
      BossMonsters = BossMonsters.filter(item => !SoaBossMonsters.includes(item));
    }
    if (ref == 'sot') {
      CommonItems = CommonItems.filter(item => !SotItems.CommonItems.includes(item));
      EvidenceItems = EvidenceItems.filter(item => !SotItems.Evidence.includes(item));
      SpellItems = SpellItems.filter(item => !SotItems.Spells.includes(item));
      NegativeConditions = NegativeConditions.filter(item => !SotItems.NegativeConditions.includes(item));
      NormalMonsters = NormalMonsters.filter(item => !SotMonsters.includes(item));
    }
    if (ref == 'hj') {
      CommonItems = CommonItems.filter(item => !HjItems.CommonItems.includes(item));
      EvidenceItems = EvidenceItems.filter(item => !HjItems.Evidence.includes(item));
      SpellItems = SpellItems.filter(item => !HjItems.Spells.includes(item));
      NegativeConditions = NegativeConditions.filter(item => !HjItems.NegativeConditions.includes(item));
      NormalMonsters = NormalMonsters.filter(item => !HjMonsters.includes(item));
      BossMonsters = BossMonsters.filter(item => !HjBossMonsters.includes(item));
      AllHazards = AllHazards.filter(item => !HjItems.Hazards.includes(item));
      GameHazards = GameHazards.filter(item => !HjItems.Hazards.includes(item));
    }
    if (ref == 'pots') {
      CommonItems = CommonItems.filter(item => !PotsItems.CommonItems.includes(item));
      EvidenceItems = EvidenceItems.filter(item => !PotsItems.Evidence.includes(item));
      SpellItems = SpellItems.filter(item => !PotsItems.Spells.includes(item));
      PositiveConditions = PositiveConditions.filter(item => !PotsItems.PositiveConditions.includes(item));
      NegativeConditions = NegativeConditions.filter(item => !PotsItems.NegativeConditions.includes(item));
      NormalMonsters = NormalMonsters.filter(item => !PotsMonsters.includes(item));
      BossMonsters = BossMonsters.filter(item => !PotsBossMonsters.includes(item));
      AllHazards = AllHazards.filter(item => !PotsItems.Hazards.includes(item));
      GameHazards = GameHazards.filter(item => !HjItems.Hazards.includes(item));
    }
  },

  GetCommonItem: function(index) {
    return CommonItemsGenerated[index];
  },

  GenerateStartingItems: function() {
    for (let i = 0; i < 4; i++) {
      const weapon = Items.GetRandomItem(Type.Firearm, Type.HeavyWeapon, Type.BladedWeapon);
      StartingItems.push(weapon);
    }
    for (let i = 0; i < 2; i++) {
      const equipment = Items.GetRandomItem(Type.Equipment);
      StartingItems.push(equipment);
    }
    for (let i = 0; i < 4; i++) {
      const spell = Items.GetRandomAttackingSpell();
      StartingItems.push(spell);
    }
  },

  GenerateItems: function() {
    const count = 20;
    let skillCount = 0;
    let lightSourcesCount = 0;
    for (let i = 0; i < count; i++) {
      if (i % 3 == 1) {
        Items.GetRandomItem(Type.Firearm, Type.HeavyWeapon, Type.BladedWeapon);
      }
      if (i % 3 == 2) {
        Items.GetRandomItem(Type.Equipment);
      }
      if (i % 3 == 0) {
        if (GameData.HAZARD_DARKNESS_ENABLED && lightSourcesCount < 2) {
          Items.GetRandomItem(Type.LightSource);
          lightSourcesCount += 1;
        } else if (GameData.SOA_ENABLED && skillCount < 2) {
          Items.GetRandomItem(Type.SkillImprovement);
          skillCount += 1;
        } else {
          Items.GetRandomItem(Type.Equipment);
        }
      }
    }

    for (let i = 0; i < 4; i++) {
      const spell = Items.GetRandomAttackingSpell();
      CommonItemsGenerated.push(spell);
    }

    if (GameData.HAZARD_FIRE_ENABLED) {
      CommonItemsGenerated.push(CommonItems.filter(x => x.Name == Item.FireExtinguisher)[0]); 
    }
    if (GameData.HJ_ENABLED && GameData.HAZARD_WATER_ENABLED) {
      const equipment = CommonItems.filter(x => x.Type == Type.WaterEquipment);
      CommonItemsGenerated.push(...equipment); 
    } else if (GameData.HJ_ENABLED && GameData.HAZARD_RIFT_ENABLED) {
      const equipment = CommonItems.filter(x => x.Type == Type.RiftEquipment);
      CommonItemsGenerated.push(...equipment); 
    } else if (GameData.POTS_ENABLED && GameData.HAZARD_OVERGROWTH_ENABLED) {
      const equipment = CommonItems.filter(x => x.Type == Type.OvergrowthEquipment);
      CommonItemsGenerated.push(...equipment); 
    } else if (GameData.POTS_ENABLED && GameData.HAZARD_RUBBLE_ENABLED) {
      const equipment = CommonItems.filter(x => x.Type == Type.RubbleEquipment);
      CommonItemsGenerated.push(...equipment); 
    }

    CommonItemsGenerated.shuffle();
  },

  GetRandomItem: function(type, type2 = null, type3 = null) {
    let items = type2 != null ? CommonItems.filter(x => x.Type == type || x.Type == type2) : CommonItems.filter(x => x.Type == type);
    items = type3 != null ? CommonItems.filter(x => x.Type == type || x.Type == type2 || x.Type == type3) : items;
    let generatedItems = type2 != null ? CommonItemsGenerated.filter(x => x.Type == type || x.Type == type2) : CommonItemsGenerated.filter(x => x.Type == type);
    generatedItems = type3 != null ? CommonItemsGenerated.filter(x => x.Type == type || x.Type == type2 || x.Type == type3) : generatedItems;
    if (generatedItems.size() === items.size()) {
      return undefined;
    } 
    const item = items.GetRandom();
    if (generatedItems.size() > 0 && generatedItems.some(x => x === item) || StartingItems.some(x => x === item)) {
      return Items.GetRandomItem(type, type2, type3);
    } 
    CommonItemsGenerated.push(item);
    return item;
  },

  GetRandomAttackingSpell: function() {
    if (AttackingSpellsCollected.size() === (AttackingSpells.size() * Items.NUMBER_OF_SPELL_CARDS)) {
      return '';
    } 
    const spell = Random.Get(AttackingSpells);
    let count = 0;
    for (const collectedSpell of AttackingSpellsCollected) {
      if (collectedSpell === spell) {
        count += 1;
      }
    }
    if (count === 5) {
      return Items.GetRandomAttackingSpell();
    } 
    AttackingSpellsCollected.push(spell);
    return spell;
  },

  GetRandomCommonItem: function() {
    if (CommonItemsCollected.size() === CommonItems.size()) {
      return undefined;
    } 
    const item = Random.Get(CommonItems);
    if (CommonItemsCollected.size() > 0 && CommonItemsCollected.some(x => x === item)) {
      return Items.GetRandomCommonItem();
    } 
    CommonItemsCollected.push(item);
    return item;
  },

  GetRandomSpell: function() {
    if (SpellsCollected.size() === (SpellItems.size() * Items.NUMBER_OF_SPELL_CARDS)) {
      return '';
    } 
    const spell = Random.Get(SpellItems);
    let count = 0;
    for (const collectedSpell of SpellsCollected) {
      if (collectedSpell === spell) {
        count += 1;
      }
    }
    if (count === 5) {
      return Items.GetRandomSpell();
    } 
    SpellsCollected.push(spell);
    return spell;
  },

  GetRandomNegativeCondition: function() {
    if (NegativeConditionsCollected.size() === (NegativeConditions.size() * Items.NUMBER_OF_CONDITION_CARDS)) {
      return '';
    } 
    const condition = Random.Get(NegativeConditions);
    let count = 0;
    for (const collectedCondition of NegativeConditionsCollected) {
      if (collectedCondition === condition) {
        count += 1;
      }
    }
    if (count === 5) {
      return Items.GetRandomNegativeCondition();
    } 
    NegativeConditionsCollected.push(condition);
    return condition;
  },

  GetRandomPositiveCondition: function() {
    if (PositiveConditionsCollected.size() === (PositiveConditions.size() * Items.NUMBER_OF_CONDITION_CARDS)) {
      return '';
    } 
    const condition = Random.Get(PositiveConditions);
    let count = 0;
    for (const collectedCondition of PositiveConditionsCollected) {
      if (collectedCondition === condition) {
        count += 1;
      }
    }
    if (count === 5) {
      return Items.GetRandomPositiveCondition();
    } 
    PositiveConditionsCollected.push(condition);
    return condition;
  },

  GetRandomKey: function() {
    if (KeysCollected.size() === KeyItems.size()) {
      return '';
    } 
    const key = Random.Get(KeyItems);
    if (KeysCollected.length > 0 && KeysCollected.some(x => x === key)) {
      return Items.GetRandomKey();
    } 
    KeysCollected.push(key);
    return key;
  },

  GetRandomEvidence: function() {
    if (EvidenceCollected.size() === EvidenceItems.size()) {
      return '';
    } 
    const evidence = Random.Get(EvidenceItems);
    if (EvidenceCollected.size() > 0 && EvidenceCollected.some(x => x === evidence)) {
      return Items.GetRandomEvidence();
    } 
    EvidenceCollected.push(evidence);
    return evidence;
  },

  GetPatrolMonster: function(hard = false) {
    const monsters = hard ? NormalMonsters : NormalMonsters.filter(x => !HardMonsters.some(y => y == x));
    const monster = Random.Get(monsters);
    if (MonstersSpawned.size() > 0) {
      let count = 0;
      for (const spawnedMonster of MonstersSpawned) {
        if (spawnedMonster == monster) {
          count += 1;
        }
      }
      if (count == parseInt(monster.Total)) {
        return Items.GetPatrolMonster();
      }
    } 
    MonstersSpawned.push(monster);
    return monster;
  },

  GetRandomMonster: function(hard = false) {
    const monsters = hard ? NormalMonsters : NormalMonsters.filter(x => !HardMonsters.some(y => y == x));
    const monster = Random.Get(monsters);
    if (MonstersSpawned.size() > 0) {
      let count = 0;
      for (const spawnedMonster of MonstersSpawned) {
        if (spawnedMonster == monster) {
          count += 1;
        }
      }
      if (count == parseInt(monster.Total)) {
        return Items.GetRandomMonster();
      }
    } 
    MonstersSpawned.push(monster);
    return monster;
  },

};