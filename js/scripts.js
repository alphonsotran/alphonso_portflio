// google maps javascript
function initMap() {
  var berlin = {lat: 52.519715, lng: 13.404324}
  var map = new google.maps.Map(document.getElementById('map'), {
    center: berlin,
    zoom: 12
  });
  var marker = new google.maps.Marker({position: berlin, map: map});
}

$(document).ready(() => {
    // smooth scrolling
    var $root = $('html, body');
      $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        if (href != undefined && href != '#') {
          $root.animate({
            scrollTop: $(href).offset().top
          }, 500, function () {
            window.location.hash = href;
          });
        }
        return false;
      });

      // 2.8
      $("#message-box").on("keyup", () => {
          var charCounter = $("#message-box").val().length;
          $("#char-count").html(charCounter);
          if (charCounter) {
              $("#message-box").css("border", "2px solid red");
          } else {
              console.log("lol")
          };
      });
      // work section. watch out for quotes and brackets.
    for(var i = 0; i < works.length; i++){
        $("#works").append("\
        <div class='col-xs-12 col-md-3 workicons'>\
            <a href='"+works[i].link+"' class='work-img'>\
            <img class='img-responsive' src='" + works[i].pic + "'>\
            <span class='info'><p class='proj-title'>"+ works[i].title+"</p></span>\
            </a>\
        </div>\
        ");
        var images = $("#works img")
        $(images[i]).css("border", "2px solid black");
    };
    // hover caption fade in
    $(".work-img").mouseenter(function() {
        $(".info", this).fadeIn().css({
          "color": "#f5f5dd",
          "font-style": "bold",
          "margin-top": "1.5em",
          "margin-right": "5em",
          "display": "relative"
        });
    }).mouseleave(function() {
        $(".info", this).hide();
    })
});
