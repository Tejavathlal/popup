import { Component } from '@angular/core';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.css']
})
export class CheckboxComponent {
  selectedEmployee: string = '';
  includeFormer: boolean = false;
  selectedMonth: string = '';
  selectedYear: string = '';
  showData: boolean = false;

  clearFilters() {
    this.selectedEmployee = '';
    this.includeFormer = false;
    this.selectedMonth = '';
    this.selectedYear = '';
    this.showData = false;
  }

  applyFilters() {
    // Implement filtering and data display logic here based on selected filters.
    // Once you have the data to display, set this.showData to true.
  }

}
