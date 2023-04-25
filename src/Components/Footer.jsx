import React from "react";
import facebook from '/src/images/facebook.png'
import twitter from '/src/images/twitter.png'
import linkedin from '/src/images/linkedin.png'
import youtube from '/src/images/youtube.png'
import instagram from '/src/images/instagram.png'
import googleplus from '/src/images/googleplus.png'
import pinterest from '/src/images/pinterest.png'
import rss from '/src/images/rss.png'

const Footer = () => {
  return (
    <section className="Footer">
      <hr />
      <div className="logo">
        <h1>Logo</h1>
        <div className="contacts">
          <div className="location">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
              />
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
              />
            </svg>
            <p>345 Faulconer Drive, Suite 4 • Charlottesville, CA, 12345</p>
          </div>
          <div className="contact">
            <div className="phone">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              <p>(123) 456-7890</p>
            </div>
            <div className="print">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-6 h-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.72 13.829c-.24.03-.48.062-.72.096m.72-.096a42.415 42.415 0 0110.56 0m-10.56 0L6.34 18m10.94-4.171c.24.03.48.062.72.096m-.72-.096L17.66 18m0 0l.229 2.523a1.125 1.125 0 01-1.12 1.227H7.231c-.662 0-1.18-.568-1.12-1.227L6.34 18m11.318 0h1.091A2.25 2.25 0 0021 15.75V9.456c0-1.081-.768-2.015-1.837-2.175a48.055 48.055 0 00-1.913-.247M6.34 18H5.25A2.25 2.25 0 013 15.75V9.456c0-1.081.768-2.015 1.837-2.175a48.041 48.041 0 011.913-.247m10.5 0a48.536 48.536 0 00-10.5 0m10.5 0V3.375c0-.621-.504-1.125-1.125-1.125h-8.25c-.621 0-1.125.504-1.125 1.125v3.659M18 10.5h.008v.008H18V10.5zm-3 0h.008v.008H15V10.5z"
                />
              </svg>
              <p>(123) 456-7890</p>
            </div>
          </div>
          <div className="social">
            <h3>Social Media</h3>
            <div className="icon">
            <img src={facebook} alt="facebook"/>
            <img src={twitter} alt="twitter"/>
            <img src={linkedin} alt="linkedin"/>
            <img src={youtube} alt="youtube"/>
            <img src={instagram} alt="instagram"/>
            <img src={googleplus} alt="googleplus"/>
            <img src={pinterest} alt="pinterest"/>
            <img src={rss} alt="rss"/>
            </div>
          </div>
        </div>
      </div>
      <div className="footer--text">
        <ul>
            <li>ABOUT US</li>
            <li>CONTACT US</li>
            <li>HELP</li>
            <li>PRIVACY POLICY</li>
            <li>DISCLAIMER</li>
        </ul>
        <p>Copyright © 2020 Minimumlivingcost. All rights reserved</p>
      </div>
    </section>
  );
};

export default Footer;
