import React from 'react';

import SubHeading from '../SubHeading/SubHeading';
import './Newsletter.css';

const Newsletter = () => (
  <div className="app__newsletter">
    <div className="app__newsletter-heading">
      <SubHeading title="عروضنا" />
      <h1 className="headtext__cormorant">سجل معنا لتصلك عروضنا</h1>
      <p className="p__opensans">ربما تكون احد الفائزين بوجبة مجانية</p>
    </div>
    <div className="app__newsletter-input flex__center">
      <input type="email" placeholder="بريدك الالكتروني" />
      <button type="button" className="custom__button">سجل</button>
    </div>
  </div>
);

export default Newsletter;
