import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
})
export class InputComponent {
  @Input() placeholder = '';
  @Input() type: string = 'string';
  @Input() fGroup!: FormGroup;
  @Input() hint!: string;
  @Input() label!: string;

  @Input() myClass!: string;
  @Input() fControlName!: string;
}
