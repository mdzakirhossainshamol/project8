
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