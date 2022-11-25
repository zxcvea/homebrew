const Random = {
  /**
   * Gets a random number between {min} to {max} (not including). Optionally exclude number.
   */
  NumberBetween: function(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  },
  /**
   * Gets a random number from 0 to {max} (not including). Optionally exclude number.
   * @excludeNumber {excludeNumber} Number to exclude 
   */
  Number: function(max, excludeNumber = 999) {
    const random = Random.NumberBetween(0, max);
    if (random == excludeNumber) {
      return Random.Number(max, excludeNumber);
    } else {
      return random;
    }
  },
  /**
   * Gets an array of non-repeat randoms numbers from 0 to {max} (not including)
   */
  Numbers: function(max) {
    let arr = [];
    let min = Math.ceil(0);
    for (let i = 0; i < max; i++) {
      let x = Math.floor(Math.random() * (max - min)) + min;
      if(arr.includes(x)) {
        i = i - 1;
      } else {
        if(x <= max) {
          arr.push(x);
        }
      }
    }
    return arr;
  },
  /**
   * Gets a random number from 0 to {max} (not including) that is not in an array 
   */
  NumberNotIn: function(min, max, arr) {
    let rand = Random.NumberBetween(min, max);
    if (arr.includes(rand)) {
      return Random.NumberNotIn(min, max, arr);
    } else {
      return rand;
    }
  },
  Matches: function(number, max = 5) {
    return Random.Number(max) == number;
  },
  CoinFlip: function() {
    return Random.Number(2) == 0;
  },
  /**
   * Gets a random item from an array
   */
  Get: function(arr) {
    return arr[Random.Number(arr.length)];
  },
};

Array.prototype.size = function() {
  return Object.keys(this).length;
};

Array.prototype.GetRandom = function() {
  return this[Random.Number(this.length)];
};

Array.prototype.HasItem = function(item) {
  return this.size() > 0 && this.some(x => x === item);
};

Array.prototype.shuffle = function() {
  return this.sort(() => Math.random() - 0.5);
};

const Dice = {
  Roll: function() {
    return Dice.Random(1, 6);
  },
};



const Cookie = {

  SetCookie: function(cvalue, cname = 'mom2e-ex', exdays = 120) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  },

  GetCookie: function(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(const element of ca) {
      let c = element;
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  },

  Set: function(value, name = 'mom2e-gamedata') {
    const cookie = [name, '=', JSON.stringify(value), '; domain=.', window.location.host.toString(), '; path=/;'].join('');
    document.cookie = cookie;
  },

  Get: function(name = 'mom2e-gamedata') {
    const result = document.cookie.match(new RegExp(name + '=([^;]+)'));
    result && (result = JSON.parse(result[1]));
    return result;
  },

  Delete: function(name = 'mom2e-gamedata') {
    document.cookie = [name, '=; expires=Thu, 01-Jan-1970 00:00:01 GMT; path=/; domain=.', window.location.host.toString()].join('');
  }

};

const Request = {
  QueryString: function(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
      sParameterName = sURLVariables[i].split('=');
      if (sParameterName[0] === sParam) {
        return typeof sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
      }
    }
    return null;
  },
};
