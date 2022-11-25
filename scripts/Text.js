const Text = {

  Format: function(text) {
    text = text.replace(/\{base\}/g, `<span class="base"></span>`);
    text = text.replace(/\{btt\}/g, `<span class="btt"></span>`);
    text = text.replace(/\{soa\}/g, `<span class="soa"></span>`);
    text = text.replace(/\{sot\}/g, `<span class="sot"></span>`);
    text = text.replace(/\{hj\}/g, `<span class="hj"></span>`);
    text = text.replace(/\{pots\}/g, `<span class="pots"></span>`);
    text = text.replace(/\{strength\}/g, `<span class="strength"></span>`);
    text = text.replace(/\{agility\}/g, `<span class="agility"></span>`);
    text = text.replace(/\{observation\}/g, `<span class="observation"></span>`);
    text = text.replace(/\{lore\}/g, `<span class="lore"></span>`);
    text = text.replace(/\{influence\}/g, `<span class="influence"></span>`);
    text = text.replace(/\{will\}/g, `<span class="will"></span>`);
    text = text.replace(/\{action\}/g, `<span class="action"></span>`);
    text = text.replace(/\{success\}/g, `<span class="success"></span>`);
    return Capitalize(text);
  },

  FormatToSpeech: function(text) {
    text = text.replace(/<br \/>/g, ``);
    text = text.replace(/<ul>/g, ``);
    text = text.replace(/<\/ul>/g, ``);
    text = text.replace(/<li>/g, ``);
    text = text.replace(/<\/li>/g, `. `);
    text = text.replace(/<strong>Locked Door:<\/strong> /g, ``);
    text = text.replace(/<i>/g, ``);
    text = text.replace(/<\/i>/g, ``);
    text = text.replace(/<strong>/g, ``);
    text = text.replace(/<\/strong>/g, ``);
    text = text.replace(/\(/g, ``);
    text = text.replace(/\)/g, ``);
    text = text.replace(/negates/g, `to negate`);
    text = text.replace(/\:2/g, ``);
    text = text.replace(/\:1/g, ``);
    text = text.replace(/\{base\}/g, ``);
    text = text.replace(/\{btt\}/g, ``);
    text = text.replace(/\{soa\}/g, ``);
    text = text.replace(/\{sot\}/g, ``);
    text = text.replace(/\{hj\}/g, ``);
    text = text.replace(/\{pots\}/g, ``);
    text = text.replace(/\{Damage\}/g, `damage`);
    text = text.replace(/\{Horror\}/g, `horror`);
    text = text.replace(/\{strength\}/g, `Test your strength `);
    text = text.replace(/\{agility\}/g, `Test your agility `);
    text = text.replace(/\{observation\}/g, `Test your observation `);
    text = text.replace(/\{lore\}/g, `Test your lore `);
    text = text.replace(/\{influence\}/g, `Test your influence `);
    text = text.replace(/\{will\}/g, `Test your will `);
    text = text.replace(/\{action\}/g, `Action `);
    text = text.replace(/\{success\}/g, ``);
    text = text.replace(/\.18 Derringer/g, `eighteen derringer`);
    text = text.replace(/\.41 Derringer/g, `forty one derringer`);
    text = text.replace(/38 Revolver/g, `thirty eight revolver`);
    text = text.replace(/\.45 Automatic/g, `forty five automatic`);
    text = text.replace(/\.25 Automatic/g, `twenty five automatic`);
    text = text.replace(/Snubnose/g, `snub nose`);
    text = text.replace(/R'lyeh/g, `ruler`);
    text = text.replace(/:/g, `. `);
    return Capitalize(text);
  },

  ReplaceItemsText: function(text) {
    if (text.includes(`{commonItem}`)) {
      const randomItem = Items.GetRandomCommonItem();
      text = text.replace(`{commonItemObject}`, `${Random.Get(randomItem.Objects)}`);
      text = text.replace(`{commonItem}`, `<strong>${randomItem.Name}</strong>`);
    }
    text = text.includes(`{spellItem}`) ? text.replace(`{spellItem}`, `<strong>${Items.GetRandomSpell()}</strong>`) : text;
    return text;
  },

  ReplaceTextWithObj: function(text, object) {
    console.log(object);
    if (object?.Objects != undefined) {
      text = text
        .replace(/\{commonItemObject\}/g, `${object.Objects.GetRandom()}`)
        .replace(/\{commonItem\}/g, `<strong>${object.Name}</strong>`);
    }
    if (object?.Type == Type.Monster) {
      text = text
        .replace(/\{spellObjectWord\}/g, `${GameText.Tokens.SpellObjectWords.GetRandom()}`)
        .replace(/\{monsterSetName\}/g, `<strong>${object.SetName}</strong>`);
    }
    if (object?.Type == Type.Spell) {
      text = text
        .replace(/\{spellObjectWord\}/g, `${GameText.Tokens.SpellObjectWords.GetRandom()}`)
        .replace(/\{spellItem\}/g, `<strong>${object.Name}</strong>`);
    }
    if (object?.Type == Type.TokenObject) {
      text = text
        .replace(/\{tokenObjObjectPositions\}/g, `${object.ObjectPositions.GetRandom()}`)
        .replace(/\{tokenObjPrefix2\}/g, `${object.Prefix[1]}`)
        .replace(/\{tokenObjPrefix2Capitalize\}/g, `${Capitalize(object.Prefix[1])}`)
        .replace(/\{tokenObjName\}/g, `${object.Name}`);
    }
    if (object?.Type == Type.Evidence) {
      text = text
        .replace(/\{uniqueItemObject\}/g, `${object.Objects.GetRandom()}`)
        .replace(/\{uniqueItemName\}/g, `<strong>${object.Name}</strong>`);
    }
 
    return text;
  },

};

const Capitalize = function(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

String.prototype.ReplaceTextWithObj = function(objArray) {
  let text = this;
  for (let i = 0; i < objArray.length; i++) {
    text = Text.ReplaceTextWithObj(text, objArray[i]);
  }
  return text;
};