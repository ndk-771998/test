(function ($) {
    var _duration = 1000,
      _easing = "easeOutCubic",
      _width = $(window).width(),
      _spmode = 960;
    // loading after
  
    window.onload = function () {
        const sidebarNav = $('.sidebar nav, header nav');
        $('.sidebar .dot, header .dot').on('click',function () {
            sidebarNav.css({
                animation: 'floatToLeft 0.6s forwards'
            });
        });
        $('.sidebar .close, header .close').on('click',function () {
            sidebarNav.css({
                animation: 'floatToRight 0.6s forwards'
            });
        });
        $('.header_searchbar .txt a').click(function() {
            activeTab(this);
        });
        handleScrollAnime();
        $.datetimepicker.setLocale('ja');
        $('#birthday').datetimepicker({
            timepicker:false,
            format: 'd/m/Y'
        })
        $(".item_input.password .item_field").on('click', 'span', function() {
            let input = $("#password");
            if (input.attr("type") === "password") {
              input.attr("type", "text");
            } else {
              input.attr("type", "password");
            }
        });
    };
})(jQuery);
function handleScrollAnime() {
    var scrollableElement;
    var firefox = navigator.userAgent.match(/Firefox\/([0-9]+)\./);

    if ('scrollingElement' in document) {
        scrollableElement = document.scrollingElement;
    }
    else if (/*@cc_on!@*/false || (!!window.MSInputMethodContext && !!document.documentMode)) {
        scrollableElement = document.documentElement;
    }
    else if (firefox && parseInt(firefox[1]) <= 47) {
        scrollableElement = document.documentElement;
    }
    else {
        scrollableElement = document.body;
    }
    var winH = window.innerHeight ? window.innerHeight: $(window).height();
    $(window).on('load scroll orientationchange', function() {
        var headerscrolltop = $(scrollableElement).scrollTop() + winH*0.9;
        $('.is_anime').each(function(){
            if(!$(this).hasClass('is_animated')){
                if($(this).offset().top < headerscrolltop && $(this).offset().top > $(scrollableElement).scrollTop()){
                    $(this).addClass('is_animated');
                }
            }
        });
        $('.fadeUp').each(function(){
            if(!$(this).hasClass('is_fadeUped')){
                if($(this).offset().top < headerscrolltop && $(this).offset().top > $(scrollableElement).scrollTop()){
                    $(this).addClass('is_fadeUped');
                }
            }
        });

    });
}
function activeTab(obj) {
    $('.header_searchbar .txt a').removeClass('active');
    $(obj).addClass('active');
    var id = $(obj).attr('href');
    $('.section').hide();
    $(id).show();
}


$("#submit").on("click", function () {
    $(".md_overlay").css({ opacity: "1" });
    $(".md_overlay").css({ visibility: "visible" });
    $(".md_modal").css({ display: "block" });
});
  $(".md_close").on("click", function () {
    $(".md_overlay").css({ opacity: "0" });
    $(".md_overlay").css({ visibility: "hidden" });
    $(".md_modal").css({ display: "none" });
});
  $("#submit_send").on("click", function () {
    $(".md_overlay").css({ opacity: "0" });
    $(".md_overlay").css({ visibility: "hidden" });
    $(".md_modal").css({ display: "none" });
});
