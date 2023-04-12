/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FossilComponent } from './Fossil.component';

describe('FossilComponent', () => {
  let component: FossilComponent;
  let fixture: ComponentFixture<FossilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FossilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FossilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
