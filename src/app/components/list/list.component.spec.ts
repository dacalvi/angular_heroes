import { ComponentFixture, TestBed } from "@angular/core/testing";
import { ListComponent } from "./list.component";
import { BrowserAnimationsModule, NoopAnimationsModule } from "@angular/platform-browser/animations";
import { of } from "rxjs";
import { DeleteHeroDialogComponent } from "../delete-hero-dialog/delete-hero-dialog.component";


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
    addHeroButton = fixture.nativeElement.querySelector('#addHeroButton');
    inputEl = fixture.nativeElement.querySelector('#searchText');
  });

  
  it('should open add hero modal when button is clicked', () => {
    const openDialogSpy = spyOn(component.dialog, 'open');
    addHeroButton.click();
    fixture.detectChanges();
    expect(openDialogSpy).toHaveBeenCalled();
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

});