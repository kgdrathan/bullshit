/***********************
* Adobe Edge Animate Composition Actions
*
* Edit this file with caution, being careful to preserve 
* function signatures and comments starting with 'Edge' to maintain the 
* ability to interact with these actions from within Adobe Edge Animate
*
***********************/
(function($, Edge, compId){
var Composition = Edge.Composition, Symbol = Edge.Symbol; // aliases for commonly used Edge classes

   //Edge symbol: 'stage'
   (function(symbolName) {
      
      
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
         // Change the text in an element
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu_handler}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getSymbol("Menu2").play("Reload_start");
         // Show an element 
         sym.$("Menu2").show();
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Menu2}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 0, function(sym, e) {
         // insert code here
         
         // Hide an element 
         sym.$("Menu2").hide();
         sym.$("Menu_handler").hide();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Main_template}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         
         // Hide an element 
         sym.$("Menu2").hide();

      });
      //Edge binding end

   })("stage");
   //Edge symbol end:'stage'

   //=========================================================
   
   //Edge symbol: 'Main_template'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2500, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Menu").play("Load_start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3250, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4000, function(sym, e) {
         // insert code here
      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 5000, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 4128, function(sym, e) {
         // insert code here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.getComposition().getStage().getSymbol("Menu").play("Unload_start");
         
         // Show an element 
         sym.getComposition().getStage().$("Menu_handler").show();
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Picture1}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.ktj.in/kronicle", "_blank");
         
         
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("Load_site");

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${ktj_logo__text_shapebsk-Recovered3}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.ktj.in", "_blank");
         

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${iitlogowhite}", "click", function(sym, e) {
         // insert code for mouse click here
         // Navigate to a new URL in a new window
         // (replace "_blank" with appropriate target attribute)
         window.open("http://www.iitkgp.ac.in", "_blank");
         

      });
      //Edge binding end

   })("Main_template");
   //Edge symbol end:'Main_template'

   //=========================================================
   
   //Edge symbol: 'Menu'
   (function(symbolName) {   
   
      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 11, function(sym, e) {
         // insert code here
         
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1000, function(sym, e) {
         // insert code here
         sym.
         // Show an element 
         sym.getSymbolElement().show();
         
         // Change the text in an element
         sym.getSymbol("Blog1").$("Text4").html("#Peace");
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1500, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Blog1}", "click", function(sym, e) {
         // insert code for mouse click here
         
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         
         // Change the text in an element
         sym.getComposition().getStage().getSymbol("Main_template").play("Load_side");
         
         // Change the text in an element
         
         // Change the text in an element
         sym.getComposition().getStage().getSymbol("Main_template").$("Blog_text").html(blog1_text);
         

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 2314, function(sym, e) {
         // insert code here
         sym.stop();
         // Hide an element 
         sym.getSymbolElement().hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1918, function(sym, e) {
         // insert code here
         sym.stop();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3483, function(sym, e) {
         // insert code here
         sym.stop();
         sym.hide();

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 3528, function(sym, e) {
         // insert code here
         // Play the timeline at a label or specific time. For example:
         // sym.play(500); or sym.play("myLabel");
         sym.play("unload_start");

      });
      //Edge binding end

      Symbol.bindTriggerAction(compId, symbolName, "Default Timeline", 1583, function(sym, e) {
         // insert code here
         
         // Go to a label or specific time and stop. For example:
         // sym.stop(500); or sym.stop("myLabel");
         sym.stop("Load_complete");

      });
      //Edge binding end

      

      

   })("Menu");
   //Edge symbol end:'Menu'

   //=========================================================
   
   //Edge symbol: 'Blog'
   (function(symbolName) {   
   
      Symbol.bindElementAction(compId, symbolName, "${Container}", "mouseover", function(sym, e) {
         // insert code to be run when the mouse hovers over the object
         sym.play();

      });
      //Edge binding end

      Symbol.bindElementAction(compId, symbolName, "${Container}", "mouseout", function(sym, e) {
         // insert code to be run when the mouse is moved off the object
         sym.playReverse();
         

      });
      //Edge binding end

   })("Blog");
   //Edge symbol end:'Blog'

})(window.jQuery || AdobeEdge.$, AdobeEdge, "Blog_main");