let body = $("body");
let sentences = [
  "ten ate neite ate nee enet ite ate inet ent eate",
  "Too ato too nOt enot one totA not anot tOO aNot",
  "oat itain oat tain nate eate tea anne inant nean",
  "itant eate anot eat nato inate eat anot tain eat",
  "nee ene ate ite tent tiet ent ine ene ete ene ate"
];
let sentenceIndex = 0;
let letterIndex = 0;
let currentSentence = sentences[sentenceIndex];
let currentLetter = currentSentence.charAt(0);

$("#keyboard-upper-container").hide();
$("<span>" + currentSentence + "</span>").appendTo("#sentence");
$("#target-letter").text(currentLetter);

$(document).keydown(function(event) {
  let keyId = event.which;
  // console.log(keyid);
  if (keyId == 16) {
    $("#keyboard-upper-container").toggle();
    $("#keyboard-lower-container").toggle();
  }
  // $(".key").addClass("pressed");
});

$(document).keyup(function(event) {
  let keyId = event.which;
  // console.log(keyid);
  if (keyId == 16) {
    $("#keyboard-upper-container").toggle();
    $("#keyboard-lower-container").toggle();
  }
  $(".pressed").removeClass("pressed");
});

$(document).keypress(function(event) {
  let ascii = event.which;
  $("#" + ascii).addClass("pressed");

  if (ascii === currentLetter.charCodeAt(0)) {
    $("#feedback").append("<span class='glyphicon glyphicon-ok'></span>");
  } else {
    $("#feedback").append("<span class='glyphicon glyphicon-remove'></span>");
  }
  letterIndex++;

  if (letterIndex === currentSentence.length) {
    sentenceIndex++;

    if (sentenceIndex === sentences.length) {
      alert("game over");
    } else {
      currentSentence = sentences[sentenceIndex];
      $("#sentence").text(currentSentence);
      letterIndex = 0;
      currentLetter = currentSentence.charAt(letterIndex);
      $("#target-letter").text(currentLetter);
      $("#feedback").empty();
      $("#yellow-block").css({
        left: "17.5px"
      });
    }
  } else {
    currentLetter = currentSentence.charAt(letterIndex);
    $("#target-letter").text(currentLetter);
    $("#yellow-block").css({
      left: "+=17.5px"
    });
  }
});
