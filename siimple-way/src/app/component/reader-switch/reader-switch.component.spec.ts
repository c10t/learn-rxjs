import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReaderSwitchComponent } from './reader-switch.component';

describe('ReaderSwitchComponent', () => {
  let component: ReaderSwitchComponent;
  let fixture: ComponentFixture<ReaderSwitchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReaderSwitchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReaderSwitchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
