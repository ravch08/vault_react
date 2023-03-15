import React from 'react';
import { Link } from 'react-router-dom';

import BalanceCard from '../../assets/payment-solutions-balance-card.webp'
import CreditCard from '../../assets/payment-solutions-credit-card.webp'
import WorkerCard from '../../assets/payment-solutions-worker-card.webp'

const Banner = () => {

   return (
      <section className="banner heroSection" aria-labelledby="Banner">
         <div className="container">

            <div className="banner-wrapper">
               <div className="banner-content">
                  <h1>Easy & Digital <br /> Online Payment <br /> Solutions</h1>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam dolor iure, repellendus
                     eveniet
                     error excepturi.
                  </p>
                  <Link to="solutions" className="btn-primary">Get Started</Link>

                  <div className="banner-companies">
                     <span>Trusted by leading comapanies</span>
                     <ul>
                        <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="26" viewBox="0 0 528 512">
                              <path
                                 d="M264.4 116.3l-132 84.3 132 84.3-132 84.3L0 284.1l132.3-84.3L0 116.3 132.3 32l132.1 84.3zM131.6 395.7l132-84.3 132 84.3-132 84.3-132-84.3zm132.8-111.6l132-84.3-132-83.6L395.7 32 528 116.3l-132.3 84.3L528 284.8l-132.3 84.3-131.3-85z" />
                           </svg>
                        </li>
                        <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 448 512">
                              <path
                                 d="M257.2 162.7c-48.7 1.8-169.5 15.5-169.5 117.5 0 109.5 138.3 114 183.5 43.2 6.5 10.2 35.4 37.5 45.3 46.8l56.8-56S341 288.9 341 261.4V114.3C341 89 316.5 32 228.7 32 140.7 32 94 87 94 136.3l73.5 6.8c16.3-49.5 54.2-49.5 54.2-49.5 40.7-.1 35.5 29.8 35.5 69.1zm0 86.8c0 80-84.2 68-84.2 17.2 0-47.2 50.5-56.7 84.2-57.8v40.6zm136 163.5c-7.7 10-70 67-174.5 67S34.2 408.5 9.7 379c-6.8-7.7 1-11.3 5.5-8.3C88.5 415.2 203 488.5 387.7 401c7.5-3.7 13.3 2 5.5 12zm39.8 2.2c-6.5 15.8-16 26.8-21.2 31-5.5 4.5-9.5 2.7-6.5-3.8s19.3-46.5 12.7-55c-6.5-8.3-37-4.3-48-3.2-10.8 1-13 2-14-.3-2.3-5.7 21.7-15.5 37.5-17.5 15.7-1.8 41-.8 46 5.7 3.7 5.1 0 27.1-6.5 43.1z" />
                           </svg>
                        </li>
                        <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 384 512">
                              <path
                                 d="M318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7C63.3 141.2 4 184.8 4 273.5q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
                           </svg>
                        </li>
                        <li>
                           <svg xmlns="http://www.w3.org/2000/svg" width="24" viewBox="0 0 488 512">
                              <path
                                 d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
                           </svg>
                        </li>
                     </ul>
                  </div>
               </div>

               <div className="banner-images">
                  <img src={BalanceCard} alt="payment-solutions-balance-card" />
                  <img src={CreditCard} alt="payment-solutions-credit-card" />
                  <img src={WorkerCard} alt="payment-solutions-worker-card" />
               </div>

            </div>

         </div>
      </section>
   )
}

export default Banner;