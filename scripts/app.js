$(document).ready(function() {
  responsiveVoice.setDefaultVoice("UK English Male");
  App.Run();
});

const App = {

  DEBUG: false,

  FULLSCREEN: false,

  VOICE_ENABLED: true,
  SOUND_ENABLED: true,
  SOUND_CLICK_ENABLED: true,
  MUSIC_ENABLED: true,
  INTRO_MUSIC: null,
  MUSIC: null,
  TRACK_NUMBER: 0,

  IS_HOME_SCREEN: true,
  MAIN_SCREEN: 'StartScreen',
  PREVIOUS_SCREEN: ``,

  GAME_STARTED: false,

  DEFAULT_WIDTH: 1280,
  DEFAULT_HEIGHT: 960,
  WINDOW_WIDTH: 0,
  WINDOW_HEIGHT: 0,

  CreateContainer: function() {
    const container = '<div id="container"></div>';
    $('body').append(container);
  },

  Speak: function(message, callbackFunction) {
    responsiveVoice.cancel();
    if (Settings.VOICE_ENABLED) {
      responsiveVoice.speak(message, 'UK English Male');
    }
  },

  EndGame: function() {
    App.GAME_STARTED = false;
  },

  SetGameSettings: function() {
    GameData.BTT_ENABLED = Settings.BTT_ENABLED;
    GameData.HJ_ENABLED = Settings.HJ_ENABLED;
    GameData.SOA_ENABLED = Settings.SOA_ENABLED;
    GameData.SOT_ENABLED = Settings.SOT_ENABLED;
    GameData.POTS_ENABLED = Settings.POTS_ENABLED;
  },

  CreateNewGame: function() {
    App.GAME_STARTED = true;
    App.SetGameSettings();
    Items.Compile();
    GameData.KEY_ITEM = KeyItems.GetRandom();
    const tokens = Random.Numbers(12).slice(0, 5);
    GameData.RELICS_TOKENS = tokens.slice(0, 4);
    GameData.KEY_TOKEN_ID = tokens[4];
  },

  NewGame: function() {
    if (Data.Reset()) {
      App.CreateNewGame();
    }
  },

  Run: function() {
    App.CreateContainer();
    Interface.Init();
  },

};
