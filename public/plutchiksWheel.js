// This file contains logic for creating clickable elements
// that prepare the data which will be sent
$(document).ready(function() {
  var clicked = [];
  var originalFill = 'rgba(0, 249, 237, 0.6)';
  $("#petal0").click(function(){
    // Check to see if complementary petal is selected
    // if not, and other petals are selected, deselect them
    // definitely refactor this
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 7 && clicked[i] != 1) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };

    clicked.push(0);
    
    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal1").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 2 && clicked[i] != 0) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(1);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal2").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 1 && clicked[i] != 3) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(2);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal3").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 2 && clicked[i] != 4) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(3);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal4").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 3 && clicked[i] != 5) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(4);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal5").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 4 && clicked[i] != 6) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(5);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal6").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 5 && clicked[i] != 7) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(6);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });

  $("#petal7").click(function(){
    for (let i = 0; i < clicked.length; i++){
      if (clicked[i] != 6 && clicked[i] != 0) {
        let id = '#petal' + clicked[i];
        $(id).css('fill', originalFill);
      }
    };
    clicked.push(7);

    $(this).css("fill", "rgba(249,181,0,0.6)");
  });
  console.log(clicked);
});


