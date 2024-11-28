import { Component, inject,  OnInit } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {FormControl, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {MatButtonModule} from '@angular/material/button';

import {
  MAT_DIALOG_DATA,
  MatDialogActions,
  MatDialogClose,
  MatDialogContent,
  MatDialogRef,
  MatDialogTitle,
} from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';

export interface DialogData {
  id: string;
  name: string;
}

@Component({
  selector: 'app-delete-hero-dialog',
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
  templateUrl: './delete-hero-dialog.component.html',
  styleUrl: './delete-hero-dialog.component.css'
})
export class DeleteHeroDialogComponent implements OnInit  {
  
  readonly dialogRef = inject(MatDialogRef<DeleteHeroDialogComponent>);
  readonly data = inject<DialogData>(MAT_DIALOG_DATA);
  
  idFormControl = new FormControl('', [Validators.required]);
  heroName = this.data.name;
  heroId = this.data.id;
  
  ngOnInit(): void {
    this.heroName = this.data.name;
    this.idFormControl.setValue(this.data.id);
  }

  delete(): void {
    const response = {
      id: this.idFormControl.value,
    };
    this.dialogRef.close(response);
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
