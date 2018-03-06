import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrillDetailsContainer } from './drill-details.container';

describe('DrillDetailsComponent', () => {
  let component: DrillDetailsContainer;
  let fixture: ComponentFixture<DrillDetailsContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrillDetailsContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrillDetailsContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
