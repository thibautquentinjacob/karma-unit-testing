export class RequirementArgumentNaNError extends Error {
  public constructor(message: string) {
    super(message);
    Object.setPrototypeOf(this, RequirementArgumentNaNError.prototype);
  }
}

export class Requirement {
  private _volume!: number;

  constructor(data: { volume: number | string }) {
    if (!data || !('volume' in data)) {
      throw new RequirementArgumentNaNError(
        `Can't set empty value to Requirement.volume`
      );
    }
    this.setVolume(data.volume);
  }

  public setVolume(volume: number | string): void {
    const value = Number.parseFloat(`${volume}`);
    if (Number.isNaN(value)) {
      throw new RequirementArgumentNaNError(
        `Can't set ${typeof volume}:${volume} to Requirement.volume`
      );
    }
    this._volume = value;
  }
}
