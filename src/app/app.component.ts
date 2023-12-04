import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { SearchResultsComponent } from './search-results/search-results.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { RandomBGColorDirective } from './random-bg-color.directive';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, SearchResultsComponent, NavbarComponent, FormsModule, RandomBGColorDirective],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  searchHistory: string[] = [];

  updateSearchHistory(searchTerm: string) {
    this.searchHistory.push(searchTerm);
  }
}
