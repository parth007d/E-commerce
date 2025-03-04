import Shoes1 from '../images/Shoes1.png'
import Shoes2 from '../images/Shoes2.png'
import Shoes3 from '../images/Shoes3.png'
import Shoes4 from '../images/Shoes4.png'
import Shoes5 from '../images/Shoes5.png'
import Shoes6 from '../images/Shoes6.png'
import Shoes7 from '../images/Shoes7.png'
import Shoes8 from '../images/Shoes8.png'

const Products = [
    {
        id : 1,
        images: [
            Shoes1,
            Shoes2,
            Shoes3,
            Shoes4
        ],
        Bestseller : true,
        name : 'Palermo Lth Unisex Sneakers',
        price : 6999,
        offer_price : 7999 
    },
    {
        id : 2,
        images: [
            Shoes5,
            Shoes6,
            Shoes7,
            Shoes8
        ],
        Bestseller : false,
        name : 'Softride Pro Coast Res Unisex',
        price : 7999,
        offer_price : 8999 
    }
];

export default Products