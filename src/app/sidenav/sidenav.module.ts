import { SharedModule } from './../shared/shared.module';
import { GoalModule } from './../goal/goal.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ShellComponent } from './shell/shell.component';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon'

const components = [
  ShellComponent,
]

const modules = [
  CommonModule,
  MatSidenavModule,
  MatToolbarModule,
  MatListModule,
  MatButtonModule,
  MatIconModule,
  GoalModule,
  SharedModule
]

@NgModule({
  declarations: [...components],
  imports: [ ...modules],
  exports: [...components, ...modules],
})
export class SidenavModule { }
