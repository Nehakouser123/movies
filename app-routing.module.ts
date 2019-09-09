import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';  
// import { FcalComponent } from './fcal/fcal.component';

const routes: Routes = [
  // {path:'',component:NavComponent},
  
  
  
  
  

];

@NgModule({
  imports: [
    CommonModule,  
      RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
