const WeaponConstants = {

  KNIFE: {
    name : "Knife",
    rng : 10,
    duration: 0.2,

    // component refs
    refs: {
      wpnImg : "knife-1.png",
      wpnCSSClass : "knife"
    }
  },

  LIGHTSABER: {
    name : "Lightsaber",
    rng : 30,
    duration: 1,

    // component refs
    refs: {
      wpnImg : "lightsaber_blue.png",
      wpnCSSClass : "lightsaber"
    }
  },

  BUSTER: {
    name : "Buster Sword",
    rng : 100,
    duration: 0.7,

    // component refs
    refs: {
      wpnImg : "sword-buster.png",
      wpnCSSClass : "buster"
    }
  },

  AK47: {
    name : "AK-47",
    rng : 300,
    duration: 0.4,

    // component refs
    refs: {
      wpnImg : "ak47.png",
      wpnCSSClass : "ak47"
    }
  },

  AX: {
    name : "Ax",
    rng : 100,

    // component refs
    refs: {
      wpnImg : "ax.png",
      wpnCSSClass : "ax"
    }
  },

  BASEBALL_BAT: {
    name : "Baseball Bat",
    rng : 100,
    duration: 0.8,

    // component refs
    refs: {
      wpnImg : "baseball-bat.png",
      wpnCSSClass : "baseball-bat"
    }
  },

  CROWBAR: {
    name : "Crowbar",
    rng : 100,
    duration: 0.8,

    // component refs
    refs: {
      wpnImg : "crowbar.png",
      wpnCSSClass : "crowbar"
    }
  },

  SPEAR: {
    name : "Spear",
    rng : 200,
    duration : 1,

    // component refs
    refs: {
      wpnImg : "spear.png",
      wpnCSSClass : "spear"
    }
  },

  FLAMES: {
    name : "Flames",
    rng : 200,
    duration: 1,

    // component refs
    refs: {
      wpnImg : "flames.png",
      wpnCSSClass : "flames"
    }
  },

  HEARTS: {
    name : "Hearts",
    rng : 100,
    duration: 1,

    // component refs
    refs: {
      wpnImg : "hearts.png",
      wpnCSSClass : "hearts"
    }
  }

  /*
  DEMO: {
    name : "",  // just because
    rng : ,     // attack distance

    // component refs
    refs: {
      wpnImg : ,      // character image
      wpnCSSClass : , // set as className of weapon in component
    }
  }
  */

};

module.exports = WeaponConstants;
