"use strict";

export default class Cycle {
  constructor(vertices) {
    this.vertices = vertices;
  }

  static fromStronglyConnectedComponent(stronglyConnectedComponent) {
    const vertices = stronglyConnectedComponent.getVertices(),
          cycle = new Cycle(vertices);
    
    return cycle;
  }
}
