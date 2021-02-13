$(function(){
    // Floating Contact Widget Trigger
      $(".amg-floating-icon").on("mouseenter", function(){
          $(this).closest(".amg-floating-contact-wrap").addClass("hover")
      });
      $(".amg-floating-contact-wrap").on("mouseleave", function(){
          $(this).removeClass("hover");
      });
    
      // Demo
      var interval = setInterval(function(){
          $(".amg-floating-icon").trigger("mouseenter");
      
          setTimeout(function(){
              $(".amg-floating-icon").trigger("mouseleave");
          }, 1000);
      }, 2000);
    
      setTimeout(function(){
          // stop demo
          clearInterval(interval);
      },3000);
  })