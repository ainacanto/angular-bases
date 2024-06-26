import { Component } from '@angular/core';

@Component({ //transforma la clase en un componente
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  public title: string = 'Mi app';

}
