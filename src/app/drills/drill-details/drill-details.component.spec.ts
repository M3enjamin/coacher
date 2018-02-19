import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDetailsComponent } from './drill-details.component';

describe('DrillDetailsComponent', () => {
  let component: DrillDetailsComponent;
  let fixture: ComponentFixture<DrillDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
