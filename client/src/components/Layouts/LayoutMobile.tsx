import React from 'react';
import { Mobile, MobileBg, MobileTextBox, MobileBgTitle, MobileBgDark, MobileTextOne, MobileTextBoxImg } from "styles/MobileStyles";
import Image from 'components/shared/Image';
import ErrorUrl from "asset/mobile.png"
// import Button from 'components/shared/Button';
// import { Link } from 'react-router-dom';

const LayoutMobile = () => {
  return (
    <Mobile>
      <MobileBg>
        <MobileBgTitle>Sorry</MobileBgTitle>
        <MobileBgDark></MobileBgDark>
      </MobileBg>
      <MobileTextBox>
        <MobileTextOne>
          <span>Chào mừng đến với 
            <span> chiều không gian Điện Thoại</span>
          </span>
        </MobileTextOne>
        <p>Hiện tại chung tôi chưa phát triển giao diện trên màng hình nhỏ hơn 967px</p>
        <p>Xin lỗi vì sự bất tiện này.</p>
        <MobileTextBoxImg>
          <Image src={ErrorUrl} alt="Image mobile" />
        </MobileTextBoxImg>
        {/* <Button className='mobile--button'>
          <Link to='/'>Quay về chiều không gian cũ</Link>
        </Button> */}
      </MobileTextBox>
    </Mobile>
  );
}

export default LayoutMobile;
