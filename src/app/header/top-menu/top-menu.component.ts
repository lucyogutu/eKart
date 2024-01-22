import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'top-menu',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './top-menu.component.html',
  styleUrl: './top-menu.component.css',
})
export class TopMenuComponent {
  topMenuItems: string[] = [
    'Help',
    'Exchange and Returns',
    'Order Tracker',
    'Signup / Login',
  ];
}
