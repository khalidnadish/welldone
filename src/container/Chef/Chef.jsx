import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Chef.css';

const Chef = () => (
  <div className="app__bg app__wrapper section__padding">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="كلمة الشيف" />
      <h1 className="headtext__cormorant">ما نؤمن به</h1>

      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          {/* <p className="p__opensans">Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit .</p> */}
        </div>
        <p className="p__opensans"> لا تأكل فقط ما تحب .. ستحب ما تأكله ..
لم يكن التفرد الذي حصلنا عليه نتيجة فكرة واحدة ، ولم يكن هدفها هو الربح فقط بقدر ما حرصنا منذ بدايتنا في عام 2012 على جعل تجربتك معنا تجربة جديرة بترك بصمة للحظاتك والتأمل فيها. على حالتك المزاجية ، صُممت طاقة الحب بكل ما بداخلها. ، </p>
      </div>

      <div className="app__chef-sign">
        {/* <p>Kevin Luo</p> */}
        {/* <p className="p__opensans">Chef & Founder</p> */}
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
