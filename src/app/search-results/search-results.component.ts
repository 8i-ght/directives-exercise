import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../navbar/navbar.component';
import { RandomBGColorDirective } from '../random-bg-color.directive';

@Component({
  selector: 'app-search-results',
  standalone: true,
  imports: [FormsModule, CommonModule, NavbarComponent, RandomBGColorDirective],
  templateUrl: './search-results.component.html',
  styleUrl: './search-results.component.css'
})
export class SearchResultsComponent {
  @Input() searchHistory: string[] = [];
}
