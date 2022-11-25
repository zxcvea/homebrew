const Sounds = {

  PlaySound: function(sound = 'click01') {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const audio = new Audio('../sounds/' + sound + '.mp3');
      audio.play();
    }
  },

  PlayClick: function(click = 'click01') {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const audio = new Audio('../sounds/' + click + '.mp3');
      audio.play();
    }
  },

  PlayBoard: function(click = 'board') {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const audio = new Audio('../sounds/' + click + '.mp3');
      audio.play();
    }
  },

  PlayToken: function(success = false) {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const mp3file = success ? "../sounds/token01.mp3" : "../sounds/token02.mp3";
      const audio = new Audio(mp3file);
      audio.play();
    }
  },

  PlayUnlock: function() {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const audio = new Audio("../sounds/unlock01.mp3");
      audio.play();
    }
  },

  PlayAttack: function() {
    if (App.SOUND_ENABLED && App.SOUND_CLICK_ENABLED) {
      const audio = new Audio("../sounds/attacksingle01.mp3");
      audio.play();
    }
  },

  PlayTransition: function(isMythos = false) {
    if (App.SOUND_ENABLED) {
      const mp3file = isMythos ? "../sounds/phase-mythos01.mp3" : "../sounds/phase-investigator.mp3";
      const audio = new Audio(mp3file);
      audio.play();
    }
  },

  PlayMonsterSound: function(monster, isDead = false) {
    let soundFile = `${monster}${isDead ? 'death' : ''}`;
    switch(monster) {
      case Monster.DeepOne.Name:
        soundFile = Monster.DeepOne.Name;
        break;
      case Monster.HuntingDeepOne.Name:
        soundFile = Monster.DeepOne.Name;
        break;
      case Monster.StarSpawn.Name:
        soundFile = Monster.StarSpawn.Name;
        break;
      case Monster.TempleGuardian.Name:
        soundFile = Monster.TempleGuardian.Name;
        break;
      case Monster.FeatheredSerpent.Name:
        soundFile = Monster.FeatheredSerpent.Name;
        break;
      case Monster.FormlessSpawn.Name:
        soundFile = Monster.FormlessSpawn.Name;
        break;
      case Monster.StarVampire.Name:
        soundFile = Monster.StarVampire.Name;
        break;
      case Monster.DimensionalShambler.Name:
        soundFile = Monster.DimensionalShambler.Name;
        break;
    }
    Sounds.PlaySound(`monsters/${soundFile}`);
  },

  StartIntroMusic: function() {
    if (App.MUSIC_ENABLED) {
      App.INTRO_MUSIC = new Audio("../sounds/intro.mp3");
      if (typeof App.INTRO_MUSIC.loop == 'boolean')
      {
        App.INTRO_MUSIC.loop = true;
      }
      else
      {
        App.INTRO_MUSIC.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
        }, false);
      }
      App.INTRO_MUSIC.play();
    }
  },

  PlayIntroMusic: function() {
    App.INTRO_MUSIC.play();
  },

  StopIntroMusic: function() {
    App.INTRO_MUSIC.pause();
  },

  PlayTrack: function() {
    if (App.MUSIC_ENABLED) {
      const random = Random.Number(8, App.TRACK_NUMBER);
      App.TRACK_NUMBER = random;
      App.MUSIC = new Audio(`../sounds/music/track0${random}.mp3`);
      App.MUSIC.addEventListener('ended', function() {
        Sounds.PlayTrack();
      });
      App.MUSIC.play();
    }
  },

  StartMusic: function() {
    if (App.MUSIC_ENABLED) {
      App.MUSIC = new Audio("../sounds/music/track01.mp3");
      if (typeof App.MUSIC.loop == 'boolean')
      {
        App.MUSIC.loop = true;
      }
      else
      {
        App.MUSIC.addEventListener('ended', function() {
          this.currentTime = 0;
          this.play();
        }, false);
      }
      App.MUSIC.play();
    }
  },

  PlayMusic: function() {
    App.MUSIC.play();
  },

  StopMusic: function() {
    App.MUSIC.pause();
  },

};

const musicTimes = [ 0, 89, 160, 230, 324, 420, 660, 765, 868 ];
