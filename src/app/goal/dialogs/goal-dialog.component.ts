import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Component, Inject, OnInit } from '@angular/core';
import { MatChipInputEvent } from '@angular/material/chips';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-goal-dialog',
  templateUrl: './goal-dialog.component.html',
  styleUrls: ['./dialog.scss']
})
export class GoalDialogComponent implements OnInit {
  addOnBlur = true;
  achievements: string[] = [];
  sacrifices: string[] = [];

  goalForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    description: new FormControl(null, [Validators.required]),
    achievements: new FormControl(null, []),
    sacrifices: new FormControl(null, []),
    maxScore: new FormControl(null, [Validators.required, Validators.min(100), Validators.max(10000)]),
  });

  constructor(
    public dialogRef : MatDialogRef<GoalDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit(): void {
    this.data.goalType = 0;
  }

  addAchievment(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.achievements.push(value);
    }
    event.chipInput!.clear();
  }

  removeAchievment(achievement: string): void {
    const index = this.achievements.indexOf(achievement);
    if (index >= 0) {
      this.achievements.splice(index, 1);
    }
  }

  addSacrifice(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.sacrifices.push(value);
    }
    event.chipInput!.clear();
  }

  removeSacrifice(sacrifice: string): void {
    const index = this.sacrifices.indexOf(sacrifice);
    if (index >= 0) {
      this.sacrifices.splice(index, 1);
    }
  }

  onNoClick() {
    this.dialogRef.close();
  }

  onClick() {
    this.data.name = this.goalForm.value.name;
    this.data.description = this.goalForm.value.description;
    this.data.achievement = this.achievements.toString();
    this.data.sacrifice = this.sacrifices.toString();
    this.data.maxScore = this.goalForm.value.maxScore;
    this.data.goalType = Number(this.data.goalType);
  }




}

