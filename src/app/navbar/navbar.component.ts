import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})

export class NavbarComponent {
  currentSearchTerm: string = '';
  @Output() onSearch: EventEmitter<string> = new EventEmitter<string>();

  addSearch() {
    if (this.currentSearchTerm.trim() !== '') {
      this.onSearch.emit(this.currentSearchTerm);
      this.currentSearchTerm = ''; // Clear the input field
    }
  }
}