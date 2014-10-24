$(function(){
	// $("#genre_1").attr("class", "mid_container_genre_selected");
	// $("#cont_genre_1").attr("class", "select_genre_container");
	// $("#event_info_1").attr("class", "event_container_selected");
	// $("#ev_1 span").attr("class", "overlay_tile_ev_select");
	// $("#event_1_01").attr("class", "event-matter-selected scroll");
});

function changeGenre(genre_no){
	$(".select_genre_container").attr("class", "genre_container");
	$("#cont_genre_"+genre_no).attr("class", "select_genre_container");

	var select_genre = $('.mid_container_genre_selected');
	select_genre.attr('class', 'mid_container_genre' );
	$('#genre_'+genre_no).attr('class', 'mid_container_genre_selected');

	// Resetting the event tile
	$("#genre_"+genre_no+" .overlay_tile_ev_select").attr("class", "overlay_tile_ev");
	$('#genre_'+genre_no+'>#ev_tile_group>div:first-child>.overlay_tile_ev').click();

	// Resetting the event
	var select_event = $('#genre_'+genre_no+'>.event_container_selected');
	select_event.attr('class', 'event_container' );
	$('#genre_'+genre_no+'>div[class^=event_container]:first-child').attr('class', 'event_container_selected');
	
	// Resetting the event info selector
	$('#genre_'+genre_no+'>div[class^=event_container]:first-child .logo_container_right_select').attr('class', 'logo_container_right');
	$('#genre_'+genre_no+'>div[class^=event_container]:first-child #right_pane>#bot_line_right>.nav_li_right:first-child div').attr('class', 'logo_container_right_select');

	// Resetting the event
	var select_info = $("#genre_"+genre_no+">div[class^=event_container]:first-child .event-matter-selected");
	select_info.attr("class", "event-matter");
	$("#genre_"+genre_no+">div[class^=event_container]:first-child>#center_pane>#event_details>div:nth-child(2)").attr("class", "event-matter-selected scroll");

}


function changeEvent(event_id){
	$(".overlay_tile_ev_select").attr("class", "overlay_tile_ev");
	$("#ev_"+event_id+" span").attr("class", "overlay_tile_ev_select");

	var select_event = $('.event_container_selected');
	select_event.attr('class', 'event_container' );
	$('#event_info_'+event_id).attr('class', 'event_container_selected');
	$("#event_"+event_id+"_01").attr("class", "event-matter-selected scroll");
	changeEventInfo(1, event_id);
	history.replaceState({a:'events'},'events','/events/'+uncapitalise(eventNameIndex[event_id]));
}

function changeEventInfo(info_id, event_id){
	$(".logo_container_right_select").attr("class", "logo_container_right");
	$("#event_info_"+event_id+" #info_cont_"+info_id).attr("class", "logo_container_right_select");

	var select_info = $("#event_info_"+event_id+" .event-matter-selected");
	select_info.attr("class", "event-matter");
	$("#event_"+event_id+"_0"+info_id).attr("class", "event-matter-selected scroll");
}

function uncapitalise(word){
	word = word.toLowerCase();
	word = word.replace(/\s+/g, '');
    return word;
}