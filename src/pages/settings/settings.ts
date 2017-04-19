import { ToggleService } from './../../services/toggle';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Toggle } from 'ionic-angular';

/**
 * Generated class for the Settings page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class Settings {

  constructor(public toggleService:ToggleService ,public navCtrl: NavController, public navParams: NavParams) {
  }


  onToggle(toggle: Toggle){
    this.toggleService.toggleHasChanged(toggle._checked);
    
  }

  checkToggleState(){
    return this.toggleService.toggleState;
  }

}
