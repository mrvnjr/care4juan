import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoloparentComponent } from './soloparent.component';

describe('SoloparentComponent', () => {
  let component: SoloparentComponent;
  let fixture: ComponentFixture<SoloparentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoloparentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoloparentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
