import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Hero } from '../../types/hero';
import { HeroesService } from '../../services/heroes.service';
import { AsyncPipe, NgFor } from '@angular/common';
import { Observable, BehaviorSubject } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroDialogComponent } from '../add-hero-dialog/add-hero-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
@Component({
  selector: 'app-list',
  standalone: true,
  imports: [
    MatListModule, 
    MatPaginatorModule, 
    NgFor, 
    AsyncPipe, 
    MatButtonModule,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule,
    MatIconModule,
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent implements OnInit {
  heroes$: Observable<Hero[]> = new Observable<Hero[]>();
  pageIndex$ = new BehaviorSubject<number>(0);
  pageSize$ = new BehaviorSubject<number>(5);
  length$ = new BehaviorSubject<number>(0);
  
  searchText = '';
  
  readonly dialog = inject(MatDialog);
  
  constructor(private heroesService: HeroesService) {}

  ngOnInit(): void {
    this.pageIndex$ = this.heroesService.getPage();
    this.pageSize$ = this.heroesService.getPageSize();
    this.length$ = this.heroesService.getLength();

    this.pageIndex$.subscribe(pageIndex => {
      this.heroes$ = this.heroesService.getHeroes(pageIndex, this.pageSize$.getValue());
    });

    this.pageSize$.subscribe(pageSize => {
      this.heroes$ = this.heroesService.getHeroes(this.pageIndex$.getValue(), pageSize);
    });

    this.heroes$ = this.heroesService.getHeroes(this.pageIndex$.getValue(), this.pageSize$.getValue());
  }

  editHero = (id: string) => {
    alert(`Editing ${id}`);
  }

  openAddDialog = () => {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      data: {name: ''},
    });

    dialogRef.afterClosed().subscribe(newHeroName => {
      if (!newHeroName) {
        return;
      }
      //get a unique string for the id
      const id = Math.random().toString(36).substring(7);
      this.heroesService.addHero({
        'id':id,
        'name':newHeroName
      });
    });
  }

  pageEvent = (event: any) => {
    this.pageIndex$.next(event.pageIndex);
    this.pageSize$.next(event.pageSize);
  }

  onChangeSearch = (event: any) => {
    console.log(event.target.value);
    this.heroes$ = this.heroesService.getHeroByName(event.target.value);
  }

  clearSearch = () => {
    this.searchText = '';
    this.heroes$ = this.heroesService.getHeroes(this.pageIndex$.getValue(), this.pageSize$.getValue());
  }
  
}
