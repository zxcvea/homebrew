const Interface = {

  CreateButtons: function() {
    const buttons = `<a href="javascript:void(0);" class="btn-enterfs btn"></a><a href="javascript:void(0);" class="btn-exitfs btn"></a><a href="javascript:void(0);" id="btn-settings" class="btn"></a>`;
    $('#container').append(buttons);
    $('.btn-exitfs, #btn-endturn').hide();
  },

  CreateScreens: function() {
    const screens = `
      <div class="screen" id="StartScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">&nbsp;</div>
        <div class="title-img"><img src="img/interface/title-img.webp" alt="Cthulhu Calling" /></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-new-game">New Game</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-continue">Continue</a></div>
      </div>
      </div>
      <div class="screen" id="NewGameScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">New Game</div>
        <label class="form-label">Teams</label>
        <div class="input-group mb-3">
          <button class="btn btn-primary" type="button" id="button-addon1">&#9664;</button>
          <input type="text" class="form-control input" value="2" disabled />
          <button class="btn btn-primary" type="button" id="button-addon2">&#9658;</button>
        </div>
        <label class="form-label">Players</label>
        <div class="input-group mb-3">
          <button class="btn btn-primary" type="button" id="button-addon1">&#9664;</button>
          <input type="text" class="form-control input" value="2" disabled />
          <button class="btn btn-primary" type="button" id="button-addon2">&#9658;</button>
        </div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-start-new-game">Start</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-cancel">Cancel</a></div>
      </div>
      </div>
      <div class="screen" id="SettingsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Settings</div>
        <label class="form-label border-btm">App</label>
        <div class="form-check form-switch">
          <input class="cm-toggle" type="checkbox" role="switch" id="voiceCheckbox" />
          <label class="form-check-label" for="voiceCheckbox">Enable Voice</label>
        </div>
        <label class="form-label border-btm">Expansions</label>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="bttCheckbox">
          <label class="form-check-label" for="bttCheckbox">
            Beyond the Threshold
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="hjCheckbox">
          <label class="form-check-label" for="hjCheckbox">
            Horrific Journeys
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="soaCheckbox">
          <label class="form-check-label" for="soaCheckbox">
            Streets of Arkham
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="sotCheckbox">
          <label class="form-check-label" for="sotCheckbox">
            Sanctum of Twilight
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" value="" id="potsCheckbox">
          <label class="form-check-label" for="potsCheckbox">
            Path of the Serpent
          </label>
        </div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-settings-save">Save</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-settings-back">Cancel</a></div>
      </div>
      </div>
      <div class="screen" id="MainScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">New Game</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions">Actions</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos">Mythos</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-starting-items">Starting Items</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-play-music">Play Music</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-progress">Progress</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-main-menu">Main Menu</a></div>
      </div>
      </div>
      <div class="screen" id="ActionScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Actions</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-search"><span class="action">&nbsp;</span>Search</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-attack"><span class="action">&nbsp;</span>Attack</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-heal"><span class="action">&nbsp;</span>Heal</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-steal"><span class="action">&nbsp;</span>Steal</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-traps">Traps</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-unlock">Unlock Door</a></div>
        <div id="ctn-actions-summon">
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-summon"><span class="action">&nbsp;</span>Summon Cthulhu</a></div>
        </div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="MythosScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Mythos</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos-start">Mythos Start</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos-sounds">Sounds</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="MythosSoundsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Mythos Sounds</div>
        <div class="row">
          <div class="col d-grid">
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="cultist">Cultist</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="warlock">Warlock</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="deepone">Deepone</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="ghost">Ghost</a></div>
          </div>
          <div class="col d-grid">
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="dimensionalshambler">Dimensional</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="formlessspawn">Formless</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="starspawn">Starspawn</a></div>
            <div class="d-grid gap-2 mb-3"><a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="templeguardian">Guardian</a></div>
          </div>
        </div>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="TrapsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Traps</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place"><span class="action">&nbsp;</span>Place Trap</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-disarm"><span class="action">&nbsp;</span>Disarm Trap</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="PlaceTrapScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Place Trap</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-fire">Fire</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-darkness">Darkness</a></div>
        <div class="potsOverride hjOverride"><div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-trapdoor">Trapdoor</a></div></div>
        <div class="expHide hjOnly potsOverride"><div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-water">Water</a></div></div>
        <div class="expHide hjOnly"><div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-rift">Rift</a></div></div>
        <div class="expHide potsOnly"><div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-overgrowth">Overgrowth</a></div></div>
        <div class="expHide potsOnly"><div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-rubble">Rubble</a></div></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="AttackScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Attack with</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-firearm">Firearm</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-bladedweapon">Bladed Weapon</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-spell">Spell</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-fist">Fist</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-guardian">Guardian</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="InvestigatorsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Investigators</div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-investigators-attack">Attack</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-investigators-heal">Heal</a></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
      <div class="screen" id="MessageScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Investigators</div>
        <div id="messageBox"></div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-action" data-ref="continue">Continue</a></div>
        <div class="btn-action2">
        <div class="d-grid gap-2 mb-3"><a class="btn btn-primary" href="javascript:void(0);" id="btn-action2" data-ref="fail">Fail</a></div>
        </div>
        <div class="d-grid gap-2 mb-3"><a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a></div>
      </div>
      </div>
    `;
    $('#container').append(screens);
    $('.screen, .btn-action2, #ctn-actions-summon, .expHide').hide();
    Interface.SetupSettings();
    Interface.CheckSavedGame();
    //$('#MainScreen').show();
    $('#StartScreen').show();
  },

  CheckSavedGame: function() {
    if (Data.HasSavedGame()) {
      $('#btn-continue').show();
    } else {
      $('#btn-continue').hide();
    }
  },

  SetupSettings: function() {
    if (Data.HasSettings()) {
      Data.GetSettings();
      $('#voiceCheckbox').prop("checked", Settings.VOICE_ENABLED);
      $('#bttCheckbox').prop("checked", Settings.BTT_ENABLED);
      $('#hjCheckbox').prop("checked", Settings.HJ_ENABLED);
      $('#soaCheckbox').prop("checked", Settings.SOA_ENABLED);
      $('#sotCheckbox').prop("checked", Settings.SOT_ENABLED);
      $('#potsCheckbox').prop("checked", Settings.POTS_ENABLED);
    }
  },

  SetButtonAction: function(title, actionText, action, actionText2 = null, action2 = null) {
    $('#MessageScreen .title').text(title);
    $('#btn-action').text(actionText);
    $('#btn-action').attr('data-ref', action);
    if (action2 != null) {
      $('#btn-action2').text(actionText2);
      $('#btn-action2').attr('data-ref', action2);
      $('.btn-action2').show();
    } else {
      $('.btn-action2').hide();
    }
  },

  DisplayScreen: function(id) {
    responsiveVoice.cancel();
    const previousScreen = $('.screen:visible').attr('id');
    App.PREVIOUS_SCREEN = previousScreen == id ? App.PREVIOUS_SCREEN : previousScreen;
    $('.screen').hide();
    $(`#${id}`).show();
    Interface.CheckSavedGame();
  },

  Bind: function() {
    $(document).on('click', '#btn-play-music', function(){
      responsiveVoice.cancel();
      if ($(this).hasClass('btn-primary')) {
        $(this).removeClass('btn-primary');
        $(this).addClass('btn-secondary');
        $(this).text('Stop Music');
        Sounds.StartMusic();
      } else {
        $(this).removeClass('btn-secondary');
        $(this).addClass('btn-primary');
        $(this).text('Play Music');
        Sounds.StopMusic();
      }
    });

    $(document).on('click', '.btn-enterfs, .btn-exitfs', function(){
      responsiveVoice.cancel();
      Interface.ToggleFullscreen();
    });

    $(document).on('click', '#btn-back', function(){
      Interface.DisplayScreen(App.MAIN_SCREEN);
    });

    $(document).on('click', '#btn-cancel', function(){
      App.MAIN_SCREEN = 'StartScreen';
      Interface.DisplayScreen('StartScreen');
    });

    $(document).on('click', '#btn-new-game', function(){
      App.MAIN_SCREEN = 'MainScreen';
      App.NewGame();
      Interface.DisplayScreen('MainScreen');
    });

    $(document).on('click', '#btn-continue', function(){
      Data.Continue();
      App.MAIN_SCREEN = 'MainScreen';
      Items.SetItemsFromGameData();
      Interface.DisplayScreen('MainScreen');
    });

    $(document).on('click', '#btn-start-new-game', function(){
      App.MAIN_SCREEN = 'MainScreen';
      App.NewGame();
      Interface.DisplayScreen('MainScreen');
    });

    $(document).on('click', '#btn-settings', function(){
      Interface.SetupSettings();
      Interface.DisplayScreen('SettingsScreen');
    });

    $(document).on('click', '#btn-settings-back', function(){
      Interface.DisplayScreen(App.PREVIOUS_SCREEN);
    });

    $(document).on('click', '#btn-settings-save', function(){
      Settings.VOICE_ENABLED = $('#voiceCheckbox').is(':checked');
      Settings.BTT_ENABLED = $('#bttCheckbox').is(':checked');
      Settings.HJ_ENABLED = $('#hjCheckbox').is(':checked');
      Settings.SOA_ENABLED = $('#soaCheckbox').is(':checked');
      Settings.SOT_ENABLED = $('#sotCheckbox').is(':checked');
      Settings.POTS_ENABLED = $('#potsCheckbox').is(':checked');
      Data.SaveSettings();
      Interface.DisplayScreen(App.PREVIOUS_SCREEN);
    });

    $(document).on('click', '#btn-save-game', function(){
      Data.SaveGame();
      Interface.DisplayScreen(App.MAIN_SCREEN);
    });

    $(document).on('click', '#btn-main-menu', function(){
      App.MAIN_SCREEN = 'StartScreen';
      Interface.DisplayScreen('StartScreen');
    });

    $(document).on('click', '#btn-actions', function(){
      Interface.DisplayScreen('ActionScreen');
      if (GameData.RELICS_COLLECTED == 4) {
        $('#ctn-actions-summon').show();
      } else {
        $('#ctn-actions-summon').hide();
      }
    });

    $(document).on('click', '#btn-mythos', function(){
      Interface.DisplayScreen('MythosScreen');
    });

    $(document).on('click', '#btn-mythos-start', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Mythos', 'Continue', 'back');
      Events.GetMythosEvent();
    });

    $(document).on('click', '#btn-mythos-sounds', function(){
      Interface.DisplayScreen('MythosSoundsScreen');
    });

    $(document).on('click', '.btn-mythos-play', function(){
      const sound = $(this).attr('data-ref');
      Sounds.PlaySound(`monsters/${sound}`);
    });

    $(document).on('click', '#btn-progress', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Progress', 'Continue', 'back');
      Events.DisplayProgress();
    });

    $(document).on('click', '#btn-actions-search', function(){
      Interface.DisplayScreen('MessageScreen');
      if (GameData.ITEMS_COLLECTED_COUNT == 12) {
        MessageBox.Display(GameText.Actions.Search.NoMoreItemsText);
        Interface.SetButtonAction('Search', 'Continue', 'back');
      } else {
        Interface.SetButtonAction('Search', 'Success', 'search-success');
        Events.GetSearchTest();
      }
    });

    $(document).on('click', '#btn-actions-attack', function(){
      Interface.DisplayScreen('AttackScreen');
    });

    $(document).on('click', '#btn-attack-firearm', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-firearm-success', 'Fail', 'attack-fail');
      Events.GetAttackWeaponTest();
    });

    $(document).on('click', '#btn-attack-bladedweapon', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-bladedweapon-success', 'Fail', 'attack-fail');
      Events.GetAttackWeaponTest();
    });

    $(document).on('click', '#btn-attack-spell', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-spell-success', 'Fail', 'attack-fail');
      Events.GetAttackSpellTest();
    });

    $(document).on('click', '#btn-attack-fist', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-fist-success', 'Fail', 'attack-fail');
      Events.GetAttackFistTest();
    });

    $(document).on('click', '#btn-attack-guardian', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-guardian-success');
      Events.GetAttackGuardianTest();
    });

    $(document).on('click', '#btn-actions-heal', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Heal', 'Success', 'heal-success');
      Events.GetHealTest();
    });

    $(document).on('click', '#btn-actions-steal', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Steal', 'Success', 'steal-success', 'Fail', 'steal-fail');
      Events.GetStealTest();
    });

    $(document).on('click', '#btn-actions-traps', function(){
      Interface.DisplayScreen('TrapsScreen');
    });

    $(document).on('click', '#btn-traps-place', function(){
      if (GameData.HJ_ENABLED) {
        $('.hjOverride').hide();
        $('.hjOnly').show();
      }
      if (GameData.POTS_ENABLED) {
        $('.potsOverride').hide();
        $('.potsOnly').show();
      }
      Interface.DisplayScreen('PlaceTrapScreen');
    });

    $(document).on('click', '#btn-traps-disarm', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Disarm Trap', 'Success', 'disarm-success', 'Fail', 'disarm-fail');
      Events.GetDisarmTrapTest();
    });

    $(document).on('click', '#btn-traps-place-fire', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceFireTrap();
    });

    $(document).on('click', '#btn-traps-place-darkness', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceDarknessTrap();
    });

    $(document).on('click', '#btn-traps-place-trapdoor', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceTrapdoorTrap();
    });

    $(document).on('click', '#btn-traps-place-water', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceWaterTrap();
    });

    $(document).on('click', '#btn-traps-place-rift', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceRiftTrap();
    });

    $(document).on('click', '#btn-traps-place-overgrowth', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceOvergrowthTrap();
    });

    $(document).on('click', '#btn-traps-place-rubble', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceRubbleTrap();
    });

    $(document).on('click', '#btn-actions-summon', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Summon Cthulhu', 'Success', 'back', 'Fail', 'summon-cthulhu-fail');
      Events.GetSummonCthulhuTest();
    });
   
    $(document).on('click', '#btn-actions-unlock', function(){
      Interface.DisplayScreen('MessageScreen');
      if (GameData.HAS_KEY) {
        Interface.SetButtonAction('Unlock Door', 'Success', 'unlock-success');
      } else {
        Interface.SetButtonAction('Unlock Door', 'Continue', 'back');
      }
      Events.GetUnlockDoorInfo();
    });

    $(document).on('click', '#btn-starting-items', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Starting Items', 'Continue', 'back');
      Events.GetStartingItems();
    });

    $(document).on('click', '#btn-action, #btn-action2', function(){
      responsiveVoice.cancel();
      const ref = $(this).attr('data-ref');

      if (ref == `back`) {
        Interface.DisplayScreen('MainScreen', false);
      }
      if (ref == `search-success`) {
        Events.GetSearchRandomItem();
        Interface.SetButtonAction('Search', 'Continue', 'back');
      }
      if (ref == `attack-firearm-success`) {
        Sounds.PlaySound('gunshot');
        Events.GetAttackWeaponSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-bladedweapon-success`) {
        Sounds.PlaySound('stab');
        Events.GetAttackWeaponSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-spell-success`) {
        Sounds.PlaySound('spell');
        Events.GetAttackSpellSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-fist-success`) {
        Sounds.PlaySound('stab');
        Events.GetAttackFistSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-guardian-success`) {
        Events.GetAttackGuardianSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-fail`) {
        Events.GetAttackFail();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `heal-success`) {
        Events.GetHealSuccess();
        Interface.SetButtonAction('Heal', 'Continue', 'back');
      }
      if (ref == `steal-success`) {
        Events.GetStealSuccess();
        Interface.SetButtonAction('Steal', 'Continue', 'back');
      }
      if (ref == `steal-fail`) {
        Events.GetStealFail();
        Interface.SetButtonAction('Steal', 'Continue', 'back');
      }
      if (ref == `disarm-success`) {
        Events.GetDisarmTrapSuccess();
        Interface.SetButtonAction('Disarm Trap', 'Continue', 'back');
      }
      if (ref == `disarm-fail`) {
        Events.GetDisarmTrapFail();
        Interface.SetButtonAction('Disarm Trap', 'Continue', 'back');
      }
      if (ref == `unlock-success`) {
        Events.GetUnlockDoorSuccess();
        Interface.SetButtonAction('Unlock Door', 'Continue', 'back');
      }
      if (ref == `summon-cthulhu-fail`) {
        Events.GetSummonCthulhuFail();
        Interface.SetButtonAction('Summon Cthulhu', 'Continue', 'back');
      }
      if (ref == `place-fire`) {
        Events.GetUnlockDoorSuccess();
        Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      }
      if (ref == `place-water`) {
        Events.GetUnlockDoorSuccess();
        Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      }
      if (ref == `place-trapdoor`) {
        Events.GetUnlockDoorSuccess();
        Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      }  
    });

   
  },

  ToggleFullscreen: function() {
    if (!App.FULLSCREEN) {
      App.FULLSCREEN = true;
      document.documentElement.requestFullscreen();
      $('.btn-enterfs').hide();
      $('.btn-exitfs').show();
    } else {
      App.FULLSCREEN = false;
      document.exitFullscreen();
      $('.btn-enterfs').show();
      $('.btn-exitfs').hide();
    }
  },

  Init: function() {
    Interface.CreateScreens();
    Interface.CreateButtons();
    Interface.Bind();
  }

};
