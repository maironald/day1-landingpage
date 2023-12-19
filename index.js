function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://pokeapi.co/api/v2/pokemon/ditto", true);
  xhttp.send();
  xhttp.onreadystatechange = function () {
    if (this.readyState === 4) {
      console.log(JSON.parse(this.responseText));
    }
  };
}

// Click to the p element and then hide this element
// $(document).ready(function () {
//   $("p").click(function () {
//     $(this).hide();
//   });
// });

// Click to class navbar and then hide this element
// Note: this is similarity with id (using #)
// $(document).ready(function() {
//   $(".body-info").click(function () {
//     $(this).hide();
//   })
// })

$(document).ready(function () {
  $(".btn-order").click(function () {
    $(".navbar").slideDown(5000);
  });
  $("#demo").click(function () {
    $(".navbar").stop();
  });
});

$(document).ready(function () {
  $(".cake-info-item img").hover(function () {
     $(this).fadeOut(100);
     $(this).fadeIn(500);
  });
});
