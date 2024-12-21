import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroeListComponent } from "./components/heroe-list/heroe-list.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, HeroeListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ejercicio17';
}
