// clicking on a petal changes its color
QUnit.test("Petal color changes when clicked", function(assert) {
  $(".petal").each(function(idx, petal) {
    let originalPetalColor = $(this).css("fill");
    $(this).trigger("click");
    let finalPetalColor = $(this).css("fill");
    assert.notEqual(
      originalPetalColor,
      finalPetalColor,
      $(this).attr("id") + " color changes when clicked"
    );
    // remove 'selected' class before next petal is clicked
    $(this).removeClass("selected");
  });
});

// Only adjacent petals can stay selected together
QUnit.test("Only adjacent petals can stay selected together", function(assert) {
  let classesToIgnore = ["petal", "selected"];
  $(".petal").each(function(idx, petal) {
    // get array of classes of current petal

    // get ID of current petal
    let petalId = $(this).attr("id");

    // iterate through other petals
    // click them
    // see if the fill is correct
    $(".petal").each(function(idx, petal) {
      // click petal in parent loop
      $("#" + petalId).trigger("click");

      // click petal in current nested loop
      $(this).trigger("click");

      // get classes of petal in parent loop
      let currentPetalClasses = $("#" + petalId)
        .attr("class")
        .split(" ");

      // get classes of current petal in nested loop
      let nextPetalClasses = $(this)
        .attr("class")
        .split(" ");

      let currentPetalColor = $("#" + petalId).css("fill");
      // get color of current petal in nested loop
      let nextPetalColor = $(this).css("fill");

      let petalsHaveSameClasses = false;

      currentPetalClasses.forEach(function(el) {
        if (
          !classesToIgnore.includes(el) &&
          nextPetalClasses.indexOf(el) !== -1
        ) {
          petalsHaveSameClasses = true;
          return;
        }
      });
      //console.log(petalId, $(this).attr("id"), petalsHaveSameClasses);
      /*
      console.log(
        petalId,
        $(this).attr("id"),
        currentPetalClasses,
        nextPetalClasses
      );
      */
      if (petalsHaveSameClasses) {
        assert.equal(
          currentPetalColor,
          nextPetalColor,
          "true: " + petalId + "," + $(this).attr("id")
        );
      } else {
        assert.notEqual(
          currentPetalColor,
          nextPetalColor,
          "false: " + petalId + "," + $(this).attr("id")
        );
      }

      if (currentPetalClasses.includes("selected")) {
        $("#" + petalId).removeClass("selected");
      }

      if (nextPetalClasses.includes("selected")) {
        $(this).removeClass("selected");
      }
    });
  });
});

QUnit.test(
  "Response message appears on page after submitting an emotion",
  function(assert) {
    $("#submitEmotion").trigger("click");
    let done = assert.async();
    setTimeout(function checkResponse() {
      assert.equal(
        $(".response").text() == "Submitted emotion",
        true,
        "response is displayed in element with .response class"
      );
      console.log($(".response").text());
      done();
    }, 1000);
  }
);

QUnit.test(
  "Response message refreshes on page after submitting additional emotions",
  function(assert) {
    $("#submitEmotion").trigger("click");
    assert.equal($(".response").text(), "", "Response message refreshes");
  }
);

QUnit.test(
  "Subpetals gets selected when corresponding petals are selected",
  function(assert) {
    // subpetal0
    $("#petal7").trigger("click");
    $("#petal0").trigger("click");
    assert.ok(
      $("#subpetal0").hasClass("selected"),
      "subpetal0 is selected when petals 7 and 0 are selected"
    );
    $("#petal7").trigger("click");
    $("#petal0").trigger("click");

    // subpetal1
    $("#petal1").trigger("click");
    $("#petal0").trigger("click");
    assert.ok(
      $("#subpetal1").hasClass("selected"),
      "subpetal1 is selected when petals 0 and 1 are selected"
    );
    $("#petal1").trigger("click");
    $("#petal0").trigger("click");

    // subpetal2
    $("#petal1").trigger("click");
    $("#petal2").trigger("click");
    assert.ok(
      $("#subpetal2").hasClass("selected"),
      "subpetal2 is selected when petals 1 and 2 are selected"
    );
    $("#petal1").trigger("click");
    $("#petal2").trigger("click");

    // subpetal3
    $("#petal2").trigger("click");
    $("#petal3").trigger("click");
    assert.ok(
      $("#subpetal3").hasClass("selected"),
      "subpetal3 is selected when petals 2 and 3 are selected"
    );
    $("#petal2").trigger("click");
    $("#petal3").trigger("click");

    // subpetal4
    $("#petal3").trigger("click");
    $("#petal4").trigger("click");
    assert.ok(
      $("#subpetal4").hasClass("selected"),
      "subpetal4 is selected when petals 3 and 4 are selected"
    );
    $("#petal3").trigger("click");
    $("#petal4").trigger("click");

    // subpetal5
    $("#petal4").trigger("click");
    $("#petal5").trigger("click");
    assert.ok(
      $("#subpetal5").hasClass("selected"),
      "subpetal5 is selected when petals 4 and 5 are selected"
    );
    $("#petal4").trigger("click");
    $("#petal5").trigger("click");

    // subpetal6
    $("#petal5").trigger("click");
    $("#petal6").trigger("click");
    assert.ok(
      $("#subpetal6").hasClass("selected"),
      "subpetal6 is selected when petals 5 and 6 are selected"
    );
    $("#petal5").trigger("click");
    $("#petal6").trigger("click");

    // subpetal7
    $("#petal6").trigger("click");
    $("#petal7").trigger("click");
    assert.ok(
      $("#subpetal7").hasClass("selected"),
      "subpetal7 is selected when petals 6 and 7 are selected"
    );
    $("#petal6").trigger("click");
    $("#petal7").trigger("click");
  }
);
