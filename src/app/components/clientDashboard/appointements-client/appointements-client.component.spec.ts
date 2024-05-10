import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointementsClientComponent } from './appointements-client.component';

describe('AppointementsClientComponent', () => {
  let component: AppointementsClientComponent;
  let fixture: ComponentFixture<AppointementsClientComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointementsClientComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppointementsClientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
