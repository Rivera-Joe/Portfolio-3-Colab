var sections = document.querySelectorAll('section');
sections.forEach(section => 
    {section.style.visibility = 'hidden';
        console.log(section.id);
    });

var gameName = sessionStorage.getItem('gameName');
console.log(gameName);

switch(gameName){
    case 'NBA Jam':
        document.querySelector('#NBA').style.visibility = 'visible';
    break;

    case 'Sonic and Knuckles':
        document.querySelector('#SK').style.visibility='visible';
    break;

    case 'Golden Axe':
        document.querySelector('#GA').style.visibility='visible';
    break;

    case 'Donkey Kong':
        document.querySelector('#DK').style.visibility='visible';
    break;

    case 'Star Fox':
        document.querySelector('#SF').style.visibility='visible';
    break;

    case 'Golden Eye':
        document.querySelector('#GE').style.visibility='visible';
    break;

    case 'Street Fighter':
        document.querySelector('#StrFtr').style.visibility='visible';
    break;

    case 'Mega Man X':
        document.querySelector('#MM').style.visibility='visible';
    break;

    case 'Super Castlevania':
        document.querySelector('#SC').style.visibility='visible';
    break;

    case 'Jet Grind Radio':
        document.querySelector('#JGR').style.visibility='visible';
    break;

    case 'Sonic Adventures':
        document.querySelector('#SA').style.visibility='visible';
    break;

    case 'Ray-man 2':
        document.querySelector('#RM2').style.visibility='visible';
    break;




}

