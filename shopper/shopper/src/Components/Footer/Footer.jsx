import React from 'react';
import './Footer.css';
import footer_logo from '../Assets/logo_big.png';
import instagram_icon from '../Assets/instagram_icon.png';
import pintester_icon from '../Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/whatsapp_icon.png';

const Footer = () => {

  const handleLinkClick = (index) => {
    if (index === 0) {
      window.location.href = "http://localhost:5173/";
    } else if (index === 1) {
      window.location.href = "http://localhost:5173/laptops";
    } else if (index === 2) {
      alert("Salam, magazamiza xoş gəlmisiniz. Mən, Samir Memmedov Samir's Tech Shop magazasinin sahibiyem. Meqsediniz size oz mehsullarimizi tanidmaq ve sizin ucun alis verisi daha elverisli elemekdir. Biz burada yalniz oz magazamizda olan mehsullari yerlesdiririk. Zamanla cesid imkanida daha genis olacaq.Hemcinin hal hazirda magazanin online sayti uzerinde yenilikler gedir. Sayt yalniz laptop ucun nezerde tutulsada yaxin gunlerde mobile ve tabletden istifadeye yararli olacaq. Biz size daha serfeli, keyfiyyetli ve yeni mehsullari diqqetinize catdirmaga calisacagiq.");
    } 
    else if (index === 3) {
      alert("Oz sikayet ve tekliflerinizi bize bildirmek ucun, hemcinin reklam ucun bizim emaile yaza bilersiz: 'samir.memmedov@gmail.com' Hemcinin asagida bizim sosial sebeke unvanlari yerlesdirilib. ");
    } 
    
  };

  return (
    <div className='footer'>
      <div className="footer-logo">
        <img src={footer_logo} alt="" />
        <p>Samir's Tech Store</p>
      </div>
      <ul className="footer-links">
        <li onClick={() => handleLinkClick(0)}>Shop</li>
        <li onClick={() => handleLinkClick(1)}>Products</li>
        <li onClick={() => handleLinkClick(2)}>About</li>
        <li onClick={() => handleLinkClick(3)}>Contact</li>
      </ul>
      <div className="footer-social-icon">
        
        <a href="https://www.instagram.com/samir_mmdf/" target='blank'><div className="footer-icons-container">
            <img src={instagram_icon} alt="" />
        </div></a>

        <a href="https://www.instagram.com/samir_mmdf/" target='blank'> <div className="footer-icons-container">
            <img src={pintester_icon} alt="" />
        </div></a>
       
        <a href="https://www.instagram.com/samir_mmdf/" target='blank'> <div className="footer-icons-container">
            <img src={whatsapp_icon} alt="" />
        </div></a>
       
      </div>
      <div className="footer-copyright">
        <hr />
        <p>Copyright by @CodeForFutute</p>
      </div>
    </div>
  )
}

export default Footer;