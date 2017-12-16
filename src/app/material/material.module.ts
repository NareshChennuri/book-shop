import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatGridListModule} from '@angular/material/grid-list';
import {MatButtonModule} from '@angular/material/button';
import {MatPaginatorModule} from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  exports: [
    CommonModule,
    MatGridListModule,
    MatButtonModule,
    MatPaginatorModule
  ],
  declarations: []
})
export class MaterialModule {
}
