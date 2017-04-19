import { ToggleService } from './../../services/toggle';
import { Quote } from './../quote/quote';
import { QuoteElement } from './../../data/quote.interface';
import { QuoteService } from './../../services/quotes';
import { Quotes } from './../quotes/quotes';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, MenuController } from 'ionic-angular';

/**
 * Generated class for the Favorites page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class Favorites {

  private quotes: QuoteElement[];

  constructor(public toggleServ:ToggleService,private menuCtrl:MenuController,public modalCtrl:ModalController, public navCtrl: NavController, public navParams: NavParams, private quoteService:QuoteService) {

  }

  ionViewWillEnter(){
    this.quotes = this.quoteService.getFavQuotes();
    console.log(this.quotes);
  }

  onModalView(quote:QuoteElement){
   let modal= this.modalCtrl.create(Quote,quote);
    modal.present();
    modal.onDidDismiss((remove:boolean) =>{
      if(remove) {
        this.onRemoveFromFav(quote);
      }
    });
  }


  onRemoveFromFav(quote:QuoteElement){
    this.quoteService.removeFromFav(quote);
        this.quotes = this.quoteService.getFavQuotes();
  }


  onOpenMenu(){
    this.menuCtrl.open();
  }

  getBackground(){
   return this.toggleServ.toggleState ? 'altQuoteBackground' : 'quoteBackground';
  }

}
