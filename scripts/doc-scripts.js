$(document).ready(function() {
  $('.expSoa, .expPots, .expHj, .expSot').hide();

  $(document).on('click', '#expansionSoaCheckbox', function(){
    if ($(this).is(':checked')) {
      $('.expSoa').show();
      if ($('#expansionPotsCheckbox').is(':checked')) {
        $('.expOverride, .baseOverride').hide();
      } else {
        $('.baseOverride').hide();
      }
    } else {
      $('.expSoa').hide();
      if ($('#expansionPotsCheckbox').is(':checked')) {
        $('.expOverride').show();
        $('.baseOverride').hide();
      } else {
        $('.baseOverride').show();
      }
    }
  });
  $(document).on('click', '#expansionPotsCheckbox', function(){
    if ($(this).is(':checked')) {
      if ($('#expansionSoaCheckbox').is(':checked')) {
        $('.expPots').show();
        $('.expOverride').hide();
        $('.baseOverride, .potsOverride, li.potsOverride').hide();
      } else {
        $('.expPots').show();
        $('.baseOverride, .potsOverride, li.potsOverride').hide();
      }
    } else {
      if ($('#expansionSoaCheckbox').is(':checked')) {
        $('.expPots').hide();
        $('.expOverride').hide();
        $('.baseOverride').hide();
      } else {
        $('.expPots').hide();
        $('.baseOverride, .potsOverride, li.potsOverride').show();
      }
    }
  });
  $(document).on('click', '#expansionHjCheckbox', function(){
    if ($(this).is(':checked')) {
      $('.expHj').show();
    } else {
      $('.expHj').hide();
    }
  });
  $(document).on('click', '#expansionSotCheckbox', function(){
    if ($(this).is(':checked')) {
      $('.expSot').show();
    } else {
      $('.expSot').hide();
    }
  });
});