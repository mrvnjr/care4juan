import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OscaComponent } from './osca.component';

describe('OscaComponent', () => {
  let component: OscaComponent;
  let fixture: ComponentFixture<OscaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OscaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OscaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
