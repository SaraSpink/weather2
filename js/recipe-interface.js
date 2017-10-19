import { Ish } from './../js/recipe.js';
let apiKey = require('./../.env').apiKey;

$(document).ready(function() {
  $('#weatherLocation').click(function() {
    let city = $('#location').val();
    $('#location').val("");

      let x = new Ish();

      x.dandan(city, apiKey);
  });
});
