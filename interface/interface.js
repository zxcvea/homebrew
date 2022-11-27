const Interface = {

  CreateButtons: function() {
    const buttons = `<a href="javascript:void(0);" class="btn-enterfs btn"></a><a href="javascript:void(0);" class="btn-exitfs btn"></a><a href="javascript:void(0);" id="btn-settings" class="btn"></a>`;
    $('#container').append(buttons);
    $('.btn-exitfs, #btn-endturn').hide();
  },

  CreateScreens: function() {
    const screens = `
      <div class="screen" id="MainScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">&nbsp;</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions">Actions</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos">Mythos</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-starting-items">Starting Items</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-play-music">Play Music</a>
      </div>
      </div>
      <div class="screen" id="ActionScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Actions</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-search"><span class="action">&nbsp;</span>Search</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-attack"><span class="action">&nbsp;</span>Attack</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-heal"><span class="action">&nbsp;</span>Heal</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-steal"><span class="action">&nbsp;</span>Steal</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-traps">Traps</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-unlock">Unlock Door</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-summon"><span class="action">&nbsp;</span>Summon Cthulhu</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="MythosScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Mythos</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos-start">Mythos Start</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos-sounds">Sounds</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="MythosSoundsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Mythos Sounds</div>
        <div class="row">
          <div class="col d-grid">
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="cultist">Cultist</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="warlock">Warlock</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="deepone">Deepone</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="ghost">Ghost</a>
          </div>
          <div class="col d-grid">
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="dimensionalshambler">Dimensional</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="formlessspawn">Formless</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="starspawn">Starspawn</a><br />
            <a class="btn btn-primary btn-mythos-play" href="javascript:void(0);" data-ref="templeguardian">Guardian</a>
          </div>
        </div>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="TrapsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Traps</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place"><span class="action">&nbsp;</span>Place Trap</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-disarm"><span class="action">&nbsp;</span>Disarm Trap</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="PlaceTrapScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Place Trap</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-fire">Fire</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-darkness">Darkness</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-trapdoor">Trapdoor</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-water">Water</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="AttackScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Attack with</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-firearm">Firearm</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-bladedweapon">Bladed Weapon</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-spell">Spell</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-fist">Fist</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-guardian">Guardian</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="InvestigatorsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Investigators</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-investigators-attack">Attack</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-investigators-heal">Heal</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="MessageScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Investigators</div>
        <div id="messageBox"></div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-action" data-ref="continue">Continue</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-action2" data-ref="fail">Fail</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
    `;
    $('#container').append(screens);
    $('.screen, #btn-action2').hide();
    $('#MainScreen').show();
  },

  SetButtonAction: function(title, actionText, action, actionText2 = null, action2 = null) {
    $('#MessageScreen .title').text(title);
    $('#btn-action').text(actionText);
    $('#btn-action').attr('data-ref', action);
    if (action2 != null) {
      $('#btn-action2').text(actionText2);
      $('#btn-action2').attr('data-ref', action2);
      $('#btn-action2').show();
    } else {
      $('#btn-action2').hide();
    }
  },

  DisplayScreen: function(id, playClick = true) {
    responsiveVoice.cancel();
    $('.screen').hide();
    $(`#${id}`).show();
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

    $(document).on('click', '#btn-exit-settings', function(){
      responsiveVoice.cancel();
      $('#settingsoverlay').stop().fadeOut('slow', function() {

      });
    });

    $(document).on('click', '#btn-back', function(){
      Interface.DisplayScreen('MainScreen');
    });

    $(document).on('click', '#btn-actions', function(){
      Interface.DisplayScreen('ActionScreen');
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

    $(document).on('click', '#btn-actions-search', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Search', 'Success', 'search-success');
      Events.GetSearchTest();
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
    if (!GameData.FULLSCREEN) {
      GameData.FULLSCREEN = true;
      document.documentElement.requestFullscreen();
      $('.btn-enterfs').hide();
      $('.btn-exitfs').show();
    } else {
      GameData.FULLSCREEN = false;
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
