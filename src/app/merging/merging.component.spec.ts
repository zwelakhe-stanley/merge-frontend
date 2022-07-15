import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MergingComponent } from './merging.component';

describe('MergingComponent', () => {
  let component: MergingComponent;
  let fixture: ComponentFixture<MergingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MergingComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MergingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
