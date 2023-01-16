import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ValidatecomponentComponent } from './validatecomponent.component';

describe('ValidatecomponentComponent', () => {
  let component: ValidatecomponentComponent;
  let fixture: ComponentFixture<ValidatecomponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ValidatecomponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ValidatecomponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
