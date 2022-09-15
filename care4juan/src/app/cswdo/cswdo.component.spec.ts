import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CswdoComponent } from './cswdo.component';

describe('CswdoComponent', () => {
  let component: CswdoComponent;
  let fixture: ComponentFixture<CswdoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CswdoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CswdoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
