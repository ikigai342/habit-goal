import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoalJournalComponent } from './goal-journal.component';

describe('GoalJournalComponent', () => {
  let component: GoalJournalComponent;
  let fixture: ComponentFixture<GoalJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GoalJournalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoalJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
