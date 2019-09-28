import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TravelItemComponent } from './travel-item.component';

describe('TravelItemComponent', () => {
  let component: TravelItemComponent;
  let fixture: ComponentFixture<TravelItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
