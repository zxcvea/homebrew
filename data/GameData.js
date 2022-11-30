let GameData = {
  // Items
  ITEMS_COLLECTED_COUNT: 0,
  ITEMS_COLLECTED: [],
  ITEM_OBJ: undefined,
  ITEMS_GENERATED: [],
  STARTING_ITEMS: [],
  // Relics
  RELICS_TOKENS: [],
  RELICS_COLLECTED: 0,
  RELICS_ITEMS: [],
  // LockedDoors/Key
  KEY_ITEM: '',
  KEY_TOKEN_ID: 0,
  HAS_KEY: false,
  BTT_ENABLED: false,
  HJ_ENABLED: false,
  SOA_ENABLED: false,
  SOT_ENABLED: false,
  POTS_ENABLED: false,
};

let Settings = {
  VOICE_ENABLED: true,
  BTT_ENABLED: false,
  HJ_ENABLED: false,
  SOA_ENABLED: false,
  SOT_ENABLED: false,
  POTS_ENABLED: false,
};

const DataType = {
  GAME_DATA: `GameData`,
  SETTINGS: `Settings`,
};

const Data = {

  SECRET: `xCxcpAHDKDvNAKYokG`, 

  Reset: function () {
    Data.Remove(DataType.GAME_DATA);
    GameData.ITEMS_COLLECTED_COUNT = 0;
    GameData.ITEMS_COLLECTED = [];
    GameData.ITEM_OBJ = undefined;
    GameData.ITEMS_GENERATED = [];
    GameData.STARTING_ITEMS = [];
    GameData.RELICS_TOKENS = [];
    GameData.RELICS_COLLECTED = 0;
    GameData.RELICS_ITEMS = [];
    GameData.KEY_ITEM = '';
    GameData.KEY_TOKEN_ID = 0;
    GameData.HAS_KEY = false;  
    return true;
  },

  Encode: function(text) {
    return CryptoJS.AES.encrypt(text, Data.SECRET).toString();
  },

  Decode: function(text) {
    return CryptoJS.AES.decrypt(text, Data.SECRET).toString(CryptoJS.enc.Utf8);
  },

  Store: function(ref, data) {
    localStorage.setItem(ref, data);
  },

  Get: function(ref) {
    return localStorage.getItem(ref);
  },

  Remove: function(ref) {
    localStorage.removeItem(ref);
  },

  Clear: function() {
    localStorage.clear();
  },

  SaveSettings: function() {
    const settings = Data.Encode(JSON.stringify(Settings));
    Data.Store(DataType.SETTINGS, settings);
  },

  GetSettings: function() {
    const settingsData = Data.Get(DataType.SETTINGS);
    if (settingsData == null) {
      return;
    }
    const settings = JSON.parse(Data.Decode(settingsData));
    Settings = settings;
  },

  HasSettings: function() {
    return Data.Get(DataType.SETTINGS) != null;
  },

  SaveGame: function() {
    const gameData = Data.Encode(JSON.stringify(GameData));
    Data.Store(DataType.GAME_DATA, gameData);
  },

  Continue: function() {
    const encodedData = Data.Get(DataType.GAME_DATA);
    if (encodedData == null) {
      return;
    }
    const savedGameData = JSON.parse(Data.Decode(encodedData));
    GameData = savedGameData;
  },

  HasSavedGame: function() {
    return Data.Get(DataType.GAME_DATA) != null;
  },

};