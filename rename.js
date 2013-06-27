(function($) {
    
    $(function(){
    var thePage = $("body");
    thePage.html(thePage.html().replace(/Бареков/g, 'Бюреков').replace(/БСП/g, 'БКП').replace(/Орешарски/g, 'Олигархски').replace(/Станишев/g, 'Съселов').replace(/Волен/g, 'Болен'));
    });
 
})(jQuery)