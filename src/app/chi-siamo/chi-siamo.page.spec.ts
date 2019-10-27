import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChiSiamoPage } from './chi-siamo.page';

describe('ChiSiamoPage', () => {
  let component: ChiSiamoPage;
  let fixture: ComponentFixture<ChiSiamoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChiSiamoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChiSiamoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
