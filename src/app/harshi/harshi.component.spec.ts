import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HarshiComponent } from './harshi.component';

describe('HarshiComponent', () => {
  let component: HarshiComponent;
  let fixture: ComponentFixture<HarshiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HarshiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HarshiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
