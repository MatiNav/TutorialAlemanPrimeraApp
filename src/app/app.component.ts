import { Settings } from './../pages/settings/settings';
import { Tabs } from './../pages/tabs/tabs';
import { Favorites } from './../pages/favorites/favorites';
import { Component,ViewChild} from '@angular/core';
import { Platform, NavController,MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  tabsPage:any = Tabs;
  settingsPage:any = Settings;
  @ViewChild('nav') nav: NavController;

  constructor(public menuCtrl: MenuController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }

onLoad(page:any){
  this.nav.setRoot(page);
  this.menuCtrl.close();
}
 
}

