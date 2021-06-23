// const $dropdown = $(".dropdown");
// const $dropdownToggle = $(".dropdown-toggle");
// const $dropdownMenu = $(".dropdown-menu");
// const showClass = "show";

// $(window).on("load resize", function() {
//   if (this.matchMedia("(min-width: 768px)").matches) {
//     $dropdown.hover(
//       function() {
//         const $this = $(this);
//         $this.addClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "true");
//         $this.find($dropdownMenu).addClass(showClass);
//       },
//       function() {
//         const $this = $(this);
//         $this.removeClass(showClass);
//         $this.find($dropdownToggle).attr("aria-expanded", "false");
//         $this.find($dropdownMenu).removeClass(showClass);
//       }
//     );
//   } else {
//     $dropdown.off("mouseenter mouseleave");
//   }
// });


//fade
$(window).on("load",function() {
  $(window).scroll(function() {
    var windowBottom = $(this).scrollTop() + $(this).innerHeight();
    $(".fade").each(function() {
      /* Check the location of each desired element */
      var objectBottom = $(this).offset().top + $(this).outerHeight();
      
      /* If the element is completely within bounds of the window, fade it in */
      if (objectBottom < windowBottom) { //object comes into view (scrolling down)
        if ($(this).css("opacity")==0) {$(this).fadeTo(500,1);}
      } else { //object goes out of view (scrolling up)
        if ($(this).css("opacity")==1) {$(this).fadeTo(500,0);}
      }
    });
  }).scroll(); //invoke scroll-handler on page-load
});

var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//fade ends


//navbar start
$(document).ready(function(){
  $('.navbar-toggler').click(function(){
      $('.navbar-collapse').slideToggle(300);
  });
  
  smallScreenMenu();
  let temp;
  function resizeEnd(){
      smallScreenMenu();
  }

  $(window).resize(function(){
      clearTimeout(temp);
      temp = setTimeout(resizeEnd, 100);
      resetMenu();
  });
});


const subMenus = $('.sub-menu');
const menuLinks = $('.menu-link');

function smallScreenMenu(){
  if($(window).innerWidth() <= 992){
      menuLinks.each(function(item){
          $(this).click(function(){
              $(this).next().slideToggle();
          });
      });
  } else {
      menuLinks.each(function(item){
          $(this).off('click');
      });
  }
}

function resetMenu(){
  if($(window).innerWidth() > 992){
      subMenus.each(function(item){
          $(this).css('display', 'none');
      });
  }
}

//navbar ends

//what to do (Email-marketing)

const slider = document.querySelector('.items');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3; //scroll-fast
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});

//what to do over

//services index page

let i=2;

	
$(document).ready(function(){
    var radius = 200;
    var fields = $('.itemDot');
    var container = $('.dotCircle');
    var width = container.width();
radius = width/2.5;

     var height = container.height();
    var angle = 0, step = (2*Math.PI) / fields.length;
    fields.each(function() {
        var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
        var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
        if(window.console) {
            console.log($(this).text(), x, y);
        }
        
        $(this).css({
            left: x + 'px',
            top: y + 'px'
        });
        angle += step;
    });
    
    
    $('.itemDot').click(function(){
        
        var dataTab= $(this).data("tab");
        $('.itemDot').removeClass('active');
        $(this).addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+ dataTab).addClass('active');
        i=dataTab;
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-1)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-1)*36)+"deg)",
            "transition":"1s"
        });
        
        
    });
    
    setInterval(function(){
        var dataTab= $('.itemDot.active').data("tab");
        if(dataTab>6||i>6){
        dataTab=1;
        i=1;
        }
        $('.itemDot').removeClass('active');
        $('[data-tab="'+i+'"]').addClass('active');
        $('.CirItem').removeClass('active');
        $( '.CirItem'+i).addClass('active');
        i++;
        
        
        $('.dotCircle').css({
            "transform":"rotate("+(360-(i-2)*36)+"deg)",
            "transition":"2s"
        });
        $('.itemDot').css({
            "transform":"rotate("+((i-2)*36)+"deg)",
            "transition":"1s"
        });
        
        }, 5000);
    
});