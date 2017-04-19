import { NavController } from 'ionic-angular';
import { Library } from './../library/library';
import { Favorites } from './../favorites/favorites';
import { Component } from '@angular/core';

@Component({
  templateUrl: 'tabs.html'
})
export class Tabs{
    favorites = Favorites;
    library = Library;

    constructor(public navCtrl: NavController) {}
}