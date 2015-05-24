//<!-- Slider Carousel -->
   
        $(document).ready(function() {
        	$('#carousel').carousel();
        }); ;
   
    
//    <!-- Our Courses Carousel -->
  
        var tabCarousel = setInterval(function() {
        var tabs = $('.nav-tabs > li'),
        active = tabs.filter('.active'),
        next = active.next('li'),
        toClick = next.length ? next.find('a') : tabs.eq(0).find('a');

        toClick.trigger('click');
    }, 5000);
    
   $('.nav-tabs > li').hover(function(){
        clearInterval(tabCarousel);
    });  
    
    
//<!-- Yandex.Metrika counter -->

(function (d, w, c) {
    (w[c] = w[c] || []).push(function() {
        try {
            w.yaCounter26672109 = new Ya.Metrika({id:26672109,
                    webvisor:true,
                    clickmap:true,
                    trackLinks:true,
                    accurateTrackBounce:true});
        } catch(e) { }
    });

    var n = d.getElementsByTagName("script")[0],
        s = d.createElement("script"),
        f = function () { n.parentNode.insertBefore(s, n); };
    s.type = "text/javascript";
    s.async = true;
    s.src = (d.location.protocol == "https:" ? "https:" : "http:") + "//mc.yandex.ru/metrika/watch.js";

    if (w.opera == "[object Opera]") {
        d.addEventListener("DOMContentLoaded", f, false);
    } else { f(); }
})(document, window, "yandex_metrika_callbacks");

		