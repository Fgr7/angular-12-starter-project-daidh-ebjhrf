import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainComponet } from './pages/main-page.component';

@NgModule({
  imports: [CommonModule],
  declarations: [MainComponet],
  exports: [MainComponet],
})
export class DbzModule {}
