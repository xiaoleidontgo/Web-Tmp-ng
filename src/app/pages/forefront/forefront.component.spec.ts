import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ForefrontComponent } from './forefront.component';

describe('ForefrontComponent', () => {
  let component: ForefrontComponent;
  let fixture: ComponentFixture<ForefrontComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ForefrontComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ForefrontComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
