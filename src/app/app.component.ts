import { Component, NgModule } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeroFormComponent } from './components/hero-form/hero-form.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeroFormComponent, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'template-driven-form';
}
