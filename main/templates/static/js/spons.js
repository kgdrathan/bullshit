function changeSponsYear(year){
	$(".spons_visible").removeClass("spons_visible").addClass("spons_invisible");
	$("#spons-page-"+year).removeClass("spons_invisible").addClass("spons_visible");

	$(".spons_tab_visible").removeClass("spons_tab_visible").addClass("spons_tab_invisible");
	$("#spons_tab_"+year).removeClass("spons_tab_invisible").addClass("spons_tab_visible");
}