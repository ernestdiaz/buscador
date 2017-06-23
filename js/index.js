
// jQuery que detecta cuando se detiene el scroll en la página

$.fn.scrollEnd = function(callback, timeout) {
  $(this).scroll(function(){
    var $this = $(this);
    if ($this.data('scrollTimeout')) {
      clearTimeout($this.data('scrollTimeout'));
    }
    $this.data('scrollTimeout', setTimeout(callback,timeout));
  });
};

 // Función que inicializa el elemento Slider


function inicializarSlider(){
  $("#rangoPrecio").ionRangeSlider({
    type: "double",
    grid: false,
    min: 0,
    max: 100000,
    from: 200,
    to: 80000,
    prefix: "$"
  });
}

 // para que se  reprodusca el video de fondo al hacer scroll, y deteiene la reproducción al detener el scroll

function playVideoOnScroll(){
  var ultimoScroll = 0,
      intervalRewind;
  var video = document.getElementById('vidFondo');
  $(window)
    .scroll((event)=>{
      var scrollActual = $(window).scrollTop();
      if (scrollActual > ultimoScroll){
     
     } else {
     
     }
     ultimoScroll = scrollActual;
    })
    .scrollEnd(()=>{
   
    }, 10)
}

$(document).ready(function() {
  $('select').material_select();
});

inicializarSlider();
playVideoOnScroll();
