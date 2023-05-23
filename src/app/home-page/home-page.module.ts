import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomePageComponent } from './home-page/home-page.component';
import { RouterModule, Routes } from '@angular/router';
import { ContentBlockComponent } from './content-block/content-block.component';

const routes: Routes = [
  {
    path: '', component: HomePageComponent
  }
];

@NgModule({
  declarations: [
    HomePageComponent,
    ContentBlockComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class HomePageModule { }
