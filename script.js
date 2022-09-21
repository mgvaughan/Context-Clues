$(document).ready(function () {

    var nam = ['James', 'George', 'Jack', 'Allison', 'Kelly'];
    var location = ['Study', 'Copy Room', 'Kitchen', 'Closet', 'Bathroom', 'Garage', 'Foyer', 'Pool Room', 'Gym Room', 'Guest Room'];
    var weapon = ['Pillow Cases', 'Wrench', 'Candlestick', 'knife', 'Pistol', 'Blackjack', 'Bottle', 'Car', 'Rope', 'Drill', 'Saw', 'Hammer', 'Torch', 'TV Remote', 'Coffee Pot', 'Poison', 'Hedgers', 'Clippers', 'Axe', 'Spade'];

    for (var i = 1; i < 101; i++) {
        $('<h3 ' + 'id="' + i + '">Accusation ' + i + '</h3>').appendTo('body');
        $('h3').addClass('h3');
    }
  
    function alertText() {
        var nameIndex = (j + 4) % 5;
        var FRIEND_NAME = nam[nameIndex];
        var locationIndex = (j + 9) % 10;
        var LOCATION_NAME = location[locationIndex];
        var weaponIndex = (j + 19) % 20;
        var WEAPON_NAME = weapon[weaponIndex];

        return function () {
            alert (`Accusation ${j}: I accuse ${FRIEND_NAME}, with the ${WEAPON_NAME} in the ${LOCATION_NAME}!`);
        }
    }

    $('.h3').click(function (e) {
        j = Number(e.target.id);
        alertText()();
    })
})

