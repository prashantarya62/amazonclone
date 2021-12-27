
import React from "react";
 import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <img
          className="home__image"
         
          src="https://m.media-amazon.com/images/I/71i723QTb+L._SX3000_.jpg"
          alt=""
        />

        <div className="home__row">
          <Product
            id="12321341"
           
            title='HP AlO Ryzen 3 3250U 54.6 cm (21.5-inch) FHD All-in-One Desktop with Alexa Built in (8GB/1TB HDD/Windows 10/MS Office 2019/Wired Keyboard & Mouse), 22-df0444in ' price={37999.00} image="https://m.media-amazon.com/images/I/71037GQ0U7L._SX679_.jpg " rating={4}
          />
          <Product
            id="49538094"
            title='Canon EOS 1500D 24.1 Digital SLR Camera (Black) with EF S18-55 is II Lens ' price={31999.00} image="https://m.media-amazon.com/images/I/914hFeTU2-L._SL1500_.jpg" rating={4}
          />
        </div>

        <div className="home__row">
          <Product
            id="4903850"
            title='Death; An Inside Story: A book for all those who shall die Paperback – 21 February 2020 ' price={148.00} image="https://images-na.ssl-images-amazon.com/images/I/91co3ZyqsML.jpg  " rating={5}
          />
          <Product
            id="23445930"
            
            title='Noise ColorFit Pro 2 Full Touch Control Smart Watch with 35g Weight & Upgraded LCD Display,IP68 Waterproof,Heart Rate Monitor,Sleep & Step Tracker,Call & Message Alerts & Long Battery Life (Jet Black) ' price={2,799.00} image="https://m.media-amazon.com/images/I/61xzuXWWozS._SX522_.jpg " rating={4}
          />
          <Product
            id="3254354345"
            title='Sparnod Fitness STH-600 Manual Treadmill Running Machine for Home Gym - 4 in 1 Multifunction, Foldable, 120-kg Max User Weight (DIY Installation) ' price={13499.00 }image="https://m.media-amazon.com/images/I/51e4roLUBpL._SX522_.jpg " rating={5}

          />
        </div>

        <div className="home__row">
          <Product
            id="90829332"
            title='LG Ultragear 86.6 cm (34-inch) G-Sync Compatible Curved Ultrawide, 1ms, 144Hz, HDR 10, IPS Gaming Monitor with Height Adjust Stand, HDMI x 2, Display Port - 34GL750-B (Black)' price={55999.00} image="https://m.media-amazon.com/images/I/71S9dis6PRL._SL1500_.jpg " style="height: 459px,
    width: 799.221px" rating={5}
          />
        </div>
      </div>
    </div>
  );
}

export default Home;