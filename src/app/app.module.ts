import { ToggleService } from './../services/toggle';
import { QuoteService } from './../services/quotes';
import { Tabs } from './../pages/tabs/tabs';
import { Settings } from './../pages/settings/settings';
import { Quotes } from './../pages/quotes/quotes';
import { Quote } from './../pages/quote/quote';
import { Favorites } from './../pages/favorites/favorites';
import { Library } from './../pages/library/library';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

@NgModule({
  declarations: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    Tabs
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Favorites,
    Library,
    Quote,
    Quotes,
    Settings,
    Tabs
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
  QuoteService,
  ToggleService
  ]
})
export class AppModule {}
