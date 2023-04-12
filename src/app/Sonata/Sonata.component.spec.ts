/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SonataComponent } from './Sonata.component';

describe('SonataComponent', () => {
  let component: SonataComponent;
  let fixture: ComponentFixture<SonataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SonataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SonataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
