import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  value = '';
  canAdd?: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  prepareForAdd() {
    this.canAdd = true;
  }

  addValue() {
    this.canAdd = false;
  }

}
