import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopuptableComponent } from './popuptable.component';

describe('PopuptableComponent', () => {
  let component: PopuptableComponent;
  let fixture: ComponentFixture<PopuptableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PopuptableComponent]
    });
    fixture = TestBed.createComponent(PopuptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
