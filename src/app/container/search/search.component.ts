import {
  Component,
  ElementRef,
  EventEmitter,
  Output,
  ViewChild,
} from '@angular/core';
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

  // query a reference of a DOM input search element
  @ViewChild('searchInput') searchInputElement: ElementRef;

  // updateSearchText(input: HTMLInputElement) {
  //   // this.searchText = event.target.value;
  //   this.searchText = input.value;
  //   this.onSearchTextChanged();
  // }
  updateSearchText() {
    this.searchText = this.searchInputElement.nativeElement.value;
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
