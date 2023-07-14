import React from 'react';
import './Team.scss';

function Person({ name, role, image }) {
  return (
    <div className="person">
      <div className="person__image-wrapper">
        <img className="person__image" src={image} alt={name} />
        <div className="person__overlay"></div>
        <div className="icons">
          <img src="/img/facebook.svg" alt="Facebook"/>
          <img src="/img/twitter.svg" alt="Twitter" />
          <img src="/img/pinterest.svg" alt="Pinterest" />
          <img src="/img/instagram.svg" alt="Instagram" />
        </div>
      </div>
      <div>
        <h4 className="person__name">{name}</h4>
        <p className="person__role">{role}</p>
      </div>
    </div>
  );
}

function Team() {
  const teamMembers = [
    {
      name: 'Matthew Dex',
      role: 'Graphic Design',
      image: '/img/person1.png'
    },
    {
      name: 'Christopher Campbell',
      role: 'Branding/UX Design',
      image: '/img/person2.png'
    },
    {
      name: 'Michael Fertig',
      role: 'Developer',
      image: '/img/person3.png'
    }
  ];

  return (
    <div className="team">
      <div>
        <h3 className="team__title">
          <span className="team__title--small">Who we are</span>
          <span className="team__title--big">Meet our Team</span>
        </h3>
        <div className="team__separation"></div>
        <p className="team__blurb">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
      <div className="team__grid">
        {teamMembers.map((member, index) => (
          <Person key={index} name={member.name} role={member.role} image={member.image} />
        ))}
      </div>
    </div>
  );
}

export default Team;