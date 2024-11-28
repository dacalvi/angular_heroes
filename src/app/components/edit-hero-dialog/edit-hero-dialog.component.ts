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
  id: string;
  name: string;
}

/** Error when invalid control is dirty, touched, or submitted. */
export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form?.submitted;
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
  templateUrl: './edit-hero-dialog.component.html',
  styleUrl: './edit-hero-dialog.component.css',
})
export class EditHeroDialogComponent implements OnInit  {
  @ViewChild('heroNameInput', {static: true}) heroNameInput!: ElementRef;
  
  readonly dialogRef = inject(MatDialogRef<EditHeroDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  
  nameFormControl = new FormControl('', [Validators.required]);
  idFormControl = new FormControl('', [Validators.required]);
  
  ngOnInit(): void {
    this.nameFormControl.setValue(this.data.name);
    this.idFormControl.setValue(this.data.id);
    this.heroNameInput.nativeElement.focus();
  }
  
  heroName = this.data.name;
  heroId = this.data.id;

  matcher = new MyErrorStateMatcher();

  save(): void {
    const response = {
      id: this.idFormControl.value,
      name: this.nameFormControl.value
    };
    this.dialogRef.close(response);
  }

}
