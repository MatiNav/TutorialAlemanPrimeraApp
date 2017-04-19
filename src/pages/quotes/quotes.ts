import { Quote } from './../quote/quote';
import { QuoteService } from './../../services/quotes';
import { QuoteElement } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,AlertController } from 'ionic-angular';

/**
 * Generated class for the Quotes page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class Quotes {

  quoteGroup:{
    category:string,
    quotes: QuoteElement[],
    icon:string,
  }

  constructor(private quoteServices: QuoteService, public navCtrl: NavController, public navParams: NavParams, public alertCtrl:AlertController
  ) {
  
    this.quoteGroup = this.navParams.data;

  }

  addToFav(quote:QuoteElement){

    let alert = this.alertCtrl.create({
      title:'Add Quote',
      subTitle:'Are you sur?',
      message:'Are you sure that you want to add the quote?',
      buttons:[
        {
          text:'Yes, go ahead',
          handler:()=>{this.quoteServices.addToFav(quote)},
        },
        {
          text:'No, I changed my mind',
          role:'cancel',
          handler: ()=>{
            console.log('Cancelled!!!');
          }
        }
      ]
    })

    alert.present();
    }

    removeFromFav(quote:QuoteElement){
        this.quoteServices.removeFromFav(quote);
    }
  
    isFav(quote:QuoteElement){
     return this.quoteServices.isQuotefav(quote);
    }
}
