import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDetailNew } from './board-detail-new';

describe('BoardDetailNew', () => {
  let component: BoardDetailNew;
  let fixture: ComponentFixture<BoardDetailNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardDetailNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardDetailNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
