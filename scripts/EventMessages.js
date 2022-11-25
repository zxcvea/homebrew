const EventMessages = {

  SetNegativeCondition: function(textOptions) {
    let text = textOptions.GetRandom();
    if (text.includes(`{negativeCondition}`)) {
      const condition = Items.GetRandomNegativeCondition();
      text = condition !== '' ? text.replace(/\{negativeCondition\}/g, `<strong>${condition}</strong>`) : textOptions.filter(x => !x.includes(`{negativeCondition}`)).GetRandom();
    }
    return text;
  },

  SetPositiveCondition: function(textOptions) {
    let text = textOptions.GetRandom();
    if (text.includes(`{positiveCondition}`)) {
      const condition = Items.GetRandomPositiveCondition();
      text = condition !== '' ? text.replace(/\{positiveCondition\}/g, `<strong>${condition}</strong>`) : textOptions.filter(x => !x.includes(`{positiveCondition}`)).GetRandom();
    }
    return text;
  },

  GetRandomTrapText: function() {
    let text = '';
    if (Random.Matches(4)) {
      let damageText = EventMessages.SetNegativeCondition(GameText.Damage.DamageTextOptions);
      let horrorText = EventMessages.SetNegativeCondition(GameText.Damage.HorrorTextOptions);
      text = GameText.Tests.TrapTextOptions.GetRandom();
      text = text.replace(/\{damage\}/g, `${damageText} ${GameText.Damage.DamageNegates.GetRandom()}`)
        .replace(/\{horror\}/g, `${horrorText} ${GameText.Damage.HorrorNegates.GetRandom()}`);
    }
    return text;
  },

  GetStartingItemsText: function() {
    let itemsText = '';
    for (let i = 0; i < StartingItems.length; i++) {
      itemsText += `<strong>${StartingItems[i].Name}</strong><br />`;
    }
    return `${itemsText}`;
  },

  GetSearchTestText: function() {
    return GameText.Actions.Search.Tests.GetRandom();
  },

  GetSearchSuccessItemText: function() {
    const randomItem = Items.GetCommonItem(GameData.ITEMS_COLLECTED_COUNT);
    GameData.ITEM_OBJ = randomItem;
    GameData.ITEMS_COLLECTED.push(randomItem);
    const foundText = GameText.Actions.Search.ItemFoundText.replace(/\{itemObject\}/g, `${randomItem.Objects.GetRandom()}`);
    const rewardText = GameText.Actions.Search.ItemRewardTextOptions.GetRandom()
      .replace(/\{itemName\}/g, `<strong>${randomItem.Name}</strong>`);

    let trapText = EventMessages.GetRandomTrapText();
    return trapText != '' ? [ foundText, rewardText, trapText ] : [ foundText, rewardText ];
  },

  GetSearchSuccessRelicText: function() {
    const relicItem = RelicItems[GameData.RELICS_COLLECTED];
    const foundText = GameText.Actions.Search.ItemFoundText.replace(`{itemObject}`, `${relicItem.Objects.GetRandom()}`);
    let rewardText = EventMessages.SetPositiveCondition(GameText.Actions.Search.RelicRewardTextOptions);
    rewardText = rewardText.replace(/\{itemName\}/g, `<strong>${relicItem.Name}</strong>`);
    GameData.ITEMS_COLLECTED.push(relicItem);
    return [foundText, rewardText];
  },

  GetSearchSuccessKeyText: function() {
    GameData.ITEMS_COLLECTED.push({ Type: Type.Key, Name: GameData.KEY_ITEM, Objects: [ `key`, ], });
    return GameText.Actions.Search.KeyFoundText.replace(/\{key\}/g, `<strong>${GameData.KEY_ITEM}</strong>`);
  },

  GetAttackWeaponTestText: function() {
    return GameText.Actions.Attack.WeaponText;
  },

  GetAttackSpellTestText: function() {
    return GameText.Actions.Attack.SpellText;
  },

  GetAttackFistTestText: function() {
    return GameText.Actions.Attack.FistText;
  },

  GetAttackGuardianTestText: function() {
    return GameText.Actions.Attack.GuardianText;
  },

  GetAttackWeaponSuccessText: function() {
    const bonusDamage = EventMessages.SetNegativeCondition(GameText.Actions.Attack.SuccessBonusDamageTextOptions);
    return `${GameText.Actions.Attack.SuccessWeaponText}${bonusDamage}`;
  },

  GetAttackSpellSuccessText: function() {
    const bonusDamage = EventMessages.SetNegativeCondition(GameText.Actions.Attack.SuccessBonusDamageTextOptions);
    return `${GameText.Actions.Attack.SuccessSpellText}${bonusDamage}`;
  },

  GetAttackFistSuccessText: function() {
    const bonusDamage = EventMessages.SetNegativeCondition(GameText.Actions.Attack.SuccessBonusDamageTextOptions);
    return `${GameText.Actions.Attack.SuccessFistText}${bonusDamage}`;
  },

  GetAttackGuardianSuccessText: function() {
    const bonusDamage = EventMessages.SetNegativeCondition(GameText.Actions.Attack.SuccessBonusDamageTextOptions);
    return `${GameText.Actions.Attack.SuccessGuardianText}${bonusDamage}`;
  },

  GetHealTestText: function() {
    return GameText.Actions.Heal.Text;
  },

  GetHealSuccessText: function() {
    return GameText.Actions.Heal.SuccessText;
  },

  GetStealTestText: function() {
    return GameText.Actions.Steal.Tests.GetRandom();
  },

  GetStealSuccessText: function() {
    return GameText.Actions.Steal.SuccessText;
  },

  GetDisarmTrapTestText: function() {
    return GameText.Actions.Disarm.Tests.GetRandom();
  },

  GetDisarmTrapSuccessText: function() {
    return GameText.Actions.Disarm.SuccessText;
  },

  GetUnlockDoorInfoText: function() {
    return GameText.Actions.Unlock.Text.replace(/\{key\}/g, `<strong>${GameData.KEY_ITEM}</strong>`);
  },

  GetUnlockDoorSuccessText: function() {
    return GameText.Actions.Unlock.SuccessTextOptions.GetRandom().replace(/\{key\}/g, `<strong>${GameData.KEY_ITEM}</strong>`);
  },

  GetPlaceFireTrapText: function() {
    return GameText.Actions.Traps.FireTextOptions.GetRandom();
  },

  GetPlaceWaterTrapText: function() {
    return GameText.Actions.Traps.WaterTextOptions.GetRandom();
  },

  GetPlaceTrapdoorTrapText: function() {
    return GameText.Actions.Traps.TrapdoorTextOptions.GetRandom();
  },

  GetMythosEventText: function() {
    const damageText = GameText.Mythos.MonsterDamageText.replace(/\{damage\}/g, `${GameText.Mythos.DamageOptions.GetRandom()} ${GameText.Damage.DamageNegates.GetRandom()}`);
    const horrorText = GameText.Mythos.MonsterHorrorText.replace(/\{horror\}/g, `${GameText.Damage.HorrorTextOptions.GetRandom()} ${GameText.Damage.HorrorNegates.GetRandom()}`);
    return [ damageText, horrorText ];
  },

};
