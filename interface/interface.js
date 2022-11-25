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
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-search">Search</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-attack">Attack</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-heal">Heal</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-steal">Steal</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-traps">Traps</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-actions-unlock">Unlock Door</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="MythosScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Mythos</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-mythos-start">Mythos Start</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="TrapsScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Traps</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place">Place Trap</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-disarm">Disarm Trap</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="PlaceTrapScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Place Trap</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-fire">Fire</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-water">Water</a>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-traps-place-trapdoor">Trapdoor</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
      <div class="screen" id="AttackScreen">
      <div class="d-grid gap-2 inner">
        <div class="title">Attack with</div>
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-attack-weapon">Weapon</a>
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
        <a class="btn btn-primary" href="javascript:void(0);" id="btn-action" data-ref="search">Search</a>
        <a class="btn btn-secondary" href="javascript:void(0);" id="btn-back">Back</a>
      </div>
      </div>
    `;
    $('#container').append(screens);
    $('.screen').hide();
    $('#MainScreen').show();
  },

  SetButtonAction: function(title, actionText, action) {
    $('#MessageScreen .title').text(title);
    $('#btn-action').text(actionText);
    $('#btn-action').attr('data-ref', action);
  },

  DisplayScreen: function(id, playClick = true) {
    responsiveVoice.cancel();
    if (playClick) {
      Sounds.PlayClick();
    }
    $('.screen').hide();
    $(`#${id}`).show();
  },

  Bind: function() {
    $(document).on('click', '#btn-play-music', function(){
      responsiveVoice.cancel();
      Sounds.PlayClick();
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
      Sounds.PlayClick('click-quick');
      Interface.ToggleFullscreen();
    });

    $(document).on('click', '#btn-exit-settings', function(){
      responsiveVoice.cancel();
      Sounds.PlayClick('click-quick');
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

    $(document).on('click', '#btn-actions-search', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Search', 'Success', 'search-success');
      Events.GetSearchTest();
    });

    $(document).on('click', '#btn-actions-attack', function(){
      Interface.DisplayScreen('AttackScreen');
    });

    $(document).on('click', '#btn-attack-weapon', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-weapon-success');
      Events.GetAttackWeaponTest();
    });

    $(document).on('click', '#btn-attack-spell', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-spell-success');
      Events.GetAttackSpellTest();
    });

    $(document).on('click', '#btn-attack-fist', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Attack', 'Success', 'attack-fist-success');
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
      Interface.SetButtonAction('Steal', 'Success', 'steal-success');
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
      Interface.SetButtonAction('Disarm Trap', 'Success', 'disarm-success');
      Events.GetDisarmTrapTest();
    });

    $(document).on('click', '#btn-traps-place-fire', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceFireTrap();
    });

    $(document).on('click', '#btn-traps-place-water', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceWaterTrap();
    });

    $(document).on('click', '#btn-traps-place-trapdoor', function(){
      Interface.DisplayScreen('MessageScreen');
      Interface.SetButtonAction('Place Trap', 'Continue', 'back');
      Events.GetPlaceTrapdoorTrap();
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

    $(document).on('click', '#btn-action', function(){
      responsiveVoice.cancel();
      Sounds.PlayClick();
      const ref = $(this).attr('data-ref');

      if (ref == `back`) {
        Interface.DisplayScreen('MainScreen', false);
      }
      if (ref == `search-success`) {
        Events.GetSearchRandomItem();
        Interface.SetButtonAction('Search', 'Continue', 'back');
      }
      if (ref == `attack-weapon-success`) {
        Events.GetAttackWeaponSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-spell-success`) {
        Events.GetAttackSpellSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-fist-success`) {
        Events.GetAttackFistSuccess();
        Interface.SetButtonAction('Attack', 'Continue', 'back');
      }
      if (ref == `attack-guardian-success`) {
        Events.GetAttackGuardianSuccess();
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
      if (ref == `disarm-success`) {
        Events.GetDisarmTrapSuccess();
        Interface.SetButtonAction('Disarm Trap', 'Continue', 'back');
      }
      if (ref == `unlock-success`) {
        Events.GetUnlockDoorSuccess();
        Interface.SetButtonAction('Unlock Door', 'Continue', 'back');
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
