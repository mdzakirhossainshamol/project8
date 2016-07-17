 /* Featured  Item Carousel */

   $(document).ready(function() {
 
		  var owl = $("#owl-demo");
		 
		  owl.owlCarousel({
		      
		      autoPlay: 5000, //Set AutoPlay to 3 seconds
		 
		      items : 4,
		      itemsDesktop : [1199,3],
		      itemsDesktopSmall : [979,3],
		      stopOnHover : true,
		  });
				 
		  // Custom Navigation Events
		  $(".next").click(function(){
		    owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
		    owl.trigger('owl.prev');
		  })
 
});
      

/* Latest Item Carousel */

$(document).ready(function() {
     
      var owl = $("#owl-demo2");
     
      owl.owlCarousel({
          
          autoPlay: 5000, //Set AutoPlay to 3 seconds
     
          items : 4,
          itemsDesktop : [1199,3],
          itemsDesktopSmall : [979,3],
          stopOnHover : true,
      });
     
      // Custom Navigation Events
      $(".next").click(function(){
        owl.trigger('owl.next');
      })
      $(".prev").click(function(){
        owl.trigger('owl.prev');
      })
     
});


/* Best Seller  Item Carousel */

 $(document).ready(function() {
		 
		  var owl = $("#owl-demo3");
		 
		  owl.owlCarousel({
		      
		      autoPlay: 5000, //Set AutoPlay to 3 seconds
		 
		      items : 4,
		      itemsDesktop : [1199,3],
		      itemsDesktopSmall : [979,3],
		      stopOnHover : true,
		  });
		 
		  // Custom Navigation Events
		  $(".next").click(function(){
		    owl.trigger('owl.next');
		  })
		  $(".prev").click(function(){
		    owl.trigger('owl.prev');
		  })
		 
});



 /* Trend In Week  Item Carousel */
 $(document).ready(function() {
       
        var owl = $("#owl-demo4");
       
        owl.owlCarousel({
            
            autoPlay: 5000, //Set AutoPlay to 3 seconds
       
            items : 4,
            itemsDesktop : [1199,3],
            itemsDesktopSmall : [979,3],
            stopOnHover : true,
        });
       
        // Custom Navigation Events
        $(".next").click(function(){
          owl.trigger('owl.next');
        })
        $(".prev").click(function(){
          owl.trigger('owl.prev');
        })
       
});

