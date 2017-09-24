import { routing } from './app.routing';
import { MaterializeModule } from "angular2-materialize";
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

export const imports = [
    MaterializeModule,
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
]