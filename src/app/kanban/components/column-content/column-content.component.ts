import { Component, Input } from '@angular/core';
import { ColumnInterface } from '../../types/kanban.interface';

@Component({
  selector: 'app-column-content',
  templateUrl: './column-content.component.html',
  styleUrls: ['./column-content.component.scss']
})
export class ColumnContentComponent {
  @Input() columnContent?: ColumnInterface;

  constructor() {}

}
