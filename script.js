// count products and display number of products in cart icon 

let count = 0;

$('.buyNow').click(function(){
    count++;
    $('#count').html(count) = count;
});

// toggle cart tab

$('.fa-bag-shopping').click(function(){
    $('.cartTab').animate({
        right: '0px',
    }, 1000);
});

    $('.close').click(function() {
        $('.cartTab').animate({
            right: '-300px',
        }, 1000)
    });
