import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { of } from 'rxjs';

import { HeroDetailComponent } from './hero-detail.component';

describe('HeroDetailComponent', () => {
  let component: HeroDetailComponent;
  let fixture: ComponentFixture<HeroDetailComponent>;

  let mockActivatedRoute = jasmine.createSpyObj('ActivatedRoute', ['snapshot']);
  let mockLocation = jasmine.createSpy('Location');
  let mockHeroService = jasmine.createSpyObj('HeroService', ['getHero']);

  const fakeParaMap = {get: () => ''};
  const fakeSnapshot = {paramMap: fakeParaMap};

  mockActivatedRoute.snapshot = fakeSnapshot;
  mockHeroService.getHero.and.returnValue(of({id: 42, name: "fake hero"}));

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroDetailComponent,
        {provide: ActivatedRoute, useValue: mockActivatedRoute},
        {provide: Location, useValue: mockLocation},
        {provide: HeroService, useValue: mockHeroService}
      ],
      declarations: [ HeroDetailComponent ],
      imports: [ FormsModule ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HeroDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
