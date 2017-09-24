
import { NgModule } from '@angular/core';
import { components } from './_app/app.component';
import { AppComponent } from './root/app.component';

import { imports } from './_app/app.imports';
 
@NgModule({
  declarations: components,
  imports: imports,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
