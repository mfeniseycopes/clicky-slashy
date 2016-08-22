import WeaponConstants from "./weapon_constants";

const EntityConstants = {

  HERO: {
    // base
    name: "Hero",
    hp  : 100,
    atk : 10,
    spd : 0.2,
    agl : 1000,
    wpn : WeaponConstants.BUSTER,
    rad : 20,

    // component refs
    refs: {
      charCSSClass : "hero"
    }
  },


  BAT: {
    // base
    name: "Bat",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.AK47,
    rad : 40,

    // component refs
    refs: {
      charCSSClass : "bat"
    }
  },

  DRAGON: {
    // base
    name: "Dragon",
    hp  : 100,
    atk : 10,
    spd : 0.2,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.FLAMES,
    rad : 100,

    // component refs
    refs: {
      charCSSClass : "dragon"
    }
  },

  GRUB: {
    // base
    name: "Grub",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.CROWBAR,
    rad : 50,

    // component refs
    refs: {
      charCSSClass : "grub"
    }
  },

  HAND: {
    // base
    name: "Hand",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.BASEBALL_BAT,
    rad : 50,

    // component refs
    refs: {
      charCSSClass : "hand"
    }
  },

  JOHN_CENA: {
    // base
    name: "John Cena",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.HEARTS,
    rad : 100,

    // component refs
    refs: {
      charCSSClass : "john-cena"
    }
  },

  RAT: {
    // base
    name: "Rat",
    hp  : 5,
    atk : 1,
    spd : 0.05,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.AX,
    rad : 50,

    // component refs
    refs: {
      charCSSClass : "rat"
    }
  },

  SKELETON: {
    // base
    name: "Skeleton",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.SPEAR,
    rad : 100,

    // component refs
    refs: {
      charCSSClass : "skeleton"
    }
  },

  SNAKE: {
    // base
    name: "Snake",
    hp  : 20,
    atk : 3,
    spd : 0.1,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.LIGHTSABER,
    rad : 50,

    // component refs
    refs: {
      charCSSClass : "snake"
    }
  },

  SPIDER: {
    // base
    name: "Spider",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.KNIFE,
    rad : 50,

    // component refs
    refs: {
      charCSSClass : "spider"
    }
  },

  TREX: {
    // base
    name: "T-Rex",
    hp  : 30,
    atk : 5,
    spd : 0.075,
    agl : 5000,
    pcp : 200,
    wpn : WeaponConstants.LIGHTSABER,
    rad : 100,

    // component refs
    refs: {
      charCSSClass : "t-rex"
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
