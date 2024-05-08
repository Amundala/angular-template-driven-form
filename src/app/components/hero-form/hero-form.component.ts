import { Component } from '@angular/core';
import { Hero } from '../../interfaces/heroClass';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero-form',
  standalone: true,
  imports: [NgFor, FormsModule, CommonModule],
  templateUrl: './hero-form.component.html',
  styleUrl: './hero-form.component.css',
})
export class HeroFormComponent {
  powers = ['Really Smart', 'Super Flexible', 'Super Hot', 'Weather Changer'];

  //--- class instance ----
  model = new Hero(18, 'Dr. IQ', this.powers[0], 'Chuck Overstreet');
  submitted = false;
  onSubmit() {
    this.submitted = true;
  }
}
