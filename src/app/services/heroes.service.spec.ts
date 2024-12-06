import { HeroesService } from './heroes.service';
import { HEROES } from '../data/mock-heroes';

describe('HeroesService', () => {
  let service: HeroesService;
    beforeEach(() => {
      service = new HeroesService();
    });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should return heroes', (done) => {
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(HEROES.slice(0, 5));
      done();
    });
  });

  it('should return a hero by id', (done) => {
    service.getHero('2').subscribe(hero => {
      expect(hero).toEqual(HEROES[1]);
      done();
    });
  });

  it('should return undefined if hero not found', (done) => {
    service.getHero('300').subscribe(hero => {
      expect(hero).toBeUndefined();
      done();
    });
  });

  it('should return heroes by name', (done) => {
    service.getHeroByName('Superman');
    service.getHeroes().subscribe(heroes => {
      expect(heroes[0].name).toEqual('Superman');
      done();
    });
  });

  it('should return all heroes if name is empty', (done) => {
    service.getHeroByName('');
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toEqual(HEROES.slice(0, 5));
      done();
    });
  });

  it('should add a hero', (done) => {
    const newHero = { id: '4', name: 'New Hero', description: 'HeroDescription', image: 'HeroImage'  };
    service.addHero(newHero);
    service.getHeroes().subscribe(heroes => {
      expect(heroes).toContain(newHero);
      done();
    });
  });

  it('should update a hero', (done) => {
    const updatedHero = { id: '2', name: 'Updated Hero', description: 'HeroDescription', image: 'HeroImage'  };
    service.updateHero(updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
      service.getHero('2').subscribe(hero => {
        expect(hero).toEqual(updatedHero);
        done();
      });
    });
  });

  it('should not update a hero if id does not exist', (done) => {
    const updatedHero = { id: '300', name: 'Non-existent Hero', description: 'HeroDescription', image: 'HeroImage'  };
    service.updateHero(updatedHero).subscribe(hero => {
      expect(hero).toEqual(updatedHero);
      service.getHero('300').subscribe(hero => {
        expect(hero).toBeUndefined();
        done();
      });
    });
  });

  it('should delete a hero by id', (done) => {
    service.deleteHero('2');
    service.getHeroes().subscribe(heroes => {
      expect(heroes).not.toContain(HEROES[1]);
      done();
    });
  });

  it('should not change heroes if id does not exist', (done) => {
    service.deleteHero('500');
    service.getLength().subscribe(length => {
      expect(length).toEqual(40);
      done();
    });
  });
  
});
