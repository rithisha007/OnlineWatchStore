/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OmegaComponent } from './Omega.component';

describe('OmegaComponent', () => {
  let component: OmegaComponent;
  let fixture: ComponentFixture<OmegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OmegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OmegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
