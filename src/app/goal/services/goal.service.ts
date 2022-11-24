import { GoalMain, GoalAdd, GoalSelected } from './../models/goal';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class GoalService {
  private goalUrl = "Goal"

  constructor(private http: HttpClient) { }

  public getGoals(): Observable<GoalMain []> {
    return this.http.get<GoalMain []>(
      `${environment.goalHabitAPI}${this.goalUrl}`
    );
  }

  public getGoal(id: string): Observable<GoalSelected> {
    return this.http.get<GoalSelected>(
      `${environment.goalHabitAPI}${this.goalUrl}/${id}`
    );
  }

  public deleteGoals(id: string): Observable<GoalMain []> {
    return this.http.delete<GoalMain []>(
      `${environment.goalHabitAPI}${this.goalUrl}/${id}`
    );
  }

  public addGoals(data: GoalAdd): Observable<GoalMain []> {
    return this.http.post<GoalMain []>(
      `${environment.goalHabitAPI}${this.goalUrl}`,data
    );
  }

  public updateGoal(data: GoalSelected, id: string): Observable<GoalSelected> {
    return this.http.put<GoalSelected>(
      `${environment.goalHabitAPI}${this.goalUrl}/${id}`,data
    );
  }
}
