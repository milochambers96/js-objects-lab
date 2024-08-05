const pokemon = require('./data.js')

const game = {
    party: [],
    gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },
    ],
    items: [
        { name: "potion", quantity: 4 },
        { name: "pokeball", quantity: 8 },
        { name: "rare candy", quantity: 99 },
    ],
}

//console.dir(pokemon, { maxArrayLength: null })

//console.log(pokemon[58].name);

//console.log(game)

/*
Exercise 3
1. Add a new property to the `game` object. Let's call it "difficulty".
2. Choose a value for "difficulty" that you think fits the game. Ex: "Easy", "Med" or "Hard". How would you assign it?


Solve Exercise 3 here:
*/

game.difficulty = 'Med';

/*
Exercise 4
1. Select a starter Pokémon from the `pokemon` array. Remember, a starter Pokémon's `starter` property is true.
2. Add this Pokémon to the `game.party` array. Which array method will you use to add them?


Solve Exercise 4 here:
*/


/* const starterPokemon = pokemon.filter((pokes) => {
    return pokes.starter === true
})

console.log(starterPokemon); */

const myStarter = pokemon[0];

//console.log(myStarter)

game.party.unshift(pokemon[0]);

// console.log(game.party)

/*
Exercise 5
1. Choose three more Pokémon from the `pokemon` array and add them to your party.
2. Consider different attributes like 'type' or 'HP' for your selection. Which array method will you use to add them?


Solve Exercise 5 here:
*/


const fireType = pokemon.filter((firePoke) => {
    return firePoke.type === 'fire';
})

// console.log(fireType)
// ! Chosen Arcanine - number 59 (index 58);

const waterType = pokemon.filter((waterPoke) => {
    return waterPoke.type === 'water';
})

//console.log(waterType);
//! chosen Gyardos - number 130 (index 129);

const highHealth = pokemon.filter((poke) => {
    return poke.hp > 100;
})

//console.log(highHealth)
//! Chosen Snorlax - number 143 (index142)

game.party.push(pokemon[58], pokemon[129], pokemon[142]);

//console.log(game.party)


/*
Exercise 6
1. Set the `completed` property to true for gyms with a difficulty below 3.
2. Think about how you'd loop through the `gyms` array to check and update the `completed` property.


Solve Exercise 6 here:
*/


/*

gyms: [
        { location: "Pewter City", completed: false, difficulty: 1 },
        { location: "Cerulean City", completed: false, difficulty: 2 },
        { location: "Vermilion City", completed: false, difficulty: 3 },
        { location: "Celadon City", completed: false, difficulty: 4 },
        { location: "Fuchsia City", completed: false, difficulty: 5 },
        { location: "Saffron City", completed: false, difficulty: 6 },
        { location: "Cinnabar Island", completed: false, difficulty: 7 },
        { location: "Viridian City", completed: false, difficulty: 8 },


*/

const firstThreeGyms = game.gyms.forEach((gym) => {
    if (gym.difficulty <= 3) {
        gym.completed = true;
    }
});

//console.log(game.gyms)

/*
Exercise 7
1. Evolve the starter Pokémon you added to your party earlier. Each starter Pokémon evolves into a specific one.
2. How would you replace the current starter Pokémon in your party with its evolved form?

Hint: 
  - Pokemon 1: Bulbasaur evolves into Pokemon 2: Ivysaur
  - Pokemon 4: Charmander evolves into Pokemon 5: Charmeleon
  - Pokemon 7: Squirtle evolves into Pokemon 8: Wartortle
  - Pokemon 25: Pikachu evolves into Pokemon 26: Raichu

More Hints: The existing starter Pokemon will be *replaced* in your party with the Pokemon it evolved into. When working with an array of objects, the splice() array method is ideal for replacing one element with another. 


Solve Exercise 7 here:
*/

game.party.splice(0, 1, pokemon[1]);

console.log(game.party)

/*
Exercise 8
1. Print the name of each Pokémon in your party.
2. Consider using a loop or an array method to access each Pokémon's name.

Solve Exercise 8 here:
*/

const currentParty = game.party.forEach((member) => {
    console.log(`${member.name} is a party memember.`);
})


/*
Exercise 9
1. Can you print out all the starter Pokémon from the `pokemon` array?
2. Think about how you can identify a starter Pokémon and then log their names.


Solve Exercise 9 here:
*/

/*const starterPokemon = pokemon.filter((pokes) => {
    return pokes.starter === true
})

console.log(starterPokemon)
*/

const starterPokemon = pokemon.forEach((poke) => {
    if (poke.starter) {
        console.log(`${poke.name} is a potential starter.`);
    }
})



/*
Exercise 10
Create a method called `catchPokemon` and add it to the `game` object. You should not need to edit the original game object directly. This method should:
  - Accept an object as a parameter called `pokemonObj`
  - Add the `pokemonObj` to the `game.party` array.
  - not return anything

After writing this method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.

Solve Exercise 10 here:
*/

game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj)
};

game.catchPokemon(pokemon[134])

//console.log(game)
//console.log(game.party)


/*
Exercise 11
1. Copy the `catchPokemon` method that you just wrote above, and paste it below. Modify it so that it also decreases the number of pokeballs in your inventory each time you catch a Pokémon.
2. How will you find and update the quantity of pokeballs in the `game.items` array?

Tips:
For this exercise, it's okay to have a negative number of pokeballs.
After updating the method, call it and pass in a Pokemon object of your choice from the `pokemon` data to catch it.
Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 11 here:

*/



game.catchPokemon = function (pokemonObj) {
    game.party.push(pokemonObj);
    return game.items[1].quantity -= 1;
};

game.catchPokemon(pokemon[64])

//console.log(game.items)
//console.log(game.party)



/*
Exercise 12
1. Similar to Exercise 6, now complete gyms with a difficulty below 6. How will you approach this?
 (change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 12 here:
*/

const secondThreeGyms = game.gyms.forEach((gym) => {
    if (gym.difficulty <= 6) {
        gym.completed = true;
    }
});

//console.log(game);

/*
Exercise 13
1. Create a `gymStatus` method in `game` to tally completed and incomplete gyms.
2. How will you iterate through the `gyms` array and update the tally? Remember to log the final tally.

This method should:
  - Not accept any arguments.
  - Initially create a constant `gymTally`, which is an object that has two 
    properties: `completed` and `incomplete`, both of which are initially set to 0.
  - Iterate through the objects in the `game.gyms` array and update the 
    properties on `gymTally` as follows: 
    - `completed` should count how many gyms in the array have a value of `true` 
      for their `completed` property. 
    - `incomplete` should count how many gyms in the array have a value of 
      `false` for their `completed` property.
  - Log the value of `gymTally`.
  - The method should not return anything.

For example, if five gym objects have a value of `true` on their `completed` property and three gym objects have a value of `false` on their `completed` property, the logged value would be: `{ completed: 5, incomplete: 3 }`.

Solve Exercise 13 here:
*/

game.gymStatus = function () {
    const gymTally = { completed: 0, incomplete: 0 }
    game.gyms.forEach((gym) => {
        if (gym.completed === true) {
            gymTally.completed += 1;
        } else {
            gymTally.incomplete += 1;
        }
    })
    console.log(gymTally)
}

//game.gymStatus();

/*
Exercise 14
1. Add a `partyCount` method to `game` that counts the number of Pokémon in your party.

This method should:
  - Not accept any arguments.
  - Count the number of Pokemon in the party.
  - return the found number of Pokemon in the party.

Solve Exercise 14 here:
*/


game.partyCount = function () {
    const partySize = game.party.length;
    return partySize
}

//console.log(game.party);

//console.log(game.partyCount());


/*
Exercise 15
1. Now, complete gyms with a difficulty below 8. Reflect on how this is similar to or different from the previous gym exercises.
(change the value of `complete` in the qualifying objects from false to true).

Solve Exercise 15 here:
*/

const finaltwoGyms = game.gyms.forEach((gym) => {
    if (gym.completed !== true) {
        gym.completed = true;
    }
});

//console.log(game.gyms)


/*
Exercise 16
1. Log the entire `game` object to the console. Take a moment to review the changes you've made throughout the exercises.


Solve Exercise 16 here:
*/

//console.log(game)

/*
Exercise 17
1. Arrange the Pokémon in `game.party` by their HP. The one with the highest HP should come first.
2. You'll need to use the `.sort()` method. How does the compare function work in sorting numbers?


Solve Exercise 17 here:
*/

game.party.sort((a, b) => {
    return b.hp - a.hp
})

//console.log(game.party);

/*
Exercise 18
Add a new property to the `game` object called `collection` and initialize its value to an empty array.

Copy the `catchPokemon` method you wrote in Exercise Twelve and paste it below. Modify it so that:
  - Ensure that no more than six Pokemon can be in the party at any time. 
    Excess Pokemon should be placed in the `game.collection` array.
  - It's up to you how to distribute Pokemon in a situation where more than six 
    would be placed into the `game.party` array.

Again, for this exercise, it's okay to have a negative number of pokeballs.

After updating the method, use it by calling it and passing in a pokemon object of your choice from the `pokemon` data to catch it.

Also, log the `game.items` array to confirm that the pokeball quantity is being decremented.

Solve Exercise 18 here:
*/

game.collection = [];

game.catchPokemon = function (pokemonObj) {
    if (game.party.length < 6) {
        game.party.push(pokemonObj)
    } else {
        game.collection.push(pokemonObj)
    }
    return game.items[1].quantity -= 1;
};

game.catchPokemon(pokemon[149]);


//console.log(game.collection);



/*
Exercise 19
Copy the `catchPokemon` method that you just wrote above, and paste it below. The time has come to make it so that we cannot catch a Pokemon when we do not have any pokeballs to catch it with. 

Modify the method so that if there are no pokeballs a message will be displayed that there are not enough pokeballs to catch the desired Pokemon.

Also, ensure that the Pokemon isn't added to the `game.party` or the `game.collection`.

Solve Exercise 19 here:
*/


game.catchPokemon = function (pokemonObj) {
    if (game.party.length < 6 && game.items[1].quantity > 0) {
        game.party.push(pokemonObj);
        game.items[1].quantity -= 1;
    } else if (game.party.length >= 6 && game.items[1].quantity > 0) {
        game.collection.push(pokemonObj);
        game.items[1].quantity -= 1;
    } else if (game.items[1].quantity < 1) {
        return (`You are unable to catch the pokemon, you have ${game.items[1].quantity} ${game.items[1].name}s in your inventory. Visit a PokeMart to purchase some more.`);
    }
}

/*console.log(game.catchPokemon(pokemon[144]));
console.log(game.catchPokemon(pokemon[145]));
console.log(game.catchPokemon(pokemon[146]));
console.log(game.catchPokemon(pokemon[147]));
console.log(game.catchPokemon(pokemon[148]));
console.log(game.catchPokemon(pokemon[150]));
console.log(game.catchPokemon(pokemon[100]));*/


