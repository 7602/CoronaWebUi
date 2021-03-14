webui.ready(function() {
  
  ui("#navbar1").navbarControl({ 
    transitionDuration: 700,
    largeDeviceOffset: 0,
    largeDeviceMenuOffset: -40,
    smallDeviceAlignment: "left",   
    smallDeviceBreakpoint: 2,
    smallDeviceExpansion: "overlay"     
  });

  ui("#navToggle1").navButtonControl({ 
    transitionDuration: 300, 
    backgroundColor: "#2196f3", 
    color: "#FFF"
  });

});
webui.ready(function() {

  ui("#tabs1").tabControl({ 
    activeTabId: "#tab1", 
    activeTabFocused: true,
    transitionDuration: 1000,
    transitionType: "fade"
  });

});
webui.ready(function() {

  ui("#tabs11").tabControl({ 
    activeTabId: "#tab11", 
    activeTabFocused: true,
    transitionDuration: 1000,
    transitionType: "fade"
  });
});

//
webui.ready(function() {

  var modal1 = ui("#modal1").modalControl({
    closeFromBackdrop: true,
    transitionDuration: 500
  });

  ui("#showModal").click( function() { 
    modal1.open();
  });

});

webui.ready(function() {
				
			// Target element must have width and height defined.
			ui("#badgeSnapPosition1, #badgeSnapPosition2").snapPosition("#textboxSnapPosition", [0, 0], "rem", "top-center");
			ui("#shapeSnapPosition").snapPosition("#containerSnapPosition", [0, -0.6], "rem");


			// Drag and drop

			ui("#dragItem1, #dragItem2, #dragItem3").dragStart( function(e) {
				e.dataTransfer.setData("text", e.target.id);
			});

			ui(".panel").dragOver( function(e) {
				e.preventDefault();
				webui(e.target).setState("border-dark", "border-info");
			});

			ui(".panel").drop( function(e) {
				e.preventDefault();
				
				webui(e.target).setState("border-info", "border-dark");

				var data = e.dataTransfer.getData("text");
				webui(e.target).append(webui("#" + data));
			});


			// Slide transitions

			ui("#commandTransitionRight").click( function() { 
				ui("#transitionPanel").slideHorizontal("right", 100, 2000);
			});

			ui("#commandTransitionLeft").click( function() { 
				ui("#transitionPanel").slideHorizontal("left", 100, 2000);
			});
							
		});

webui.ready(function() {

  ui("#corona").tabControl({ 
    activeTabId: "#all", 
    activeTabFocused: true,
    transitionDuration: 1000,
    transitionType: "fade"
  });

});