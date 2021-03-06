const { kitties } = require('./datasets/kitties');
const { clubs } = require('./datasets/clubs');
const { mods } = require('./datasets/mods');
const { cakes } = require('./datasets/cakes');
const { classrooms } = require('./datasets/classrooms');
const { breweries } = require('./datasets/breweries');
const { instructors, cohorts } = require('./datasets/turing');
const { bosses, sidekicks } = require('./datasets/bosses');
const { constellations, stars } = require('./datasets/astronomy');
const { weapons, characters } = require('./datasets/ultima');






// SINGLE DATASETS
// =================================================================

// DATASET: kitties from ./datasets/kitties
const kittyPrompts = {
  orangeKittyNames() {
    // Return an array of just the names of kitties who are orange e.g.
    // ['Tiger', 'Snickers']

    const result = kitties
      .filter((kitten) => {
        return kitten.color === 'orange';
      })
      .map((kitten) => {
        return kitten.name;
      });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByAge() {
    // Sort the kitties by their age

    const result = kitties.sort((a, b) => {
      return b.age - a.age;
    })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  growUp() {
    // Return an array of kitties who have all grown up by 2 years e.g.
    // [{
    //   name: 'Felicia',
    //   age: 4,
    //   color: 'grey'
    // },
    // {
    //   name: 'Tiger',
    //   age: 7,
    //   color: 'orange'
    // },
    // ...etc]

    const result = kitties.map((kitten) => {
      kitten.age += 2;
      return kitten;
    });
    return result;
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: clubs from ./datasets/clubs
const clubPrompts = {
  membersBelongingToClubs() {
    // Create an object whose keys are the names of people, and whose values are
    // arrays that include the names of the clubs that person is a part of. e.g. 
    // {
    //   Louisa: ['Drama', 'Art'],
    //   Pam: ['Drama', 'Art', 'Chess'],
    //   ...etc
    // }

    const result = clubs.reduce((acc, club) => {
      club.members.forEach((member) => {
        if (acc[member] === undefined) {
          acc[member] = [];
          acc[member].push(club.club);
        } else {
          acc[member].push(club.club);
        }
      })
      return acc;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: mods from ./datasets/mods
const modPrompts = {
  studentsPerMod() {
    // Return an array of objects where the keys are mod (the number of the module)
    // and studentsPerInstructor (how many students per instructor there are for that mod) e.g.
    // [
    //   { mod: 1, studentsPerInstructor: 9 },
    //   { mod: 2, studentsPerInstructor: 11 },
    //   { mod: 3, studentsPerInstructor: 10 },
    //   { mod: 4, studentsPerInstructor: 8 }
    // ]

    const result = mods.map((e) => (
      {
        mod: e.mod,
        studentsPerInstructor: e.students / e.instructors
      }
    ));
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: cakes from ./datasets/cakes
const cakePrompts = {
  stockPerCake() {
    // Return an array of objects that include just the flavor of the cake and how
    // much of that cake is in stock e.g.
    // [ 
    //    { flavor: 'dark chocolate', inStock: 15 },
    //    { flavor: 'yellow', inStock: 14 },
    //    ..etc
    // ]

    const result = cakes.map((cake) => {
      let { cakeFlavor: flavor, inStock } = cake;
      return { flavor, inStock };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  onlyInStock() {
    // Return an array of only the cakes that are in stock
    // e.g.
    // [
    //   {
    //   cakeFlavor: 'dark chocolate',
    //   filling: null,
    //   frosting: 'dark chocolate ganache',
    //   toppings: ['dutch process cocoa', 'toasted sugar', 'smoked sea salt'],
    //   inStock: 15
    // },
    // {
    //   cakeFlavor: 'yellow',
    //   filling: 'citrus glaze',
    //   frosting: 'chantilly cream',
    //   toppings: ['berries', 'edible flowers'],
    //   inStock: 14
    // },
    // ..etc
    // ]

    const result = cakes.filter((cake) => {
      return cake.inStock > 0;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalInventory() {
    // Return the total amount of cakes in stock e.g.
    // 59

    const result = cakes.reduce((total, cake) => {
      total += cake.inStock;
      return total;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  allToppings() {
    // Return an array of all unique toppings (no duplicates) needed to bake
    // every cake in the dataset e.g.
    // ['dutch process cocoa', 'toasted sugar', 'smoked sea salt', 'berries', ..etc]

    const result = cakes.reduce((ingredients, cake) => {
      ingredients.push(...cake.toppings);
      return ingredients;
    }, [])
      .filter((ingredient, index, flatArrIngredients) => {
        return flatArrIngredients.indexOf(ingredient) === index;
      })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  groceryList() {
    // I need to make a grocery list. Please give me an object where the keys are
    // each topping, and the values are the amount of that topping I need to buy e.g.
    // { 
    //    'dutch process cocoa': 1,
    //    'toasted sugar': 3,
    //    'smoked sea salt': 3,
    //    'berries': 2, 
    //    ...etc
    // }

    const result = cakes.reduce((ingredients, cake) => {
      ingredients.push(...cake.toppings);
      return ingredients;
    }, [])
      .reduce((ingredientList, ingredient) => {
        if (ingredientList[ingredient] === undefined) {
          ingredientList[ingredient] = 1;
        } else {
          ingredientList[ingredient]++;
        }
        return ingredientList;
      }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: classrooms from ./datasets/classrooms
const classPrompts = {
  feClassrooms() {
    // Create an array of just the front-end classrooms. e.g.
    // [
    //   { roomLetter: 'A', program: 'FE', capacity: 32 },
    //   { roomLetter: 'C', program: 'FE', capacity: 27 },
    //   { roomLetter: 'E', program: 'FE', capacity: 22 },
    //   { roomLetter: 'G', program: 'FE', capacity: 29 }
    // ]

    const result = classrooms.filter((classroom) => {
      return classroom.program === 'FE';
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  totalCapacities() {
    // Create an object where the keys are 'feCapacity' and 'beCapacity',
    // and the values are the total capacity for all classrooms in each program e.g.
    // { 
    //   feCapacity: 110,
    //   beCapacity: 96
    // }

    const result = classrooms.reduce((capacity, classroom) => {
      const program = classroom.program.toLowerCase();
      capacity[`${program}Capacity`] += classroom.capacity;
      return capacity;
    }, { feCapacity: 0, beCapacity: 0 });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  sortByCapacity() {
    // Return the array of classrooms sorted by their capacity (least capacity to greatest)

    const result = classrooms.sort((a, b) => {
      return a.capacity - b.capacity;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: breweries from ./datasets/breweries
const breweryPrompts = {
  getBeerCount() {
    // Return the total beer count of all beers for every brewery e.g.
    // 40

    const result = breweries.reduce((beerCount, brewery) => {
      beerCount += brewery.beers.length;
      return beerCount;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  getBreweryBeerCount() {
    // Return an array of objects where each object has the name of a brewery
    // and the count of the beers that brewery has e.g.
    // [
    //  { name: 'Little Machine Brew', beerCount: 12 },
    //  { name: 'Ratio Beerworks', beerCount: 5},
    // ...etc.
    // ]

    const result = breweries.map((brewery) => {
      return { name: brewery.name, beerCount: brewery.beers.length }
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  findHighestAbvBeer() {
    // Return the beer which has the highest ABV of all beers
    // e.g.
    // { name: 'Barrel Aged Nature\'s Sweater', type: 'Barley Wine', abv: 10.9, ibu: 40 }

    const result = breweries.reduce((beerList, brewery) => {
      beerList.push(...brewery.beers);
      return beerList;
    }, [])
      .reduce((highABV, beer) => {
        if (!highABV.abv || highABV.abv < beer.abv) {
          highABV = beer;
        }
        return highABV;
      }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DOUBLE DATASETS
// =================================================================

// DATASET: instructors, cohorts from ./datasets/turing
const turingPrompts = {
  studentsForEachInstructor() {
    // Return an array of instructors where each instructor is an object
    // with a name and the count of students in their module. e.g. 
    // [
    //  { name: 'Pam', studentCount: 21 },
    //  { name: 'Robbie', studentCount: 18 }
    // ]

    const result = instructors.map((instructor) => {
      const tempObj = { name: instructor.name };

      tempObj.studentCount = cohorts.filter((cohort) => {
        return instructor.module === cohort.module;
      })[0].studentCount

      return tempObj;
    })
    return result;
    /*
      Karin's Answer: 
      Q: Did you know to use find? Why?
        A: Just knew from context of question.
      Q: Do you refactor after or before you solve?
        A: After each problem.

    const result = instructors.map(instructor => {
      let matchingMod = cohorts.find(cohort => instructor.module === cohort.module);
      return {name: instructor.name, studentCount: matchingMod.studentCount}
    })
    */

    // Annotation:
    // Write your annotation here as a comment
  },

  studentsPerInstructor() {
    // Return an object of how many students per teacher there are in each cohort e.g.
    // { 
    // cohort1806: 9,
    // cohort1804: 10.5
    // }

    const result = cohorts.reduce((studentsPerInstructorObj, cohort) => {
      let numTeacher = 0;

      instructors.forEach((instructor) => {
        if (instructor.module === cohort.module) {
          numTeacher++;
        }
      });

      studentsPerInstructorObj[`cohort${cohort.cohort}`] = cohort.studentCount / numTeacher;
      return studentsPerInstructorObj;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  modulesPerTeacher() {
    // Return an object where each key is an instructor name and each value is
    // an array of the modules they can teach based on their skills. e.g.:
    // { 
    //   Leta: [2, 4],
    //   Nathaniel: [2],
    //   Robbie: [4],
    //   Pam: [2, 4]
    // }

    const result = instructors.reduce((instructorQualList, instructor) => {
      let canTeach = false;
      cohorts.forEach((cohort) => {
        canTeach = cohort.curriculum.some((subject) => {
          return instructor.teaches.indexOf(subject) > -1;
        })
        if (canTeach && instructorQualList[instructor.name]) {
          instructorQualList[instructor.name].push(cohort.module);
        }
        else if (!instructorQualList[instructor.name] && canTeach) {
          instructorQualList[instructor.name] = [];
          instructorQualList[instructor.name].push(cohort.module);
        }
      })
      return instructorQualList;
    }, {});
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  curriculumPerTeacher() {
    // Return an object where each key is a curriculum topic and each value is
    // an array of instructors who teach that topic e.g.:
    // { 
    //   html: [ 'Travis', 'Louisa' ],
    //   css: [ 'Travis', 'Louisa' ],
    //   javascript: [ 'Travis', 'Louisa', 'Christie', 'Will' ],
    //   recursion: [ 'Pam', 'Leta' ]
    // }

    const result = cohorts.map((cohort) => {
      return cohort.curriculum;
    })
      .filter((subject, index, currArr) => {
        return currArr.indexOf(subject) === index;
      })
      .reduce((flatSubjects, subjects) => {
        flatSubjects.push(...subjects);

        return flatSubjects;
      }, [])
      .reduce((subjectsTeachersTeach, subject) => {
        instructors.forEach((instructor) => {
          if (instructor.teaches.includes(subject) &&
            subjectsTeachersTeach[subject] &&
            !subjectsTeachersTeach[subject].includes(instructor.name)) {

            subjectsTeachersTeach[subject].push(instructor.name);
          } else if (instructor.teaches.includes(subject)) {

            subjectsTeachersTeach[subject] = [];
            subjectsTeachersTeach[subject].push(instructor.name);
          }
        })
        return subjectsTeachersTeach;
      }, {})
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: bosses, sidekicks from ./datasets/bosses
const bossPrompts = {
  bossLoyalty() {
    // Create an array of objects that each have the name of the boss and the sum
    // loyalty of all their sidekicks. e.g.:
    // [
    //   { bossName: 'Jafar', sidekickLoyalty: 3 },
    //   { bossName: 'Ursula', sidekickLoyalty: 20 },
    //   { bossName: 'Scar', sidekickLoyalty: 16 }
    // ]

    const result = Object.keys(bosses).map((bossKey) => {
      let {
        name: bossName,
        sidekickLoyalty = 0
      } = bosses[bossKey];

      //iterate through each sidekick in boss
      bosses[bossKey].sidekicks.map((bossSidekick) => {
        //grab their name 
        //find them in teh sidekick array
        //add their loyalty to their boss sidekickloyaltyscore
        sidekickLoyalty += sidekicks.find((sidekick) => {
          return sidekick.name === bossSidekick.name;
        }).loyaltyToBoss
      })
      return { bossName, sidekickLoyalty };
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: constellations, stars } from ./datasets/astronomy
const astronomyPrompts = {
  starsInConstellations() {
    // Return an array of all the stars that appear in any of the constellations
    // listed in the constellations object e.g.
    // [ 
    //   { name: 'Rigel',
    //     visualMagnitude: 0.13,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 860,
    //     color: 'blue' },
    //   { name: 'Betelgeuse',
    //     visualMagnitude: 0.5,
    //     constellation: 'Orion',
    //     lightYearsFromEarth: 640,
    //     color: 'red' }
    // ]

    const result = Object.keys(constellations)
      .reduce((starNames, constellationKey) => {
        starNames.push(...constellations[constellationKey].stars);
        return starNames;
      }, [])
      .filter((starName, index, currArr) => {
        return currArr.indexOf(starName) === index;
      })
      .filter((filteredStarName) => {

        return stars.find((currStar) => {
          return currStar.name === filteredStarName;
        });
      })
      .map((correctStar) => {
        return stars.find((currStar) => {
          return currStar.name === correctStar
        })
      })
      .sort((a, b) => {
        return b.lightYearsFromEarth - a.lightYearsFromEarth;
      })
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  starsByColor() {
    // Return an object with keys of the different colors of the stars,
    // whose values are arrays containing the star objects that match e.g.
    // {
    //   blue: [{obj}, {obj}, {obj}, {obj}, {obj}],
    //   white: [{obj}, {obj}],
    //   yellow: [{obj}, {obj}],
    //   orange: [{obj}],
    //   red: [{obj}]
    // }

    const result = stars
      .reduce((colorObj, star) => {
        if (!colorObj[star.color]) {
          colorObj[star.color] = [];
        }
        colorObj[star.color].push(star);
        return colorObj;
      }, {})


    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  constellationsStarsExistIn() {
    // Return an array of the names of the constellations that the brightest stars are part of e.g.
    // [ 'Canis Major',
    //   'Carina',
    //   'Boötes',
    //   'Lyra',
    //   'Auriga',
    //   'Orion',
    //   'Canis Minor',
    //   'Eridanus',
    //   'Orion',
    //   'Centaurus' ]

    const result = stars.map((star) => {
      return star.constellation;
    });
    return result;

    // Annotation:
    // Write your annotation here as a comment
  }
};






// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------
// ---------------------------------------------------------------------------






// DATASET: charaters, weapons from ./datasets/ultima
const ultimaPrompts = {
  totalDamage() {

    // Return the sum of the amount of damage for all the weapons that our characters can use
    // Answer => 113

    const result = characters.reduce((sumDamage, character) => {
      character.weapons.forEach((weaponName) => {
        sumDamage += weapons[weaponName].damage;
      })
      return sumDamage;
    }, 0);
    return result;

    // Annotation:
    // Write your annotation here as a comment
  },

  charactersByTotal() {

    // Return the sum damage and total range for each character as an object. 
    // ex: [ { Avatar: { damage: 27, range: 24 }, { Iolo: {...}, ...}

    const result = characters
      .reduce((sumDmgRange, character) => {
        let range = 0;
        let damage = 0;
        character.weapons.forEach((weaponName) => {
          damage += weapons[weaponName].damage
          range += weapons[weaponName].range
        })
        sumDmgRange.push({ [character.name]: { damage, range } });
        return sumDmgRange;
      }, [])
   

    return result;

    // Annotation:
    // Write your annotation here as a comment
  },
};

module.exports = {
  breweryPrompts,
  turingPrompts,
  clubPrompts,
  bossPrompts,
  classPrompts,
  modPrompts,
  kittyPrompts,
  cakePrompts,
  astronomyPrompts,
  ultimaPrompts
};