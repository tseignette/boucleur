export class Validator {
  static tempo (tempo: unknown) {
    if (typeof tempo === 'number' && tempo >= 1) {
      return tempo
    }

    return null
  }
}
