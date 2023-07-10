jQuery(document).ready(function($) {

	'use strict';

        $(window).load(function() { // makes sure the whole site is loaded
            $(".seq-preloader").fadeOut(); // will first fade out the loading animation
            $(".sequence").delay(500).fadeOut("slow"); // will fade out the white DIV that covers the website.
        })
      
        
        $(function() {
  
        function showSlide(n) {
            // n is relative position from current slide
          
            // unbind event listener to prevent retriggering
            $body.unbind("mousewheel");
          
            // increment slide number by n and keep within boundaries
            currSlide = Math.min(Math.max(0, currSlide + n), $slide.length-1);
            
            var displacment = window.innerWidth*currSlide;
            // translate slides div across to appropriate slide
            $slides.css('transform', 'translateX(-' + displacment + 'px)');
            // delay before rebinding event to prevent retriggering
            setTimeout(bind, 700);
            
            // change active class on link
            $('nav a.active').removeClass('active');
            $($('a')[currSlide]).addClass('active');
            
        }
      
        function bind() {
             $body.bind('false', mouseEvent);
          }
      
        function mouseEvent(e, delta) {
            // On down scroll, show next slide otherwise show prev slide
            showSlide(delta >= 0 ? -1 : 1);
            e.preventDefault();
        }
        
        $('nav a, .main-btn a').click(function(e) {
            // When link clicked, find slide it points to
            var newslide = parseInt($(this).attr('href')[1]);
            // find how far it is from current slide
            var diff = newslide - currSlide - 1;
            showSlide(diff); // show that slide
            e.preventDefault();
        });
      
        $(window).resize(function(){
          // Keep current slide to left of window on resize
          var displacment = window.innerWidth*currSlide;
          $slides.css('transform', 'translateX(-'+displacment+'px)');
        });
        
        // cache
        var $body = $('body');
        var currSlide = 0;
        var $slides = $('.slides');
        var $slide = $('.slide');
      
        // give active class to first link
        $($('nav a')[0]).addClass('active');
        
        // add event listener for mousescroll
        $body.bind('false', mouseEvent);
    })        


        $('#form-submit .date').datepicker({
        });


        $(window).on("scroll", function() {
            if($(window).scrollTop() > 100) {
                $(".header").addClass("active");
            } else {
                //remove the background property so it comes transparent again (defined in your css)
               $(".header").removeClass("active");
            }
        });


        var powerUpProgress = document.querySelector('.power-up-progress');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress(progress) {
          powerUpProgress.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress(80); // Dominio de HTML, CSS y Java Script
        
        var powerUpProgress1 = document.querySelector('.power-up-progress1');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress1(progress) {
          powerUpProgress1.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress1(70); // Conocimiento de Base de Datos

        var powerUpProgress2 = document.querySelector('.power-up-progress2');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress2(progress) {
          powerUpProgress2.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress2(50); // Experiencia en freamworks de desarrollo web

        var powerUpProgress3 = document.querySelector('.power-up-progress3');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress3(progress) {
          powerUpProgress3.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress3(70); //Conocimiento de control e versiones

        var powerUpProgress4 = document.querySelector('.power-up-progress4');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress4(progress) {
          powerUpProgress4.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress4(80); // Resolucion de problemas y depuración

        var powerUpProgress5 = document.querySelector('.power-up-progress5');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress5(progress) {
          powerUpProgress5.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress5(95); // Tolerancia a la frustación

        var powerUpProgress6 = document.querySelector('.power-up-progress6');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress6(progress) {
          powerUpProgress6.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress6(90); // Comunicacion efectiva

        var powerUpProgress7 = document.querySelector('.power-up-progress7');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress7(progress) {
          powerUpProgress7.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress7(80); // trabajo en Equipo

        var powerUpProgress8 = document.querySelector('.power-up-progress8');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress8(progress) {
          powerUpProgress8.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress8(75); // Habilidades de realución de problemas

        var powerUpProgress9 = document.querySelector('.power-up-progress9');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress9(progress) {
          powerUpProgress9.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress9(95); // Adaptabilidad

        var powerUpProgress10 = document.querySelector('.power-up-progress10');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress10(progress) {
          powerUpProgress10.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress10(80); // Pensamiento analitico

        var powerUpProgress11 = document.querySelector('.power-up-progress11');
        // Ajusta el progreso a un valor específico (entre 0 y 100)
        function setPowerUpProgress11(progress) {
          powerUpProgress11.style.width = progress + '%';
        }
        
        // Ejemplo de uso:
        setPowerUpProgress11(95); // Simpatia y buen trato






      });
