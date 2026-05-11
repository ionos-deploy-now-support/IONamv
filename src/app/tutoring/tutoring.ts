import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Menu } from './layout/menu/menu';

@Component({
  selector: 'amv-tutoring',
  imports: [RouterOutlet, Menu],
  templateUrl: './tutoring.html',
})
export class Tutoring {}
