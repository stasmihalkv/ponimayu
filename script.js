window.onload = function(){

    let headerMenu = $('.header_menu');
    let block2Menu = $('.block2_menu ul');
    
    $(".tab_item").not(":first").hide();
    $(".block2_menu li").click(function() {
        $(".block2_menu li").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab_item").hide().eq($(this).index()).fadeIn()
    }).eq(0).addClass("active");

    $('.header_menu_toggle').on('click',function(){
        headerMenu.slideToggle(300,function(){
            if($(this).css('display')==='none'){
                $(this).removeAttr('style');
            }
        });
    });

    $('.menu_toggle').on('click',function(){
        block2Menu.slideToggle(300,function(){
            if($(this).css('display')==='none'){
                $(this).removeAttr('style');
            }
        });
    });

    window.onresize = function() {
        if(window.innerWidth >= 890 ){
            headerMenu.removeAttr('style');
            block2Menu.removeAttr('style');
         }
    };
  
}


