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
  });
});

// Only adjacent petals can stay selected together
QUnit.test("Only adjacent petals can stay selected togther", function(assert) {
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

      let petalsHaveSameClasses =
        currentPetalClasses.every(function(el) {
          return nextPetalClasses.includes(el);
        }) &&
        nextPetalClasses.every(function(nextEl) {
          return currentPetalClasses.includes(nextEl);
        });
      console.log(petalId, $(this).attr("id"), petalsHaveSameClasses);

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
    });
  });
});
