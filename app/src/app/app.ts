import { Component, signal } from '@angular/core';
import { AboutComponent } from "./components/about/about";
import { ContactComponent } from "./components/contact/contact";
import { HomeComponent } from "./components/home/home";
import { Projects } from "./components/projects/projects";

@Component({
  selector: 'app-root',
  imports: [AboutComponent, HomeComponent, ContactComponent, Projects],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('app');
}
