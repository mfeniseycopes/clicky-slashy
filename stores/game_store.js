let _hero = {};
let _events = ["", "", "", "", ""];
let _eventIdx = 0;
let _listeners = [];

// project
const GameStore = {

  registerListener(listener) {
    _listeners.push(listener);
  },

  invokeListeners() {
    _listeners.forEach((listener) => {
      listener();
    });
  },

  enemies() {
    return _enemies;
  },

  events() {
    return _events;
  },

  hero() {
    return _hero;
  },

  newEvent(entityName, dmg) {

    _events[_eventIdx] = `${entityName} takes ${dmg} damage`;
    _eventIdx = (_eventIdx + 1) % 5;
    this.invokeListeners();
  },

  updateHero(hero) {
    _hero = hero;
    this.invokeListeners();
  }
};

module.exports = GameStore;
