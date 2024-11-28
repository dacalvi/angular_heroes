import { Component, inject, OnDestroy } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { Hero } from '../../types/hero';
import { HeroesService } from '../../services/heroes.service';
import { AsyncPipe, JsonPipe, NgFor } from '@angular/common';
import { Observable, BehaviorSubject, Subscription } from 'rxjs';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { AddHeroDialogComponent } from '../add-hero-dialog/add-hero-dialog.component';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';
import { MatIconModule } from '@angular/material/icon';
import { UppercaseDirective } from '../../directives/uppercase.directive';
import { EditHeroDialogComponent } from '../edit-hero-dialog/edit-hero-dialog.component';
import { DeleteHeroDialogComponent } from '../delete-hero-dialog/delete-hero-dialog.component';


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
    UppercaseDirective,
    JsonPipe
  ],
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})

export class ListComponent implements OnDestroy {
  subscriptions = new Subscription();
  heroes$: Observable<Hero[]> = new Observable<Hero[]>();
  pageIndex$ = new BehaviorSubject<number>(0);
  pageSize$ = new BehaviorSubject<number>(5);
  length$ = new BehaviorSubject<number>(0);
  
  searchText = '';
  
  readonly dialog = inject(MatDialog);
  
  constructor(public heroesService: HeroesService) {}

  ngOnDestroy(): void {
    this.subscriptions.unsubscribe();
  }

  openDeleteDialog = async (id: string) => {
    
    const heroSubscription = this.heroesService.getHero(id).subscribe(hero => {

      if (!hero) {
        return;
      }

      const dialogRef = this.dialog.open(DeleteHeroDialogComponent, {
        data: {
          name: hero.name,
          id: hero.id
        },
      });

      this.subscriptions.add(this.subscriptions.add(dialogRef.afterClosed().subscribe(newHeroObject => {
        if (!newHeroObject) {
          return;
        }
        this.heroesService.deleteHero(newHeroObject.id);
      })));

    });
    this.subscriptions.add(heroSubscription);
  }

  openEditDialog = async (id: string) => {

    const heroSubscription = this.heroesService.getHero(id).subscribe(hero => {
      if (!hero) {
        return;
      }

      const dialogRef = this.dialog.open(EditHeroDialogComponent, {
        data: {
          name: hero.name,
          id: hero.id
        },
      });

      this.subscriptions.add(dialogRef.afterClosed().subscribe(newHeroObject => {
        if (!newHeroObject) {
          return;
        }
        this.heroesService.updateHero(newHeroObject);
      }));
    }
    );

    this.subscriptions.add(heroSubscription);
  }

  openAddDialog = () => {
    const dialogRef = this.dialog.open(AddHeroDialogComponent, {
      data: {name: ''},
    });

    this.subscriptions.add(dialogRef.afterClosed().subscribe(newHeroName => {
      if (!newHeroName) {
        return;
      }
      //get a unique string for the id
      const id = Math.random().toString(36).substring(7);
      this.heroesService.addHero({
        'id':id,
        'name':newHeroName
      });
    }));
  }

  pageEvent = (event: any) => {
    this.heroesService.getPage().next(event.pageIndex);
    this.heroesService.getPageSize().next(event.pageSize);
  }

  onChangeSearch = (event: any) => {
    this.heroesService.getHeroByName(event.target.value);
  }

  clearSearch = () => {
    this.searchText = '';
    this.heroesService.getHeroByName('');
  }
  
}
