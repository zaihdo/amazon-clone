import React from 'react'
import "./Home.css";
import Product from "./Product.js";

function Home() {
  return (
    <div className="home">
        <a href = "https://www.primevideo.com/?ref_=dvm_pds_amz_bw_dc_s_g_mkw_sROMshihe-dc_pcrid_415541192628&mrntrk=slid__pgrid_35699909974_pgeo_9070121_x__adext__ptid_kwd-45697133742">
            <img className='home__image'
                src = "https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
                alt=""
            />
        </a>

        {/* Product id, title, price, rating, image */}
        {/* Each product will have those propscas listed above.
        We create 1 component and pass the props through to them */}
        <div className="home__row">
          <Product
              id="1"
              title="Apple EarPods Headphones with Lightning Connector."
              price={11.96}
              rating={5}
              image="https://m.media-amazon.com/images/I/41-aexp44tL._AC_SX466_.jpg"
          />
          <Product
              id="2"
              title="Piensa Útil: …y supera barreras (Spanish Edition)"
              price={20.07}
              rating={5}
              image="https://m.media-amazon.com/images/I/41TKfum1J8L._SX322_BO1,204,203,200_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
              id="3"
              title="COIEROEIR Pochita Plush Stuffed Animal Toy, Cute Animation Soft Throw Pillow Decorations,16 inch Anime Cosplay Plush Doll."
              price={5.40}
              rating={2}
              image="https://m.media-amazon.com/images/I/51aJ9N7FJBL._AC_SX522_.jpg"
          />
          <Product
              id="4"
              title="Marcy Dual Action Cross Training Recumbent Exercise Bike with Arm Exercisers, Gym Equipment for Work from Home Fitness, Black JX-7301"
              price={307.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/71E+oh38ZqL._AC_SX569_.jpg"
          />
          <Product
              id="5"
              title="Delena Designs Women's Long Kaftan Dress Maxi Caftan Dress Gown Top Night Dress"
              price={15.99}
              rating={4}
              image="https://m.media-amazon.com/images/I/81txo5rCHLL._AC_UY500_.jpg"
          />
        </div>

        <div className="home__row">
          <Product
              id="6"
              title="Certified International Gilded Wine 16 pc. Dinnerware Set, Service for 4, Multicolored"
              price={124.17}
              rating={4}
              image="https://m.media-amazon.com/images/I/81Q2bmbKdgL._AC_SX522_.jpg"
          />
        </div>
        {/* Product */}
    </div>
  )
}

export default Home