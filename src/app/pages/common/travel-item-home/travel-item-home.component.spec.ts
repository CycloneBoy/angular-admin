import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelItemHomeComponent } from './travel-item-home.component';

describe('TravelItemHomeComponent', () => {
  let component: TravelItemHomeComponent;
  let fixture: ComponentFixture<TravelItemHomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelItemHomeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelItemHomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
