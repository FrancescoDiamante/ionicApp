import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DettagliPrenotazionePage } from './dettagli-prenotazione.page';

describe('DettagliPrenotazionePage', () => {
  let component: DettagliPrenotazionePage;
  let fixture: ComponentFixture<DettagliPrenotazionePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DettagliPrenotazionePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DettagliPrenotazionePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
