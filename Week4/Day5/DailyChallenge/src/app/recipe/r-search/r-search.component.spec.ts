import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RSearchComponent } from './r-search.component';

describe('RSearchComponent', () => {
  let component: RSearchComponent;
  let fixture: ComponentFixture<RSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
