import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IndServiceComponent } from './ind-service.component';

describe('IndServiceComponent', () => {
  let component: IndServiceComponent;
  let fixture: ComponentFixture<IndServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IndServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IndServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
