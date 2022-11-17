import { GoalSelected } from './../../models/goal';
import { GoalService } from './../../services/goal.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-goal',
  templateUrl: './goal.component.html',
  styleUrls: ['./goal.component.scss']
})
export class GoalComponent implements OnInit {
  goalId: any;
  selectedGoal: GoalSelected = {name:'',description:'',achievements:'',sacrifices:'',score:0,maxScore:0,goalType:0};
  achievements?: string[];
  sacrifices?: string[];
  color: string = "";

  constructor(
    private activatedRoute: ActivatedRoute,
    private goalService: GoalService) { }

  ngOnInit() {
    this.goalId = this.activatedRoute.snapshot.paramMap.get('id');
    this.goalService.getGoal(this.goalId).subscribe(data => {
      this.selectedGoal = data;
      this.achievements = data.achievements.split(',');
      this.sacrifices = data.sacrifices.split(',');
      console.log(data);
    });
  }

  handleDelete() {
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

}
