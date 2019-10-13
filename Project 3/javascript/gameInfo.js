var sections = document.querySelectorAll('section');
sections.forEach(section => 
    {section.style.display = 'none';
        console.log(section.id);
    });

var gameName = sessionStorage.getItem('gameName');
console.log(gameName);

switch(gameName){
    case 'NBA Jam':
        document.querySelector('#NBA').style.display = 'block';
    break;

    case 'Sonic and Knuckles':
        document.querySelector('#SK').style.display = 'block';
    break;

    case 'Golden Axe':
        document.querySelector('#GA').style.display = 'block';
    break;

    case 'Donkey Kong':
        document.querySelector('#DK').style.display = 'block';
    break;

    case 'Star Fox':
        document.querySelector('#SF').style.display = 'block';
    break;

    case 'Golden Eye':
        document.querySelector('#GE').style.display = 'block';
    break;

    case 'Street Fighter':
        document.querySelector('#StrFtr').style.display = 'block';
    break;

    case 'Mega Man X':
        document.querySelector('#MM').style.display = 'block';
    break;

    case 'Super Castlevania':
        document.querySelector('#SC').style.display = 'block';
    break;

    case 'Jet Grind Radio':
        document.querySelector('#JGR').style.display = 'block';
    break;

    case 'Sonic Adventures':
        document.querySelector('#SA').style.display = 'block';
    break;

    case 'Ray-man 2':
        document.querySelector('#RM2').style.display = 'block';
    break;




}

