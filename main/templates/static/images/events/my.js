$(document).ready(function(){
var cur=$('.mid_container_1');var curcl=$('#logo_container1');var subcurcl=$('#logo_container_right1');
$(curcl).addClass('change');$('#logo_container_right1').css('background','#cdcdcd');

$('.mid_container_2').hide();$('.mid_container_3').hide();$('.mid_container_4').hide();$('.mid_container_5').hide();$('.mid_container_6').hide();$('.mid_container_7').hide();
$('.mid_container_8').hide();$('.mid_container_9').hide();$('.mid_container_10').hide();$('.mid_container_11').hide();$('.mid_container_12').hide();$('.mid_container_13').hide();
$('.mid_container_14').hide();$('.mid_container_15').hide();

$('#left_pane').mouseover(function(){
$('.span').show();
 }).mouseleave(function(){$('span').hide();});

$('#right_pane').mouseover(function(){
$('.spanR').show();
 }).mouseleave(function(){$('span').hide();}); 
 
 
 
 $('#event1').click(function(){
		$(curcl).removeClass('change');$(cur).fadeOut(); $('.mid_container_1').delay(300).fadeIn(1000,'swing');$('#logo_container1').addClass('change');
		curcl=$('#logo_container1');cur=$('.mid_container_1');$('#logo_container_right1').css('background','#cdcdcd');
		$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
 });
 
 $('#event2').click(function(){ 
				$(curcl).removeClass('change');$(cur).toggle(); $('.mid_container_2').delay(300).fadeIn(1000,'swing');$('#logo_container2').addClass('change');
				curcl=$('#logo_container2');cur=$('.mid_container_2');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
				$('#logo_container_right1').css('background','#cdcdcd');
 })
 
 $('#event3').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_3').delay(300).fadeIn(1000,'swing');$('#logo_container3').addClass('change');curcl=$('#logo_container3');
				cur=$('.mid_container_3');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
				$('#logo_container_right1').css('background','#cdcdcd');
 });
 
 $('#event4').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_4').delay(300).fadeIn(1000,'swing');$('#logo_container4').addClass('change');
				curcl=$('#logo_container4');$('.mid_container_4');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
				$('#logo_container_right1').css('background','#cdcdcd');
 });
 
 $('#event5').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_5').delay(300).fadeIn(1000,'swing');$('#logo_container3').addClass('change');curcl=$('#logo_container5');
				cur=$('.mid_container_5');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
				$('#logo_container_right1').css('background','#cdcdcd');
 });

 $('#event6').click(function(){
			$(curcl).removeClass('change');$(cur).fadeOut();$('.mid_container_6').delay(300).fadeIn(1000,'swing');$('#logo_container6').addClass('change');curcl=$('#logo_container6');cur=$('.mid_container_6');
			$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$('#logo_container_right1').css('background','#cdcdcd');
 });
 
 
 
 $('#event7').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_7').delay(300).fadeIn(1000,'swing');$('#logo_container7').addClass('change');curcl=$('#logo_container7');cur=$('.mid_container_7');
				$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$('#logo_container_right1').css('background','#cdcdcd');
 });
 
 
 
 $('#event8').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_8').delay(300).fadeIn(1000,'swing');$('#logo_container8').addClass('change');
				curcl=$('#logo_container8');cur=$('.mid_container_8');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$('#logo_container_right1').css('background','#cdcdcd');
 });
 
 $('#event9').click(function(){
				$(curcl).removeClass('change'); $(cur).fadeOut();$('.mid_container_9').delay(300).fadeIn(1000,'swing');
				$('#logo_container9').addClass('change');curcl=$('#logo_container9');cur=$('.mid_container_9');$(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');
				$('#logo_container_right1').css('background','#cdcdcd');
 });

 
  $('#evesub1').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$(cur).fadeOut(); $('.mid_container_10').delay(300).fadeIn(1000,'swing');
				$('#logo_container_right1').css('background','#cdcdcd');subcurcl=$('#logo_container_right1');cur=$('.mid_container_10');
 });
 
  $('#evesub2').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$(cur).fadeOut();$('.mid_container_11').delay(300).fadeIn(1000,'swing');$('#logo_container_right2').css('background','#cdcdcd');subcurcl=$('#logo_container_right2');
				cur=$('.mid_container_11');
 });
 
 
  $('#evesub3').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)'); $(cur).fadeOut(); $('.mid_container_12').delay(300).fadeIn(1000,'swing');$('#logo_container_right3').css('background','#cdcdcd');
			subcurcl=$('#logo_container_right3');cur=$('.mid_container_12');
 });
 
 
  $('#evesub4').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$(cur).fadeOut();$('.mid_container_13').delay(300).fadeIn(1000,'swing');$('#logo_container_right4').css('background','#cdcdcd');subcurcl=$('#logo_container_right4');cur=$('.mid_container_13');
 });
 
 
  $('#evesub5').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)');$(cur).fadeOut();$('.mid_container_14').delay(300).fadeIn(1000,'swing');
				$('#logo_container_right5').css('background','#cdcdcd');subcurcl=$('#logo_container_right5');cur=$('.mid_container_14');
  
 });
 
 
  $('#evesub6').click(function(){
			  $(subcurcl).css('background','-webkit-linear-gradient(#cc4434, #bc1e4e)').css('background','linear-gradient(#cc4434, #bc1e4e)'); $(cur).fadeOut();$('.mid_container_15').delay(300).fadeIn(1000,'swing');
				$('#logo_container_right6').css('background','#cdcdcd');curcl=$('#logo_container_right6');cur=$('.mid_container_15');
  
 });
 
 
 });


 
