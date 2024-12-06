import { ComponentFixture, TestBed } from '@angular/core/testing';
import { EditHeroDialogComponent } from './edit-hero-dialog.component';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule, NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

describe('EditHeroDialogComponent', () => {
  let component: EditHeroDialogComponent;
  let fixture: ComponentFixture<EditHeroDialogComponent>;
  let dialogRef: jasmine.SpyObj<MatDialogRef<EditHeroDialogComponent>>;

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
        EditHeroDialogComponent
      ],
      providers: [
        { provide: MatDialogRef, useValue: dialogRefSpy },
        { provide: MAT_DIALOG_DATA, useValue: { id: '1', name: 'Test Hero' } }
      ]
    }).compileComponents();

    fixture = TestBed.createComponent(EditHeroDialogComponent);
    component = fixture.componentInstance;
    dialogRef = TestBed.inject(MatDialogRef) as jasmine.SpyObj<MatDialogRef<EditHeroDialogComponent>>;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should initialize form controls with data', () => {
    expect(component.nameFormControl.value).toBe('Test Hero');
    expect(component.idFormControl.value).toBe('1');
  });

  it('should focus on the input field on init', () => {
    const inputElement = fixture.nativeElement.querySelector('input');
    spyOn(inputElement, 'focus');
    component.ngOnInit();
    expect(inputElement.focus).toHaveBeenCalled();
  });

  it('should close the dialog with the updated hero data when save is called', () => {
    component.nameFormControl.setValue('Updated Hero');
    component.idFormControl.setValue('2');
    component.save();
    expect(dialogRef.close).toHaveBeenCalledWith({ id: '2', name: 'Updated Hero', description: undefined, image: undefined });
  });

  it('should display an error message when the name is required and the input is empty', () => {
    component.nameFormControl.setValue('');
    component.nameFormControl.markAsTouched();
    fixture.detectChanges();
    const errorElement = fixture.nativeElement.querySelector('mat-error');
    expect(errorElement).toBeTruthy();
    expect(errorElement.textContent).toContain('Name is required');
  });
});