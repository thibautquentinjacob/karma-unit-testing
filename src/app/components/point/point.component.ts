import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Point } from 'src/app/models/point/point.model';

@Component({
  selector: 'app-point',
  templateUrl: './point.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PointComponent {
  @Input() readonly point: Point;
  @Output() readonly pointUpdated: EventEmitter<Point> = new EventEmitter();

  public coordinatesClickHandler(): void {
    const updatedPoint: Point = new Point({
      ...this.point,
      y: this.point.y + 1,
    });
    this.pointUpdated.emit(updatedPoint);
  }
}
