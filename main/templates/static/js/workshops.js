function dispWork(wsInd) {
    $("#click_content_"+wsInd).fadeIn();
}

function closeWork(wsInd) {
    $("#click_content_"+ wsInd).fadeOut();
}

$(document).ready(function(){
         $('#workshops').hide();
         $("#boxl1, #boxt1").hover(function(){
            $('#desc_workshop').html("<p>Game Streaming on NVIDIA Shield</p> ");
         },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });    
         $("#boxl2, #boxt2").hover(function(){

            $('#desc_workshop').html("<p>Mozboot Camp and Appathon</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         
         $("#boxl3, #boxt3").hover(function(){
                
            $('#desc_workshop').html("<p>Aceelero-Botix</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl4, #boxt4" ).hover(function(){
                
            $('#desc_workshop').html("<p>New Product Opportunities on Sustainable Developement</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl6, #boxt6" ).hover(function(){
                
            $('#desc_workshop').html("<p>Rupee Depreciation</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl5, #boxt5" ).hover(function(){
                
            $('#desc_workshop').html("<p>The State of City Finances</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl10, #boxt10" ).hover(function(){
                
            $('#desc_workshop').html("<p>Semiconductors Fabrication</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl8, #boxt8" ).hover(function(){
                
            $('#desc_workshop').html("<p>Workshop by Mr. Shishir Joshi, MidDay</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl9, #boxt9" ).hover(function(){
                
            $('#desc_workshop').html("<p>Automotive Engineeering</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
         $("#boxl7, #boxt7" ).hover(function(){
                
            $('#desc_workshop').html("<p>Simulating the FSAE vehicle with Adams/Car 2012</p> ");
            },
         function () {
            $('#desc_workshop').html("<p></p> ");
         });
});



