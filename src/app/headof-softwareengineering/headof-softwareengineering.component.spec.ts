import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeadofSoftwareengineeringComponent } from './headof-softwareengineering.component';

describe('HeadofSoftwareengineeringComponent', () => {
  let component: HeadofSoftwareengineeringComponent;
  let fixture: ComponentFixture<HeadofSoftwareengineeringComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeadofSoftwareengineeringComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HeadofSoftwareengineeringComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
