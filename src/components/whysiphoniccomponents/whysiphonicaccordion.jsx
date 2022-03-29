import React, { Component } from "react";
import PipeComparison from "../../images/pipecomparison.png";
import { Accordion } from "react-bootstrap";

const WhySiphonicAccordion = () => {
  return (
    <Accordion flush>
      <Accordion.Item eventKey="0">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">
            Ekonomiktir – Çünkü boru çapları daha küçüktür
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-sm-3">
              <img
                src={PipeComparison}
                alt="Sifonik sistem faydaları"
                className="img-fluid"
              />
            </div>
            <div className="col-sm-9 fs-4 py-2">
              Sifonik Sistem çözümlerindeki süzgeçler vorteks önleyici
              aparatlara sahiptir. Bu sayede, boruların içine hava girişi olmaz.
              Normal sistemlerde boru kesitinin sadece 3’te 1i su taşırken geri
              kalan 3te 2si hava iletimiyle harcanır. Sifonik sistemlerde ise
              boru kesitinin tamamı su doludur.
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
      <Accordion.Item eventKey="1">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">
            Kendini temizleyen hızlı akışlı borular
          </p>
        </Accordion.Header>
        <Accordion.Body>
          <div className="row">
            <div className="col-sm-6 fs-4 py-2">
              Sifonik sistemlerde boru içindeki su yüksek akış hızına sahip
              olur. Boruların güvenliği için azami 8m/sn yani 28,8km/saat hızda
              sınırladığımız bu akış hızı boruların içindeki her türlü pislik ve
              birikintiyi rögarlara kadar sürükleyecek güçtedir. Videolarda
              yapraklarla dolu bir olukta ve kum dolu borularda sistemin nasıl
              işlediğini izleyebilirsiniz.
            </div>
            <div className="col-sm-3">
              <iframe
                src="https://www.youtube.com/embed/eIxzigwmxw0?rel=0"
                height="230"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-flex py-2"
                allowFullScreen
              ></iframe>
            </div>
            <div className="col-sm-3">
              <iframe
                src="https://www.youtube.com/embed/2oXQ2P-ZWfk?rel=0"
                title="YouTube video player"
                frameBorder="0"
                height="230"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="d-flex py-2"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="2">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">Daha az düşey iniş borusu</p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          Boru çapları daha küçük olduğu gibi, bunları çok daha az noktadan
          zemine ve zemin altındaki yağmursuyu rögarlarına indirebilmek
          mümkündür. Bu sayede binanızın çevresini yağmur suyu rögarlarıyla
          doldurmak zorunda kalmaz, hem tasarruf hem de tasarımda esneklik
          sağlar. 120 metrelik bir oluk’tan sadece bir noktada iniş yağmur iniş
          borusu sağlamak mümkündür.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="3">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">
            İstenilen yere konulabilen iniş boruları
          </p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          İniş borularının sayısı az olduğu gibi bina içerisinde tasarımın
          gerektirdiği, istenilen noktaya da taşınabilir. Sifonik sistemde yatay
          borular eğimsizdir. Bu sayede tavan altında ya da asma tavan üstünde
          binanızın dilediğiniz yerine taşıyabilirsiniz. (Sınır yatay taşıma
          mesafesi binanızın yüksekliğinin 10 katı gibi mesafedir. Yani +6,00
          metre yükseklikte olan bir yapıda borular yatayda yaklaşık 60 metre
          iletilebilir)
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="4">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">Zemin altı borulardan kurtarma</p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          İniş boruları istenilen noktaya taşınabildiği için bina içerisinde
          yağmur suyu rögarına gerek kalmaz. Orta oluklardan yağmursuyu iniş
          boruları koymaya gerek kalmaz, tüm yağmur suyu isalesi bina çeperine,
          dışına veya şaftlara taşınabilir.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="5">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">Daha az birikme & göllenme</p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          Sifonik sistem süzgeçleri tam olarak çatınızdaki suyu “emerler”.
          Süzgeçlerimiz saniyede 100 litre suya kadar çıkan debilere sahiptir.
          Bu tam dolu bir banyo küvetini 4-5 saniyede tamamen boşaltabilecekleri
          anlamına gelir. Hızlı çekiş güçleri sayesinde oluklarda ve teraslarda
          su birikmesi olmaz, oluklar taşmaz. En yoğun yağışlarda çatılarınızda
          problem yaşanmaz.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="6">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">Kolay yağmur suyu hasadı</p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          Sarnıç ve yağmur suyunun biriktirildiği açık/kapalı alanları nadiren
          binalarımızın hemen yanında isteriz. Sifonik sistemlerde yatay
          borularda eğime gerek duyulmadığından zemin veya hemen zemin altında,
          orta mesafelerdeki yağmur biriktirme ünitelerine yağmur suyunu iletmek
          mümkün olur. Geniş bahçelerin sulanması için dilediğiniz gibi göletler
          / yağmur suyu depoları inşa edebilir ve yağmur suyunu depolayarak
          sulama masraflarını asgariye indirebilirsiniz.
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="7">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">
            Sifonik Sistem Nasıl Çalışır? - HydroMax Sunumu
          </p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          <div className="row my-3">
            <div className="col-lg-2"></div>
            <div
              className="col-lg text-center ratio ratio-4x3"
              style={{ maxHeight: "80vh" }}
            >
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vSMWDSU0dv0cIO0Z9EmVhdr36XcPJce0K8Xl1LmjUkNByAa9xlaou3bunlzU4jGQA/embed?start=true&loop=false&delayms=5000"
                frameBorder="0"
                allowFullScreen={true}
                mozllowfullscreen="true"
                webkitallowfullscreen="true"
              />
            </div>
            <div className="col-lg-2"></div>
          </div>
        </Accordion.Body>
      </Accordion.Item>

      <Accordion.Item eventKey="8">
        <Accordion.Header>
          <p className="fs-4 m-0 p-0">
            Sifonik Sistem Nasıl Çalışır? - Videolar
          </p>
        </Accordion.Header>
        <Accordion.Body className="fs-4">
          <div className="row my-3">
            <div className="col-lg-1"></div>
            <div className="col-lg text-center ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/VeBLkxgxuDc?rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                className="d-flex"
              ></iframe>
            </div>
            <div className="col-lg-1" style={{ height: "30px" }}></div>
            <div className="col-lg text-center ratio ratio-16x9">
              <iframe
                src="https://www.youtube.com/embed/5O0EDaZV8XE?rel=0"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
                className="d-flex"
              ></iframe>
            </div>
            <div className="col-lg-1"></div>
          </div>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
};

export default WhySiphonicAccordion;
