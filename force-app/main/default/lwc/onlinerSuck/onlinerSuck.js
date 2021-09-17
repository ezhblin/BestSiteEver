import { LightningElement } from 'lwc';
import CRAZY_JAPAN from '@salesforce/resourceUrl/crazyJapan';

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
}