import { Requirement, RequirementArgumentNaNError } from './requirement.model';

describe('Requirement', () => {
  it('should be defined - volume is string', () => {
    const requirement: Requirement = new Requirement({
      volume: '3',
    });
    expect(requirement).toBeDefined();
  });

  it('should be defined - volume is number', () => {
    const requirement: Requirement = new Requirement({
      volume: 3,
    });
    expect(requirement).toBeDefined();
  });

  it('should not be defined requirement and should throw RequirementArgumentNaNError - data null', () => {
    let requirement: Requirement;
    try {
      requirement = new Requirement(null);
    } catch (e) {
      expect(requirement).not.toBeDefined();
      expect(e instanceof RequirementArgumentNaNError).toBeTruthy();
      expect(e.message).toEqual("Can't set empty value to Requirement.volume");
    }
  });

  it('should not be defined requirement and should throw RequirementArgumentNaNError - data.volume is missing', () => {
    let requirement: Requirement;
    const data: Object = { machin: 'truc' };
    try {
      requirement = new Requirement(data as { volume: string | number });
    } catch (e) {
      expect(requirement).not.toBeDefined();
      expect(e instanceof RequirementArgumentNaNError).toBeTruthy();
      expect(e.message).toEqual("Can't set empty value to Requirement.volume");
    }
  });
});

fdescribe('setVolume', () => {
  it('should set volume - number', () => {
    const requirement: Requirement = new Requirement({ volume: 0 });
    expect(requirement['_volume']).toEqual(0);
  });

  it('should set volume - string', () => {
    const requirement: Requirement = new Requirement({ volume: '0' });
    expect(requirement['_volume']).toEqual(0);
  });

  it('should not set volume and should throw RequirementArgumentNaNError - string is NaN', () => {
    let requirement: Requirement = new Requirement({ volume: 0 });
    try {
      requirement.setVolume('abc');
    } catch (e) {
      expect(e instanceof RequirementArgumentNaNError).toBeTruthy();
      expect(e.message).toEqual("Can't set string:abc to Requirement.volume");
      expect(requirement['_volume']).toEqual(0);
    }
  });
});
