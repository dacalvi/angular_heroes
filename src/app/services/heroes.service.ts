import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../data/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  constructor() { }
  private heroes: Hero[] = HEROES;

  getHeroes(): Observable<Hero[]> {
    return of(this.heroes);
  }

  getHero(id: number): Observable<Hero | undefined> {
    return of(this.heroes.find(hero => hero.id === id));
  }

  addHero(hero: Hero): Observable<Hero> {
    this.heroes.push(hero);
    return of(hero);
  }

  updateHero(updatedHero: Hero): Observable<Hero> {
    const index = this.heroes.findIndex(hero => hero.id === updatedHero.id);
    if (index !== -1) {
      this.heroes[index] = updatedHero;
    }
    return of(updatedHero);
  }

  deleteHero(id: number): void {
    this.heroes = this.heroes.filter(hero => hero.id !== id);
  }
}
