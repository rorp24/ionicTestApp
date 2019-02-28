import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageMapPage } from './page-map.page';

describe('PageMapPage', () => {
  let component: PageMapPage;
  let fixture: ComponentFixture<PageMapPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageMapPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageMapPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
