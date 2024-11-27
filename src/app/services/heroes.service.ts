import { Injectable } from '@angular/core';
import { Hero } from '../types/hero';
import { HEROES } from '../data/mock-heroes';
import { BehaviorSubject, map, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {
  private heroes$ = new BehaviorSubject<Hero[]>(HEROES);
  private pageIndex$ = new BehaviorSubject<number>(0);
  private pageSize$ = new BehaviorSubject<number>(5);
  private length$ = new BehaviorSubject<number>(HEROES.length);

  constructor() {
    this.heroes$.next(HEROES);
    this.heroes$.subscribe(heroes => {
      this.length$.next(heroes.length);
    });
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

  getHeroes(pageIndex: number, pageSize: number): Observable<Hero[]> {
    const start = pageIndex * pageSize;
    const end = start + pageSize;
    return this.heroes$.pipe(
      map(heroes => heroes.slice(start, end))
    );
  }

  getHero(id: string): Observable<Hero | undefined> {
    return this.heroes$.pipe(
      map(heroes => heroes.find(hero => hero.id === id))
    );
  }

  getHeroByName(name: string): Observable<Hero[]> {
    return this.heroes$.pipe(
      map(heroes => {
        if (!name.trim()) {
          return heroes;
        }
        return heroes.filter(hero => hero.name.includes(name));
      })
    );
  }

  addHero(hero: Hero): Observable<Hero> {
    this.heroes$.next([...this.heroes$.getValue(), hero]);
    return of(hero);
  }

  updateHero(updatedHero: Hero): Observable<Hero> {
    this.heroes$.next(this.heroes$.getValue().map(hero => hero.id === updatedHero.id ? updatedHero : hero));
    return of(updatedHero);
  }

  deleteHero(id: string): void {
    this.heroes$.next(this.heroes$.getValue().filter(hero => hero.id !== id));
  }
}
