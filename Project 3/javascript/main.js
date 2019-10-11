// page for js
function showShop(_clickedElement){

    //hide grid and show shop window
    $('#grid').hide(1000);
    $('#shopWindow').show(1000);

    //display the correct window depending on which element was clicked
    switch(_clickedElement){

    //Genesis shop
    case 'Genesis':

    //show Genesis
    $('#Genesis-shop').show();
    //hide all but Genesis
    $('#n64-shop').hide();
    $('#SNES-shop').hide();
    $('#dreamCast-shop').hide();
    break;

    //Nintendo 64 shop
    case 'n64':

    //show n64 shop
    $('#n64-shop').show();

    //hide all but n64
    $('#Genesis-shop').hide();
    $('#SNES-shop').hide();
    $('#dreamCast-shop').hide();
    break;

    //Super Nintendo shop
    case 'SNES':

    //show snes
    $('#SNES-shop').show();

    //hide all but SNES
    $('#n64-shop').hide();
    $('#Genesis-shop').hide();
    $('#dreamCast-shop').hide();
    break;

    //Dreamcast shop
    case 'DreamCast':

    //show dreamcast
    $('#dreamCast-shop').show();

    //hide all but Dreamcast
    $('#n64-shop').hide();
    $('#SNES-shop').hide();
    $('#Genesis-shop').hide();
    break;

    default:
        location.href='shop.html';
    break;

    }

$('nav').css('visibility','visible');

}

function setSessionFunction(_game){
    /*List of options:
            NBAJam
            SK
            GA
            DK
            SF
            GE
            StrFtr
            MM
            SC
            JGR
            SA
            RM2 */

    /*This switch statement sets a session item
        for the next page to retrieve in order to
        display the correct game*/
    switch(_game){

        //NBA Jam
        case 'NBAJam':
            sessionStorage.setItem('gameName', 'NBA Jam');
        break;

        //Sonic and Knuckles
        case 'SK':
            sessionStorage.setItem('gameName', 'Sonic and Knuckles');
        break;

        //Golden Axe
        case 'GA':
            sessionStorage.setItem('gameName', 'Golden Axe');
        break;

        //Donkey Kong
        case 'DK':
            sessionStorage.setItem('gameName', 'Donkey Kong');
        break;

        //Star Fox
        case 'SF':
            sessionStorage.setItem('gameName', 'Star Fox');
        break;

        //Golden Eye
        case 'GE':
            sessionStorage.setItem('gameName', 'Golden Eye');
        break;

        //Street Fighter
        case 'StrFtr':
            sessionStorage.setItem('gameName', 'Street Fighter');
        break;

        //Mega Man X
        case 'MM':
            sessionStorage.setItem('gameName', 'Mega Man X');
        break;

        //Super Castlevania
        case 'SC':
            sessionStorage.setItem('gameName', 'Super Castlevania');
        break;

        //Jet Grind Radio
        case 'JGR':
            sessionStorage.setItem('gameName', 'Jet Grind Radio');
        break;

        //Sonic Adventures
        case 'SA':
            sessionStorage.setItem('gameName', 'Sonic Adventures');
        break;

        //Ray-man 2
        case 'RM2':
            sessionStorage.setItem('gameName', 'Ray-man 2');
        break;

        default:
            alert('Something bad happened. Please refresh the page');
        break;
        
    }

    location.href = '../html/gameInfo.html';

}