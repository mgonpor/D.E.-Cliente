import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardNew } from './board-new';

describe('BoardNew', () => {
  let component: BoardNew;
  let fixture: ComponentFixture<BoardNew>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardNew]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BoardNew);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
