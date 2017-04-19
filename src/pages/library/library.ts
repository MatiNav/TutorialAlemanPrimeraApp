import { Quotes } from './../quotes/quotes';
import { QuoteElement } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import quoteData from '../../data/quotes'

/**
 * Generated class for the Library page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class Library {

  quotesPage=Quotes;

  quoteCollection:{
    category:string,
    quotes: QuoteElement[],
    icon:string,
  }[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  
    this.quoteCollection = quoteData;

  }

  

}
