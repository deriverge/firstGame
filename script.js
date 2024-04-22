$(document).keydown(function(event){
    const kostka = $('#herniKostka');
    const krok = 30;
    const left = kostka.position().left;
    const top = kostka.position().top;
    const zradlo = $('.zradlo');

    switch(event.key){


        case 'ArrowRight':
        case 'd':
        kostka.css('left', kostka.position().left + krok);
        if( left <= 870 && left >= 650 && top >= 70 && top <= 310 ){
            kostka.css({ width: '170', height: '170', borderRadius: '50%', backgroundColor: 'hotpink' });
            zradlo.hide();
        }
        break;
        case 'ArrowLeft':
        case 'a':
        kostka.css('left', kostka.position().left - krok);
        if( left <= 870 && left >= 650 && top >= 70 && top <= 310 ){
            kostka.css({ width: '170', height: '170', borderRadius: '50%', backgroundColor: 'hotpink' });
            zradlo.hide();
        }
        break;
        case 'ArrowUp':
        case 'w':
        kostka.css('top', kostka.position().top - krok);
        if( left <= 870 && left >= 650 && top >= 70 && top <= 310 ){
            kostka.css({ width: '170', height: '170', borderRadius: '50%', backgroundColor: 'hotpink' });
            zradlo.hide();
        }
        break;
        case 'ArrowDown':
        case 's':
        kostka.css('top', kostka.position().top + krok);
        if( left <= 870 && left >= 650 && top >= 0 && top <= 310 ){
            kostka.css({ width: '170', height: '170', borderRadius: '50%', backgroundColor: 'hotpink' });
            zradlo.hide();
        }
        break;
    }

    console.log('left: ' + left );
    console.log('top: ' + top );


});



const kostka = $('#herniKostka');


//Overlay

const ubrat = $('.ubrat');
    
let overlay = $('<div class=overlay><img id=fckpic src=https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/91919951-e908-430d-8ffc-7a93ee9364bc/d4cxn6y-5edda9bc-7561-4796-81d7-5b2a048bdbc2.png/v1/fit/w_828,h_838/fuck_you_by_rober_raik_d4cxn6y-414w-2x.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NzMxMiIsInBhdGgiOiJcL2ZcLzkxOTE5OTUxLWU5MDgtNDMwZC04ZmZjLTdhOTNlZTkzNjRiY1wvZDRjeG42eS01ZWRkYTliYy03NTYxLTQ3OTYtODFkNy01YjJhMDQ4YmRiYzIucG5nIiwid2lkdGgiOiI8PTcyMjIifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.c6LYDKSQw5iugXdbuxL_nrs0AMmWLDJR4vZqvIXmv9s></div>').prependTo( $('body') );
overlay.addClass('overlay');
overlay.css({display: 'none'});

ubrat.on('click', function(event){
    console.log('show-ubrat');
    overlay.css({display: 'block'});
    overlay.end(event);
});
$('.overlay').on('click', function(event){
    overlay.css({display: 'none'});
    overlay.end(event);
});
$(document).keydown(function(event){
    switch(event.key){
    case 'Escape':
    overlay.css({display: 'none'});
    overlay.end(event);
    break;
    }
});

//end of Overlay

$('.pridat').on('mouseenter', function(event){
    
    const voda = $('.voda');

    voda.animate({height: '90%'}, 3000);

});

$('.ubrat').on('click', function(event){
    const voda = $('.voda');

    voda.animate({height: '0%'}, 3000);

});

$('.reload').on('click', function(){
    location.reload()
});
