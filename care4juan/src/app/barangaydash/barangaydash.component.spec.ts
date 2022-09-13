import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BarangaydashComponent } from './barangaydash.component';

describe('BarangaydashComponent', () => {
  let component: BarangaydashComponent;
  let fixture: ComponentFixture<BarangaydashComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BarangaydashComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BarangaydashComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
