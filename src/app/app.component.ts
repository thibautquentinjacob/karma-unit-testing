import { Component } from '@angular/core';
import { Point } from './models/point/point.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public point: Point;

  public constructor() {
    this.point = new Point({ x: 3, y: 4 });
  }
}
