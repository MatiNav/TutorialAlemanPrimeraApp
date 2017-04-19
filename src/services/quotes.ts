import { QuoteElement } from './../data/quote.interface';


export class QuoteService {
    private favoriteQuotes: QuoteElement[] = [];

    addToFav(quote: QuoteElement) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeFromFav(quote: QuoteElement) {
        let index = this.favoriteQuotes.indexOf(quote);

        if (index > -1) {
            this.favoriteQuotes.splice(index, 1);
        }
    }

    getFavQuotes() {
        return this.favoriteQuotes.slice();
    }

    isQuotefav(quote: QuoteElement) {
        let index = this.favoriteQuotes.indexOf(quote);

        if (index > -1) {
            return (true);
        } else {
            return (false);
        }
    }

}