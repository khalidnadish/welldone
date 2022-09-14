import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="مكان النكهة الجديدة" />
      <h1 className="app__header-h1">مفتاح الأكل الفاخر</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>دعونا نجعل لحظاتك لا تنسى ... معنا   يمكنك اختيار الجلوس في جو يرضي تطلعاتك .. لكل من يميل إلى النشوة الأصيلة .. لكل من يفضل أجواء هادئة .. لكل من يفضل للجلوس في الهواء الطلق .. </p>
      {/* <button type="button" className="custom__button">Explore Menu</button> */}
    </div>

    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header_img" />
    </div>
  </div>
);

export default Header;
