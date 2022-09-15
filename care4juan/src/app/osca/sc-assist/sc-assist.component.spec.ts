import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScAssistComponent } from './sc-assist.component';

describe('ScAssistComponent', () => {
  let component: ScAssistComponent;
  let fixture: ComponentFixture<ScAssistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ScAssistComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ScAssistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
