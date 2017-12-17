import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatDialogModule} from '@angular/material';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule
  ],
  exports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule,
    MatInputModule,
    MatDialogModule
  ],
  declarations: []
})
export class MaterialModule {
}
