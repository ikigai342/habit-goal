import { GoalComponent } from './components/goal/goal.component';
import { GoalListComponent } from './components/goal-list/goal-list.component';

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'goals', component: GoalListComponent },
  { path: 'goals/goal/:id', component: GoalComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class GoalRoutingModule { }
