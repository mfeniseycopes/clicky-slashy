let _hero = {};
let _events = ["", "", "", "", ""];
let _eventIdx = 0;
let _listeners = {};
let _counter = 0;

// project
const GameStore = {

  registerListener(listener) {
    _listeners[_counter] = listener;
    return _counter++;
  },

  removeListener(id) {
    delete _listeners[id];
  },

  invokeListeners() {
    Object.keys(_listeners).map((id) => {
      _listeners[id]();
    });
  },

  clearEvents() {
    _events = ["", "", "", "", ""];
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
