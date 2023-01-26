import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClosableWellComponent } from './closable-well.component';

describe('ClosableWellComponent', () => {
  let component: ClosableWellComponent;
  let fixture: ComponentFixture<ClosableWellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClosableWellComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClosableWellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
