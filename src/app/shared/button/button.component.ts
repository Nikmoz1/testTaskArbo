import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent {
  @Input() name!: string;
  @Input() disable: boolean = false;
  @Input() myClass: string = 'default-button';
}
