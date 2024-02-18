import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ContadorComponent } from './contador/contador.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ContadorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'hello-world';
  name = 'Alexis Eduardo Aguilar Zacarias';
  number = '20962';
  text = '5A';

}
