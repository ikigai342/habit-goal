export interface GoalMain {
  id: string,
  name: string,
  description: string,
  score: number,
  maxScore: number,
  goalType: GoalType,
}

export interface GoalSelected {
  name: string,
  description: string,
  achievements: string,
  sacrifices: string,
  score: number,
  maxScore: number,
  goalType: GoalType,
}

export interface GoalAdd {
  name: string,
  description: string,
  achievements: string,
  sacrifices: string,
  maxScore: number,
  goalType: GoalType,
}

enum GoalType {
  Health,
  Work,
  Life
}

