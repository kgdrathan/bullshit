function changeMS(msInd){
  $(".heading-ms-visible").removeClass( "heading-ms-visible" ).addClass( "heading-ms" );
  $("#ms_heading_"+msInd).removeClass("heading-ms").addClass("heading-ms-visible");
  $("#megashow_text p").fadeOut(300, function() {
    $(this).html(megashowDesc[msInd-1]).fadeIn(300);
  });
}