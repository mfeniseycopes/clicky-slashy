import WeaponConstants from "./weapon_constants";

const EntityConstants = {

  HERO: {

  },

  DRAGON: {
  },

  RAT: {

  },

  SNAKE: {
    name: "",

    // base
    hp  : 5,
    atk : 1,
    spd : 0.05,
    agl : 5000,
    rng : 10,
    pcp : 200,
    wpn : WeaponConstants.KNIFE,
    rad : 20,

    // component refs
    charImg : "snake-1.jpg",
    charCSSClass : "snake"
  },

  SPIDER: {

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
