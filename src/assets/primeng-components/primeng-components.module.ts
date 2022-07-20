import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

//primeng Components

import { TooltipModule } from 'primeng/tooltip';
import { ButtonModule } from 'primeng/button';
import { DividerModule } from 'primeng/divider';
import { InputTextModule } from 'primeng/inputtext';
import { CardModule } from 'primeng/card';
import { DropdownModule } from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import { InputNumberModule } from 'primeng/inputnumber';
import { ToastModule } from 'primeng/toast';
import { AvatarModule } from 'primeng/avatar';
import { AccordionModule } from 'primeng/accordion';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    TooltipModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    TableModule,
    InputNumberModule,
    ToastModule,
    AvatarModule,
    AccordionModule

  ],
  exports: [
    TooltipModule,
    ButtonModule,
    DividerModule,
    InputTextModule,
    CardModule,
    DropdownModule,
    TableModule,
    InputNumberModule,
    ToastModule,
    AvatarModule,
    AccordionModule
  ]
})
export class PrimengComponentsModule { }
