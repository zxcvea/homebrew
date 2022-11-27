const BaseItems = {
  CommonItems: [
    // (Firearm)
    { Type: Type.Firearm, Name: `.18 Derringer`, Objects: [ `a small handgun`, `a small pistol`, `a small firearm`, `a loaded handgun`, `a loaded pistol` ] },
    // (Firearm)
    { Type: Type.Firearm, Name: `.38 Revolver`, Objects: [ `a handgun`, `a pistol`, `a revolver`, `a loaded handgun`, `a loaded pistol`, `a loaded revolver`, ] },
    // (Firearm)
    { Type: Type.Firearm, Name: `.45 Automatic`, Objects: [ `a handgun`, `a pistol`, `an automatic pistol`, `an automatic handgun`, `a loaded handgun`, `a loaded pistol`, `a loaded revolver`, ] },
    // (Heavy Weapon) ACTION: You brace the door with the board. Flip this card and place it against a door to your space.
    { Type: Type.HeavyWeapon, Name: `2 x 4`, Objects: [ `a large wooden plank`, `a heavy wooden plank`, `a wooden plank`, ] },
    // (Tome) Roll 1 additional die while resolving a lore (the little book) test.
    { Type: Type.Equipment, Name: `Arcane Manuscript`, Objects: [ `an old manuscript`, `an ancient manuscript`, ] },
    // (Heavy Weapon) You may suffer 2 facedown horror to convert all focus(Magnifying glasses) into {successes} (Stars) while attacing with this card
    { Type: Type.HeavyWeapon, Name: `Axe`, Objects: [ `an axe`, `a rusty axe`, `a hatchet`, `a rusty hatchet`, `a fire axe` ] },
    // (Equipment) ACTION: Discard up to 2 facedown damage. Then discard this card
    { Type: Type.Equipment, Name: `Bandages`, Objects: [ `some bandages`, `bandages`, `a box of bandages`, ] },
    // (Equipment) Roll 2 additional dice while attacking unarmed.
    { Type: Type.Equipment, Name: `Brass knuckles`, Objects: [ `some brass knuckles`, `a set of brass knuckles`, ] },
    // (Light source) ACTION: Another investigator within range becomes dazed.
    { Type: Type.LightSource, Name: `Bullseye lantern`, Objects: [ `a lantern`, `a bright lantern`, `a lit lantern`, ] },
    // (Light Source) You may discard this card to convert all focuses (magnifying glasses) to {successes} (stars) while casting a spell
    { Type: Type.LightSource, Name: `Candles`, Objects: [ `some candles`, `a box of candles`, ] },
    // (Firearm) You cannot attack a monster in your space with this card
    { Type: Type.Firearm, Name: `Carbine Rifle`, Objects: [ `a rifle`, `a carbine rifle`, `an automatic rifle`, ] },
    // (Heavy weapon)
    { Type: Type.HeavyWeapon, Name: `Crowbar`, Objects: [ `a crowbar`, `a rusty crowbar`, `a steel crowbar`, ] },
    // (Equipment) ACTION: You light the fuse and toss the explosive, Flip this card and place it in a space within range.
    // At the end of the investigator phase, each investigator in this space or and adjacent space suffers 8 damage, and each monster in those spaces suffers 10 damage. Then discard this card.
    { Type: Type.Equipment, Name: `Dynamite`, Objects: [ `some sticks of dynamite`, `a stick of dynamite`, `sticks of dynamite`, ] },
    // (Equipment) Roll 1 additional die while evading a monster
    { Type: Type.Equipment, Name: `Elder sign Pendant`, Objects: [ `an engraved pendant`, `a pendant`, `an old pendant`, ] },
    // (Equipment) Roll 1 additional die while a monster is attacking you
    { Type: Type.Equipment, Name: `Elder ward`, Objects: [ `a small engraved stone`, `a small stone engraved with an ancient symbol`, `a stone bearing an ancient symbol`, ] },
    // (Heavy Weapon) ACTION: Discard all Fire in your space and adjacent spaces.
    { Type: Type.HeavyWeapon, Name: `Fire Extinguisher`, Objects: [ `a fire extinguisher`, ] },
    // (Equipment) ACTION: Place Fire in a space within range. Each monster in that space suffers 2 damage. Then flip this card
    // ACTION: Place Fire in a space within range. Each monster in that space suffers 2 damage. Then discard this card.
    { Type: Type.Equipment, Name: `Flare Gun`, Objects: [ `a flare gun`, ] },
    // (Equipment) Roll 1 additional die while resolving a Willpower (the little head icon) test
    { Type: Type.Equipment, Name: `Holy Cross`, Objects: [ `a holy cross`, `a wooden cross`, `a gold cross`, ] },
    // (Equipment) ACTION: Discard 1 horror and become focused. Then discard this card.
    { Type: Type.Equipment, Name: `Holy Water`, Objects: [ `some holy water`, `a small bottle of holy water`, `a cup filled with holy water`, ] },
    // (Light Source) You may discard this card to convert focuses (magnifying glasses) to {successes} (stars) while attacking unarmed.
    { Type: Type.LightSource, Name: `Kerosene Lantern`, Objects: [ `a kerosene lantern`, `an old lantern`, `a lantern`, ] },
    // (Tome) ACTION: You or another investigator within range may discard 1 facedown Horror
    { Type: Type.Equipment, Name: `King James Bible`, Objects: [ `an old bible`, `a bible`, ] },
    // (Bladed Weapon)
    { Type: Type.BladedWeapon, Name: `Knife`, Objects: [ `a knife`, `a bloodied knife`, `a sharp knife`, ] },
    // (Heavy weapon)
    { Type: Type.HeavyWeapon, Name: `Lead Pipe`, Objects: [ `a lead pipe`, `a rusty lead pipe`, `a old lead pipe`, ] },
    // (Equipment) Once per round, you may convert an Focus (the magnifying glass) to a success (Star).
    { Type: Type.Equipment, Name: `Lucky Cigarette Case`, Objects: [ `an old cigarette case`, `a metal cigarette case`, `a cigarette case`, ] },
    // (Equipment) Once per round you may reroll 1 die.
    { Type: Type.Equipment, Name: `Lucky Rabbit's Foot`, Objects: [ `a rabbit's foot`, `a lucky rabbit's foot`, `a good luck charm`, ] },
    // (Bladed weapon)
    { Type: Type.BladedWeapon, Name: `Machete`, Objects: [ `a machete`, `a bloodied machete`, `a rusty machete`, ] },
    // (Equipment) Roll 1 additional die while resolving an Observation (Eye) test.
    { Type: Type.Equipment, Name: `Magnifying Glass`, Objects: [ `a magnifying glass`, `an old magnifying glass`, ] },
    // (Bladed Weapon) You may suffer 2 facedown Horror to convert all focuses (magnifying Glass) to {successes} (Star) while attacking with this card.
    { Type: Type.BladedWeapon, Name: `Meat Cleaver`, Objects: [ `a meat cleaver`, `a kitchen meat cleaver`, `a bloodied meat cleaver`, `a rusty meat cleaver` ] },
    // (Equipment) ACTION: You or another investigator within range may discard 1 facedown damage.
    { Type: Type.Equipment, Name: `Medical Textbook`, Objects: [ `a medical textbook`, `an old medical book`, `a book on medicine`, ] },
    // (Heavy Weapon) 
    { Type: Type.HeavyWeapon, Name: `Pickaxe`, Objects: [ `a pickaxe`, `an old pickaxe`, `a miner's pickaxe`, ] },
    // (Equipment) You may perform 1 additional puzzlestep while attempting a puzzle
    { Type: Type.Equipment, Name: `Pocket watch`, Objects: [ `a pocket watch`, `an old pocket watch`, `a silver pocket watch`, ] },
    // (Bladed Weapon) Roll 1 additional die while casting a spell.
    { Type: Type.BladedWeapon, Name: `Ritual Dagger`, Objects: [ `a dagger`, `an old dagger`, `an ancient dagger`, `a rusty dagger` ] },
    // (Equipment) At the start of your turn, you may discard 3 Damage card and 3 Horror. If you do, discard this cad and end your turn.
    { Type: Type.Equipment, Name: `Sedatives`, Objects: [ `a bottle of sedatives`, `some sedatives`, ] },
    // (Firearm) You cannot attack a monster that is more than 1 space away with this card.
    { Type: Type.Firearm, Name: `Shotgun`, Objects: [ `a shotgun`, `a loaded shotgun`, ] },
    // (Heavy Weapon) 
    { Type: Type.HeavyWeapon, Name: `Shovel`, Objects: [ `a shovel`, `a rusty shovel`, `an garden shovel`, ] },
    // (Heavy Weapon) You may suffer two facedown damage to convert all Focuses (Magnifying glasses) to stars ({successes}) while attacking with this card.
    { Type: Type.HeavyWeapon, Name: `Sledgehammer`, Objects: [ `a sledgehammer`, `an heavy sledgehammer`,  ] },
    // (Firearm) Once per round, you may reroll all of your dice while attacking with this card.
    { Type: Type.Firearm, Name: `Tommy Gun`, Objects: [ `a tommy gun`, `a loaded tommy gun`, ] },
    // (Heavy Weapon, Light Source) When an investigator drops this card, place a Fire in this space.
    { Type: Type.LightSource, Name: `Torch`, Objects: [ `a torch`, `an unlit torch`, ] },
    // (Equipment) ACTION: Discard up to 2 facedown Horror. Then flip this card.
    // (Bladed Weapon)
    { Type: Type.BladedWeapon, Name: `Whiskey`, Objects: [ `a bottle of whiskey`,  ] },
    // (Heavy Weapon) 
    { Type: Type.HeavyWeapon, Name: `Wrench`, Objects: [ `a wrench`, `an old wrench`, `a rusty old wrench`, ] },
  ],
  Keys: [
    `Brass Key`,
    `Gold Key`,
    `Old Keys`,
    `Silver Key`,
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `Cult Sigil`, Objects: [ `a pendent with strange markings`, `a stone with strange markings`, `a ring with strange markings`, ] },
    { Type: Type.Evidence, Name: `Circumstantial Evidence`, Objects: [ `a note`, `a torn page from a diary`, `a torn page from a book`, `a crumbled up note` ] },
    { Type: Type.Evidence, Name: `Conclusive Evidence`, Objects: [ `some evidence`, `a diary`, ] },
    { Type: Type.Evidence, Name: `Forensic Evidence`, Objects: [ `a blood trail`, `a bloody note`, `bloody fingerprints`, `human remains`, `a human finger` ] },
    { Type: Type.Evidence, Name: `Grotesque Stone`, Objects: [ `a grotesque sculpture`, `a small, grotesque statue`, `a small grotesque miniature` ] },
    { Type: Type.Evidence, Name: `Incriminating Evidence`, Objects: [ `a bloodied knife`, `a bloodied meat cleaver`, `a bloodied hatchet`, `a blood stained knife` ] },
    { Type: Type.Evidence, Name: `Missing Link`, Objects: [ `an engraved pendent`, `an engraved stop watch`, ] },
    { Type: Type.Evidence, Name: `Old Journal`, Objects: [ `an old journal`, `an weathered diary`, ] },
    { Type: Type.Evidence, Name: `Photographic Evidence`, Objects: [ `an old photo`, `an torn photo`, ] },
    { Type: Type.Evidence, Name: `Ritual Components`, Objects: [ `some strange markings`, `some strange symbols`, ] },
  ],
  Equipment: [
    `Duke`,
    `Flux Stabilizer`,
    `Handcuffs`,
    `Oil Lamp`,
    `Puzzle Box`,
    `Rope`,
  ],
  Spells: [
    { Type: Type.Spell, Name: `Feed the Mind`, Objects: [], },
    { Type: Type.Spell, Name: `Flesh Ward`, Objects: [], },
    { Type: Type.Spell, Name: `Instill Bravery`, Objects: [], },
    { Type: Type.Spell, Name: `Shriveling`, Objects: [], },
    { Type: Type.Spell, Name: `Wither`, Objects: [], },
    { Type: Type.Spell, Name: `Wrack`, Objects: [], },
  ],
  PositiveConditions: [
    `Focused`,
  ],
  NegativeConditions: [
    `Dazed`,
    `Restrained`,
    `Stunned`,
    `Wounded`,
  ],
  Hazards: [
    HazardType.FIRE,
    HazardType.DARKNESS,
  ],
};


// Beyond the Threshold
const BttItems = {
  CommonItems: [
    // (Firearm) You may convert an focus (Magnifying Glass) to a success (Star) while attacking with this card.
    { Type: Type.Firearm, Name: `.25 Automatic`, Objects: [ `a small handgun`, `a small pistol`, `a small firearm`, `a loaded handgun`, `a loaded pistol` ] },
    // (Heavy Weapon)
    { Type: Type.HeavyWeapon, Name: `Blackjack`, Objects: [ `a bludgeoning weapon`, `a blackjack`, `a heavy leather slapper`, ] },
    // (Bladed Weapon)
    { Type: Type.BladedWeapon, Name: `Enchanted Blade`, Objects: [ `an enchanted blade`, `a sharp dagger`, `an engraved knife`, ] },
    // (Equipment) Roll 1 additional die while resolving an Influence (shaking hands) test.
    { Type: Type.Equipment, Name: `Fine Clothes`, Objects: [ `some fine clothes`, `some fancy clothes`, `some fancy attire`, `some elaborate attire` ] },
    // (Bladed Weapon) You may suffer 1 facedown Damage to convert an Focus (Magnifying Glass) to a success (Star) while attacking with this card.
    { Type: Type.BladedWeapon, Name: `Razor`, Objects: [ `a sharp razor`, `a shaving razor`, `an old razor` ] },
    // (Tome) Effects cannot cause you to discard your Clues unless you choose to.
    { Type: Type.Equipment, Name: `Scribes Journal`, Objects: [ `a scribe's journal`, `an old journal`, `a leather book`, ] },
    // (Equipment) When you suffer 1 or more Horror while resolving a horror check, gain 1 Clue.
    { Type: Type.Equipment, Name: `Tome of horrors`, Objects: [ `an old tome`, `a book of horrors`, `an old book`, ] },
    // (Tome) You may become Mesmerized to convert all Focus(Magnifying Glass) to Success (Stars) while resolving a test.
    { Type: Type.Equipment, Name: `Tome of secrets`, Objects: [ `an old tome`, `a book of secrets`, `an old book`, ] },
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `Cultists Journal`, Objects: [ `a cultist's journal`, `a ritual journal`, `an old journal`, ] },
  ],
  Spells: [
    { Type: Type.Spell, Name: `Arcane Insight`, },
    { Type: Type.Spell, Name: `Poison Mist`, },
  ],
  NegativeConditions: [
    `Mesmerized`,
  ],
};


// Streets of Arkham
const SoaItems = {
  CommonItems: [
    // (Equipment) If you would suffer 2 or more Damage, suffer 1 fewer Damage instead.
    { Type: Type.Equipment, Name: `Bulletproof Vest`, Objects: [ `a bulletproof vest`, ] },
    // (Equipment) Action: Improve (flexing Arms) strength. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Enhanced Serum`, Objects: [ `a vial of serum`, `a vial of liquid`, `a bottle of liquid`, `a liquid of some sort`, ] },
    // (Equipment) Action: Improve (Glorified Head) Will. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Flask`, Objects: [ `a drinking flask`, `an old drinking flask`, `a flask` ] },
    // (Equipment) Once per round, you may convert an (magnifying glass) Focus to a blank result to reroll your other dice.
    { Type: Type.SkillImprovement, Name: `Gambler's Dice`, Objects: [ `a pair of dice`, `some lucky dice`, `some dice`, ] },
    // (Equipment) Action: Improve (book) Lore. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Mental Stimulant`, Objects: [ `a bottle of stimulant`, `a bottle of medication`, ] },
    // (Equipment) Action: Improves (shaking Hands) Influence. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Moon Potion`, Objects: [ `a potion`, `Moon potion`, `a flask of liquid`, ] },
    // (Equipment) Action: Improve (Feather) Agility. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Mutation Juice`, Objects: [ `a potion`, `a flask of liquid`, `a box of bandages`, ] },
    // (Equipment) Action: Improve (eye) Observation. Then discard this card.
    { Type: Type.SkillImprovement, Name: `Ocular Extract`, Objects: [ `a jar of human eyes`, `a jar of extract`, ] },
    // (Bladed Weapon) You may deal 1 additional damage while attacking with this card.
    { Type: Type.BladedWeapon, Name: `Scalpel`, Objects: [ `a scalpel`, `a sharp scalpel`, ] },
    // (Firearm) You may deal 1 damage to a monster in your space when you forfeit an action while evading a monster.
    { Type: Type.Firearm, Name: `Snubnose Revolver`, Objects: [ `a small handgun`, `a small pistol`, `a small firearm`, `a loaded handgun`, `a loaded pistol` ] },
    // (Equipment) Action: Discard 1 Damage and become focused. Then flip this card.
    { Type: Type.Equipment, Name: `Thermos`, Objects: [ `a metal canister containing a liquid of some sort`, `a metal thermos`, `a metal canister`, ] },
  ],
  Relic: [
    // (Relic) You cannot evade monsters.
    { Type: Type.Relic, Name: `Bone Pipes`, Objects: [ `pipes made out of bone`, `bone pipes`, `pipes carved out of bone`, ] },
    // (Relic) When you suffer 1 or more Damage, become Dazed
    { Type: Type.Relic, Name: `Mysterious Idol`, Objects: [ `a mysterious idol`, `a stone idol`, `an engraved stone`, ] },
    // (Relic) If you move more than a single space as part of a move action, suffer 1 facedown Damage.
    { Type: Type.Relic, Name: `Star Calendar`, Objects: [ `a calendar engraved in stone`, `a stone calendar`, `a stone relic`, ] },
    // (Relic) When you perform a move action, you can only move up to 1 space.
    { Type: Type.Relic, Name: `Stone Chest`, Objects: [ `a stone chest`, `a chest made out of stone`, `a chest`, ] },
    // (Relic) When you suffer 1 or more Horror become Dazed.
    { Type: Type.Relic, Name: `Strange Tablet`, Objects: [ `a strange table`, `a stone tablet`, `a strange tablet`, ] },
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `De Vermis Mysteriis`, Objects: [ `an old book`, `a tome`, `a book`, ] },
    { Type: Type.Evidence, Name: `Ledger`, Objects: [ `a ledger`, `a book`, ] },
    { Type: Type.Evidence, Name: `Old Map`, Objects: [ `an old map`, `a map`, `a chart`, ] },
  ],
  Spells: [
    { Type: Type.Spell, Name: `Azure Flame`, },
    { Type: Type.Spell, Name: `Implant Suggestion`, },
  ],
  PositiveConditions: [
    `Righteous`,
  ],
};


// Sanctum of Twilight
const SotItems = {
  CommonItems: [
    { Type: Type.CommonItem, Name: `Binding Powder`, Objects: [ `a bottle of powder`, `a pouch of dust`, `a pouch of powder`, `a vial of dust`, `a vial of powder` ] },
    { Type: Type.CommonItem, Name: `Convincing Dummy`, Objects: [ `a ventriloquist dummy`, `a lifelike dummy`, `a realistic dummy`, `a wooden puppet`, ] },
    { Type: Type.CommonItem, Name: `Lucky Ring`, Objects: [ `a lucky ring`, `a gold ring`, `a ring`, ] },
    { Type: Type.CommonItem, Name: `Painkillers`, Objects: [ `some painkillers`, `a bottle of painkillers`, `some pain medication`, ] },
    { Type: Type.CommonItem, Name: `Riot Whistle`, Objects: [ `a riot whistle`, `an old whistle`, ] },
    { Type: Type.CommonItem, Name: `Sensible Shoes`, Objects: [ `an axe`, `a rusty axe`, `a hatchet`, `a rusty hatchet`, `a fire axe` ] },
    { Type: Type.CommonItem, Name: `Silver Twilight Dagger`, Objects: [ `a rusty dagger`, `an old dagger`, `a silver dagger`, ] },
    { Type: Type.CommonItem, Name: `Sword Cane`, Objects: [ `a sword cane`, `a cane concealing a sword`, ] },
    { Type: Type.CommonItem, Name: `Tote Bag`, Objects: [ `a tote bag`, `an old tote bag`, ] },
    { Type: Type.CommonItem, Name: `Track Shoes`, Objects: [ `some old track shoes`, `a pair of track shoes`, `some worn out track shoes`, `a pair of used track shoes` ] },
  ],
  Relic: [
    { Type: Type.Relic, Name: `Twilight Diadem`, Objects: [ `a diadem`, `a jewelled diadem`, `an engraved ring`, ] },
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `Membership Ring`, Objects: [ `an engraved ring`, `a ring`, `a membership ring`, `an old ring` ] },
  ],
  Spells: [
      //Action: Place a Restraint in a space within range. Then flip this card.
    { Type: Type.Spell, Name: `Binding`, },
    //Weapon damage 2
    { Type: Type.Spell, Name: `Spectral Razor`, },
  ],
  NegativeConditions: [
    `Stressed`,
  ],
};


// Horrific Journeys
const HjItems = {
  CommonItems: [
    // (Firearm) You may deal 1 additional damage while attacking a monster in your space with this card.
    { Type: Type.Firearm, Name: `.41 Derringer`, Objects: [ `a small handgun`, `a small pistol`, `a small firearm`, `a loaded handgun`, `a loaded pistol` ] },
    // (Tome) You may ignore Rifts.
    { Type: Type.RiftEquipment, Name: `Astronomy Guidebook`, Objects: [ `a book`, `a book on Astronomy`, `an Astronomy guidebook`, `an old textbook`, `a textbook`, `a guidebook`, ] },
    // (Equipment) You may convert an Focus(magnifying Glass) to a Success(star) while resolving an Influence (shaking Hands) test.
    { Type: Type.Equipment, Name: `Captains hat`, Objects: [ `a Captain's hat`, `a sea hat`, `a hat`, ] },
    // (Heavy Weapon) 
    { Type: Type.HeavyWeapon, Name: `Coal Shovel`, Objects: [ `a coal shovel`, `a heavy shovel`, `an old shovel`, ] },
    // (Equipment) You may ignore Water. You cannot become Dazed or Stunned.
    { Type: Type.WaterEquipment, Name: `Diver's Helmet`, Objects: [ `a diver's helmet`, `a diving helmet`, ] },
    // (Tome) You may ignore Water. Roll 1 additional die while attacking a monster with the aquatic ability
    { Type: Type.WaterEquipment, Name: `Diver's Journal`, Objects: [ `a diver's journal`, `a diving manual`, `a book on diving`, ] },
    // (Equipment) Discard all Rifts from your space and adjacent spaces. Then gain 1 Clue.
    { Type: Type.RiftEquipment, Name: `Gate Box`, Objects: [ `some bandages`, `bandages`, `a box of bandages`, ] },
    // (Firearm) This weapon's damage is equal to the number of success(stars) rolled while attacking with this card.
    { Type: Type.Firearm, Name: `Gatling Gun`, Objects: [ `a gatling gun`, ] },
    // (Bladed Weapon) Action: You hurl your weapon (agility/wings;2). If you pass, place this card in a space within range. Then a monster in that space suffers 3 damage.
    { Type: Type.BladedWeapon, Name: `Harpoon`, Objects: [ `a harpoon`, `a heavy harpoon`, ] },
    // (Heavy Weapon) You may ignore Water
    { Type: Type.WaterEquipment, Name: `Life Preserver`, Objects: [ `a life preserver`, `a life float`, `a life buoy`, ] },
    // (Equipment) You may discard Lost in Time and Space during your turn to place your investigator figure in any explored space.
    { Type: Type.RiftEquipment, Name: `Map of the Ley Lines`, Objects: [ `a map`, `an old map`, `a chart`, ] },
    // (Equipment) Roll 1 additional die while Lost in Time and Space.
    { Type: Type.RiftEquipment, Name: `Mystic Sextant`, Objects: [ `a navigation instrument`, `a navigation tool`, `a navigational sextant`, ] }, 
    // (Heavy Weapon) 
    { Type: Type.HeavyWeapon, Name: `Sturdy Luggage`, Objects: [ `some sturdy luggage`, `some luggage`, ] },
  ],
  Equipment: [
    { Type: Type.Equipment, Name: `Fishing Net`, Objects: [ `a fishing net` ] },
    { Type: Type.Equipment, Name: `Fuel`, Objects: [ `a canister of fuel`, `a fuel canister`, ] },
    { Type: Type.Equipment, Name: `Satchel of the Void`, Objects: [ `a satchel`, ] },
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `Ticket`, Objects: [ `a ticket stub`, `the stub of a ticket`, `a used ticket`, ] },
  ],
  Spells: [
    //If you would resolve an evade check, you may flip this card instead.
    { Type: Type.Spell, Name: `Mists of R'lyeh`, },
    //Action: Place a Rift in your space and remove your investigator figure from the board. Then flip this card
    { Type: Type.Spell, Name: `Plumb the Void`, },
    //You may suffer 1 facedown Damage to deal 1 additional damage while attacking with this card. (4)
    { Type: Type.Spell, Name: `Storm of Spirits`, },
  ],
  NegativeConditions: [
  //  `Lost in Time and Space`,
  ],
  Hazards: [
    HazardType.RIFT,
    HazardType.WATER,
  ],
};

// Path of the Serpent
const PotsItems = {
  CommonItems: [
    // (Equipment) You cannot become poisoned
    { Type: Type.CommonItem, Name: `Antivenom`, Objects: [ `a syringe of antivenom`, `Antivenom`, `a syringe`, ] },
    // (Equipment) Roll 1 additional die during the mythos phase
    { Type: Type.Equipment, Name: `Disc of Itzamna`, Objects: [ `a ancient amulet`, `an old amulet`, `an amulet`, ] },
    // (Tome) Action: Gain 2 Clues and become Fearless. Then discard this card
    { Type: Type.Equipment, Name: `Expedition Log`, Objects: [ `a logbook`, `a book`, `an expedition log`, ] },
    // (Bladed Weapon) When you move into a space, you may discard any number of overgrowth tokens from it.
    { Type: Type.OvergrowthEquipment, Name: `Hedge Shears`, Objects: [ `some hedge shears`, `some shears`, ] },
    // (Equipment) At the end of the investigator phase, you may discard 2 Clues to become Fearless
    { Type: Type.Equipment, Name: `Jeweled Skull`, Objects: [ `a jeweled skull`, `a skull encrusted with jewels`, ] },
    // (Equipment) Once per round, you may convert all Magnifying Glass(Clues) to Stars (success) while resolving an Eye (Observation) test.
    { Type: Type.Equipment, Name: `Lucky Bandana`, Objects: [ `a lucky bandana`, `a bandana`, `an old bandana`, `a worn bandana`, ] },
    // (Equipment) Action: You Strike one of the tiny, delicate sticks and it flares to life; Flip this card
    { Type: Type.LightSource, Name: `Matches`, Objects: [ `a box of matches`, `some matches`, `matches`, ] },
    // (Equipment) Once during your turn, you may perform an Explore action without spending an action.
    { Type: Type.Unused, Name: `Otherworldly Compass`, Objects: [ `an old compass`, `a compass`, ] },
    // (Equipment) You may ignore Rubble. Once per round, you may convert an Magnifying glass (Clue) into a Star (Success) while in an outdoor space
    { Type: Type.RubbleEquipment, Name: `Pith Helmet`, Objects: [ `a helmet`, `an expedition helmet`, `a pith helmet` ] }, 
    // (Equipment) You may become Poisoned to convert all Magnifying Glass (Clues) to Star (Success) while resolving a test.
    { Type: Type.PoisonEquipment, Name: `Serpent Bracelet`, Objects: [ `a bracelet`, `an engraved bracelet`, `an old bracelet`, ] },
    // (Bladed weapon) 
    { Type: Type.BladedWeapon, Name: `Survival Knife`, Objects: [ `a survival knife`, `a sharp knife`, `a knife`, ] },
    // (Heavy weapon) Once per round, you may roll 1 additional die while resolving a test in an outdoor space.
    { Type: Type.HeavyWeapon, Name: `Survival Pack`, Objects: [ `a rugged backpack`, `a survival backpack`, `a backpack`, ] },
    // (Bladed Weapon) 
    { Type: Type.BladedWeapon, Name: `Timeworn Brand`, Objects: [ `an ancient blade`, `a blade`, `a sharp blade`, ] },
    // (Heavy Weapon, Light Source) When an investigator drops this card, place fire in this space.
    { Type: Type.LightSource, Name: `Torch`, Objects: [ `a torch`, `a lit torch`, ] },
  ],
  Equipment: [
    // (Ally) Once during your turn, you may choose a monster in your space. Then that monster suffers 1 damage
    { Type: Type.Equipment, Name: `Mysterious Serpent`, Objects: [ `an engraved pendent`, `an engraved stop watch`, `an engraved ring`, ] },
  ],
  Evidence: [
    { Type: Type.Evidence, Name: `Citrine Snake`, Objects: [ `a snake relic`, `a Citrine snake`, `an old relic`, ] },
    { Type: Type.Evidence, Name: `Jade crocodile`, Objects: [ `a crocodile relic`, `a jade crocodile`, `an old relic`, ] },
    { Type: Type.Evidence, Name: `Obsidian Jaguar`, Objects: [ `a jaguar relic`, `an obsidian jaguar`, `an old relic`, ] },
    { Type: Type.Evidence, Name: `Turquoise Eagle`, Objects: [ `an eagle relic`, `a turquoise eagle`, `an old relic`, ] },
  ],
  Spells: [
    // Action: Choose a monster or investigator and move that figure up to 3 spaces away from you. Then flip this card.
    { Type: Type.Spell, Name: `Banishment`, },
    // When a monster spawns within range, it suffers 1 damage.
    { Type: Type.Spell, Name: `Call the Storm`, },
    // Action: Move a monster or investigator to your space. Then flip this card.
    { Type: Type.Spell, Name: `Summoning`, },
  ],
  PositiveConditions: [
    `Fearless`,
  ],
  NegativeConditions: [
    `Poisoned`,
  ],
  Hazards: [
    HazardType.OVERGROWTH,
    HazardType.RUBBLE,
  ],
};