import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatListModule, MatChipsModule, MatToolbarModule } from '@angular/material';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { TestPageComponent } from './test-page/test-page.component';
import { ShellComponent } from './shell/shell.component';
import { CacheService } from './cache.service';

@NgModule({
  imports:      [ BrowserModule, FormsModule, AppRoutingModule, MatListModule, MatChipsModule, MatToolbarModule ],
  declarations: [ AppComponent, HomeComponent, TestPageComponent, ShellComponent ],
  bootstrap:    [ AppComponent ],
  providers: [CacheService]
})
export class AppModule { }
