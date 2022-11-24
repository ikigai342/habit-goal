import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-add-button',
  templateUrl: './add-button.component.html',
  styleUrls: ['./add-button.component.scss']
})
export class AddButtonComponent implements OnInit {
  value = '';
  canAdd?: boolean;

  @Output() add = new EventEmitter<boolean>();
  @Output() valueAdd = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  prepareForAdd() {
    this.canAdd = true;
  }

  cancel() {
    this.canAdd = false;
  }

  addValue() {
    this.valueAdd.emit(this.value);
    this.add.emit(true);
    this.canAdd = false;
  }

}
