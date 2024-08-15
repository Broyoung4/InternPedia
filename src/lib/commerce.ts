import Commerce from '@chec/commerce.js';
import { Cart } from '@chec/commerce.js/cart';
import { Checkout } from '@chec/commerce.js/checkout';
import { Payment } from '@chec/commerce.js/payment';


export const commerce = new Commerce(import.meta.env.VITE_APP_CHEC_PUBLICKEY);