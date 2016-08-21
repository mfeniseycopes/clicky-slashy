import WeaponConstants from "./weapon_constants";

const EntityConstants = {

  HERO: {
    // base
    name: "Hero",
    hp  : 100,
    atk : 5,
    spd : 0.2,
    agl : 1000,
    wpn : WeaponConstants.KNIFE,
    rad : 20,

    // component refs
    refs: {
      charImg : "cat-hero.png",
      charCSSClass : "hero"
    }
  },

  DRAGON: {

  },

  RAT: {
    // base
    name: "Rat",
    hp  : 5,
    atk : 1,
    spd : 0.05,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.KNIFE,
    rad : 50,

    // component refs
    refs: {
      charImg : "snake-1.png",
      charCSSClass : "snake"
    }
  },

  SNAKE: {
    // base
    name: "Snake",
    hp  : 5,
    atk : 1,
    spd : 0.05,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.KNIFE,
    rad : 50,

    // component refs
    refs: {
      charImg : "snake-1.png",
      charCSSClass : "snake"
    }
  },

  SPIDER: {
    // base
    name: "Spider",
    hp  : 5,
    atk : 1,
    spd : 0.05,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.KNIFE,
    rad : 60,

    // component refs
    refs: {
      charImg : "spider-1.png",
      charCSSClass : "spider"
    }
  }

  /*
  DEMO: {
    name: "", // output on action board

    // base
    hp  : , // hit points
    atk : , // damage done
    spd : , // rate of movement
    agl : , // rate of attack
    rng : , // how far attacks reach
    pcp : , // how far to perceive hero
    wpn : , // weapon (constant from WeaponConstants)
    rad : , // radius (all entities are circles)

    // component refs
    charImg : , // character image
    charCSSClass :  // set as className in component
  }

  STUB: {
    name: "",

    // base
    hp  : ,
    atk : ,
    spd : ,
    agl : ,
    rng : ,
    pcp : ,
    wpn : ,
    rad : ,

    // component refs
    charImg : ,
    charCSSClass :
  }
*/

};

module.exports = EntityConstants;
