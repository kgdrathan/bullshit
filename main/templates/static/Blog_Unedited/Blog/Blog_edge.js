/*jslint */
/*global AdobeEdge: false, window: false, document: false, console:false, alert: false */
(function (compId) {

    "use strict";
    var im='images/',
        aud='media/',
        vid='media/',
        js='js/',
        fonts = {
            'bubbler-one, sans-serif': '<script src=\"http://use.edgefonts.net/bubbler-one:n4:all.js\"></script>'        },
        opts = {
            'gAudioPreloadPreference': 'auto',
            'gVideoPreloadPreference': 'auto'
        },
        resources = [
        ],
        scripts = [
        ],
        symbols = {
            "stage": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "both",
                centerStage: "both",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Main_template',
                            symbolName: 'Main_template',
                            type: 'rect',
                            rect: ['0', '0px', '1366', '700', 'auto', 'auto']
                        },
                        {
                            id: 'Menu_handler',
                            type: 'rect',
                            rect: ['1px', '673px', '1366px', '27px', 'auto', 'auto'],
                            fill: ["rgba(0,0,0,0.00)"],
                            stroke: [0,"rgb(0, 0, 0)","none"],
                            c: [
                            {
                                id: 'Rectangle',
                                type: 'rect',
                                rect: ['65px', '0px', '175px', '27px', 'auto', 'auto'],
                                fill: ["rgba(0,0,0,0)"],
                                stroke: [0,"rgb(0, 0, 0)","none"]
                            },
                            {
                                id: 'Text',
                                type: 'text',
                                rect: ['68px', '2px', '165px', '21px', 'auto', 'auto'],
                                text: "MENU",
                                align: "left",
                                font: ['Arial, Helvetica, sans-serif', [20, "px"], "rgba(0,0,0,1)", "400", "none solid rgb(0, 0, 0)", "normal", "break-word", "normal"]
                            }]
                        },
                        {
                            id: 'Menu',
                            symbolName: 'Menu',
                            type: 'rect',
                            rect: ['0', '456', '1366', '244', 'auto', 'auto'],
                            overflow: 'hidden'
                        },
                        {
                            id: 'Menu2',
                            symbolName: 'Menu',
                            type: 'rect',
                            rect: ['1px', '490px', '1366', '244', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[],[],[],['1','0.71721']]
                        }
                    ],
                    style: {
                        '${kkk}': {
                            isStage: true,
                            rect: ['null', 'null', '1366px', '700px', 'auto', 'auto'],
                            overflow: 'hidden'
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    data: [

                    ]
                }
            },
            "Main_template": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            rect: ['0px', '0px', '1366px', '100%', 'auto', 'auto'],
                            id: 'Main',
                            type: 'group',
                            c: [
                            {
                                type: 'rect',
                                id: 'top_horizontal_green',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['-421px', '14px', '489px', '93px', 'auto', 'auto'],
                                fill: ['rgba(60,214,95,1.00)']
                            },
                            {
                                type: 'rect',
                                rect: ['-421px', '0px', '489px', '93px', 'auto', 'auto'],
                                id: 'top_horizontal',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                fill: ['rgba(0,0,0,1.00)'],
                                c: [
                                {
                                    type: 'text',
                                    rect: ['112px', '17px', '318px', '73px', 'auto', 'auto'],
                                    id: 'Text2',
                                    text: 'Kronicle',
                                    align: 'left',
                                    font: ['Lucida Console, Monaco, monospace', [50, 'px'], 'rgba(255,255,255,1)', '100', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                                },
                                {
                                    type: 'image',
                                    id: 'Picture1',
                                    rect: ['0px', '-13px', '94px', '133px', 'auto', 'auto'],
                                    cursor: 'pointer',
                                    fill: ['rgba(0,0,0,0)', 'images/Picture1.png', '0px', '0px']
                                }]
                            },
                            {
                                type: 'rect',
                                id: 'bottom_horizontal_green',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['auto', 'auto', '933px', '93px', '1px', '-362px'],
                                fill: ['rgba(60,214,95,1)']
                            },
                            {
                                type: 'rect',
                                id: 'bottom_horizontal',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['auto', 'auto', '933px', '93px', '0px', '0px'],
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                transform: [[], [], ['40'], [1, 1, 1]],
                                rect: ['215px', '0px', '12.8%', '100%', 'auto', 'auto'],
                                id: 'Cross',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,1.00)']
                            },
                            {
                                rect: ['89px', '138px', '313px', '500px', 'auto', 'auto'],
                                overflow: 'hidden',
                                id: 'Main_text_container',
                                clip: 'rect(-143.53662109375px 405.5732421875px 558.250244140625px -50.0107421875px)',
                                type: 'group',
                                c: [
                                {
                                    rect: ['50px', '87px', 'auto', 'auto', 'auto', 'auto'],
                                    font: ['Arial, Helvetica, sans-serif', [40, 'px'], 'rgba(255,255,255,1.00)', 'normal', 'none', '', 'break-word', 'nowrap'],
                                    display: 'none',
                                    id: 'kronicle',
                                    text: 'Kronicle',
                                    transform: [[], ['70'], [0, 0, 0], [1, 1, 1]],
                                    type: 'text'
                                }]
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Right_green',
                            opacity: 1,
                            rect: ['628px', '14px', '738px', '320px', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['266px', '1px', '472px', '319px', 'auto', 'auto'],
                                fill: ['rgba(48,170,143,1.00)']
                            },
                            {
                                transform: [[], [], ['40'], [1, 1, 1]],
                                rect: ['128px', '1px', '431px', '319px', 'auto', 'auto'],
                                id: 'RectangleCopy',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(48,170,143,1.00)']
                            },
                            {
                                rect: ['266px', '126px', '323px', '25px', 'auto', 'auto'],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.72)', 1, 1, 3],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.72)', 1, 1, 3],
                                id: 'Text',
                                text: 'Celebrating  100 Years of Relativity',
                                type: 'text',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(255,255,255,1.00)', '100', 'none', '', 'break-word', '']
                            },
                            {
                                type: 'image',
                                id: 'ktj_logo__text_shapebsk-Recovered3',
                                cursor: 'pointer',
                                rect: ['auto', '11px', '552px', '107px', '49px', 'auto'],
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.69)', 1, 1, 3],
                                transform: [[], [], [], [], ['50%', '-44%']],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.69)', 1, 1, 3],
                                fill: ['rgba(0,0,0,0)', 'images/ktj%20logo%20%2B%20text%20shapebsk-Recovered.png', '0px', '0px']
                            },
                            {
                                rect: ['742px', '2px', 'auto', 'auto', 'auto', 'auto'],
                                id: 'ktj_logo',
                                type: 'image',
                                fill: ['rgba(0,0,0,0)', 'images/ktj%20logo%20%2B%20text%20shapebsk-Recovered.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.59)', 1, 1, 4],
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.59)', 1, 1, 4],
                                id: 'iitlogowhite',
                                rect: ['378px', '180px', '133px', '133px', 'auto', 'auto'],
                                cursor: 'pointer',
                                fill: ['rgba(0,0,0,0)', 'images/iit%2Blogo%2Bwhite.png', '0px', '0px']
                            },
                            {
                                type: 'image',
                                fi: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.60)', 1, 1, 3],
                                id: 'unesco-logoemblem_white',
                                filter: [0, 0, 1, 1, 0, 0, 0, 0, 'rgba(0,0,0,0.60)', 1, 1, 3],
                                rect: ['520px', '203px', '154px', '107px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/unesco-logo%2Bemblem_white.png', '0px', '0px']
                            }]
                        },
                        {
                            type: 'group',
                            id: 'Left_green',
                            opacity: 1,
                            rect: ['22px', '119px', '782px', '320', 'auto', 'auto'],
                            c: [
                            {
                                type: 'rect',
                                id: 'RectangleCopy3',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['-10px', '-1px', '472px', '319px', 'auto', 'auto'],
                                fill: ['rgba(48,170,143,1.00)']
                            },
                            {
                                transform: [[], [], ['40'], [1, 1, 1]],
                                rect: ['217px', '-1px', '431px', '319px', 'auto', 'auto'],
                                id: 'RectangleCopy2',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(48,170,143,1.00)']
                            },
                            {
                                type: 'rect',
                                id: 'About_container',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['9px', '19px', '522px', '262px', 'auto', 'auto'],
                                overflow: 'hidden',
                                fill: ['rgba(48,170,143,0.00)'],
                                c: [
                                {
                                    type: 'text',
                                    rect: ['19px', '63px', '472px', '157px', 'auto', 'auto'],
                                    overflow: 'visible',
                                    id: 'Text3',
                                    text: 'Kshitij is the annual techno-management fest of IIT Kharagpur,one of the India’s premier technical institutions. Started in the year 2004, the idea of Kshitij was conceived with the aim to provide the technically inclined youth a national-level platform, where their talent and expertise would be recognized and duly rewarded. Having grown exponentially since its nascent years, Kshitij receives overwhelming participation from the student community all over the world. The official website of Kshitij, ktj.in, is in fact the largest student run website, receiving 8 million clicks in its 2012 edition.',
                                    align: 'justify',
                                    font: ['bubbler-one, sans-serif', [17, 'px'], 'rgba(255,255,255,1)', '100', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'normal']
                                },
                                {
                                    type: 'text',
                                    rect: ['196px', '0px', 'auto', 'auto', 'auto', 'auto'],
                                    align: 'justify',
                                    id: 'Text4',
                                    text: 'About',
                                    textShadow: ['rgba(0,0,0,0.65098)', 1, 1, 3],
                                    font: ['bubbler-one, sans-serif', [40, 'px'], 'rgba(255,255,255,1)', '600', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                                }]
                            }]
                        },
                        {
                            type: 'rect',
                            id: 'Blog_text_container',
                            stroke: [0, 'rgb(0, 0, 0)', 'none'],
                            rect: ['1393px', '47px', '909px', '527px', 'auto', 'auto'],
                            overflow: 'scroll',
                            opacity: 0,
                            fill: ['rgba(0,0,0,0)'],
                            c: [
                            {
                                type: 'text',
                                rect: ['28px', '30px', '843px', '465px', 'auto', 'auto'],
                                id: 'Blog_text',
                                text: '#Peace<br>…….<br>“7 in the morning, young Ismail runs down the back alley. His skinny appearance and torn clothes tells the story of a war that never should have happened. His breath may be failing him but those tiny legs refuse to stop. His anxiety grows by the minute. And there he is finally...the moment of truth. Nothing but a rubble of stone and concrete charred to the hilt. Here and there, torn and half burnt books lie in the dust. News reporters and locals crowd the premises as they too witness the destruction caused by the shelling last night. That is all that remains of a school set up by the United Nations which happens to be Ismail’s school. It happens to be the latest casualty of the long drawn conflict between the Israeli army and Hamas. As small drops brim over his eyes, all his hopes over the last three weeks of returning to school vanish with the smoke rising from the debris. For him the future seems bleak but it’s the ruthless present that he is worried about. With education out of question, the chances of being drawn into the cycle of resistance which may see him dead in the prime of his life seems a reality now.”<br>……..<br>Life in Palestine has always been unstable; people like Ismàil is not a minority nor an exception. With bomber planes flying overhead and the sound of shelling echoes with your every heartbeat, life becomes hell. People started migrating to nearby countries for food, employment and medical facilities with little hope that their hosts will be kind to them. Turning dreams of education, employment and a peaceful life into a burning pile of rubble.<br><br>May it be the ethnic violence in South Sudan, or Drug Cartel in Mexico, or Syrian Civil war, or America invading Iraq for oil, all these scenarios reflects the dark face of humanity. Times changed from wooden spears to nuclear weapons and biological warheads, technology evolved only to pave way to a better and convenient source to overpower; rarely to satisfy needs and often to quench needless ambitions.<br>The Indian Struggle<br>India has been no different in the struggle against this evil. Home to global icons like Mahatma Gandhi and Mother Teresa who paved way of non-violence, benevolence and compassion, India has resisted to fall victim to the evil of war and its causalities. Little did we know that what replaced the void was even more terrifying, dangerous enough to rip apart the nation’s future and it’s present.<br>…….<br>“7 in the morning, Kushal feels a gentle nudge. Waking up to the welcome sight of an old nurse, Kushal looks around to find the other children yawning. The events of the previous day are still vague in his mind. All that he remembers and understands is that a few people dropped by and after a long heated argument with his master they left only to return back, this time with police. Too sleepy to realise who these people were, he just went on with them, assuming they were the elders and they had woke him up for some late night work.”<br>…….<br>The inhumane living conditions and the long exhausting working hours still haunts Kushal and many other children like himself. With food as a luxury available maybe twice a day, there are days when children are starved. Child labour has become a vice that India has started to dread deeply. With physical and mental abuse a daily routine these young minds provide breeding grounds for anti-social elements which later may even be moulded into terrorism. Only a fortunate few make it out of this dark hole. Some succumb to the harshness of the system, and others to the temptation to the break the system.<br>Apart from child labour, cases of rape and molestation have increases manifold in India in recent times. Naxalism at a time believed to be suppressed have swung back in full speed too. Substance abuse and communal violence have also caused chaos in the system. Like salt on a fresh wound, corruption has deepened the wounds, causing even more pain and suffering.<br>Humanity Fights Back<br>The youth of the country are, however, becoming increasingly more aware about these issues and have started to protest against the weak laws which provide loopholes to the convicted. The recent protest for the Nirbhaya rape case is an excellent example of this increasing awareness and intolerance towards injustice among the youth.<br>Militants are created from poor accessibility of government facilities in certain areas leading to their poverty. Though the ideal solution of this problem should have been the intervention of government for the betterment of their lives, the anger of the poor tribes has unfortunately invited extreme measures and resulted in what we see today.<br>…….<br>“Little had Kushal realised that it was going to be the last day of his slavery. The inhumane living conditions and the long exhausting working hours will still haunt him for many years to come. Life as a labour had been nothing like what he had been told by the agents who lured him into it. Food was a luxury available only twice a day, that too if they were lucky. There were days when they would not be given food even once, if they didn’t work hard enough. Shouting and beating from the masters had become almost a daily affair. They specially dreaded the days when the masters where in foul mood or sometimes just particularly drunk. He came to know that they were rescued and rehabilitated by an organisation called “Bachpan Bachao Andolan”. He realised that they were not the only ones. The streets of Delhi were filled with such factories whose glamour at the market came at the price of the lives of children such as himself.<br>A week later, he was watching TV happily with his newly made friends. The face of their father figure on TV filled his heart with joy.”<br>…….<br><br>Source: http://ibnlive.in.com/news/photos-children-rescued-by-kailash-satyarthis-bachpan-bachao-andolan-watch-news-of-the-2014-nobel-peace-prize-winners-on-tv-at-mukti-ashram/505573-79.html<br><br>Icons to Inspire – Nobel Prize for Peace 2014<br>The Bachpan Bachao Andolan is less known to the people of India, its founder even lesser. Founded in 1980 by the man with a golden heart, Kailash Satyarthi, the Bachpan Bachao Andolan has been rescuing and rehabilitating children under bonded labour since the last 25 years. As a boy, Satyarthi was moved by other children who had to work due to poor financial condition of their parents and couldn’t attend school as a result. He started a football club with membership fees paying the school fees of needy children, a project that eventually became a book bank in his town.In 1994, he founded a group now known as Goodweave, which certifies child-labor-free rugs and provides assistance to rescued and at-risk children. In 1998, Satyarthi was chairman of a global march against child labour that wound through more than 60 countries around the world.<br>The mere fact that how less the people of India know him, and how less media coverage he got despite such great work shows his humility and selflessness. The Nobel Prize win brought him to the limelight, but it was never his aim.<br>He shared it with Malala Yousafzali, another icon who advocated the importance of education to all, in spite of threats from Taliban. Having gone through tremendous suffering and humiliation at a very small age, her determination is a huge motivation to anyone who knows her. Starting her journey with the aim of providing education to Pakistani girls, her incident has sparked a global campaign for girl child education.<br>“One teacher, one student, one book, and one pen can change the world.” This quote by Malala strongly conveys the importance of education in the betterment of the lives of girls by making them independent.<br>The Ripples of Change<br>The people have started to reflect on their actions and look at their fellow beings. Organisations such as the Bachpan Bachao Andolan which work against child labour nationally as well as internationally. ActionAid, Oxfam and Education International are the front-runners in the global march against child labour. We are proud to have these organisations and support them, but we should also feel ashamed of the reason why they are needed.<br>There are numerous organisations working hand in hand to global peace. Nuclear warfare, war and its casualties, terrorism have all been in the cross-hair of these organisations. The extent to which violence and war has affected the lives of this generation is horrifying, yet the heroic efforts put in by people to rise up against this, fills every soul with hope and determination. Deeply affected by this everlasting conflict between peace and violence the world is going through at present, Kshitij has decided to take forward this worldwide campaign. <br>Kharagpur – The Land of ‘Peace’<br>The word ‘peace’ has a very special significance in the life of KGPians. Going beyond its usual meaning, this word is used in all aspects of life of a KGPian. Be it exams, parents, sports, cultural activities or any other such thing. ‘Peace’ is not just the calmness of mind anymore, rather it’s a way of life. Feeling at ease and in harmony with everyone around you, filled with compassion and free of all tensions one is truly at ‘peace’ in IIT Kharagpur. Inspired by the population and life at IIT Kharagpur, Kshitij brings you ‘The Peace Campaign’. <br>We encourage the youth of India to stand up and raise their voices against the depravities that torture our society. We hope that every voice will echo through the system and their ripples will become waves of change in the future. Quoting the legend MJ, “Make it a better place, for you and for me and the entire human race”.<br><br><br><br><br>',
                                align: 'justify',
                                font: ['Arial, Helvetica, sans-serif', [20, 'px'], 'rgba(0,0,0,1)', '100', 'none solid rgb(0, 0, 0)', 'normal', 'break-word', 'normal']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '1366px', '700px']
                        }
                    }
                },
                timeline: {
                    duration: 7000,
                    autoPlay: true,
                    labels: {
                        "Load_start": 1000,
                        "Load_complete": 2000,
                        "Load_up": 2250,
                        "Load_side": 4000,
                        "Load_stop": 5000
                    },
                    data: [
                        [
                            "eid39",
                            "font-size",
                            2250,
                            1000,
                            "easeOutSine",
                            "${kronicle}",
                            '40px',
                            '60px'
                        ],
                        [
                            "eid63",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${top_horizontal}",
                            '0px',
                            '-421px'
                        ],
                        [
                            "eid34",
                            "top",
                            2250,
                            1000,
                            "easeOutSine",
                            "${Main_text_container}",
                            '145px',
                            '56px'
                        ],
                        [
                            "eid67",
                            "top",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Main_text_container}",
                            '56px',
                            '138px'
                        ],
                        [
                            "eid2",
                            "left",
                            1000,
                            500,
                            "easeOutQuint",
                            "${Cross}",
                            '-604px',
                            '649px'
                        ],
                        [
                            "eid52",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Cross}",
                            '649px',
                            '215px'
                        ],
                        [
                            "eid31",
                            "width",
                            2250,
                            1000,
                            "easeOutSine",
                            "${bottom_horizontal}",
                            '419px',
                            '489px'
                        ],
                        [
                            "eid62",
                            "width",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${bottom_horizontal}",
                            '489px',
                            '933px'
                        ],
                        [
                            "eid119",
                            "height",
                            5000,
                            0,
                            "linear",
                            "${Main_text_container}",
                            '500px',
                            '500px'
                        ],
                        [
                            "eid188",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Blog_text_container}",
                            '1393px',
                            '441px'
                        ],
                        [
                            "eid738",
                            "left",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Blog_text_container}",
                            '441px',
                            '1366px'
                        ],
                        [
                            "eid1",
                            "width",
                            1000,
                            500,
                            "easeOutQuint",
                            "${Cross}",
                            '188.7%',
                            '9.61%'
                        ],
                        [
                            "eid35",
                            "left",
                            2250,
                            1000,
                            "easeOutSine",
                            "${Main_text_container}",
                            '537px',
                            '563px'
                        ],
                        [
                            "eid50",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Main_text_container}",
                            '563px',
                            '89px'
                        ],
                        [
                            "eid65",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${top_horizontal_green}",
                            '0px',
                            '-421px'
                        ],
                        [
                            "eid181",
                            "scaleY",
                            3500,
                            0,
                            "easeOutSine",
                            "${Left_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid172",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${kronicle}",
                            '-173px',
                            '50px'
                        ],
                        [
                            "eid33",
                            "width",
                            2250,
                            1000,
                            "easeOutSine",
                            "${top_horizontal}",
                            '489px',
                            '549px'
                        ],
                        [
                            "eid180",
                            "scaleX",
                            3500,
                            0,
                            "easeOutSine",
                            "${Left_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid25",
                            "height",
                            2250,
                            1000,
                            "easeOutSine",
                            "${Main}",
                            '100%',
                            '65%'
                        ],
                        [
                            "eid60",
                            "height",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Main}",
                            '65%',
                            '100%'
                        ],
                        [
                            "eid750",
                            "height",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Main}",
                            '100%',
                            '65%'
                        ],
                        [
                            "eid90",
                            "top",
                            4000,
                            0,
                            "easeOutExpo",
                            "${top_horizontal}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid91",
                            "top",
                            5000,
                            0,
                            "easeOutExpo",
                            "${top_horizontal}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid131",
                            "left",
                            2250,
                            1000,
                            "linear",
                            "${Left_green}",
                            '-782px',
                            '20px'
                        ],
                        [
                            "eid148",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Left_green}",
                            '20px',
                            '-782px'
                        ],
                        [
                            "eid741",
                            "left",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Left_green}",
                            '-782px',
                            '22px'
                        ],
                        [
                            "eid70",
                            "rotateZ",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${kronicle}",
                            '50deg',
                            '70deg'
                        ],
                        [
                            "eid754",
                            "scaleX",
                            7000,
                            0,
                            "easeOutQuart",
                            "${Main}",
                            '1',
                            '1'
                        ],
                        [
                            "eid4",
                            "top",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${top_horizontal_green}",
                            '-362px',
                            '14px'
                        ],
                        [
                            "eid92",
                            "top",
                            4000,
                            0,
                            "easeOutExpo",
                            "${top_horizontal_green}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid93",
                            "top",
                            5000,
                            0,
                            "easeOutExpo",
                            "${top_horizontal_green}",
                            '14px',
                            '14px'
                        ],
                        [
                            "eid68",
                            "skewX",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Cross}",
                            '40deg',
                            '20deg'
                        ],
                        [
                            "eid751",
                            "left",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Main}",
                            '0px',
                            '84px'
                        ],
                        [
                            "eid133",
                            "left",
                            2250,
                            1000,
                            "linear",
                            "${Right_green}",
                            '1366px',
                            '624px'
                        ],
                        [
                            "eid144",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Right_green}",
                            '624px',
                            '1370px'
                        ],
                        [
                            "eid740",
                            "left",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Right_green}",
                            '1370px',
                            '628px'
                        ],
                        [
                            "eid174",
                            "display",
                            0,
                            0,
                            "easeOutQuart",
                            "${kronicle}",
                            'none',
                            'none'
                        ],
                        [
                            "eid175",
                            "display",
                            4000,
                            0,
                            "easeOutQuart",
                            "${kronicle}",
                            'none',
                            'block'
                        ],
                        [
                            "eid190",
                            "top",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Blog_text_container}",
                            '47px',
                            '49px'
                        ],
                        [
                            "eid739",
                            "top",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Blog_text_container}",
                            '49px',
                            '47px'
                        ],
                        [
                            "eid753",
                            "width",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Main}",
                            '1366px',
                            '888px'
                        ],
                        [
                            "eid32",
                            "width",
                            2250,
                            1000,
                            "easeOutSine",
                            "${top_horizontal_green}",
                            '489px',
                            '549px'
                        ],
                        [
                            "eid176",
                            "left",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Picture1}",
                            '0px',
                            '430px'
                        ],
                        [
                            "eid140",
                            "opacity",
                            2250,
                            0,
                            "linear",
                            "${Right_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid141",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${Right_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid129",
                            "top",
                            2250,
                            1000,
                            "linear",
                            "${Left_green}",
                            '119px',
                            '121px'
                        ],
                        [
                            "eid742",
                            "top",
                            6000,
                            1000,
                            "easeOutQuart",
                            "${Left_green}",
                            '121px',
                            '120px'
                        ],
                        [
                            "eid142",
                            "opacity",
                            2250,
                            0,
                            "linear",
                            "${Left_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid143",
                            "opacity",
                            3250,
                            0,
                            "linear",
                            "${Left_green}",
                            '1',
                            '1'
                        ],
                        [
                            "eid173",
                            "top",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${kronicle}",
                            '-142px',
                            '87px'
                        ],
                        [
                            "eid56",
                            "top",
                            4000,
                            0,
                            "linear",
                            "${Cross}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid57",
                            "top",
                            5000,
                            0,
                            "linear",
                            "${Cross}",
                            '0px',
                            '0px'
                        ],
                        [
                            "eid135",
                            "top",
                            2250,
                            1000,
                            "linear",
                            "${Right_green}",
                            '14px',
                            '13px'
                        ],
                        [
                            "eid145",
                            "top",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Right_green}",
                            '13px',
                            '14px'
                        ],
                        [
                            "eid30",
                            "width",
                            2250,
                            1000,
                            "easeOutSine",
                            "${bottom_horizontal_green}",
                            '419px',
                            '489px'
                        ],
                        [
                            "eid61",
                            "width",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${bottom_horizontal_green}",
                            '489px',
                            '933px'
                        ],
                        [
                            "eid5",
                            "bottom",
                            1000,
                            1000,
                            "easeOutElastic",
                            "${bottom_horizontal_green}",
                            '-362px',
                            '14px'
                        ],
                        [
                            "eid192",
                            "opacity",
                            4000,
                            1000,
                            "easeOutQuart",
                            "${Blog_text_container}",
                            '0',
                            '1'
                        ]
                    ]
                }
            },
            "Menu": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            id: 'Group',
                            type: 'group',
                            rect: ['0', '0', '1366', '244', 'auto', 'auto'],
                            c: [
                            {
                                rect: ['0px', '244px', '100%', '100%', 'auto', 'auto'],
                                borderRadius: ['10px', '10px', '0px', '0px'],
                                overflow: 'hidden',
                                id: 'Main_container',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(0,0,0,0.56)'],
                                c: [
                                {
                                    rect: ['1px', '0px', '5%', '100%', 'auto', 'auto'],
                                    boxShadow: ['', 3, 3, 28, 0, 'rgba(0,0,0,0.65098)'],
                                    id: 'Left_Button',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,0.48)']
                                },
                                {
                                    rect: ['auto', '0px', '5%', '100%', '0px', 'auto'],
                                    boxShadow: ['', 3, 3, 28, 0, 'rgba(0,0,0,0.65098)'],
                                    id: 'Right_Button',
                                    stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                    type: 'rect',
                                    fill: ['rgba(255,255,255,0.48)']
                                }]
                            },
                            {
                                id: 'Blog1',
                                symbolName: 'Blog',
                                rect: ['554px', '244px', '281', '244', 'auto', 'auto'],
                                type: 'rect'
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            isStage: 'true',
                            rect: [undefined, undefined, '100%', '244px']
                        }
                    }
                },
                timeline: {
                    duration: 5000,
                    autoPlay: true,
                    labels: {
                        "Load_start": 1000,
                        "Load_complete": 1500,
                        "Unload_start": 2000,
                        "Unload_complete": 2314,
                        "Reload_start": 3000
                    },
                    data: [
                        [
                            "eid43",
                            "height",
                            1000,
                            500,
                            "easeOutSine",
                            "${Main_container}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid126",
                            "height",
                            3000,
                            500,
                            "easeOutSine",
                            "${Main_container}",
                            '0%',
                            '100%'
                        ],
                        [
                            "eid195",
                            "border-top-left-radius",
                            5000,
                            0,
                            "easeOutQuart",
                            "${Main_container}",
                            [10,10],
                            [10,10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid109",
                            "scaleY",
                            1500,
                            0,
                            "linear",
                            "${Blog1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid110",
                            "scaleX",
                            1500,
                            0,
                            "linear",
                            "${Blog1}",
                            '1',
                            '1'
                        ],
                        [
                            "eid194",
                            "border-bottom-left-radius",
                            5000,
                            0,
                            "easeOutQuart",
                            "${Main_container}",
                            [10,10],
                            [10,10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid196",
                            "border-top-right-radius",
                            5000,
                            0,
                            "easeOutQuart",
                            "${Main_container}",
                            [10,10],
                            [10,10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid193",
                            "background-color",
                            5000,
                            0,
                            "easeOutQuart",
                            "${Main_container}",
                            'rgba(0,0,0,0.56)',
                            'rgba(0,0,0,0.56)'
                        ],
                        [
                            "eid45",
                            "top",
                            1000,
                            500,
                            "easeOutSine",
                            "${Main_container}",
                            '244px',
                            '0px'
                        ],
                        [
                            "eid116",
                            "top",
                            2000,
                            314,
                            "linear",
                            "${Main_container}",
                            '0px',
                            '245px'
                        ],
                        [
                            "eid125",
                            "top",
                            3000,
                            500,
                            "easeOutSine",
                            "${Main_container}",
                            '244px',
                            '0px'
                        ],
                        [
                            "eid201",
                            "boxShadow.color",
                            5000,
                            0,
                            "easeOutSine",
                            "${Blog1}",
                            'rgba(239,239,239,0.61)',
                            'rgba(239,239,239,0.61)'
                        ],
                        [
                            "eid197",
                            "border-bottom-right-radius",
                            5000,
                            0,
                            "easeOutQuart",
                            "${Main_container}",
                            [10,10],
                            [10,10],
                            {valueTemplate: '@@0@@px @@1@@px'}
                        ],
                        [
                            "eid111",
                            "left",
                            2872,
                            0,
                            "linear",
                            "${Blog1}",
                            '554px',
                            '554px'
                        ],
                        [
                            "eid89",
                            "top",
                            1000,
                            483,
                            "easeOutSine",
                            "${Blog1}",
                            '244px',
                            '0px'
                        ],
                        [
                            "eid117",
                            "top",
                            2000,
                            314,
                            "easeOutSine",
                            "${Blog1}",
                            '0px',
                            '245px'
                        ],
                        [
                            "eid118",
                            "top",
                            2500,
                            372,
                            "easeOutSine",
                            "${Blog1}",
                            '245px',
                            '0px'
                        ],
                        [
                            "eid115",
                            "top",
                            2889,
                            0,
                            "linear",
                            "${Blog1}",
                            '0px',
                            '-72px'
                        ],
                        [
                            "eid124",
                            "top",
                            3000,
                            483,
                            "easeOutSine",
                            "${Blog1}",
                            '244px',
                            '0px'
                        ],
                        [
                            "eid127",
                            "top",
                            3825,
                            0,
                            "easeOutExpo",
                            "${Blog1}",
                            '0px',
                            '0px'
                        ]
                    ]
                }
            },
            "Blog": {
                version: "5.0.0",
                minimumCompatibleVersion: "5.0.0",
                build: "5.0.0.375",
                scaleToFit: "none",
                centerStage: "none",
                resizeInstances: false,
                content: {
                    dom: [
                        {
                            type: 'group',
                            id: 'Container',
                            cursor: 'pointer',
                            rect: ['0', '23px', '100%', '250px', 'auto', 'auto'],
                            overflow: 'hidden',
                            transform: [[], [], [], ['1.1', '1.1']],
                            c: [
                            {
                                type: 'rect',
                                id: 'Blog1',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                rect: ['0px', '0px', '100%', '100%', 'auto', 'auto'],
                                fill: ['rgba(141,198,102,0.5608)']
                            },
                            {
                                type: 'image',
                                id: '_381726_Satyarthi-Yousafzai',
                                opacity: 0.5790187883175,
                                rect: ['-15px', '1px', '309px', '231px', 'auto', 'auto'],
                                fill: ['rgba(0,0,0,0)', 'images/381726_Satyarthi-Yousafzai.jpg', '0px', '0px']
                            },
                            {
                                rect: ['0px', '204px', '100%', '100%', 'auto', 'auto'],
                                opacity: 0,
                                id: 'Rectangle',
                                stroke: [0, 'rgb(0, 0, 0)', 'none'],
                                type: 'rect',
                                fill: ['rgba(95,95,95,0.56)']
                            },
                            {
                                type: 'text',
                                rect: ['29%', '31.4%', 'auto', 'auto', 'auto', 'auto'],
                                text: '#Peace',
                                id: 'Text4',
                                opacity: 0,
                                align: 'left',
                                font: ['Arial, Helvetica, sans-serif', [35, 'px'], 'rgba(255,255,255,1)', '400', 'none solid rgb(255, 255, 255)', 'normal', 'break-word', 'nowrap']
                            }]
                        }
                    ],
                    style: {
                        '${symbolSelector}': {
                            rect: [null, null, '281px', '100%']
                        }
                    }
                },
                timeline: {
                    duration: 500,
                    autoPlay: false,
                    data: [
                        [
                            "eid86",
                            "opacity",
                            0,
                            500,
                            "easeOutExpo",
                            "${Rectangle}",
                            '0',
                            '1'
                        ],
                        [
                            "eid95",
                            "height",
                            500,
                            0,
                            "easeOutExpo",
                            "${Rectangle}",
                            '100%',
                            '100%'
                        ],
                        [
                            "eid203",
                            "top",
                            0,
                            500,
                            "easeOutSine",
                            "${Container}",
                            '47px',
                            '23px'
                        ],
                        [
                            "eid756",
                            "height",
                            0,
                            500,
                            "easeOutQuart",
                            "${Container}",
                            '250px',
                            '222px'
                        ],
                        [
                            "eid82",
                            "opacity",
                            0,
                            500,
                            "easeOutExpo",
                            "${Text4}",
                            '0',
                            '1'
                        ],
                        [
                            "eid84",
                            "top",
                            0,
                            250,
                            "easeOutExpo",
                            "${Rectangle}",
                            '204px',
                            '1px'
                        ],
                        [
                            "eid96",
                            "left",
                            500,
                            0,
                            "easeOutExpo",
                            "${Text4}",
                            '28.96%',
                            '28.96%'
                        ],
                        [
                            "eid200",
                            "scaleY",
                            145,
                            355,
                            "easeOutSine",
                            "${Container}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid199",
                            "scaleX",
                            145,
                            355,
                            "easeOutSine",
                            "${Container}",
                            '1',
                            '1.1'
                        ],
                        [
                            "eid80",
                            "top",
                            0,
                            500,
                            "easeOutExpo",
                            "${Text4}",
                            '83.27%',
                            '34.43%'
                        ]
                    ]
                }
            }
        };

    AdobeEdge.registerCompositionDefn(compId, symbols, fonts, scripts, resources, opts);

    if (!window.edge_authoring_mode) AdobeEdge.getComposition(compId).load("Blog_edgeActions.js");
})("Blog_main");
