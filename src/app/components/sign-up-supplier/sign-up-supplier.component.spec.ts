import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SignUpSupplierComponent } from './sign-up-supplier.component';

describe('SignUpSupplierComponent', () => {
  let component: SignUpSupplierComponent;
  let fixture: ComponentFixture<SignUpSupplierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SignUpSupplierComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SignUpSupplierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
