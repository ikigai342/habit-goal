import { MatIconModule } from '@angular/material/icon';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatButtonModule } from '@angular/material/button';
import { DeleteButtonComponent } from './delete-button/delete-button.component';
import { AddButtonComponent } from './add-button/add-button.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

const components = [
  DeleteButtonComponent,
  AddButtonComponent,
]

const modules = [
  CommonModule,
  MatButtonModule,
  MatIconModule,
  MatInputModule,
  FormsModule,
  ReactiveFormsModule,
]

@NgModule({
  declarations: [...components],
  imports: [ ...modules],
  exports: [ ...modules, ...components],
})
export class SharedModule { }
