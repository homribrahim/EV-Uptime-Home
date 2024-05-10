import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddPluggerComponent } from './add-plugger.component';

describe('AddPluggerComponent', () => {
  let component: AddPluggerComponent;
  let fixture: ComponentFixture<AddPluggerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddPluggerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddPluggerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
