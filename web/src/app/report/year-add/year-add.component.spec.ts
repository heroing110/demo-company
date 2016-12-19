/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { YearAddComponent } from './year-add.component';

describe('YearAddComponent', () => {
  let component: YearAddComponent;
  let fixture: ComponentFixture<YearAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ YearAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(YearAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
