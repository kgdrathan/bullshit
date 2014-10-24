function changeExhibition(ind){
        console.log(ind);
        $('#desc_exhi_heading').html(exhiName[ind-1]);
        $('#desc_exhi_write').html(exhiDesc[ind-1]);
        $(".exhi_img_sel").removeClass( "exhi_img_sel" ).addClass( "exhi_img" );
        $('#country').html(exhiCountry[ind-1]);
        $('#exhi_flag').html("<img src="+ exhiFlag[ind-1] +" class='flag'>");
        $("#ex_img"+ind).removeClass("exhi_img").addClass("exhi_img_sel");
}


$(document).ready(function() {
    $("#ex_img1").hover(function() {
        $("#ex_img4").css({"z-index": "70"});
        var x = 100;
        for (var i = 1; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * i + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * i + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
    });
    $("#ex_img2").hover(function() {
        var x = 100;
        for (var i = 2; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 2; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
    $("#ex_img3").hover(function() {
        var x = 100;
        for (var i = 3; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 2) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 2) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 3; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (3 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (3 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
    $("#ex_img4").hover(function() {
        $("#ex_img4").css({
            "z-index": "100"
        });
        var x = 100;
        for (var i = 4; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 3) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 3) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 4; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (4 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (4 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
    $("#ex_img7").hover(function() {
        $("#ex_img7").css({
            "z-index": "80"
        });
        $("#ex_img6").css({
            "z-index": "70"
        });
        var x = 100;
        for (var i = 7; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 7) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 7) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 7; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (7 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (7 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
    $("#ex_img6").hover(function() {
        $("#ex_img6").css({
            "z-index": "100"
        });
        //$("#ex_img4").css({"z-index":"40"});
        var x = 100;
        for (var i = 6; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 5) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 5) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 6; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (6 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (6 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
    $("#ex_img5").hover(function() {
        var x = 100;
        for (var i = 5; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 5) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 5) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 5; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (5 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (5 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
     $("#ex_img8").hover(function() {
        $("#ex_img8").css({
            "z-index": "100"
        });
        $("#ex_img7").css({
            "z-index": "80"
        });
        var x = 100;
        for (var i = 8; i < 10; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (i - 8) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (i - 8) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x - 10;
        }
        var x = 10;
        for (var i = 1; i < 8; i++) {
            $("#ex_img" + i).css({
                "top": 2 * (8 - i + 1) + "%",
                "-webkit-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "top": 2 * (8 - i + 1) + "%",
                "-moz-transition": "top 0.5s"
            });
            $("#ex_img" + i).css({
                "z-index": x
            });
            x = x + 10;
        }
    });
});