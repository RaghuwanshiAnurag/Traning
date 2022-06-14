import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgfilterComponent } from './ngfilter.component';

describe('NgfilterComponent', () => {
  let component: NgfilterComponent;
  let fixture: ComponentFixture<NgfilterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgfilterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgfilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
