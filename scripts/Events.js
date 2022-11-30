const Events = {

  DisplayProgress: function() {
    let message = '';
    message += `<p><strong>Relics Collected</strong>: ${GameData.RELICS_COLLECTED}</p>`;
    if (GameData.ITEMS_COLLECTED.size() > 0) {
      for(let i = 0; i < GameData.ITEMS_COLLECTED.size(); i++) {
        let type = GameData.ITEMS_COLLECTED[i].Type == Type.Relic ? `item (<strong>relic</strong>)` : `item`;
        type = GameData.ITEMS_COLLECTED[i].Type == Type.Key ? `item (<strong>key</strong>)` : type;
        message += `<p>Player found the <em>${GameData.ITEMS_COLLECTED[i].Name}</em> ${type}</p>`;
      }
    }
    MessageBox.Display(message);
  },

  GetStartingItems: function() {
    MessageBox.Display(EventMessages.GetStartingItemsText());
    if (!Data.HasSavedGame()) {
      Data.SaveGame();
    }
  },

  GetSearchTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetSearchTestText());
  },

  GetSearchRandomItem: function() {
    if (GameData.RELICS_TOKENS.some(x => x == GameData.ITEMS_COLLECTED_COUNT)) {
      Sounds.PlayToken(true);
      MessageBox.DisplaySpeak(EventMessages.GetSearchSuccessRelicText());
      GameData.RELICS_COLLECTED += 1;
    } else if (GameData.ITEMS_COLLECTED_COUNT == GameData.KEY_TOKEN_ID) {
      Sounds.PlayToken();
      MessageBox.DisplaySpeak(EventMessages.GetSearchSuccessKeyText());
      GameData.HAS_KEY = true;
    } else {
      MessageBox.DisplaySpeak(EventMessages.GetSearchSuccessItemText());
    }
    GameData.ITEMS_COLLECTED_COUNT += 1;
    Data.SaveGame();
  },

  GetAttackWeaponTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackWeaponTestText());
  },

  GetAttackSpellTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackSpellTestText());
  },

  GetAttackFistTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackFistTestText());
  },

  GetAttackGuardianTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackGuardianTestText());
  },

  GetAttackWeaponSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackWeaponSuccessText());
  },

  GetAttackSpellSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackSpellSuccessText());
  },

  GetAttackFistSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackFistSuccessText());
  },

  GetAttackGuardianSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackGuardianSuccessText(), null, Events.PlayAttackGuardianSound());
  },

  GetAttackFail: function() {
    MessageBox.DisplaySpeak(EventMessages.GetAttackFailText());
  },

  PlayAttackGuardianSound: function() {
    Sounds.PlaySound(`monsters/templeguardian`);
  },

  GetHealTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetHealTestText());
  },

  GetHealSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetHealSuccessText());
  },

  GetStealTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetStealTestText());
  },

  GetStealSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetStealSuccessText());
  },

  GetStealFail: function() {
    MessageBox.DisplaySpeak(EventMessages.GetStealFailText());
  },

  GetDisarmTrapTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetDisarmTrapTestText());
  },

  GetDisarmTrapSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetDisarmTrapSuccessText());
  },

  GetDisarmTrapFail: function() {
    MessageBox.DisplaySpeak(EventMessages.GetDisarmTrapFailText());
  },

  GetUnlockDoorInfo: function() {
    MessageBox.DisplaySpeak(EventMessages.GetUnlockDoorInfoText());
  },

  GetUnlockDoorSuccess: function() {
    Sounds.PlayUnlock();
    MessageBox.DisplaySpeak(EventMessages.GetUnlockDoorSuccessText());
  },

  GetSummonCthulhuTest: function() {
    MessageBox.DisplaySpeak(EventMessages.GetSummonCthulhuTestText());
  },

  GetSummonCthulhuSuccess: function() {
    MessageBox.DisplaySpeak(EventMessages.GetSummonCthulhuSuccessText());
  },

  GetSummonCthulhuFail: function() {
    MessageBox.DisplaySpeak(EventMessages.GetSummonCthulhuFailText());
  },

  GetPlaceFireTrap: function() {
    Sounds.PlaySound('fire');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceFireTrapText());
  },

  GetPlaceDarknessTrap: function() {
    Sounds.PlaySound('water');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceDarknessTrapText());
  },

  GetPlaceTrapdoorTrap: function() {
    Sounds.PlaySound('trapdoor');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceTrapdoorTrapText());
  },

  GetPlaceWaterTrap: function() {
    Sounds.PlaySound('water');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceWaterTrapText());
  },

  GetPlaceRiftTrap: function() {
    Sounds.PlaySound('rift');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceRiftTrapTrapText());
  },

  GetPlaceOvergrowthTrap: function() {
    Sounds.PlaySound('overgrowth');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceOvergrowthTrapText());
  },

  GetPlaceRubbleTrap: function() {
    Sounds.PlaySound('rubble');
    MessageBox.DisplaySpeak(EventMessages.GetPlaceRubbleTrapText());
  },

  GetMythosEvent: function() {
    Sounds.PlaySound('phase-mythos01');
    MessageBox.DisplaySpeak(EventMessages.GetMythosEventText());
  },

};