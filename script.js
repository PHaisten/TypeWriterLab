$(document).ready(function() {
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
  let nextLetterIndex = 1;
  let currentSentence = sentences[sentenceIndex];
  let currentLetter = currentSentence.charAt(letterIndex);
  let nextLetter = currentSentence.charAt(nextLetterIndex);

  $("#keyboard-upper-container").hide();
  $("#target-letter").text(currentLetter);

  $(body).keydown(function(event) {
    keyId = event.which;
    // console.log(keyid);
    if (keyId == 16) {
      $("#keyboard-upper-container").toggle();
      $("#keyboard-lower-container").toggle();
    }
    // $(".key").addClass("pressed");
  });

  $(body).keyup(function(event) {
    keyId = event.which;
    // console.log(keyid);
    if (keyId == 16) {
      $("#keyboard-upper-container").toggle();
      $("#keyboard-lower-container").toggle();
    }
    $(".pressed").removeClass("pressed");
  });

  $(body).keypress(function(event) {
    ascii = event.which;
    // console.log(ascii);
    $("#" + ascii).addClass("pressed");
    $("#yellow-block").css({
      left: "+=17.5px"
    });
    
    let nextLetter = currentSentence.charAt(nextLetterIndex);

    if (ascii === currentLetter.charCodeAt()) {
      console.log(currentLetter);
      $("#target-letter").text(nextLetter);
      letterIndex++;
      nextLetterIndex++;
    } else {
      console.log(currentLetter);
      $("#target-letter").text(nextLetter);
      letterIndex++;
      nextLetterIndex++;
    }
  });

  $("<span>" + currentSentence + "</span>").appendTo("#sentence");
});
