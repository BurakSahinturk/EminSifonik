import React, { Component } from "react";
import AddIcon from "./svg/addicon.svg";
import MailIcon from "./svg/mailicon.svg";
import PhoneIcon from "./svg/phoneicon.svg";

const Contact = () => {
  return (
    <div className="text-center m-3">
      <h2 className="fs-1">İletişim Bilgileri</h2>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm my-4 text-center order-2 order-sm-1">
            <img src={MailIcon} className="" alt="E posta" />
            <p className="my-3 caro-text">E-postayla Ulaşın!</p>
            <a href="mailto:proje@eminsifonik.com" className="h4">
              proje@eminsifonik.com
            </a>
          </div>
          <div className="col-sm my-4 text-center order-1 order-sm-3">
            <img src={PhoneIcon} className="" alt="Telefon" />
            <p className="my-3 caro-text">Telefonla Ulaşın!</p>
            <a href="tel:+905332151429" className="h4">
              0533 215 14 29
            </a>
          </div>
          <div className="col-sm my-4 text-center order-3 order-sm-2">
            <img src={AddIcon} className="" alt="Adres" />
            <p className="my-3 caro-text">Buyrun Çayımızı İçin...</p>
            <div className="mt-4 h5">
              Ertuğrulgazi Mh. 4. Dilek Sk. No:14 Yıldırım / Bursa
            </div>
          </div>
        </div>
      </div>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3048.363771344494!2d29.111444414818916!3d40.17871717939352!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14ca3e98c52a6119%3A0x48ba86337e0143bd!2zRXJ0dcSfcnVsZ2F6aSwgRGlsZWsgU2suIE5vOjE0LCAxNjMxMCBZxLFsZMSxcsSxbS9CdXJzYQ!5e0!3m2!1sen!2str!4v1645890154528!5m2!1sen!2str"
        width="400"
        height="300"
        loading="lazy"
      ></iframe>
    </div>
  );
};

export default Contact;
