import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormRComponent } from './form-r.component';

describe('FormRComponent', () => {
  let component: FormRComponent;
  let fixture: ComponentFixture<FormRComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormRComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormRComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
