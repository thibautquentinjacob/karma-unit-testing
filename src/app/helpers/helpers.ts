export class Helpers {
  /**
   * Prevent the fields of an object to be mutated by freezing all its
   * sub-object fields recursively.
   *
   * @param {T} object - The object to freeze
   * @returns {T} Frozen object
   */
  public static deepFreeze<T>(object: T): T {
    Object.getOwnPropertyNames(object).forEach((name: string) => {
      const prop: unknown = object[name];

      if (prop && typeof prop === 'object') {
        Helpers.deepFreeze(prop);
      }
    });

    return Object.freeze(object);
  }
}
