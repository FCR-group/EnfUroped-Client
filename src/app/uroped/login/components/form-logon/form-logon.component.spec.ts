import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormLogonComponent } from './form-logon.component';

describe('FormLogonComponent', () => {
  let component: FormLogonComponent;
  let fixture: ComponentFixture<FormLogonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormLogonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormLogonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
