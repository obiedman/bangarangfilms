(function ($) {
    // the movies variable keeps track of what movies are currently registered and ready for deployment
    // [destination, movie type, videoId, additional data]
    var movies = [];
    var redeploys = [];
    var methods = {
        _preloadImages: function () {
            var preloadImages = [
            // small bangarang logo
                "http://bangarangfilms.com/images/bf_logo_xs-s.png",
            // play button overlay
				"http://bangarangfilms.com/images/play_overlay.png",
            // jQuery UI icons and styles
				"http://bangarangfilms.com/css/images/ui-bg_flat_25_000000_40x100.png",
				"http://bangarangfilms.com/css/images/ui-bg_flat_44_000000_40x100.png",
				"http://bangarangfilms.com/css/images/ui-bg_highlight-hard_20_0972a5_1x100.png",
				"http://bangarangfilms.com/css/images/ui-bg_highlight-soft_33_003147_1x100.png",
            // rca test pattern
				"http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",

            // projects thumbs
            // moniz wedding
				"http://b.vimeocdn.com/ts/113/701/113701689_640.jpg",
            // horner millwork
				"http://b.vimeocdn.com/ts/978/341/97834150_640.jpg",
            // nwg - yellow woman
				"http://b.vimeocdn.com/ts/667/886/66788656_640.jpg",
            // quiznos
				"http://b.vimeocdn.com/ts/838/991/83899164_640.jpg"
            // vow
            ];

            var images = [];
            for (var i = 0; i < preloadImages.length; i++) {
                images.push(new Image());
                images[images.length - 1].src = preloadImages[i];
            }
        },
        _load: function () {

		    // node definitions for ie7
            if (!document.ELEMENT_NODE) {
                document.ELEMENT_NODE = 1;
                document.ATTRIBUTE_NODE = 2;
                document.TEXT_NODE = 3;
                document.CDATA_SECTION_NODE = 4;
                document.ENTITY_REFERENCE_NODE = 5;
                document.ENTITY_NODE = 6;
                document.PROCESSING_INSTRUCTION_NODE = 7;
                document.COMMENT_NODE = 8;
                document.DOCUMENT_NODE = 9;
                document.DOCUMENT_TYPE_NODE = 10;
                document.DOCUMENT_FRAGMENT_NODE = 11;
                document.NOTATION_NODE = 12;
            }

            $.fn.bangarang("_preloadImages");
			
			var skip = window.location.hash != "" ? window.location.hash : "#Home";
			//window.location.hash = "";

            skip = $.fn.bangarang("pageLoad", skip.substring(1, skip.length));

			opts = {
				"fx": { height: "toggle" },
				show: function (event, ui) {
					$(this).bangarang("killDescendantMovies");
					$(this).bangarang("redeployThumbs");
					$(".footer").show();
					var wt = $("#Weddings-Tabs"); 
					if (wt.tabs('option', 'selected') > 0) {
						wt.tabs("select", 0);
					}
				},
				select: function (event, ui) {
					window.location.hash = ui.tab.hash;
					$(".footer").hide();
				}

			};

			// check for ie7 and change animation type
			if (navigator.appVersion.indexOf("MSIE 7.")!=-1)
				opts.fx = {opacity: "toggle"};
				
			var tabby = $("#page").tabs(opts);

			if (window.location.pathname=="/" && skip.toUpperCase()!="HOME")
				tabby.tabs("select", skip);

			Cufon.replace("h1, h2, h3, .ui-tabs-nav > li");
			
			//$("body").scrollTop(0);
			
			//Show the body after any chance of flash of unstyled content
			$("body").css("display", "block");
			
			

			// Attach click even to footer links
			$(".footer a").each(function () {
				var t = $(this);
				t.click(function () {
					$("#page").tabs("select", t.attr("href"));

				});
			});
			
            $("#page > ul > li > a").not("[href=#" + skip + "]").parent().each(function (index, elem) {
                $.fn.bangarang("pageLoad", $.trim($(elem).text()));
            });

        },
        pageLoad: function (page) {
            var pages = {
                "Home": function () {
                    if (window.location.hash == "#Home")
                        window.location.hash = "";

                    $("#demoreel").bangarang("vimeo", {
                        "videoId": "8864984",
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "redeploy": true
                    });

                    $("#projects-1 .video").bangarang("vimeo", {
                        "videoId": "17166665",
                        "thumbUrl": "http://b.vimeocdn.com/ts/113/701/113701689_640.jpg",
                        "redeploy": true
                    });

                    $("#projects-2 .video").bangarang("vimeo", {
                        "videoId": "15994470",
                        "thumbUrl": "http://b.vimeocdn.com/ts/978/341/97834150_640.jpg",
                        "redeploy": true
                    });

                    $("#projects-3 .video").bangarang("vimeo", {
                        "videoId": "12032120",
                        "thumbUrl": "http://b.vimeocdn.com/ts/667/886/66788656_640.jpg",
                        "redeploy": true
                    });

                    $("#projects-4 .video").bangarang("vimeo", {
                        "videoId": "14328037",
                        "thumbUrl": "http://b.vimeocdn.com/ts/838/991/83899164_640.jpg",
                        "redeploy": true
                    });

                    opts = {
                        "fx": { opacity: "toggle" },
                        select: function (event, ui) {
                            jQuery(this).css('height', jQuery(this).height());
                            jQuery(this).css('overflow', 'hidden');
                        },
                        show: function (event, ui) {
                            $(this).bangarang("killDescendantMovies");
                            $(this).bangarang("redeployThumbs");
                            jQuery(this).css('height', 'auto');
                            jQuery(this).css('overflow', 'visible');
                        }
                    };

                    $(".content-slider").tabs(opts);

					$("#vow .video").bangarang("vimeo", {
						"videoId":"30884171",
						"thumbUrl":"http://b.vimeocdn.com/ts/207/701/207701329_640.jpg",
						"redeploy": true
					});
					
                    $("#social-blog").bangarang("blogify");
					
					$("#social-twitter .content-frame").bangarang("twitterfy");

                },
                "Commercials": function () {
                    var $feat = $("#Commercials-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");

                    $featReel.bangarang("vimeo", {
                        "videoId": "11082909",
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("The first of three commercials made for the Rhode Island Pirate Players, to help advertise their new pirate walking tour in Newport, RI. This one tells the story of Charles Harris and his men's tragic downfall. They were made non-profit as a final school requirement.");
                                $featHeader.text("RIPP - Charles Harris");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Commercials-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("The first of three commercials made for the Rhode Island Pirate Players, to help advertise their new pirate walking tour in Newport, RI. This one tells the story of Charles Harris and his men's tragic downfall. They were made non-profit as a final school requirement.");
                            $featHeader.text("RIPP - Charles Harris");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "11082909",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Commercials-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("The second of three commercials made for the Rhode Island Pirate Players, to help advertise their new pirate walking tour in Newport, RI. This one tells the story of Thomas Tew, RI's mpst famous pirate. They were made non-profit as a final school requirement.");
                            $featHeader.text("RIPP - Thomas Tew");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "11301961",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Commercials-Thumb-2");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("The third of three commercials made for the Rhode Island Pirate Players, to help advertise their new pirate walking tour in Newport, RI. This one tells the story of Rachel Wall, New England's notorious female pirate. They were made non-profit as a final school requirement.");
                            $featHeader.text("RIPP - Rachel Wall");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "11301762",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Commercials-Thumb-3");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A short, animated ad made for the Quizno's 5-4-3 commercial contest. The ad plays off of a shuttle launch count down, where the numbers 5,4,3 cause the lanuch to be delayed due to Quizno's daydreaming. It won an Editor's Choice Award from poptent.net.");
                            $featHeader.text("Quizno's 'Apollo 5-4-3'");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "14328037",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/838/991/83899164_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Commercials]").replace("h1[name|=RIPP-CH]");
                },
                "Corporate": function () {
                    var $feat = $("#Corporate-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");
                    $featReel.bangarang("vimeo", {
                        "videoId": "15994470",
                        "thumbUrl": "http://b.vimeocdn.com/ts/978/341/97834150_640.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("A web video for Horner Millwork that goes on a tour of the prodction facility and explains their intricate processes. The step-by-step process involved in door, stair and window production is closely examined and Horner's premium products are highlighted.");
                                $featHeader.text("Horner Millwork - Production Facility");
                                Cufon.replace($featHeader);

                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Corporate-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A web video for Horner Millwork that goes on a tour of the prodction facility and explains their intricate processes. The step-by-step process involved in door, stair and window production is closely examined and Horner's premium products are highlighted.");
                            $featHeader.text("Horner Millwork - Production Facility");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "15994470",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/978/341/97834150_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Corporate-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A web video for Horner Millwork that goes on a tour of the prodction facility and explains their intricate processes. The step-by-step process involved in door, stair and window production is closely examined and Horner's premium products are highlighted.");
                            $featHeader.text("Horner Millwork - Somerset, MA");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "15994966",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/992/468/99246865_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Corporate-Thumb-2");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A web video for Horner Millwork that goes on a tour of the prodction facility and explains their intricate processes. The step-by-step process involved in door, stair and window production is closely examined and Horner's premium products are highlighted.");
                            $featHeader.text("Horner Millwork - Pembroke, MA");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "15994557",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/992/711/99271102_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Corporate-Thumb-3");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A web video for Horner Millwork that goes on a tour of the prodction facility and explains their intricate processes. The step-by-step process involved in door, stair and window production is closely examined and Horner's premium products are highlighted.");
                            $featHeader.text("Horner Millwork - Southboro, MA");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "16045393",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/992/363/99236364_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Corporate]").replace("h1[name|=HM-PF]");
                },
                "Documentary": function () {
                    var $feat = $("#Documentary-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");

                    $featReel.bangarang("vimeo", {
                        "videoId": "9393574",
                        "thumbUrl": "http://b.vimeocdn.com/ts/463/665/46366535_640.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("A short documentary about the Lando family restaurants' T.C. Lando's and Carls' Steaks and how they came to be. The history of the family and business as well as the amazing food are featured.");
                                $featHeader.text("The Cheesesteak Guys");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Documentary-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A short documentary about the Lando family restaurants' T.C. Lando's and Carls' Steaks and how they came to be. The history of the family and business as well as the amazing food are featured.");
                            $featHeader.text("The Cheesesteak Guys");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "9393574",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/463/665/46366535_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Documentary-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A web series we made for our friends' band, Re-Up. Each episode gives an inside look into their lives as the band tries to succeed. They also feature live performances by the band, with interviews leading up to them.");
                            $featHeader.text("Re-Up TV");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "10545298",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/554/925/55492556_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Documentary]").replace("h1[name|=Cheesesteak]");

                },
                "Live Events": function () {
                    var $feat = $("#LiveEvents-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");

                    $featReel.bangarang("vimeo", {
                        "videoId": "12032120",
                        "thumbUrl": "http://b.vimeocdn.com/ts/667/886/66788656_640.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("The Nate Wilson Group performs 'Yellow Woman' live at Church in Boston, MA.");
                                $featHeader.text("Nate Wilson Group - Yellow Woman");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;


                    $currThumb = $("#LiveEvents-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("The Nate Wilson Group performs 'Yellow Woman' live at Church in Boston, MA.");
                            $featHeader.text("Nate Wilson Group - Yellow Woman");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "12032120",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/667/886/66788656_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#LiveEvents-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("Re-Up performs 'High Hopes' live at Church in Boston, MA.");
                            $featHeader.text("Re-Up - High Hopes");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "18024251",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/112/853/112853329_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=LiveEvents]").replace("h1[name|=NWG-YM]");
                },
                "Music": function () {
                    var $feat = $("#Music-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");
                    $featReel.bangarang("vimeo", {
                        "videoId": "12236046",
                        "thumbUrl": "http://b.vimeocdn.com/ts/683/415/68341589_640.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("The official music video for 'Nikes' by Re-Up.");
                                $featHeader.text("Re-Up - Nikes");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Music-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("The official music video for 'Nikes' by Re-Up.");
                            $featHeader.text("Re-Up - Nikes");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "12236046",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/683/415/68341589_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Music-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("An animated music video using kinetic typography for Ra Ra Riot's 'Can You Tell'.");
                            $featHeader.text("Ra Ra Riot - Can You Tell");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "8864984",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/424/546/42454616_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Music]").replace("h1[name|=Re-UpN]");
                },
                "Narrative": function () {
                    var $feat = $("#Narrative-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");
                    $featReel.bangarang("vimeo", {
                        "videoId": "8870562",
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("A short horror film, made without dialogue to tell the story with the camera.");
                                $featHeader.text("The Lion and the Unicorn");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Narrative-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A short horror film, made without dialogue to tell the story with the camera.");
                            $featHeader.text("The Lion and the Unicorn");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "8870562",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://bangarangfilms.com/images/RCA_Test_Pattern_640x360.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Narrative-Thumb-1");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A short film made for a film class in college. It was shot on Super 8mm film and edited by hand using the cut and splice technique.");
                            $featHeader.text("Aces and Eights");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "8870972",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/424/904/42490406_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });

                    $currThumb = $("#Narrative-Thumb-2");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("A short film made at the New York Film Academy Summer Program. It was shot on 16mm and then edited digitally.");
                            $featHeader.text("O.C.D.");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "8869926",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/424/825/42482513_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Narrative]").replace("h1[name|=LionUnicorn]");


                },
                "Weddings": function () {
                    opts = {
                        "fx": { opacity: "toggle" },
                        select: function (event, ui) {
                            jQuery(this).css('height', jQuery(this).height());
                            jQuery(this).css('overflow', 'hidden');
                            $(".footer").hide({ "fx": { opacity: "toggle"} });
                        },
                        show: function (event, ui) {
                            $(this).bangarang("killDescendantMovies");
                            $(this).bangarang("redeployThumbs");
                            jQuery(this).css('height', 'auto');
                            jQuery(this).css('overflow', 'visible');
                            $(".footer").show({ "fx": { opacity: "toggle"} });
                            if (window.location.hash.substring(0, 9) == "#Weddings")
                                window.location.hash = ui.tab.hash;
                        }
                    };

                    $("#Weddings-Tabs").tabs(opts);

                    var $feat = $("#Weddings-Featured");
                    var $featReel = $feat.children(".video");
                    var $featDesc = $feat.find(".content");
                    var $featHeader = $feat.find("h1");
                    $featReel.bangarang("vimeo", {
                        "videoId": "17166665",
                        "thumbUrl": "http://b.vimeocdn.com/ts/113/701/113701689_640.jpg",
                        "redeploy": function ($featDesc, $featHeader) {
                            return function () {
                                $featDesc.text("Megan and John are a great couple and we were very excited to film their wedding. We knew they were a very fun and exciting couple that wanted something special to remember the day. We put together this video in hopes that it would both capture the most important moments and evoke feelings of love and happiness.");
                                $featHeader.text("Megan and John Moniz - 10/23/2010");
                                Cufon.replace($featHeader);
                            };
                        } ($featDesc, $featHeader)
                    });

                    var $currThumb;
                    var onActivate;

                    $currThumb = $("#Weddings-Thumb-0");
                    onActivate = function ($featDesc, $featHeader) {
                        return function () {
                            $featDesc.text("Megan and John are a great couple and we were very excited to film their wedding. We knew they were a very fun and exciting couple that wanted something special to remember the day. We put together this video in hopes that it would both capture the most important moments and evoke feelings of love and happiness.");
                            $featHeader.text("Megan and John Moniz - 10/23/2010");
                            Cufon.replace($featHeader);
                        }
                    };
                    $.fn.bangarang("vimeo", {
                        "videoId": "17166665",
                        "dest": $featReel,
                        "activator": $currThumb,
                        "onActivate": onActivate($featDesc, $featHeader),
                        "thumbUrl": "http://b.vimeocdn.com/ts/113/701/113701689_640.jpg",
                        "thumbActivator": { "doInit": true }
                    });


                    Cufon.replace("h2:contains(Gallery)").replace("h2[name|=Weddings]").replace("h1[name|=MandJMoniz]");
                }
            };
            if (pages[page]) {
                pages[page].apply(this, arguments);
                return page;
            }
            else if (pages[page.substring(0, page.indexOf("-"))]) {
                pages[page.substring(0, page.indexOf("-"))].apply(this, arguments);
                $("#page").tabs("select", "#" + page.substring(0, page.indexOf("-")));
                return "#" + page.substring(0, page.indexOf("-"));
            }
            else {
                pages["Home"].apply(this, arguments);
                return "#Home";
            }
        },
        /******************** FUNCTIONS!**********************************************************************************/
        _importNode: function (node, withChildren) {
            /* This function is to facilitate jQuery and IE working together 
            when bringing in elements from a foreign XML document. It is basically
            just cloning the foreign node in a manner that is agreeable to the local
            DOM in IE. May not work on all element types at this time.
            */
            switch (node.nodeType) {
                case document.ELEMENT_NODE:
				case document.ENTITY_REFERENCE_NODE:
                    var newNode = document.createElement(node.nodeName);
                    /* does the node have any attributes to add? */

                    if (node.attributes && node.attributes.length > 0) {
                        for (var i = 0; i < node.attributes.length; i++) {
                            newNode.setAttribute(node.attributes[i].nodeName, node.getAttribute(node.attributes[i].nodeName));
                        }
                    }
                    /* are we going after children too, and does the node have any? */
                    if (withChildren && node.childNodes && node.childNodes.length > 0) {
                        for (var i = 0; i < node.childNodes.length; i++) {
                            newNode.appendChild($.fn.bangarang("_importNode", node.childNodes[i], withChildren));
                        }
                    }
                    return newNode;
                    break;

                case document.TEXT_NODE:
                case document.CDATA_SECTION_NODE:
                case document.COMMENT_NODE:
                    return document.createTextNode(node.nodeValue);
                    break;
            }
        },
        getRecentTweets: function (map) {
            //twitURL = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=bangarangfilms&count="+map.count;

            twitURL = "https://api.twitter.com/1/statuses/user_timeline.json?screen_name=bangarangfilms&count=" + map.count;

            $.ajax({
                url: twitURL,
                dataType: 'jsonp',
                success: map.onSuccess
            });

        },
        twitterfy: function (map) {
            var defaults = {
                count: 5,
                onSuccess: function (data) {
                    map.data = data;
                    $.fn.bangarang("twitterfy", map);
                }
            };

            map = $.extend(defaults, map);

            if (!map.data) {
                map.dest = $(this);
                $.fn.bangarang("getRecentTweets", map);
            }
            else {
				if (map.data.length>0) {
					map.dest.children(".default").remove();
					var ul = $('<ul class="twitter"/>');
					$.each(map.data, function (i, item) {
						ul.append($("<li/>").html($.fn.bangarang("_activateTwitterLinks", item.text)));
					});
					map.dest.append(ul);
				}
            }

        },
		_activateTwitterLinks: function (tweet) {
			var patt = /http\S+/g;
			var varUrl = tweet.match(patt);
			$.each(varUrl, function () {
				tweet = tweet.replace(this, $("<a/>").attr("href", this).text(this.substring(7, this.length)).wrap('<div/>').parent().html());
			});
			
			var twitterAt = "http://twitter.com/#!/";
			var twitterTag ="http://twitter.com/#!/search?q=%23";

			patt = /#\S+/g;		
			var varTag = tweet.match(patt);
			if (varTag)
				$.each(varTag, function () {
					var mini = this.substring(1, this.length);
					tweet = tweet.replace(this, "&#35;"+$("<a/>").attr("href", twitterTag+mini).text(mini).wrap('<div/>').parent().html());
				});

			patt = /@\S+/g;
			var varAt = tweet.match(patt);
			if (varAt)
				$.each(varAt, function () {
					var mini = this.substring(1, this.length);
					tweet = tweet.replace(this, "&#64;"+$("<a/>").attr("href", twitterAt+mini).text(mini).wrap('<div/>').parent().html());
				});

			return $("<div/>").append(tweet).html();
		},
        blogify: function (map) {
            var defaults = {
                postCount: 5,
                onSuccess: function (data) {
                    map.data = data;
                    $.fn.bangarang("blogify", map);
                }
            };

            map = $.extend(defaults, map);

            if (!map.data) {
                map.dest = $(this);
                $.fn.bangarang("getRecentBlogPosts", map);
            }
            else {
				if (map.data) {	
					map.dest.children(".default").remove();
					var ul = $('<ul class="blog"/>');
					$(map.data).find("post").each(function (index, elem) {
						t = $(elem);
						var li = $("<li/>");
						li.append($('<h3 class="date"/>').html(t.children("date").text().replace(/\s+/g, "<br/>")));
						var content = $('<div class="content-frame"/>');
						content.append($('<h1/>').text(t.children("title").text()));
						var excerpt = $.fn.bangarang("_XmlHtmlToHtml", t.find("excerpt > p"));
						content.append($('<div class="content"/>').append(excerpt));
						li.append(content);
						li.html(li.html().replace(/<a.*<\/a>?/gi, ""));
						li.append($('<h3 class="readmore"/>').append($("<a/>").attr("href", t.children("permalink").text()).text("Read More")));
						ul.append(li);
					});
					map.dest.append(ul);
					Cufon.replace(".blog h1, .blog h3");
				}
			}

        },
        getRecentBlogPosts: function (map) {
            if (!map.onSuccess) {
                throw "Missing onSuccess function :(";
                return;
            }

            var defaults = {
                postCount: 5
            };

            map = $.extend(defaults, map);


            var jax = {
                url: "http://bangarangfilms.com/php/liason.php?count=" + map.postCount + ".php",
                success: map.onSuccess,
                dataType: "xml"
            }
            $.ajax(jax);
        },
        _XmlHtmlToHtml: function (xml) {
            try {
                if (window.ActiveXObject) {
                    xml = $($.fn.bangarang("_importNode", xml[0], true));
                }
                    return $("<div/>").append($(xml).clone()).html();
            }
            catch (e) {
                throw "XML fragment is not valid HTML. Additional information: " + e;
            }
        },
        redeployThumbs: function () {
            // redeploys thumbnails to this or descendent elements 
            // for movies that have been destroyed

            for (var i = 0; i < redeploys.length; i++) {
                if (this.find(redeploys[i].dest).length != 0 | this[0] == redeploys[i].dest[0]) {
                    var redo = redeploys[i]; //(redeploys.splice(i, 1))[0];
                    if (redo.activator.children(".thumb-box").length == 0) {
                        $.fn.bangarang("_movie", redo);
                        if (typeof (redo.redeploy) == "function") {
                            redo.redeploy.apply(redo.dest);
                        }
                    }
                }
            }
        },
        _thumbOnInit: function (map) {
            // this function handles the general process of deploying a thumbnail
            // including typical styling

            // the map for this function looks for the following parameters:
            // elem - a jQuery object representing the element to transform
            // thumbUrl - a URL to the thumb to use (could be included in style)
            // showPlay - a bool indicating whether to overlay a play button (could be included in style)
            // thumbCss - an object of styles to apply to the thumb
            // playCss - an object of styles to apply to the play button

            var defaults = {
                showPlay: true
            };

            map = $.extend(defaults, map);

            var thumb = $("<div/>").addClass("thumb-box");

            // some code to either resize or center the thumb depending on browser capabilities
            // added first to allow for easy overriding. 
            if (modernizr.backgroundsize)
                thumb.css("background-size", "cover");
            else
                thumb.css("background-position", "center center");

            if (map.thumbCss)
                thumb.css(map.thumbCss);

            if (map.thumbUrl)
                thumb.css("background-image", "url('" + map.thumbUrl + "')").css("background-repeat", "no-repeat")

            map.elem.append(thumb);

            if (map.showPlay) {
                var play = $("<div/>").addClass("button-play");

                if (map.playCss)
                    play.css(playCss);

                map.elem.append(play);
            }

        },
        _thumbOnActivate: function (map) {
            // this function handles what should generally be done with a thumbnail
            // including typical styling upon activation. Default behavior is to
            // remove the thumb and play button from the DOM. If any parameter other
            // than elem is supplied, the thumb and play button will not be removed

            // the map for this function looks for the following parameters:
            // elem - a jQuery object representing a thumbed element
            // thumbUrl - a URL to a new thumbnail to use
            // showPlay - a bool indicating whether to overlay a play button
            // thumbCss - an object of styles to apply to the thumb
            // playCss - an object of styles to apply to the play button

            if (!map.elem) {
                throw "_thumbOnActivate missing required parameter or element has no thumb.";
                return;
            }

            // this is lazily implemented for the moment. Removes the thumb and play button and
            // reinitilizes if necessary
            map.elem.children(".thumb-box, .button-play").remove();

            if (map.thumbUrl | map.showPlay | map.thumbCss | map.playCss)
                _thumbOnInit(map);

        },
        _movie: function (map) {
            // this function provides a generalized function for launching movies
            // from various sites. Tries to include that all sites would execute
            // The map for this function looks for the following parameters:
            //      dest - a jQuery object representing the destination element
            //      activator - a jQuery object representing the activation element
            //      thumbUrl - a URL to a thumbnail for the video     
            //      onInit - a function with code to initilize the given movie
            //      onActivate - a function with code to run upon activation
            //      redeploy - a bool indicating whether this video should register in the
            //                  redeploys collection. Can also be an object if additional
            //                  code is required for redeployment

            if (!map.dest | !map.activator | !map.onInit | !map.onActivate) {
                throw "_movie function missing required parameter.";
                return;
            }

            map.onInit();
            if (map.redeploy && $.inArray(map, redeploys) == -1)
                redeploys.push(map);

            map.activator.unbind("click.movie");

            // clear destination, execute provided activation function 
            // and register movie
            var onActivate = function () {
                if (map.dest[0] != map.activator[0])
                    map.dest.children().remove();

                map.onActivate();
                var container = $(map.dest.parents("#page > div"));
                $("body").animate({
                    scrollTop: map.dest.offset().top - container.offset().top
                }, "slow");

                movies.push(map);
            }

            map.activator.bind("click.movie", onActivate);


        },
        getUrlParams: function () {
            var params = {}, temp;
            var splits = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
            for (var i = 0; i < splits.length; i++) {
                temp = splits[i].split('=');
                params[temp[0]] = temp[1];
            }
            return params;

        },
        getUrlParam: function (param) {
            var params = methods.getUrlParams();
            return params[param];
        },
        loadXML: function (path) {
            if (window.XMLHttpRequest) {
                xhttp = new XMLHttpRequest();
            }
            else {
                xhttp = new ActiveXObject("Microsoft.XMLHTTP");
            }
            xhttp.open("GET", path, false);
            xhttp.send("");
            return xhttp.responseXML;
        },
        extractXML: function (xml, selector) {
            var wrap = $("<div />");
            if (window.ActiveXObject)
                xml = $(xml[0].documentElement.xml);
            wrap.append($(xml).find(selector).clone());
            if (wrap.html() != "")
                return $.parseXML(wrap.html()); ;
        },
        transformXML: function (xml, xsl) {
            // code for IE
            if (window.ActiveXObject) {
                var xslt = new ActiveXObject("Msxml2.XSLTemplate");
                var xmlDoc = new ActiveXObject("Msxml2.DOMDocument");
                var xslDoc = new ActiveXObject("Msxml2.FreeThreadedDOMDocument");
                xmlDoc.load(xml);
                xslDoc.load(xsl);
                xslt.stylesheet = xslDoc;
                var xslProc = xslt.createProcessor();
                xslProc.input = xmlDoc;
                xslProc.transform();
                ex = xslProc.output;
            }
            // code for Mozilla, Firefox, Opera, etc.
            else if (document.implementation && document.implementation.createDocument) {
                xsltProcessor = new XSLTProcessor();
                xsltProcessor.importStylesheet(xsl);
                ex = xsltProcessor.transformToFragment(xml, document);
            }
            return ex;
        },
        youtube: function (map) {
            // this function creates the bare bones methods necessary to 
            // launch a youtube video then passes them to the _movie function
            // the map for this function looks for the following parameters:
            //      dest - a jQuery object representing the destination element
            //      activator - a jQuery object representing the activation element
            //      thumbUrl - a URL to a thumbnail for the video
            //      onInit - a function with additional initilization code
            //      onActivate - a function with additional activation code
            //      thumbActivator - an object indicating whether to apply default
            //              thumb behaviors to the activator. Looks for parameters:
            //                  doInit - a bool indicating whether to apply _thumbOnInit
            //                  doActivate - a bool indicating whether to apply _thumbOnInit
            //      redeploy - a bool indicating whether this video should register in the
            //                  redeploys collection. Can also be an object if additional
            //                  code is required for redeployment

            // defaults allow for this function to be called upon a jQuery object
            var defaults = {
                dest: $(this),
                activator: $(this),
                thumbUrl: "http://img.youtube.com/vi/" + map.videoId + "/0.jpg",
                thumbActivator: { "doInit": true, "doActivate": true },
                redeploy: false
            };

            // allows for overriding default options
            map = $.extend(defaults, map);

            // save provided functions because we're going to override them to allow
            // us to easily pass the map object on to the _movie function
            if (map.onInit)
                var xInit = function (old) { return function () { old.apply(this, arguments); } } (map.onInit);
            if (map.onActivate)
                var xActivate = function (old) { return function () { old.apply(this, arguments); } } (map.onActivate); ;

            // minimum required code to init a yt movie, also calls the optional onInit param
            map.onInit = function () {
                if (map.thumbActivator && map.thumbActivator.doInit)
                    $.fn.bangarang("_thumbOnInit", { "elem": map.activator, "thumbUrl": map.thumbUrl });

                if (xInit)
                    xInit(map);
            };


            // minimum required code to launch a yt movie, also calls the optional onActivate param
            map.onActivate = function () {
                var ytUrl = "http://www.youtube.com/e/" + map.videoId + "?enablejsapi=1&playerapiid=ytplayer&autoplay=1";

                var divAttr = {
                    "id": map.dest.attr("id") + "-Video",
                    "class": "video-box"
                };

                map.dest.append($("<div />", divAttr).text("You need Flash player 8+ and JavaScript enabled to view this video."));

                swfobject.embedSWF(ytUrl, divAttr.id, map.dest.width(), map.dest.height(), "8", null, null, { allowScriptAccess: "always" }, null);

                if (xActivate)
                    xActivate(map);

                if (map.thumbActivator && map.thumbActivator.doActivate)
                    $.fn.bangarang("_thumbOnActivate", { "elem": map.activator });

            };

            $.fn.bangarang("_movie", map);
        },
        vimeo: function (map) {
            // this function creates the bare bones methods necessary to 
            // launch a vimeo video then passes them to the _movie function
            // since vimeo thumbs must be obtained using AJAX, it's a bit more
            // complex than it's youtube counterpart.

            // the map for this function looks for the following parameters:
            //      dest - a jQuery object representing the destination element
            //      activator - a jQuery object representing the activation element
            //      thumbUrl - a URL to a thumbnail for the video
            //      onInit - a function with additional initilization code
            //      onActivate - a function with additional activation code
            //      getThumb - a bool dictating whether to request thumbnail from vimeo
            //      thumbActivator - an object indicating whether to apply default
            //              thumb behaviors to the activator. Looks for parameters:
            //                  doInit - a bool indicating whether to apply _thumbOnInit
            //                  doActivate - a bool indicating whether to apply _thumbOnInit
            //      redeploy - a bool indicating whether this video should register in the
            //                  redeploy collection. Can also be an object if additional
            //                  code is required for redeployment

            // defaults allow for this function to be called upon a jQuery object
            // no thumbUrl included because it requires AJAX to obtain, so instead 
            // getThumb has a default to make sure thumb is needed 
            // and if it so, obtain it during initilization
            var defaults = {
                dest: $(this),
                activator: $(this),
                getThumb: true,
                thumbActivator: { "doInit": true, "doActivate": true },
                redeploy: false
            };

            // allows for overriding default options
            map = $.extend(defaults, map);

            // save provided functions because we're going to override them to allow
            // us to easily pass the map object on to the _movie function
            if (map.onInit)
                var xInit = function (old) {
                    return function () {
                        old.apply(this, arguments);
                    }
                } (map.onInit);
            if (map.onActivate)
                var xActivate = function (old) {
                    return function () {
                        old.apply(this, arguments);
                    }
                } (map.onActivate);

            // minimum required code to init a vimeo movie, also calls the optional onInit param
            // in this case mostly just provides information to obtain appropriate thumbnail
            map.onInit = function () {
                if (map.getThumb && !map.thumbUrl) {
                    var onSuccess = function (data) {
                        if (map.activator.width() <= 100) {
                            map.thumbUrl = data[0].thumbnail_small;
                        }
                        else if (map.activator.width() <= 200) {
                            map.thumbUrl = data[0].thumbnail_medium;
                        }
                        else {
                            map.thumbUrl = data[0].thumbnail_large;
                        }

                        if (xInit)
                            xInit(map);

                        if (map.thumbActivator && map.thumbActivator.doInit)
                            $.fn.bangarang("_thumbOnInit", { "elem": map.activator, "thumbUrl": map.thumbUrl });

                    }

                    var jax = {
                        url: "http://vimeo.com/api/v2/video/" + map.videoId + ".json",
                        success: onSuccess,
                        dataType: "jsonp"
                    }
                    $.ajax(jax);
                }
                else {

                    if (xInit)
                        xInit(map);

                    if (map.thumbActivator && map.thumbActivator.doInit)
                        $.fn.bangarang("_thumbOnInit", { "elem": map.activator, "thumbUrl": map.thumbUrl });

                }
            };

            map.onActivate = function () {
                var frameAttr = {
                    src: "http://player.vimeo.com/video/" + map.videoId + "?autoplay=1",
                    height: "100%",
                    width: "100%",
                    frameborder: "0",
                    "class": "video-box"
                };

                map.dest.append($("<iframe>", frameAttr));

                if (xActivate)
                    xActivate(map);

                if (map.thumbActivator && map.thumbActivator.doActivate)
                    $.fn.bangarang("_thumbOnActivate", { "elem": map.activator });

            }

            $.fn.bangarang("_movie", map);
        },
        killDescendantMovies: function () {
            // destroy all videos owned by this or descendents
            // of the given element 

            for (var i = 0; i < movies.length; i++) {
                if (this.find(movies[i].dest).length != 0 | this[0] == movies[i].dest[0]) {
                    var kill = (movies.splice(i, 1))[0];
                    kill.dest.children(".video-box").remove();
                    i--; //is this -- necessary?
                }
            }
            return this;
        }
    };

    $.fn.bangarang = function (method) {

        // Method calling logic
        if (methods[method]) {
            return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
        } else if (typeof method === 'object' || !method) {
            return methods.init.apply(this, arguments);
        } else {
            $.error('Method ' + method + ' does not exist on jQuery.bangarang');
        }

    };

})(jQuery);

/* Modernizr 2.0.6 (Custom Build) | MIT & BSD
* Build: http://www.modernizr.com/download/#-backgroundsize-testprop-testallprops-domprefixes
*/
; window.modernizr = function (a, b, c) { function z(a, b) { var c = a.charAt(0).toUpperCase() + a.substr(1), d = (a + " " + m.join(c + " ") + c).split(" "); return y(d, b) } function y(a, b) { for (var d in a) if (j[a[d]] !== c) return b == "pfx" ? a[d] : !0; return !1 } function x(a, b) { return !! ~("" + a).indexOf(b) } function w(a, b) { return typeof a === b } function v(a, b) { return u(prefixes.join(a + ";") + (b || "")) } function u(a) { j.cssText = a } var d = "2.0.6", e = {}, f = b.documentElement, g = b.head || b.getElementsByTagName("head")[0], h = "modernizr", i = b.createElement(h), j = i.style, k, l = Object.prototype.toString, m = "Webkit Moz O ms Khtml".split(" "), n = {}, o = {}, p = {}, q = [], r, s = {}.hasOwnProperty, t; !w(s, c) && !w(s.call, c) ? t = function (a, b) { return s.call(a, b) } : t = function (a, b) { return b in a && w(a.constructor.prototype[b], c) }, n.backgroundsize = function () { return z("backgroundSize") }; for (var A in n) t(n, A) && (r = A.toLowerCase(), e[r] = n[A](), q.push((e[r] ? "" : "no-") + r)); u(""), i = k = null, e._version = d, e._domPrefixes = m, e.testProp = function (a) { return y([a]) }, e.testAllProps = z; return e } (this, this.document);