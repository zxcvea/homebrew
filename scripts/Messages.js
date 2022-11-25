let MessageHistory = [];

const MessageBox = {

  UpdateActionText: function(text, action = '', index = 0) {
    $('.messagectn #btn-cta').attr('action', action).attr('index', index).html(Text.Format(text));
  },

  UpdateAction2Text: function(text, action = '', index = 0) {
    $('.messagectn #btn-cta2').attr('action', action).attr('index', index).html(Text.Format(text));
  },

  UpdateHistory: function(message) {
    MessageHistory.push(message);
  },

  Speak: function(speakMessageObj) {
    if (Array.isArray(speakMessageObj)) {
      let speechText = '';
      for (const text of speakMessageObj) {
        speechText += text.toString() + ' ';
      }
      if (speechText !== '') {
        App.Speak(Text.FormatToSpeech(speechText));
      }
    }
    if (typeof speakMessageObj === `string`) {
      App.Speak(Text.FormatToSpeech(speakMessageObj));
    }
  },

  ShowBox: function() {
    $('.messagectn').stop().fadeIn('slow', function() {
      GameSettings.IS_MESSAGE_DISPLAYED = true;
    });
  },

  Display: function(messageObj) {
    let displayMessage = '';
    if (Array.isArray(messageObj)) {
      for (const message of messageObj) {
        let text = message.toString();
        if (text.startsWith('<p') || text.startsWith('<ul') || messageObj.size() === 1) {
          displayMessage += Text.Format(text);
        } else {
          displayMessage += `<p>${Text.Format(text)}</p>`;
        }
      }
    }
    if (typeof messageObj === `string`) {
      displayMessage = Text.Format(messageObj);
    }
    $('#messageBox').html(displayMessage);
    MessageBox.UpdateHistory(displayMessage);
  },

  DisplaySpeak: function(messageObj, speakMessageObj = null) {
    MessageBox.Display(messageObj);
    MessageBox.Speak(speakMessageObj == null ? messageObj : speakMessageObj);
  },

  UpdateActions: function(action = Actions.Continue, actionText = ActionText.Continue, index = 0, action2 = '', actionText2 = '', index2 = 0) {
    MessageBox.UpdateActionText(actionText, action, index);
    MessageBox.UpdateAction2Text(actionText2, action2, index2);
    if (actionText2 === '') {
      $('.messagectn #btn-cta2').hide();
    } else {
      $('.messagectn #btn-cta2').show();
    }
  },
};
