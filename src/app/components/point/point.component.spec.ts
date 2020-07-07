import { MockBuilder, MockRender, ngMocks } from 'ng-mocks';
import { Point } from 'src/app/models/point/point.model';
import { PointComponent } from './point.component';

describe('PointComponent', () => {
  beforeEach(() => MockBuilder(PointComponent));

  it('should create', () => {
    const fixture = MockRender(PointComponent);
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should display coordinates', () => {
    const point: Point = new Point({
      x: 2,
      y: 2,
    });
    const fixture = MockRender(PointComponent, {
      point: point,
    });

    const pointContainerElement = ngMocks.find(
      fixture.debugElement,
      '[data-automation-id=point-container]'
    );
    // Official way: const pointElement = fixture.debugElement.query(By.css('app-point'));
    expect(pointContainerElement.nativeElement.innerText).toEqual('(2 ; 2)');
  });

  it('should display updated coordinates', () => {
    const updatedPoint: Point = new Point({
      x: 3,
      y: 4,
    });
    const fixture = MockRender(PointComponent, {
      point: new Point({
        x: 2,
        y: 2,
      }),
    });
    fixture.componentInstance.point = updatedPoint;
    fixture.detectChanges();

    const pointContainerElement = ngMocks.find(
      fixture.debugElement,
      '[data-automation-id=point-container]'
    );
    expect(pointContainerElement.nativeElement.innerText).toEqual('(3 ; 4)');
  });

  it('should not display coordinates', () => {
    const fixture = MockRender(PointComponent, {
      point: null,
    });

    const pointContainerElement = ngMocks.find(
      fixture.debugElement,
      'app-point'
    );
    expect(pointContainerElement.nativeElement.innerText).toEqual('');
  });

  it('should call coordinatesClickHandler on click and emit updated coordinates', () => {
    const point: Point = new Point({ x: 2, y: 2 });
    const expectedPoint: Point = new Point({ x: 2, y: 3 });
    const pointUpdatedSpy: jasmine.Spy = jasmine.createSpy();
    const fixture = MockRender(PointComponent, {
      point: point,
      pointUpdated: pointUpdatedSpy,
    });

    const pointContainer = ngMocks.find(
      fixture.debugElement,
      '[data-automation-id="point-container"]'
    );
    pointContainer.nativeElement.click();
    expect(pointUpdatedSpy).toHaveBeenCalledWith(expectedPoint);
  });
});
