import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


const exportModules = [
  MatIconModule,
  MatButtonModule,
  MatDialogModule,
  MatFormFieldModule,
  MatInputModule,

]

  @NgModule({
    declarations: [],
    imports: [
      CommonModule,
      ...exportModules
    ],
    exports: [
      ...exportModules
    ]
  })
  export class AngularMaterialIntegrationModule { }
