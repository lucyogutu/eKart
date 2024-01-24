import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './search.component.html',
  styleUrl: './search.component.css',
})
export class SearchComponent {
  searchText: string = '';

  updateSearchText(input: HTMLInputElement) {
    // this.searchText = event.target.value;
    this.searchText = input.value;
    this.onSearchTextChanged();
  }
  @Output() //used to bind with parent component
  // create an event
  searchTextChanged: EventEmitter<string> = new EventEmitter<string>();

  // raise custom event and bind within the component event
  onSearchTextChanged() {
    this.searchTextChanged.emit(this.searchText);
  }
}
