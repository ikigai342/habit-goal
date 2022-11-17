import { SharedModule } from './../shared/shared.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GoalRoutingModule } from './goal-routing.module';
import { GoalListComponent } from './components/goal-list/goal-list.component';
import { MatCardModule } from '@angular/material/card';
import { GoalComponent } from './components/goal/goal.component';
import { GoalJournalComponent } from './components/goal-journal/goal-journal.component';
import { MatListModule } from '@angular/material/list';
import { GoalDialogComponent } from './dialogs/goal-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatChipsModule } from '@angular/material/chips';

const modules = [
  CommonModule,
  GoalRoutingModule,
  SharedModule,
  MatCardModule,
  MatListModule,
  MatDialogModule,
  MatSliderModule,
  MatButtonToggleModule,
  MatChipsModule,
]

const components = [
  GoalListComponent,
  GoalComponent,
  GoalJournalComponent,
  GoalDialogComponent,
]

@NgModule({
  declarations: [...components],
  imports: [...modules],
  exports: [...modules, ...components],
})
export class GoalModule { }
