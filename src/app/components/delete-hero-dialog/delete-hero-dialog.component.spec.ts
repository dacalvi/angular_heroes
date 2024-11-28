import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DeleteHeroDialogComponent } from './delete-hero-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('DeleteHeroDialogComponent', () => {
  let component: DeleteHeroDialogComponent;
  let fixture: ComponentFixture<DeleteHeroDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<DeleteHeroDialogComponent>>;

  beforeEach(async () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        MatIconModule,
        DeleteHeroDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { id: '1', name: 'Test Hero' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(DeleteHeroDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<DeleteHeroDialogComponent>>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the hero name in the dialog', () => {
    const dialogContent = fixture.nativeElement.querySelector('mat-dialog-content');
    expect(dialogContent.textContent).toContain('Test Hero');
  });
  
  it('should close the dialog with the hero id when delete is called', () => {
    component.idFormControl.setValue('1');
    component.delete();
    expect(dialogRef.close).toHaveBeenCalledWith({ id: '1' });
  });

  it('should close the dialog without data when onNoClick is called', () => {
    component.onNoClick();
    expect(dialogRef.close).toHaveBeenCalled();
  });
  
});