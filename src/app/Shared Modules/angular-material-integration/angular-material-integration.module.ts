import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

const exportModules = [
  MatIconModule,
  MatButtonModule,
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
