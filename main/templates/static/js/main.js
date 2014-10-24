$(function() {


    
// Function for smooth scrolling
    $('a[href*=#]:not([href=#])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html,body').animate({
                    scrollTop: target.offset().top
                }, 1000);
                return false;
            }
        }
    });

    var scrollIndexId = new Array();
    var scrollIndex = $('#super-container').children();
    scrollIndex.each(function(){
        scrollIndexId.push($(this).attr('id'));
    });
    console.log(scrollIndexId.slice(3,11));
    var sectioncontainer = scrollIndexId.slice(3,11);
    var postop = 0;
    for (var g =0; g < sectioncontainer.length; g++) {
        var oldheight, newheight;
        oldheight = $('#'+sectioncontainer[g]).height();
        newheight = (screen.height/768)*oldheight;
        $('#'+sectioncontainer[g]).css({height: newheight, top: postop});
        postop += newheight;
    };

// Updates bar pull out
    var UpdateOutWidth=$('#update_display_box').width();
    $('#update_side_circle img').click(function () {
        current_up_width = $("#update_display_box").width();
        if (UpdateOutWidth == current_up_width)
            $("#update_display_box").animate({ width: '400' }, 500);
        else 
            $("#update_display_box").animate({ width: UpdateOutWidth }, 500);  
    });

    $('#update_handle_right').click(function () {
        current_up_width = $("#update_display_box").width();
        if (UpdateOutWidth == current_up_width)
            $("#update_display_box").animate({ width: '540' }, 500);
        else 
            $("#update_display_box").animate({ width: UpdateOutWidth }, 500);  
    });

    $(".login-icon-small").click(openLogin);
    $(".register-icon-small").click(openRegister);

    $(".home-login").click(closeLogin);
    $(".home-register").click(closeRegister);

    $(".register-login-box").click(openRegfromLogin);



    /* -----Enable this if you enable scrolling to change urls dynamically-----*/

    // $('.menu-navigation').waypoint( function() {
    //     var info = { a:  "home"};
    //     history.replaceState(info, 'home', '/');
    // });
    // $('#spons-page-container').waypoint( function() {
    //     var info = { a: "sponsors"};
    //     history.replaceState(info, 'sponsors', '/sponsors');
    // });
    // $('#event_container').waypoint( function() {
    //     var info = { a: "events"};
    //     history.replaceState(info, 'events', '/events');
    // });
    // $('#exhibitions_container').waypoint( function() {
    //     var info = { a: "exhibitions"};
    //     history.replaceState(info, 'exhibitions', '/exhibitions');
    // });
    // $('#workshops_container').waypoint( function() {
    //     var info = { a: "workshops"};
    //     history.replaceState(info, 'workshops', '/workshops');
    // });
    // $('#guests_container').waypoint( function() {
    //     var info = { a: "guests"};
    //     history.replaceState(info, 'guests', '/guests');
    // });
    // $('#megashows_container').waypoint( function() {
    //     var info = { a: "megashows"};
    //     history.replaceState(info, 'megashows', '/megashows');
    // });
    // $('#contacts-page-container').waypoint( function() {
    //     var info = { a: "contacts"};
    //     history.replaceState(info, 'contacts', '/contacts');
    // });


});
//function for Registering for a event!
function event_reg(id)
{
    if (id==1000)
        $("#event_"+id+"_06_01").load('/eventreg/register_w');
    else
        $("#event_"+id+"_06_01").load('/eventreg/register?id='+id);
}


function openRegfromLogin () {
        $("#login_container").animate({left:"100%"},700);
        $("#registration_container").animate({left:"0%"},700);
}


function openLogin () {
        $("#login_container").animate({left:"0%"},700);
        $(".section-container").animate({opacity:"0"},700);
}

function openRegister () {
        $("#registration_container").animate({left:"0%"},700);
        $(".section-container").animate({opacity:"0"},700);
}

function closeLogin () {
        $("#login_container").animate({left:"100%"},700);
        $(".section-container").animate({opacity:"1"},700);
}

function closeRegister () {
        $("#registration_container").animate({left:"200%"},700);
        $(".section-container").animate({opacity:"1"},700);
}

var tickIndex = 0;

function sponsTick () {
    if (tickIndex>=sponsTickerPost.length) {
        tickIndex=0;
    };
    $("#tick_display_box").animate({left:"-240px"},500, "swing",function(){
        $("#tick_title").html(sponsTickerPost[tickIndex]);
        $("#tick_spons_img img").attr("src", sponsTickerImage[tickIndex]);
        tickIndex++;
    });
    $("#tick_display_box").animate({left:"0px"},500);
}
function showMenu() {
    $('.menu-content-text').slideUp(500, "swing");
    // $('.menu-content-text').hide(500, "swing");
    $('#b-carousel').show(500, "swing");
    $('#menu-arc-centre').show(500, "swing");
}

function hideMenu() {
    $('#b-carousel').hide(500, "swing");
    $('#menu-arc-centre').hide(500, "swing");
    $('.menu-content-text').show(500, "swing");
}

var linkIndex ={
    'ev' : '#event_container',
    'sp' : '#spons-page-container',
    'ex' : '#exhibitions_container',
    'gl' : '#guests_container',
    'ms' : '#megashows_container',
    'ws' : '#workshops_container',
    'ct' : '#contacts-page-container'
}


function rotateClockWise() {
    $('#menu-arc-centre').fadeOut(250, "swing");
    var centre_img_name = $('.main_n4').children().attr('src');
    centre_img_name = centre_img_name.substring(centre_img_name.length-6, centre_img_name.length - 4);
    $('.menu-content-text-'+centre_img_name).hide();
    $('[class^=main_n]').each(function() {
        var _newIndex = (parseInt($(this).attr('class')[6]) + 1) % 9;
        $(this).attr('class', 'main_n' + _newIndex.toString());
    });
    var centre_img_name = $('.main_n4').children().attr('src');
    centre_img_name = centre_img_name.substring(centre_img_name.length-6, centre_img_name.length - 4);
    $('.menu-content-text-'+centre_img_name).fadeIn(600, "swing");
    $('#menu-arc-centre').fadeIn(200, "swing");

    $('.main_n0').children().attr("src", $('.main_n7').children().attr("src"));
    $('.main_n8').children().attr("src", $('.main_n1').children().attr("src"))
    var right_img_name = $('.main_n7').children().attr('src');
    var left_img_name = $('.main_n1').children().attr('src');
    right_img_name = right_img_name.substring(right_img_name.length-6, right_img_name.length - 4);
    left_img_name = left_img_name.substring(left_img_name.length-6, left_img_name.length - 4);
    $('.main_n0').parent().attr("href", linkIndex[right_img_name]);
    $('.main_n8').parent().attr("href", linkIndex[left_img_name]);
}

function rotateAntiClockWise() {
    $('#menu-arc-centre').fadeOut(250, "swing");
    var centre_img_name = $('.main_n4').children().attr('src');
    centre_img_name = centre_img_name.substring(centre_img_name.length-6, centre_img_name.length - 4);
    $('.menu-content-text-'+centre_img_name).hide();
    $('[class^=main_n]').each(function() {
        var _newIndex = (parseInt($(this).attr('class')[6]) - 1) % 9;
        _newIndex = (_newIndex < 0) ? 9 + _newIndex : _newIndex;
        $(this).attr('class', 'main_n' + _newIndex.toString());
    });
    var centre_img_name = $('.main_n4').children().attr('src');
    centre_img_name = centre_img_name.substring(centre_img_name.length-6, centre_img_name.length - 4);
    $('.menu-content-text-'+centre_img_name).fadeIn(600, "swing");
    $('#menu-arc-centre').fadeIn(200, "swing");
    $('.main_n0').children().attr("src", $('.main_n7').children().attr("src"));
    $('.main_n8').children().attr("src", $('.main_n1').children().attr("src"))
    var right_img_name = $('.main_n7').children().attr('src');
    var left_img_name = $('.main_n1').children().attr('src');
    right_img_name = right_img_name.substring(right_img_name.length-6, right_img_name.length - 4);
    left_img_name = left_img_name.substring(left_img_name.length-6, left_img_name.length - 4);
    $('.main_n0').parent().attr("href", linkIndex[right_img_name]);
    $('.main_n8').parent().attr("href", linkIndex[left_img_name]);
}

