$(document).ready(function() {
  responsiveVoice.setDefaultVoice("UK English Male");
  App.Run();
});

const App = {

  DEBUG: false,
  VOICE_ENABLED: true,
  SOUND_ENABLED: true,
  SOUND_CLICK_ENABLED: true,
  MUSIC_ENABLED: true,
  INTRO_MUSIC: null,
  MUSIC: null,
  TRACK_NUMBER: 0,

  IS_HOME_SCREEN: true,

  DEFAULT_WIDTH: 1280,
  DEFAULT_HEIGHT: 960,
  WINDOW_WIDTH: 0,
  WINDOW_HEIGHT: 0,

  CreateContainer: function() {
    const container = '<div id="container"></div>';
    $('body').append(container);
  },

  Speak: function(message, callbackFunction) {
    if (App.VOICE_ENABLED) {
      if (callbackFunction !== undefined) {
        responsiveVoice.speak(message, 'UK English Male', {onend: callbackFunction});
      } else {
        responsiveVoice.speak(message, 'UK English Male');
      }
    }
  },

  NewGame: function() {
    Items.Compile();
    GameData.KEY_ITEM = KeyItems.GetRandom();
    const tokens = Random.Numbers(12).slice(0, 5);
    GameData.RELICS_TOKENS = tokens.slice(0, 4);
    GameData.KEY_TOKEN_ID = tokens[4];
  },

  Run: function() {
    App.NewGame();
    App.CreateContainer();
    Interface.Init();
  }

};
