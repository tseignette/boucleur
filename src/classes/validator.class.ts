export class Validator {
  static endBar (endBar: unknown, startBar: number, nbBars: number) {
    if (typeof endBar === 'number' && endBar > startBar && endBar <= nbBars) {
      return endBar
    }

    return null
  }

  static tempo (tempo: unknown) {
    if (typeof tempo === 'number' && tempo >= 1) {
      return tempo
    }

    return null
  }

  static startBar (startBar: unknown, nbBars: number) {
    if (typeof startBar === 'number' && startBar >= 1 && startBar < nbBars) {
      return startBar
    }

    return null
  }
}
