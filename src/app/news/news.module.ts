import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsComponent } from './news/news.component';
import { BlockComponent } from './block/block.component';



@NgModule({
  declarations: [
    NewsComponent,
    BlockComponent
  ],
  imports: [
    CommonModule
  ]
})
export class NewsModule { }
