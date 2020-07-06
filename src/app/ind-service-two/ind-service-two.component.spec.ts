import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndServiceTwoComponent } from './ind-service-two.component';

describe('IndServiceTwoComponent', () => {
  let component: IndServiceTwoComponent;
  let fixture: ComponentFixture<IndServiceTwoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndServiceTwoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndServiceTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
