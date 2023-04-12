/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TitanComponent } from './Titan.component';

describe('TitanComponent', () => {
  let component: TitanComponent;
  let fixture: ComponentFixture<TitanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TitanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TitanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
