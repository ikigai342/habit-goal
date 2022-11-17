export interface Task {
  id: string,
  date: Date,
  description: string,
}

export interface Habit {
  id: string,
  date: Date,
  description: string,
  counters: string[],
  counterValues: number[],
  counterTypes: string[],
}
