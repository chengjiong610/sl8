duAI([47],{324:function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}var i=a(2),l=n(i),u=a(237);n(u);a(596),(0,l.default)(document).ready(function(){function t(t,e){return t&&clearInterval(t),t=setInterval(e,u)}function e(e){n=e,i=t(i,a)}function a(){var t=(0,l.default)(".banner-content > li");t.each(function(e,a){if((0,l.default)(a).toggleClass("active",e===n%t.length),(0,l.default)(a).hasClass("video-bg")){var i=(0,l.default)(a).find("video")[0];try{e===n%t.length?(i.play(),(0,l.default)(a).find("video").css("opacity",1)):(i.currentTime=0,i.pause(),(0,l.default)(a).find("video").css("opacity",0))}catch(t){}}}),(0,l.default)(".banner-indicator > li").each(function(e,a){(0,l.default)(a).toggleClass("active",e===n%t.length)}),n++}var n=0,i=null,u=6e3;(0,l.default)(".banner-indicator > li").click(function(){var t=(0,l.default)(this).index();n=t,a(),e(t+1)}),(0,l.default)(".banner-indicator > li").eq(0).click(),(0,l.default)(".solution-tab a").click(function(t){t.preventDefault(),(0,l.default)(".solution-tab a").removeClass("active"),(0,l.default)(this).addClass("active"),(0,l.default)(".solution-detail > div").hide(),(0,l.default)((0,l.default)(this).attr("href")).show()})})},596:function(t,e){},761:function(t,e,a){t.exports=a(324)}},[761]);