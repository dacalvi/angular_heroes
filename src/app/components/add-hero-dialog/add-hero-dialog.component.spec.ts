import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AddHeroDialogComponent } from './add-hero-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('AddHeroDialogComponent', () => {
  let component: AddHeroDialogComponent;
  let fixture: ComponentFixture<AddHeroDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<AddHeroDialogComponent>>;

  beforeEach(async () => {
    const dialogRefSpy = jasmine.createSpyObj('MatDialogRef', ['close']);

    await TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatFormFieldModule,
        MatInputModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatIconModule,
        NoopAnimationsModule,
        AddHeroDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { name: '' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(AddHeroDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<AddHeroDialogComponent>>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should focus on the input field on init', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    spyOn(inputElement, 'focus');
    component.ngOnInit();
    expect(inputElement.focus).toHaveBeenCalled();
  });

  it('should close the dialog with the hero name when save is called', () => {
    component.nameFormControl.setValue('Test Hero');
    component.save();
    expect(dialogRef.close).toHaveBeenCalledWith('Test Hero');
  });

  it('should display an error message when the name is required and the input is empty', () => {
    component.nameFormControl.markAsTouched();
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorElement).toBeTruthy();
    expect(errorElement.textContent).toContain('Name is required');
  });
});