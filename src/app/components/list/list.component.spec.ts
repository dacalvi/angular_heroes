import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListComponent } from "./list.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { DeleteHeroDialogComponent } from "../delete-hero-dialog/delete-hero-dialog.component";
import { EditHeroDialogComponent } from "../edit-hero-dialog/edit-hero-dialog.component";
import { AddHeroDialogComponent } from "../add-hero-dialog/add-hero-dialog.component";


describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;
  let addHeroButton: HTMLElement;
  let inputEl: HTMLInputElement;
  
  function sendInput(text: string) {
    inputEl.value = text;
    inputEl.dispatchEvent(new Event('input'));
    fixture.detectChanges();
    return fixture.whenStable();
  }

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ListComponent, BrowserAnimationsModule, NoopAnimationsModule],
    });
    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance; // BannerComponent test instance
    inputEl = fixture.nativeElement.querySelector('#searchText');
  });

  it('should open add hero dialog when openAddDialog is called', () => {
    const openDialogSpy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of('NewHeroName')
    } as any);
    const addHeroSpy = spyOn(component.heroesService, 'addHero');
  
    component.openAddDialog();
  
    expect(openDialogSpy).toHaveBeenCalledWith(AddHeroDialogComponent, {
      data: { name: '' }
    });
    expect(addHeroSpy).toHaveBeenCalledWith(jasmine.objectContaining({
      name: 'NewHeroName'
    }));
  });
  
  it('should not call addHero if dialog is closed without data', () => {
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(null)
    } as any);
    const addHeroSpy = spyOn(component.heroesService, 'addHero');
  
    component.openAddDialog();
  
    expect(addHeroSpy).not.toHaveBeenCalled();
  });

  it('should convert input value to uppercase', () => {
    sendInput('test').then(() => {
      expect(inputEl.value).toBe('TEST');
    });
  });

  it('should not call deleteHero if dialog is closed without data', () => {
    const hero = { id: '1', name: 'HeroName' };
    spyOn(component.heroesService, 'getHero').and.returnValue(of(hero));
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(null)
    } as any);
    const deleteHeroSpy = spyOn(component.heroesService, 'deleteHero');

    component.openDeleteDialog(hero.id);

    expect(deleteHeroSpy).not.toHaveBeenCalled();
  });

  it('should open delete hero dialog when openDeleteDialog is called', () => {
    const hero = { id: '1', name: 'HeroName' };
    spyOn(component.heroesService, 'getHero').and.returnValue(of(hero));
    const openDialogSpy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(hero)
    } as any);
    spyOn(component.heroesService, 'deleteHero');

    component.openDeleteDialog(hero.id);

    expect(openDialogSpy).toHaveBeenCalledWith(DeleteHeroDialogComponent, {
      data: { name: hero.name, id: hero.id }
    });
    expect(component.heroesService.deleteHero).toHaveBeenCalledWith(hero.id);
  });

  it('should open edit hero dialog when openEditDialog is called', () => {
    const hero = { id: '1', name: 'HeroName' };
    spyOn(component.heroesService, 'getHero').and.returnValue(of(hero));
    const openDialogSpy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(hero)
    } as any);
    spyOn(component.heroesService, 'updateHero');

    component.openEditDialog(hero.id);

    expect(openDialogSpy).toHaveBeenCalledWith(EditHeroDialogComponent, {
      data: { name: hero.name, id: hero.id }
    });
    expect(component.heroesService.updateHero).toHaveBeenCalledWith(hero);
  });

  it('should open edit hero dialog when openEditDialog is called with inexistent id', () => {
    const hero = { id: '999', name: 'HeroName' };
    spyOn(component.heroesService, 'getHero').and.returnValue(of(hero));
    const openDialogSpy = spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(hero)
    } as any);
    spyOn(component.heroesService, 'updateHero');

    component.openEditDialog(hero.id);

    expect(openDialogSpy).toHaveBeenCalledWith(EditHeroDialogComponent, {
      data: { name: hero.name, id: hero.id }
    });
    expect(component.heroesService.updateHero).toHaveBeenCalledWith(hero);
  });

  it('should not call updateHero if dialog is closed without data', () => {
    const hero = { id: '1', name: 'HeroName' };
    spyOn(component.heroesService, 'getHero').and.returnValue(of(hero));
    spyOn(component.dialog, 'open').and.returnValue({
      afterClosed: () => of(null)
    } as any);
    const updateHeroSpy = spyOn(component.heroesService, 'updateHero');

    component.openEditDialog(hero.id);

    expect(updateHeroSpy).not.toHaveBeenCalled();
  });

  it('should update page index and page size when pageEvent is called', () => {
    const pageIndexSpy = spyOn(component.heroesService.getPage(), 'next');
    const pageSizeSpy = spyOn(component.heroesService.getPageSize(), 'next');
    const event = { pageIndex: 2, pageSize: 10 };

    component.pageEvent(event);

    expect(pageIndexSpy).toHaveBeenCalledWith(2);
    expect(pageSizeSpy).toHaveBeenCalledWith(10);
  });

  it('should clear search text and call getHeroByName with empty string', () => {
    component.searchText = 'some text';
    const getHeroByNameSpy = spyOn(component.heroesService, 'getHeroByName');

    component.clearSearch();

    expect(component.searchText).toBe('');
    expect(getHeroByNameSpy).toHaveBeenCalledWith('');
  });

  it('should call getHeroByName with the input value when onChangeSearch is called', () => {
    const getHeroByNameSpy = spyOn(component.heroesService, 'getHeroByName');
    const event = { target: { value: 'HeroName' } };
  
    component.onChangeSearch(event);
  
    expect(getHeroByNameSpy).toHaveBeenCalledWith('HeroName');
  });

  it('should call getHeroByName with an empty string when onChangeSearch is called with empty input', () => {
    const getHeroByNameSpy = spyOn(component.heroesService, 'getHeroByName');
    const event = { target: { value: '' } };
  
    component.onChangeSearch(event);
  
    expect(getHeroByNameSpy).toHaveBeenCalledWith('');
  });
});


