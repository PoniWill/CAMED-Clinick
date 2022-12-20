$('.off').on('click', function(){
    $(this).siblings('.about').slideToggle();
    $(this).children('img').toggleClass('transform');
    $('.off').on('click', (function(){
        $(this).css('background', 'linear-gradient(268.06deg, #21D0DB 1.64%, #1BE484 99.24%), #2DD999')
    }))
})
