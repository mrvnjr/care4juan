import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PdaoAssisstantComponent } from './pdao-assisstant.component';

describe('PdaoAssisstantComponent', () => {
  let component: PdaoAssisstantComponent;
  let fixture: ComponentFixture<PdaoAssisstantComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PdaoAssisstantComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PdaoAssisstantComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
