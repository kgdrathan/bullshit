var page_list=['home','events','sponsors','exhibitions','workshops','megashows','guests','contacts','results','mktj'];

function capitaliseFirstLetter(word){
    return word.charAt(0).toUpperCase() + word.slice(1);
}

function uncapitaliseFirstLetter(word){
    word = word.replace(/\s+/g, '');
    return word.charAt(0).toLowerCase() + word.slice(1);
}

function showHome(){
    $("body").animate({
        'scrollTop':   $('#main_container').offset().top
    }, 1000);
}


function changeUrl(page){
    console.log(page);
    var info = {a:page};
    if(page == 'home'){
        document.title = "Kshitij 2015 - Asia's largest techno management fest";
        history.pushState(info,page,'/');
    }
    else if(page == 'events') {
        document.title = "Kshitij 2015 - "+capitaliseFirstLetter(page);
        history.pushState(info,page,'/'+page);
        routeUrl();
        console.log("changeUrl");
    }
    else {
        document.title = "Kshitij 2015 - "+capitaliseFirstLetter(page);
        history.pushState(info,page,'/'+page);
        console.log(info)
    }

    switch(page){
        case 'home':
            windowLocatn = 4;
            break;

        case 'sponsors':
            windowLocatn = 5;
            break;

        case 'events':
            windowLocatn = 6;
            break;

        case 'exhibitions':
            windowLocatn = 7;
            break;

        case 'workshops':
            windowLocatn = 8;
            break;

        case 'guests':
            windowLocatn = 9;
            break;

        case 'megashows':
            windowLocatn = 10;
            break;

        case 'contacts':
            windowLocatn = 11;
            break;

        default:
            windowLocatn = 4;

    }
}

window.onpopstate = function(e){
    console.log(e.state);
    console.log("onpopstate");
    if(e.state == null || e.state.a == 'home'){
        showHome(true);
        console.log("onpopstate home");
    }
    else{
        showPage(e.state.a);
    }
};

function routeUrl(){
    var counter = 0;
    var path = location.pathname, eventsList = [], genresList = [];
    $("div[class^=mid_container_genre]").each(function(index, item){
        genresList.push(item.id);
    });
    $("div[class^=event_container]").each(function(index,el){
        eventsList.push(el);
    });
    page_list.forEach(function(page){
        if( path.indexOf(page) > -1){

            if (page == 'events'){
                
                $("body").animate({'scrollTop': $('#event_container').offset().top}, 1000);
                $('#cont_genre_1').click();
                $("#genre_1>#ev_tile_group #ev_1").click();
                
                eventsList.forEach(function(eventItem){
                    eventItemNum = eventItem.id.slice(11);
                    eventItemName = eventNameIndex[eventItemNum];                    
                    if( path.indexOf(eventItemName)>-1) {
                        console.log("Before IfLoop " + eventItemNum);
                        var event_tile = $("#"+eventItem.parentNode.id+">#ev_tile_group #ev_"+eventItemNum);
                        setTimeout( function(){
                            changeGenre(eventItem.parentNode.id.slice(6));
                            setTimeout( function(){
                                event_tile.click();
                            }, 800);
                        }, 1200);
                    }

                });
            }

            else {
                $("#go_"+page).click();
            }
        }
    });
}