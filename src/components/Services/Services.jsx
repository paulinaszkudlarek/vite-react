import React from 'react';
import './Services.scss'

function Services() {
  return (
    <div className="services">
      <div>
        <h3 className="services__title">
          <span className="services__title--small">
            We work with
          </span>
          <span className="services__title--big">
            Amazing services
            </span>
        </h3>
        <div className="services__separation"></div>
      </div>
      <div className="services__grid">
        <div className="service">
          <img className="service__icon" src="/img/clock-icon.svg" alt="Ikona zegara" />
          <div>
            <h4 className="service__title">Photography</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
        <div className="service">
          <img className="service__icon" src="/img/graph-icon.svg" alt="Ikona grafu" />
          <div>
            <h4 className="service__title">Web design</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
        <div className="service">
          <img className="service__icon" src="/img/tv-icon.svg" alt="Ikona monitora" />
          <div>
            <h4 className="service__title">Creativity</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
        <div className="service">
          <img className="service__icon" src="/img/book-icon.svg" alt="Ikona książki" />  
          <div>
            <h4 className="service__title">SEO</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
        <div className="service">
          <img className="service__icon" src="/img/home-icon.svg" alt="Ikona domu" />
          <div>
            <h4 className="service__title">CSS/HTML</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
        <div className="service">
          <img className="service__icon" src="/img/viewfinder-icon.svg" alt="Ikona obiektywu" />
          <div>
           <h4 className="service__title">Digital</h4>
            <p className="service__description">Lorem Ipsum dolor sit amet, consectetur adipscing elit, sed doeiusmod tempor.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services;
