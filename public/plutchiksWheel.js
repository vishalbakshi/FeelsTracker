// This file contains logic for creating clickable elements
// that prepare the data which will be sent
$(document).ready(function() {

  var clicked = [];
  var originalFill = 'rgba(0, 249, 237, 0.6)';

  var complementaryPetals = function(idx, arr){
    let newClicked = [];
    for (let i = 0; i < arr.length; i++){

      // Index of the petals below and above the current petal
      let complementLowerIndex = ((idx - 1) + 8) % 8;
      let complementUpperIndex = (idx + 1) % 8;

      // If petal other than complementary are selected, deselect them
      if (arr[i] != complementLowerIndex && arr[i] != complementUpperIndex) {
        let id = '#petal' + arr[i];
        $(id).removeClass('selected');
      } else {
        newClicked.push(clicked[i]);
      }
    };
    clicked = [...newClicked];
  }

  $("#petal0").click(function(){
    // Check to see if complementary petal is selected
    // if not, and other petals are selected, deselect them
    // definitely refactor this
    
    if (!$(this).hasClass('selected')) {
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 7 && clicked[i] != 1) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };

      clicked = [...newClicked];
      clicked.push(0);   
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(0), 1);
    }
  });

  $("#petal1").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 2 && clicked[i] != 0) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };
      clicked = [...newClicked];
      clicked.push(1);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(1), 1);
    }
  });

  $("#petal2").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 1 && clicked[i] != 3) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };

      clicked = [...newClicked];
      clicked.push(2);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(2), 1);
    };
  });

  $("#petal3").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];

      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 2 && clicked[i] != 4) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };

      clicked = [...newClicked];
      clicked.push(3);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(3), 1);
    };
  });

  $("#petal4").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 3 && clicked[i] != 5) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };

      clicked = [...newClicked];  
      clicked.push(4);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(4), 1);
    }
  });

  $("#petal5").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 4 && clicked[i] != 6) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };

      clicked = [...newClicked];
      clicked.push(5);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(5), 1);
    };
  });

  $("#petal6").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++){
        if (clicked[i] != 5 && clicked[i] != 7) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };
      clicked = [...newClicked];
      clicked.push(6);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(6), 1);
    };
  });

  $("#petal7").click(function(){
    if (!$(this).hasClass('selected')){
      let newClicked = [];
      for (let i = 0; i < clicked.length; i++){
        
        if (clicked[i] != 6 && clicked[i] != 0) {
          let id = '#petal' + clicked[i];
          $(id).removeClass('selected');
        } else {
          newClicked.push(clicked[i]);
        }
      };
      clicked = [...newClicked];
      clicked.push(7);
      $(this).addClass("selected");
    } else {
      $(this).removeClass('selected');
      clicked.splice(clicked.indexOf(7), 1);
    };
  });

});