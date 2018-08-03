import { TestBed, inject } from '@angular/core/testing';

import { HeroService } from './hero.service';
import { MessageService } from './message.service';
import { Hero } from './hero';

let fakeMessageService = jasmine.createSpyObj('MessageService', ['add', 'clear']);

describe('HeroService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        HeroService,
       {provide: MessageService, useValue: fakeMessageService}]
    });
    fakeMessageService.add.calls.reset();
  });

  it('should be created', inject([HeroService], (service: HeroService) => {
    expect(service).toBeTruthy();
  }));

  it('should get all heroes', inject([HeroService], (service: HeroService) => {
    let heroes: Hero[];
    service.getHeroes().subscribe(hs => heroes = hs);
    expect(heroes.length).toBe(10);
  }));
  
  it('should find hero by id', inject([HeroService], (service: HeroService) => {
    let hero: Hero;
    service.getHero(12).subscribe(hs => hero = hs);
    expect(hero.name).toBe('Narco');
  }));

  it('should call messageService.add when get heroes', inject([HeroService], (service: HeroService) => {
    service.getHeroes();
    expect(fakeMessageService.add).toHaveBeenCalledWith("HeroService: fetched heroes");
  }));

  it('should call messageService.add when find hero by id', inject([HeroService], (service: HeroService) => {
    service.getHero(42);
    expect(fakeMessageService.add).toHaveBeenCalledWith("HeroService: fetched hero id=42");
  }))
});
