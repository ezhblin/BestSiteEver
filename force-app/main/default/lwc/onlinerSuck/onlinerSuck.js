import { LightningElement } from 'lwc';

import PILS2 from '@salesforce/resourceUrl/pils2';
import BOB1 from '@salesforce/resourceUrl/bob1';
import BOB2 from '@salesforce/resourceUrl/bob2';
import ONLINER_LOGO from '@salesforce/resourceUrl/Onliner_logo';

export default class OnlinerSuck extends LightningElement {
    fastMenu = [
        {label : 'Каталог', value : 'url'},
        {label : 'Новости', value : 'url'}, 
        {label : 'Автобарахолка', value : 'url'},
        {label : 'Дом и квартира', value : 'url'},
        {label : 'Услуги', value : 'url'},
        {label : 'Барахолка', value : 'url'},
        {label : 'Форум', value : 'url'}
    ];
    fastInfo = [
        {label : 'Weather', value : 'url'},
        {label : 'Dollar rate', value : 'url'}
    ];
    navigation = [ 
        {label :'Electronics', value : 'url'},
        {label : 'Appliances', value : 'url'},
        {label : 'Computers and networks', value : 'url'},
        {label : 'Construction and repair', value : 'url'},
        {label : 'A house and a garden', value : 'url'},
        {label : 'Auto and Moto', value : 'url'},
        {label : 'Beauty and sport', value : 'url'},
        {label : 'For children and mothers', value : 'url'},
        {label : 'Work and office', value : 'url'},
        {label : 'Food', value : 'url'},
        {label : 'Furniture', value : 'url'},
        {label : 'Ninja Outfit', value : 'url'},
        {label : 'Anything for role-playing games', value : 'url'},
        {label : 'Cyberdeck', value : 'url'}
    ];

    logo = ONLINER_LOGO;
    pils2 = PILS2;
    bob2 = BOB2;
    bob1 = BOB1;
    
    news = [ 
        {label :'1', value : PILS2},
        {label : '2', value : BOB2},
        {label : '3', value : BOB1},

        {label : '4', value : PILS2},
        {label : '5', value : BOB2},
        {label : '6', value :  BOB1},

        {label : '7', value : BOB2},
        {label : '8', value : PILS2},
        {label : '9', value : BOB1},

        {label : '10', value :  BOB1},
        {label : '11', value : BOB2},
        {label : '12', value : PILS2},
    ];
    
}