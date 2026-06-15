import { Component } from '@angular/core';

@Component({
  selector: 'ds-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
  standalone: true,   // <--- Add this
  imports: []         // <--- Add this (add CommonModule here if you use *ngIf)
})
export class AboutComponent {
}
