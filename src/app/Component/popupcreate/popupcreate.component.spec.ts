import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupcreateComponent } from './popupcreate.component';

describe('PopupcreateComponent', () => {
  let component: PopupcreateComponent;
  let fixture: ComponentFixture<PopupcreateComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopupcreateComponent]
    });
    fixture = TestBed.createComponent(PopupcreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
