// This file contains logic for creating clickable elements
// that prepare the data which will be sent
$(document).ready(function() {
  var subpetalEmotions = {
    subpetal0: ["serenity", "joy", "ecstasy"],
    subpetal1: ["acceptance", "trust", "admiration"],
    subpetal2: ["apprehension", "fear", "terror"],
    subpetal3: ["distraction", "surprise", "amazement"],
    subpetal4: ["pensiveness", "sadness", "grief"],
    subpetal5: ["boredom", "disgust", "loathing"],
    subpetal6: ["annoyance", "anger", "rage"],
    subpetal7: ["interest", "anticipation", "vigilance"]
  };
  var clicked = [];

  $("#petal0").click(function() {
    // Check to see if complementary petal is selected
    // if not, and other petals are selected, deselect them
    // definitely refactor this

    if (!$(this).hasClass("selected")) {
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 7 && clicked[i] != 1) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }

      clicked = [...newClicked];
      clicked.push(0);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(1)) {
        $('#subpetal1').addClass("selected");
      }

      if (clicked.includes(7)) {
        $('#subpetal0').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(0), 1);

      /*
      $('#subpetal1').removeClass("selected");
      $('#subpetal0').removeClass("selected");
      */
    }
  });

  $("#petal1").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 2 && clicked[i] != 0) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }
      clicked = [...newClicked];
      clicked.push(1);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(0)) {
        $('#subpetal1').addClass("selected");
      }

      if (clicked.includes(2)) {
        $('#subpetal2').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(1), 1);
      /*
      $('#subpetal1').removeClass("selected");
      $('#subpetal2').removeClass("selected");
      */
    }
  });

  $("#petal2").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 1 && clicked[i] != 3) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }

      clicked = [...newClicked];
      clicked.push(2);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(1)) {
        $('#subpetal2').addClass("selected");
      }

      if (clicked.includes(3)) {
        $('#subpetal3').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(2), 1);
      /*
      $('#subpetal2').removeClass("selected");
      $('#subpetal3').removeClass("selected");
      */
    }
  });

  $("#petal3").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 2 && clicked[i] != 4) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }

      clicked = [...newClicked];
      clicked.push(3);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(2)) {
        $('#subpetal3').addClass("selected");
      }

      if (clicked.includes(4)) {
        $('#subpetal4').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(3), 1);

      /*
      $('#subpetal3').removeClass("selected");
      $('#subpetal4').removeClass("selected");
      */
    }
  });

  $("#petal4").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 3 && clicked[i] != 5) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }

      clicked = [...newClicked];
      clicked.push(4);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(3)) {
        $('#subpetal4').addClass("selected");
      }

      if (clicked.includes(5)) {
        $('#subpetal5').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(4), 1);
      /*
      $('#subpetal4').removeClass("selected");
      $('#subpetal5').removeClass("selected");
      */
    }
  });

  $("#petal5").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 4 && clicked[i] != 6) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }

      clicked = [...newClicked];
      clicked.push(5);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(4)) {
        $('#subpetal5').addClass("selected");
      }

      if (clicked.includes(6)) {
        $('#subpetal6').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(5), 1);

      /*
      $('#subpetal5').removeClass("selected");
      $('#subpetal6').removeClass("selected");
      */
    }
  });

  $("#petal6").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 5 && clicked[i] != 7) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }
      clicked = [...newClicked];
      clicked.push(6);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(5)) {
        $('#subpetal6').addClass("selected");
      }

      if (clicked.includes(7)) {
        $('#subpetal7').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(6), 1);
      /*
      $('#subpetal6').removeClass("selected");
      $('#subpetal7').removeClass("selected");
      */
    }
  });

  $("#petal7").click(function() {
    if (!$(this).hasClass("selected")) {
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++) {
        if (clicked[i] != 6 && clicked[i] != 0) {
          let id = "#petal" + clicked[i];
          $(id).removeClass("selected");
        } else {
          newClicked.push(clicked[i]);
        }
      }
      clicked = [...newClicked];
      clicked.push(7);
      $(this).addClass("selected");
      subpetalTriggers();

      /*
      if (clicked.includes(6)) {
        $('#subpetal7').addClass("selected");
      }

      if (clicked.includes(0)) {
        $('#subpetal0').addClass("selected");
      }
      */
    } else {
      $(this).removeClass("selected");
      subpetalTriggers();
      clicked.splice(clicked.indexOf(7), 1);
      /*
      $('#subpetal7').removeClass("selected");
      $('#subpetal0').removeClass("selected");
      */
    }
  });

  function subpetalTriggers() {
    if (
      $("#petal0").hasClass("selected") &&
      $("#petal1").hasClass("selected")
    ) {
      $("#subpetal1").addClass("selected");
    } else {
      $("#subpetal1").removeClass("selected");
    }

    if (
      $("#petal1").hasClass("selected") &&
      $("#petal2").hasClass("selected")
    ) {
      $("#subpetal2").addClass("selected");
    } else {
      $("#subpetal2").removeClass("selected");
    }

    if (
      $("#petal2").hasClass("selected") &&
      $("#petal3").hasClass("selected")
    ) {
      $("#subpetal3").addClass("selected");
    } else {
      $("#subpetal3").removeClass("selected");
    }

    if (
      $("#petal3").hasClass("selected") &&
      $("#petal4").hasClass("selected")
    ) {
      $("#subpetal4").addClass("selected");
    } else {
      $("#subpetal4").removeClass("selected");
    }

    if (
      $("#petal4").hasClass("selected") &&
      $("#petal5").hasClass("selected")
    ) {
      $("#subpetal5").addClass("selected");
    } else {
      $("#subpetal5").removeClass("selected");
    }

    if (
      $("#petal5").hasClass("selected") &&
      $("#petal6").hasClass("selected")
    ) {
      $("#subpetal6").addClass("selected");
    } else {
      $("#subpetal6").removeClass("selected");
    }

    if (
      $("#petal6").hasClass("selected") &&
      $("#petal7").hasClass("selected")
    ) {
      $("#subpetal7").addClass("selected");
    } else {
      $("#subpetal7").removeClass("selected");
    }

    if (
      $("#petal7").hasClass("selected") &&
      $("#petal0").hasClass("selected")
    ) {
      $("#subpetal0").addClass("selected");
      $(".subpetal0_text").addClass("selected");
    } else {
      $("#subpetal0").removeClass("selected");
      $(".subpetal0_text").removeClass("selected");
    }
  }

  // change subpetal text to a deeper emotion
  $("#subpetal0_plus").click(function textUpdate() {
    let emotions = ["serenity", "joy", "ecstasy"];
    let currentEmotionIndex = emotions.indexOf($("#subpetal0_text").text());
    let nextEmotionIndex;
    let nextEmotionText;

    if (currentEmotionIndex < 2) {
      nextEmotionIndex = currentEmotionIndex + 1;
      nextEmotionText = emotions[nextEmotionIndex];
    }

    if (nextEmotionText) {
      $("#subpetal0_text").text(nextEmotionText);
    }
  });

  // change subpetal text to a shallower emotion
  $("#subpetal0_minus").click(function textUpdate() {
    let emotions = ["serenity", "joy", "ecstasy"];
    let currentEmotionIndex = emotions.indexOf($("#subpetal0_text").text());
    let nextEmotionIndex;
    let nextEmotionText;

    if (currentEmotionIndex > 0) {
      nextEmotionIndex = currentEmotionIndex - 1;
      nextEmotionText = emotions[nextEmotionIndex];
    }

    if (nextEmotionText) {
      $("#subpetal0_text").text(nextEmotionText);
    }
  });

  // send selected emotions to server
  $("#submitEmotion").click(function(e) {
    // prevent the default action of the form
    e.preventDefault();

    // Clear the response message on the page
    $(".response").text("");

    // when user clicks submit, page sends selected
    // emotion petal text to server

    let emotionalPayload = [];

    // capture IDs of selected petals
    // then use them to select and capture
    // corresponding text
    $(".petal.selected").each(function(index, element) {
      let petalID = $(this).attr("id");
      emotionalPayload.push($("text[class=" + petalID + "]").attr("id"));
    });

    let subpetalID = $(".subpetal.selected").attr("id");
    let subpetalTextID = subpetalID + "_text";
    let subpetalText = $("#" + subpetalTextID).text();

    if (subpetalText) {
      emotionalPayload.push(subpetalText);
    }
    $.post("/add", { emotions: emotionalPayload })
      .done(function(data) {
        $(".response").text(data.message);
      })
      .fail(function() {
        console.log("error sending data to server");
      });
    return false;
  });
});
