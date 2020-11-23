import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  loadedScreen = 'recipe';
  title = 'first-app';

  onNavigationSelected(screen: string) {
    this.loadedScreen = screen;
  }
}
