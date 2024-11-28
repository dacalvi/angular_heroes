import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../data/mock-heroes';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private readonly heroes$ = new BehaviorSubject<Hero[]>(HEROES);
  private readonly heroesMasterList$ = new BehaviorSubject<Hero[]>(HEROES);
  private readonly pageIndex$ = new BehaviorSubject<number>(0);
  private readonly pageSize$ = new BehaviorSubject<number>(5);
  private readonly length$ = new BehaviorSubject<number>(HEROES.length);

  constructor() {
    this.heroes$.next(HEROES);
    this.heroesMasterList$.next(HEROES);
    this.heroesMasterList$.subscribe(heroes => this.length$.next(heroes.length));
  }

  getPage(): BehaviorSubject<number> {
    return this.pageIndex$;
  }

  getPageSize(): BehaviorSubject<number> {
    return this.pageSize$;
  }

  getLength(): BehaviorSubject<number> {
    return this.length$;
  }

  getHeroes(): Observable<Hero[]> {
    const start = this.pageIndex$.getValue() * this.pageSize$.getValue();
    const end = start + this.pageSize$.getValue();
    return this.heroes$.pipe(
      map(heroes => heroes.slice(start, end))
    );
  }

  getHero(id: string): Observable<Hero | undefined>  {
    return this.heroesMasterList$.pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  getHeroByName(name: string): void {
    if (!name.trim()) {
      this.heroes$.next(this.heroesMasterList$.getValue());
    }
    const lowerCaseName = name.toLowerCase();
    this.heroes$.next(this.heroesMasterList$.getValue().filter(hero => hero.name.toLowerCase().includes(lowerCaseName)));
  }

  addHero(hero: Hero): void {
    const currentHeroes = this.heroesMasterList$.getValue();
    const updatedHeroes = [hero, ...currentHeroes];
    this.heroesMasterList$.next(updatedHeroes);
    this.heroes$.next(updatedHeroes);
  }

  updateHero(updatedHero: Hero): Observable<Hero> {
    this.heroesMasterList$.next(this.heroesMasterList$.getValue().map(hero => hero.id === updatedHero.id ? updatedHero : hero));
    this.heroes$.next(this.heroesMasterList$.getValue());
    return of(updatedHero);
  }

  deleteHero(id: string): void {
    this.heroesMasterList$.next(this.heroesMasterList$.getValue().filter(hero => hero.id !== id));
    this.heroes$.next(this.heroesMasterList$.getValue());
  }
}
