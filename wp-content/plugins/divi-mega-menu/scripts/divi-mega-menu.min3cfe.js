(()=>{let e,t,s,i,o,a,n,m,l,d,r,u,h,c,f,v,g,w,p,_,b,C,y,k,x;jQuery(document).ready((function(N){if(!N("body.et-fb").length){var T;N(".dmm-vert-tabs").closest(".et_pb_section").addClass("fullwidth-mm"),N(".dmm-vert-tabs .et_pb_toggle").on("mouseenter",(function(e){N(this).children(".et_pb_toggle_title").trigger("click")})),console.log("Divi Mega Menu Loaded - new version"),N(".et_pb_mm_tabs .et_pb_tabs_controls > li").on("mouseenter",(function(e){if(console.log("mouseenter"),N(this).hasClass("et_pb_tab_active"))T=!1;else if(!(T=N(this)).parent().hasClass("et_pb_tab_active")){T.closest(".dmm-vert-tabs").find(".et_pb_tabs_controls li").removeClass("et_pb_tab_active"),T.addClass("et_pb_tab_active");var t=T.attr("class").split(" ")[0];T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs .et_pb_tab").removeClass("et_pb_active_content et-pb-active-slide"),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs .et_pb_tab").hide(),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs .et_pb_tab").css("display","none"),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs ."+t).css("opacity","0"),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs ."+t).addClass("et_pb_active_content"),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs ."+t).show(),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs ."+t).css("display","block"),T.closest(".dmm-vert-tabs").find(".et_pb_all_tabs ."+t).css("opacity","1")}})),"undefined"!=typeof et_link_options_data&&N.each(et_link_options_data,(function(){var e=this.class,t="",s="";void 0!==this.url&&(e=e.replace("et_pb","et_pb_mega_menu"),t=this.url,s=this.target,N(".et_clickable."+e).length>0&&N(".et_clickable."+e).click((function(){"_self"==s?document.location.href=t:window.open(t)})))})),jQuery(".et_pb_mm_tabs li").on("click",(function(e){e_url=jQuery(this).find("a").attr("href"),document.location.href=e_url}));var j=N(".de-mega-menu-container").attr("data-main-settings");if(void 0!==j){var z=JSON.parse(j),D=z.mega_menu_header_type,H=(z.mega_menu_injection_method,z.divi_mm_overlay),Q=(z.fixed_mobile_menu,z.stop_click_through_dis),O=z.divi_mm_breakpoint,S=z.et_theme;let T=z.stop_click_through_mobile,W=z.specific_mobile_id,q="1"===z.divi_mm_disable,J="1"===z.fixed_custom_header_desktop;var A,P;1==T||setTimeout((function(){N(".menu-item-has-children.de-mega-menu-item").each((function(e,t){N(this).append('<span class="open-trigger"></span>')}),1200)})),N(window).width()<O&&(N(".de-mega-menu .dmm-dropdown-ul li .sub-menu>li:nth-child(1) a").append('<span class="close-dropdown"></span>'),N(".et_pb_dmm_dropdown .dmm-dropdown-wrapper").on("touchstart",".close-dropdown",(function(e){A=!1})).on("touchmove",".close-dropdown",(function(e){A=!0})).on("touchend click",".close-dropdown",(function(e){1!=A&&(e.stopPropagation(),e.preventDefault(),N(this).closest(".menu-item-has-children").toggleClass("active"))})),N(".et_pb_dmm_dropdown .dmm-dropdown-wrapper").on("touchstart",".menu-item-has-children > a",(function(e){P=!1})).on("touchmove",".menu-item-has-children > a",(function(e){P=!0})).on("touchend click",".menu-item-has-children > a",(function(e){1!=P&&(e.stopPropagation(),e.preventDefault(),N(this).parent().toggleClass("active"))}))),"1"==H&&jQuery(document).ready((function(e){e("body").addClass("dmach-mm-overlay"),e(".de-mega-menu-container").prepend('<div class="mm-overlay"></div>')})),N(window).resize((function(){J&&(N(window).width()>O&&N("body").addClass("dmm-fixed"),N(window).width()<O&&N("body").removeClass("dmm-fixed"))})),N(document).on("touchend click",".close-icon",(function(e){e.stopPropagation(),e.preventDefault(),N(".mm-overlay").removeClass("active"),N(".et_mobile_menu").css("pointer-events","none"),N("a").css("pointer-events:","none"),setTimeout((function(){N(".et_mobile_menu").css("pointer-events","auto"),N("a").css("pointer-events:","auto")}),100),N(this).closest(".de-mega-menu").removeClass("show"),N(this).closest(".de-mega-menu").removeClass("mob-show"),N(this).closest(".de-mega-menu").hide(),N(this).closest(".de-mega-menu").find(".et_pb_video").length>0&&(N(this).closest(".de-mega-menu").find("video").length>0&&N(this).closest(".de-mega-menu").find("video").each((function(){N(this)[0].pause(),N(this)[0].currentTime=0})),N(this).closest(".de-mega-menu").find("iframe").length>0&&N(this).closest(".de-mega-menu").find("iframe").each((function(){var e=N(this).attr("src");N(this).removeAttr("src"),e=e.replace("autoplay=1",""),N(this).attr("data-src",e)})));var t=N(this).closest(".de-mega-menu").attr("id");N("."+t).removeClass("megamenu-show"),N("."+t).removeClass("visible")}));let M=!1;(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|ipad|iris|kindle|Android|Silk|lge |maemo|midp|mmp|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows (ce|phone)|xda|xiino/i.test(navigator.userAgent)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(navigator.userAgent.substr(0,4)))&&(M=!0),q&&N(window).width()<O||(N(".de-mega-menu").each((function(z,H){var Q=N(this).attr("data-settings"),A=JSON.parse(Q),P=A.custom_class,$=A.divi_mm_activate_close_icon,F=A.divi_mm_animation_duration,E=A.divi_mm_activate,R=A.divi_mm_style,B=A.divi_mm_tooltip_direction,I=A.divi_mm_hover_delay_time,L=A.divi_mm_initial_hover_delay_time,G=A.divi_mm_adjust_left;let K,U,V="1"===A.divi_mm_activate_close_on_scroll,X="1"===A.realtive_postion,Y="";function Z(){N("#main-header").hasClass("et-fixed-header")?N(".de-mega-menu").addClass("fixed"):N(".de-mega-menu").removeClass("fixed")}function ee(){let e,t;e=N(".et-l--header").length?N(""==W?".et_mobile_menu":"#"+W):N("#mobile_menu"),1==JSON.parse(j).stop_click_through_mobile?e.find("."+P+" > a").each((function(){N(this).off("click"),N(this).on("click",(function(e){e.preventDefault(),N(this).parent().toggleClass("visible"),N(this).parent().siblings().removeClass("visible"),t=N(this).closest(".de-mega-menu-item").find("a").data("class"),N(".de-mega-menu").not("#"+t).hide(),jQuery(".de-mega-menu").not("#"+t).removeClass("show"),N("#"+t).hasClass("show")?N("#"+t).removeClass("show"):(N("#"+t).find("iframe").length>0&&N("#"+t).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N("#"+t).addClass("show"))}))})):e.find("."+P+" .open-trigger").each((function(){N(this).off("click"),N(this).on("click",(function(e){e.preventDefault(),N(this).parent().toggleClass("visible"),N(this).parent().siblings().removeClass("visible"),t=N(this).closest(".de-mega-menu-item").find("a").data("class"),N(".de-mega-menu").not("#"+t).hide(),jQuery(".de-mega-menu").not("#"+t).removeClass("show"),N("#"+t).hasClass("show")?N("#"+t).removeClass("show"):(N("#"+t).find("iframe").length>0&&N("#"+t).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N("#"+t).addClass("show"))}))}))}if("1"==$){if(N(this).find(".et_pb_section").length)var te=N(this).find(".et_pb_section");else te=N(this).children("div");te.append('<div class="close-icon"></div>')}""==P&&void 0===P||(N("."+P).addClass("mega-menu menu-item-has-children de-mega-menu-item"),N("."+P+" a").attr("data-class",P),N("#"+P+" .et_builder_inner_content").length&&N("#"+P+" .et-l").length&&N(".de-mega-menu .et-l").addClass("remove-before"),"tooltip"==R?(V&&N(window).on("scroll",(function(){N("#"+P).hasClass("show")&&N("#"+P).removeClass("show")})),N(window).on("scroll resize",(function(){if(N("."+P).length){K=J||N("#main-header").length?N(window).scrollTop():"0";var e=N("."+P).offset().top-K,t=N("."+P).outerHeight(),s=N("#"+P).outerHeight();e="top"==B?Number(e)-Number(s):Number(e)+Number(t),Y=N(window).width()-N("."+P).offset().left-N("#"+P).width(),N("#"+P).css({top:e,right:Y}),M?"tooltip"==R&&N("."+P).unbind().click((function(e){return e.preventDefault(),N(this).toggleClass("active"),N("#"+P).toggleClass("show"),N(this).toggleClass("megamenu-show"),!1})):"click"==E?(N("."+P).off("click").on("click",(function(e){return e.preventDefault(),N("#"+P).hasClass("show")?(N(this).removeClass("active"),N("#"+P).removeClass("show"),N("#"+P).find(".et_pb_video").length>0&&(N("#"+P).find("video").length>0&&N("#"+P).find("video").each((function(){N(this)[0].pause(),N(this)[0].currentTime=0})),N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("src");N(this).removeAttr("src"),e=e.replace("autoplay=1",""),N(this).attr("data-src",e)})))):setTimeout((function(){N(".de-mega-menu").removeClass("show"),N(this).addClass("active"),N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N("#"+P).addClass("show")}),200),!1})),N(document).click((function(e){var t=N(e.target);t.closest("#"+P).length>0?t.hasClass("close-icon")?(N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show")):e.stopPropagation():(N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"))}))):(N("."+P).hover((function(){setTimeout(function(){1==N("body").find("."+P+":hover").length&&(N(".mm-overlay").addClass("active"),N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N("#"+P).addClass("show"),divi_mm_animation_duration_1000=1e3*F,setTimeout((function(){var e=N("#"+P+":hover").length,t=N(".de-mega-menu-item:hover").length;e||t?N("#"+P).hasClass("show")&&N("."+P).addClass("megamenu-show"):N("."+P).removeClass("megamenu-show")}),divi_mm_animation_duration_1000),N("#"+P).css("animation-duration",F+"s"))}.bind(this),L)}),(function(){setTimeout(function(){var e=N("#"+P+":hover").length,t=N(".de-mega-menu-item:hover").length;e||(t?(N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s")):(N(".mm-overlay").removeClass("active"),N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s")))}.bind(this),I)})),N("#"+P).hover((function(){N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N(this).addClass("show"),N("."+P).addClass("megamenu-show"),N(".mm-overlay").addClass("active"),setTimeout((function(){N("."+P).addClass("et-hover")}),200)}),(function(){N(this).removeClass("show"),N("."+P).removeClass("megamenu-show"),N(".mm-overlay").removeClass("active"),N("."+P).removeClass("et-hover")})))}}))):(!M||N(window).width()>O&&1==M?(N(window).width()>O&&1==M&&N("."+P).unbind().click((function(e){return e.preventDefault(),N(this).toggleClass("active"),N("#"+P).toggleClass("show"),N(this).toggleClass("megamenu-show"),!1})),"click"==E||(N("."+P).hover((function(){setTimeout(function(){1==N("body").find("."+P+":hover").length&&(N(".mm-overlay").addClass("active"),N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N("#"+P).addClass("show"),divi_mm_animation_duration_1000=1e3*F,setTimeout((function(){var e=N("#"+P+":hover").length,t=N(".de-mega-menu-item:hover").length;e||t?N("#"+P).hasClass("show")&&N("."+P).addClass("megamenu-show"):N("."+P).removeClass("megamenu-show")}),divi_mm_animation_duration_1000),N("#"+P).css("animation-duration",F+"s"))}.bind(this),L)}),(function(){setTimeout(function(){var e=N("#"+P+":hover").length,t=N(".de-mega-menu-item:hover").length;e||(t?(N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s")):(N(".mm-overlay").removeClass("active"),N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s")))}.bind(this),I)})),N("#"+P).hover((function(){N("#"+P).find("iframe").length>0&&N("#"+P).find("iframe").each((function(){var e=N(this).attr("data-src");void 0!==e&&""!=e&&N(this).attr("src",e)})),N(this).addClass("show"),N("."+P).addClass("megamenu-show"),N(".mm-overlay").addClass("active"),setTimeout((function(){N("."+P).addClass("et-hover")}),200)}),(function(){setTimeout(function(){var e=N(".de-mega-menu-item:hover").length;N("."+P+":hover").length>0||(e?(N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s"),N("."+P).removeClass("et-hover")):(N(".mm-overlay").removeClass("active"),N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).css("animation-duration","0s"),N("."+P).removeClass("et-hover")))}.bind(this),I)})))):q&&M&&N(window).width()<O&&(N(document).on("touchstart click","."+P,(function(e){})),N(document).on("touchstart click","#main-content",(function(e){N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).removeClass("mob-show"),N("#"+P).css("animation-duration","0s")}))),N(window).on("resize",(function(){let e;if(N(window).width()<O)1==T&&"menu-item"!=P&&N("."+P+" > a").attr("href","#");else{if(N(window).width()>O&&1==M&&N("."+P).unbind().click((function(e){return e.preventDefault(),N(this).toggleClass("active"),N("#"+P).toggleClass("show"),N(this).toggleClass("megamenu-show"),!1})),"default"==D)N(".et-l--header").length||("extra"==S?N("#et-navigation").length&&(Y=N(window).width()-(N("#et-navigation").offset().left+N("#et-navigation").width())):N("#top-menu-nav").length&&(Y=N(window).width()-(N("#top-menu-nav").offset().left+N("#top-menu-nav").width())));else if("theme_builder_alt"==D){var t=N(".et-l--header ."+P).closest(".et-menu-nav");(t=N(".et-l--header ."+P).closest(".et-menu-nav")).length&&(Y=N(window).width()-(t.offset().left+t.width()))}else"mhmm"==D?(e=N(".mhmm-inline-menu"),N(e).length&&(Y=N(window).width()-(e.offset().left+e.width()))):(e=N(".fullwidth-menu-nav:first"),N(e).length&&(Y=N(window).width()-(e.offset().left+e.width())));N("."+P).length&&(U=N(window).width()-N("."+P).offset().left),n=X?U:Y,N(".free-du-plugin-header").length&&(Y=N(window).width()-(N(".free-du-plugin-header .fullwidth-menu-nav").offset().left+N(".free-du-plugin-header .fullwidth-menu-nav").width()));var s=N("#wpadminbar"),i=N("#top-header");x=s.length?s.outerHeight():"0",_=i.length?i.outerHeight():"0";var o=N("#main-header"),a=N("#top-menu ."+P+" a"),m=o.outerHeight();if(a.outerHeight(),N(".free-du-plugin-header").length){var l=N(".free-du-plugin-header").outerHeight();c=Number(l)+Number(x)+Number(_)}"default"==D?N(".et-l--header").length||(c=Number(x)+Number(m)+Number(_)):"theme_builder_alt"==D?(N(".et-l--header .et-menu-nav ."+P).length&&(d=N(".et-l--header .et-menu-nav ."+P).offset().top),r=N(".et-l--header .et-menu-nav ."+P+" a").height(),K=N(window).scrollTop(),distance_from_top_screen=d-K,c=Number(distance_from_top_screen)+Number(x)):"mhmm"==D?(e=N(".mhmm-inline-menu"),N(e).length&&(d=e.find("."+P).offset().top,c=Number(d)+Number(x)+Number(_))):(e=N(".fullwidth-menu-nav:first"),N(e.find("."+P)).length&&(d=e.find("."+P).offset().top,c=Number(d)+Number(x)+Number(_))),N(document).on("touchstart click",".mm-overlay",(function(e){N(".mm-overlay").removeClass("active"),N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).removeClass("mob-show"),N("#"+P).css("animation-duration","0s")})),N(document).on("touchstart click","#main-content",(function(e){N(".mm-overlay").removeClass("active"),N("#"+P).removeClass("outside-right outside-left outside-bottom outside-top"),N("#"+P).removeClass("show"),N("."+P).removeClass("megamenu-show"),N("#"+P).removeClass("mob-show"),N("#"+P).css("animation-duration","0s")}))}})).resize(),V&&N(window).on("scroll",(function(){if(N("#"+P).hasClass("show")&&(N("#"+P).removeClass("show"),M)){let e=N(`.et_mobile_menu .${P}`);e.hasClass("visible")&&e.removeClass("visible")}})),N(window).on("scroll resize",(function(){let b=N("body").hasClass("dmm-fixed");if("default"==D||"theme_builder_alt"==D&&(t=N(".et-l--header .et-menu-nav ."+P),e=N(t).closest(".et-l--header").css("position")),!M||M&&N(window).width()>O){if(y=N(window).width(),y>O){if(N("#top-menu-nav").length&&(Y=y-(N("#top-menu-nav").offset().left+N("#top-menu-nav").width())),N(".free-du-plugin-header").length&&(Y=y-(N(".free-du-plugin-header .fullwidth-menu-nav").offset().left+N(".free-du-plugin-header .fullwidth-menu-nav").width())),k=N("#wpadminbar"),p=N("#top-header"),x=k.length?k.outerHeight():"0",_=p.length?p.outerHeight():"0",f=N("#main-header"),h=N("#top-menu ."+P+" a"),g=f.outerHeight(),u=h.outerHeight(),N(".free-du-plugin-header").length&&(v=N(".free-du-plugin-header"),w=v.outerHeight(),c=Number(w)+Number(x)+Number(_)),"default"==D)if(N(".et-l--header").length);else{var T=N("#top-header"),j=!1;"fixed"===N(T).css("position")&&(j=!0),c=1==j?Number(g)+Number(x)+Number(_):N(document).scrollTop()>="100"?Number(g)+Number(x):Number(g)+Number(x)+Number(_),N("#et-top-navigation ."+P).length&&(U=N("#et-top-navigation ."+P).offset().left)}else"theme_builder_alt"==D?t.length?(i=".et-menu-nav",s=N(t).closest(`.et-l--header ${i}`).offset().top??0,b&&(s=N(t).closest(`.et-l--header ${i}`).offset().top??0),o=t.height()??0,C=N(window).scrollTop()??0,"absolute"==e?c=Number(s+o-C).toFixed():(c=s+o,b&&(c-=C),c=Number(c).toFixed()),U=N(".et-l--header .et-menu-nav ."+P).offset().left):r="":"mhmm"==D?(d=N(".mhmm-inline-menu ."+P).offset().top,m=N(".mhmm-inline-menu ."+P+" a").outerHeight(),l=Number(m)/2,c=Number(d)+Number(x)+Number(l),N("."+P).length&&(U=N(".mhmm-inline-menu ."+P).offset().left)):N(".fullwidth-menu-nav:first ."+P).length&&(d=N(".fullwidth-menu-nav:first ."+P).offset().top,c=Number(d)+Number(x),N("."+P).length&&(U=N(".fullwidth-menu-nav:first ."+P).offset().left));if(X)if(n="auto",G.match("^-")){var z=G.substring(1);a=U-z+"px"}else a=U+G+"px";else n=Y,a=0!=G?G+"px":"auto"}}else if(console.log("Window Scroll Resize Event - Mobile"),!q)if("default"==D)console.log("Divi Default Header - Window Scroll Resize Event - Mobile");else if("theme_builder_alt"==D){let a,n,m;console.log("Divi Theme Builder Header - Window Scroll Resize Event - Mobile"),i=".et_mobile_nav_menu",t=N(`.et-l--header ${i} .${P}`),e=N(t).closest(".et-l--header").css("position"),t.length?(a=N(t).closest(".et_pb_row "),n=a.outerHeight(),s=a.offset().top??0,o=t.height()??0,m=t.position().top??0,C=N(window).scrollTop()??0,c="absolute"==e?Number(s+n+m+o-C).toFixed():Number(s+n+m+o).toFixed(),U=N(".et-l--header .et-menu-nav ."+P).offset().left):(r="",c="")}c+="px",N("#"+P).css({top:c,left:a,right:n});var H=N("#"+P);H.offset().left+H.outerWidth(!0)>N(window).outerWidth()&&H.addClass("outside-right"),H.offset().left<0&&H.addClass("outside-left"),H.offset().top+H.outerHeight(!0)>N(window).scrollTop()+window.screen.height&&H.addClass("outside-bottom"),H.offset().top<N(window).scrollTop()&&H.addClass("outside-top")})),N(window).on("resize",(function(){let e;if(N(window).width()<O){if("default"==D||"theme_builder_alt"==D)b=N(".et-l--header").length?N(""==W?".et-l--header .et_mobile_menu":".et-l--header #"+W):N("#mobile_menu");else{var t=N(".fullwidth-menu-nav:first");b=t.find(".fullwidth-menu").length?t.find(".fullwidth-menu"):N("#mobile_menu")}b.length&&(e=b.outerWidth()),N("#"+P).css("width",e),N("#"+P).css("max-width","100%"),N("#"+P).css("right","auto")}else N("#"+P).css({width:"","max-width":""})})),window.setInterval(Z,500),Z(),navigator.userAgent.match(/(iPod|iPhone|iPad)/)?setTimeout((function(){ee()}),700):N(window).load((function(){setTimeout((function(){ee()}),700)}))))})),N(window).width()>O&&N(document).on("touchstart click",".de-mega-menu-item",(function(e){var t,s=jQuery(this).children("a").data("class"),i=N("#"+s).attr("data-settings"),o=JSON.parse(i),a=o.divi_mm_activate,n=o.divi_mm_animation_duration,m=o.custom_class;N(window).width()>O&&(1!=Q&&"click"!=a||e.preventDefault()),"click"==a&&(N(".de-mega-menu-item").removeClass("megamenu-show"),N(".de-mega-menu:not(#"+m+")").removeClass("show"),N(".mm-overlay").addClass("active"),N("."+m).removeClass("megamenu-show"),N(".de-mega-menu").removeClass("mob-show"),N("#"+m).toggleClass("show"),N("#"+m).hasClass("show")||N("#"+m).find(".et_pb_video").length>0&&(N("#"+m).find("video").length>0&&N("#"+m).find("video").each((function(){N(this)[0].pause(),N(this)[0].currentTime=0})),N("#"+m).find("iframe").length>0&&N("#"+m).find("iframe").each((function(){var e=N(this).attr("src");N(this).removeAttr("src"),e=e.replace("autoplay=1",""),N(this).attr("data-src",e)}))),divi_mm_animation_duration_1000=1e3*n,setTimeout((function(){var e=N("#"+m+":hover").length,t=N(".de-mega-menu-item:hover").length;e||t?N("#"+m).hasClass("show")&&N("."+m).addClass("megamenu-show"):N("."+m).removeClass("megamenu-show")}),divi_mm_animation_duration_1000),N("#"+m).css("animation-duration",n+"s"),N("#"+m),setTimeout((function(){N("#"+m).addClass("mob-show")}),500),N("#"+m).hasClass("show")||N("#"+m).removeClass("mob-show")),M&&N(window).width()<O&&N(document).on("touchstart",".de-mega-menu-item",(function(e){t=!1})).on("touchmove","a",(function(e){t=!0})).on("touchend click","a",(function(s){let i,o;if(1!=t){e.preventDefault(),N(jQuery(this)).hasClass("de-mega-menu-item")?(i=jQuery(this).children("a").data("class"),void 0!==o&&(i=o.split(" ")[0])):(o=jQuery(this).parent(".menu-item").children("a").data("class"),void 0!==o&&(i=o.split(" ")[0]));var a=N("#"+i).attr("data-settings"),n=JSON.parse(a),m=(n.divi_mm_activate,n.divi_mm_animation_duration),l=n.custom_class;N(".de-mega-menu").removeClass("show"),N("."+l).removeClass("megamenu-show"),N(".de-mega-menu").removeClass("mob-show"),N("#"+l).addClass("show"),divi_mm_animation_duration_1000=1e3*m,setTimeout((function(){var e=N("#"+l+":hover").length,t=N(".de-mega-menu-item:hover").length;e||t?N("#"+l).hasClass("show")&&N("."+l).addClass("megamenu-show"):N("."+l).removeClass("megamenu-show")}),divi_mm_animation_duration_1000),N("#"+l).css("animation-duration",m+"s"),N("#"+l)}}))})))}N(".dmm-overlay").each((function(){N(this).closest(".sub-menu").addClass("hidden-overflow")})),N(".dmm-overlay > .sub-menu").append("<span class='go-back'></span>"),N(".dmm-overlay > .sub-menu").find(".close-submenu").remove(),N(document).on("touchstart click",".dmm-overlay > a",(function(e){e.preventDefault(),N(this).closest(".dmm-overlay").toggleClass("active")})),N(document).on("touchstart click",".go-back",(function(e){e.preventDefault(),N(this).closest(".dmm-overlay").removeClass("active"),N(this).closest(".dmm-overlay").addClass("close")})),N(document).on("touchstart click",".mobile_nav.opened .mobile_menu_bar",(function(e){N(".de-mega-menu").hasClass("show")&&(N(".de-mega-menu").removeClass("show"),N(".et_mobile_menu li.mega-menu").hasClass("visible")&&N(".et_mobile_menu li.mega-menu").removeClass("visible"))})),N(window).scroll((function(){N(".free-du-plugin-header").length?"fixed"===N(".free-du-plugin-header .et_pb_section").css("position")?N(".de-mega-menu").css({position:"fixed"}):N(".de-mega-menu").css({position:"absolute"}):"fixed"===N("#main-header").css("position")?N(".de-mega-menu").css({position:"fixed"}):N(".de-mega-menu").css({position:"absolute"})})),N(window).resize((function(){"fixed"===N("#main-header").css("position")?N(".de-mega-menu").css({position:"fixed"}):N(".de-mega-menu").css({position:"absolute"})}))}})),jQuery(document).on("touchstart click",".anchorpoint",(function(e){var t=jQuery(e.target);jQuery(".de-mega-menu").hasClass("show")&&jQuery(".de-mega-menu").removeClass("show");var s=t.find("a").attr("href"),i=window.location.href,o="",a="",n=i;e.preventDefault(),void 0!==s&&(-1!=i.indexOf("#")&&(n=s.substring(0,s.indexOf("#"))),0==s.indexOf("#")?(o=n,a=s.substring(1)):-1!=s.indexOf("#")&&(o=s.substring(0,s.indexOf("#")),a=s.substring(s.indexOf("#")+1)),o==n&&jQuery("#"+a).length?""!=a&&jQuery("html, body").animate({scrollTop:jQuery("#"+a).offset().top},2e3):window.location.href=s)}))})();