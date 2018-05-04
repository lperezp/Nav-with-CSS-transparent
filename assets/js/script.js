$('.container-menu').hide();

$('.container-menu').css({
    left:'-100%'
});

$('.fa-bars').on('click',function(){
    $('.container-menu').show();
    $('.container-menu').animate({
        left:'0%'
},'swing');
})

$('.fa-times').on('click',function(){
    $('.container-menu').animate({
        left:'-100%'
},'swing');
})