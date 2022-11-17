import { GoalDialogComponent } from './../../dialogs/goal-dialog.component';
import { GoalMain } from './../../models/goal';
import { Component, OnInit } from '@angular/core';
import { GoalService } from '../../services/goal.service';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-goal-list',
  templateUrl: './goal-list.component.html',
  styleUrls: ['./goal-list.component.scss']
})
export class GoalListComponent implements OnInit {
  goalList: GoalMain[] = [];
  color: string = "";

  constructor( private goalService: GoalService, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.goalService.getGoals().subscribe((data: GoalMain[]) =>
      this.goalList = data)
  }

  getColor(value: number) {

    switch(value) {
      case 0 :
        this.color = '#e28743';
        break;
      case 1 :
        this.color = '#76b5c5';
        break;
      case 2 :
        this.color = '#c58676';
        break;
      default :
        this.color = 'black';
        break;
    }
    return this.color;
  }

  deleteGoal(id: string) {
    this.goalService.deleteGoals(id).subscribe((data: GoalMain[]) =>
      this.goalList = data)
  }

  openAddGoalDialog() {
    const dialogueRef = this.dialog.open(
        GoalDialogComponent, {
          data: { }
        }
      );

      dialogueRef.afterClosed().subscribe(data => {
        if (data != null) {
          console.log(data);
          this.goalService.addGoals({
            name: data.name,
            description: data.description,
            achievements: data.achievement,
            sacrifices: data.sacrifice,
            maxScore: data.maxScore,
            goalType: data.goalType,
          }).subscribe((data: GoalMain[]) =>
            this.goalList = data);
        }
      });



  }
}
