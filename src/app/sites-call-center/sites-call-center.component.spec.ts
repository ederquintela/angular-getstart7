import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SitesCallCenterComponent } from './sites-call-center.component';

describe('SitesCallCenterComponent', () => {
  let component: SitesCallCenterComponent;
  let fixture: ComponentFixture<SitesCallCenterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SitesCallCenterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SitesCallCenterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
