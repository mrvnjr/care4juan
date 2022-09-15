import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdaopwdComponent } from './pdaopwd.component';

describe('PdaopwdComponent', () => {
  let component: PdaopwdComponent;
  let fixture: ComponentFixture<PdaopwdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdaopwdComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdaopwdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
