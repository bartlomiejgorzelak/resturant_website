//java
$(document).ready(function() {


    $('nav .menu .submenu a').each(function() {
        var $this = $(this);
        $this.parent().addClass($this.attr('title'));
        if ($this.attr('title') == 'all') {
            $this.append($('<span/>'));
        }

    });

    $('nav .menu .submenu a').last().css('border-bottom', '0');


    $('#home .comments .container section').first().addClass('first');
    $('#home .comments .container section').last().addClass('last');


    $('.home-slider .slides').carouFredSel({
        scroll: {
            items: 1,
            fx: 'fade'
        },
        pagination: {
            container: $('.home-slider .pagination ul'),
            anchorBuilder: function(nr) {
                return '<li><a href="#">' + nr + '</a></li>';
            }
        }
    });

    // slider kluinarne inspiracje 
    $('#home .inspiration .slider .slider-container .items').carouFredSel({
        prev: $('#home .inspiration .slider .prev'),
        next: $('#home .inspiration .slider .next'),
        scroll: {
            items: 1
        }
    });

    // animacja strzalek 

    var $sliderNav = $('#home .inspiration .slider > a ');
    $sliderNav.each(function() {

        var $this = $(this);

        if ($this.hasClass('prev')) {
            var cleft = parseInt($this.css('left'));
            $this.css('left', (cleft + 12));
            var onOver = {left: cleft + "px"};
            var onOut = {left: (cleft + 12) + "px"};

        } else {
            var cright = parseInt($this.css('right'));
            $this.css('right', (cright + 12));
            var onOver = {right: cright + "px"};
            var onOut = {right: (cright + 12) + "px"};

        }
        $this.hover(function() {
            $this.animate(onOver, 250);
        }, function() {
            $this.animate(onOut, 250);
        });
    });

    //ostatnie dania po najechaniu kursorem

    $('#home .boxes .box').mouseover(function() {
        var $this = $(this);

        if ($this.find('.step2').size() > 0) {
            $this.find('.step1').hide();
            $this.find('.step2').show();
        }
    });

    $('#home .boxes .box').mouseout(function() {
        var $this = $(this);

        if ($this.find('.step2').size() > 0) {
            $this.find('.step2').hide();
            $this.find('.step1').show();
        }
    });
});