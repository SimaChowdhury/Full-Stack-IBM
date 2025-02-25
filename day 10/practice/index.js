let superHeroes = {
    1: {
        name: 'Batman',
        power: ['intelligence', 'money'],
        health: 45,
        villains: [
            { name: 'Redhood', health: 34 },
            { name: 'Twoface', health: 64 }
        ],
        metadata: { favouriteColor: 'red', age: 15 }
    },
    2: {
        name: 'Ironman',
        power: ['jarvis', 'money'],
        health: 33,
        villains: [
            { name: 'Manderin', health: 44 },
            { name: 'Titanium Man', health: 56 }
        ],
        metadata: { favouriteColor: 'blue', age: 13 }
    }
}
console.log(superHeroes["1"].health)
console.log(superHeroes["1"].villains[0].health)
console.log(superHeroes["1"].villains[1].health)
console.log(superHeroes["1"].villains[0].name)
console.log(superHeroes["1"].villains[1].name)

console.log(superHeroes["2"].villains[0].health)
console.log(superHeroes["2"].villains[1].health)
console.log(superHeroes["2"].villains[0].name)
console.log(superHeroes["2"].villains[1].name)

console.log(superHeroes["1"].metadata.favouriteColor)
console.log(superHeroes["2"].metadata.favouriteColor)
console.log(superHeroes["1"].metadata.age)
console.log(superHeroes["2"].metadata.age)

console.log(superHeroes["1"].power[0])
console.log(superHeroes["1"].power[1])
console.log(superHeroes["2"].power[0])
console.log(superHeroes["2"].power[1])