const $btn = document.getElementById('btn-kick');

const createPokemon = (name, defaultHP, damageHP, elHP, elProgressbar) => ({
    name,
    defaultHP,
    damageHP,
    elHP,
    elProgressbar,
}); 

const character = createPokemon(
    'Pikachu',
    100,
    100,
    document.getElementById('health-character'),
    document.getElementById('progressbar-character')
);

const enemy = createPokemon(
    'Charmander', 
    100, 
    100, 
    document.getElementById('health-enemy'), 
    document.getElementById('progressbar-enemy')
);   

$btn.addEventListener('click', function () {
    console.log('Kick');
    changeHP(random(20), character);
    changeHP(random(20), enemy);
});

const $ult = document.createElement('button');
$ult.classList.add('button');
$ult.style.marginTop = '20px';
$ult.innerHTML = 'Ultimate';
$ult.addEventListener('click', function () {
    changeHP(100, enemy);
});
$btn.parentElement.style.flexDirection = 'column';
$btn.parentElement.appendChild($ult);

function init() {
    console.log('Start Game!');
    renderHP(character);
    renderHP(enemy);
}

function renderHP(person) {
    renderHPLife(person);
    renderProgressbarHP(person);
}

function renderHPLife(person) {
    person.elHP.innerText = person.damageHP + ' / ' + person.defaultHP;
}

function renderProgressbarHP(person) {
    person.elProgressbar.style.width = person.damageHP + '%';
}

function changeHP(count, person) {
    if (person.damageHP < count) {
        person.damageHP = 0;
        alert('Poor fellow ' + person.name + ', lose fight!');
        $btn.disabled = true;
        $ult.disabled = true;
    } else {
        person.damageHP -= count;
    }
    renderHP(person);
}

function random(num) {
    return Math.ceil(Math.random() * num);
}

init();
