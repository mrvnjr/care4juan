import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScReportComponent } from './sc-report.component';

describe('ScReportComponent', () => {
  let component: ScReportComponent;
  let fixture: ComponentFixture<ScReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScReportComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
