export default class Building {
  constructor(sqft) {
    this._sqft = sqft;

    // Check if the subclass overrides evacuationWarningMessage
    // If this method is exactly the same as the one on Building's prototype, throw an error
    if (this.constructor !== Building && this.evacuationWarningMessage === Building.prototype.evacuationWarningMessage) {
      throw new Error("Class extending Building must override evacuationWarningMessage");
    }
  }

  get sqft() {
    return this._sqft;
  }

  evacuationWarningMessage() {
    // This method should be overridden by subclasses
    throw new Error("Class extending Building must override evacuationWarningMessage");
  }
}
