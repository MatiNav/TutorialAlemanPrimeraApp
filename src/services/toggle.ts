import {Toggle} from 'ionic-angular'


export class ToggleService {

    public toggleState:boolean;

    toggleHasChanged(toggleState:boolean){
        this.toggleState = toggleState;
        console.log(this.toggleState);
    }

}