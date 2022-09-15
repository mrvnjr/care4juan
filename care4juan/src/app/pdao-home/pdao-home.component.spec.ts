import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdaoHomeComponent } from './pdao-home.component';

describe('PdaoHomeComponent', () => {
  let component: PdaoHomeComponent;
  let fixture: ComponentFixture<PdaoHomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdaoHomeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdaoHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
