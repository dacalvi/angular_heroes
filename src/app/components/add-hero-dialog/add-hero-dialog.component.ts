import {AfterViewInit, Component, ElementRef, inject, model, OnInit, ViewChild } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormGroupDirective, FormsModule, NgForm, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { ErrorStateMatcher } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  name: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-add-hero-dialog',
  standalone: true,
  imports: [MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatButtonModule,
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    FormsModule, 
    MatFormFieldModule, 
    MatInputModule, 
    ReactiveFormsModule,
    MatIconModule
  ],
  templateUrl: './add-hero-dialog.component.html',
  styleUrl: './add-hero-dialog.component.css'
})
export class AddHeroDialogComponent implements OnInit, AfterViewInit  {
  readonly dialogRef = inject(MatDialogRef<AddHeroDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  value = 'Clear me';
  @ViewChild('heroNameInput') heroNameInput!: ElementRef;
  
  ngOnInit(): void {
    this.heroNameInput.nativeElement.focus();
  }

  ngAfterViewInit(): void {
    this.heroNameInput.nativeElement.focus();
  }
  
  heroName = this.data.name;

  nameFormControl = new FormControl('', [Validators.required]);

  matcher = new MyErrorStateMatcher();

  save(): void {
    this.dialogRef.close(this.heroName);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
