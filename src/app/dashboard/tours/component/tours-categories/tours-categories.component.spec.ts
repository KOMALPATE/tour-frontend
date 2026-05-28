import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToursCategoriesComponent } from './tours-categories.component';

describe('ToursCategoriesComponent', () => {
  let component: ToursCategoriesComponent;
  let fixture: ComponentFixture<ToursCategoriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToursCategoriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ToursCategoriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
