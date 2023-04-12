/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FastrackComponent } from './Fastrack.component';

describe('FastrackComponent', () => {
  let component: FastrackComponent;
  let fixture: ComponentFixture<FastrackComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FastrackComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FastrackComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
