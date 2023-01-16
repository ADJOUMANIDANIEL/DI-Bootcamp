import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ColorFormComponentComponent } from './color-form-component.component';

describe('ColorFormComponentComponent', () => {
  let component: ColorFormComponentComponent;
  let fixture: ComponentFixture<ColorFormComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ColorFormComponentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ColorFormComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
