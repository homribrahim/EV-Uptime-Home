import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PluggersComponent } from './pluggers.component';

describe('PluggersComponent', () => {
  let component: PluggersComponent;
  let fixture: ComponentFixture<PluggersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PluggersComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PluggersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
