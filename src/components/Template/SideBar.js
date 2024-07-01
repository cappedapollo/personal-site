import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';
import data from '../../data/stats/personal';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>{data.name}</h2>
        <p><a href={`mailto:${data.email[0]}`}>{data.email[0]}</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>Hi, I&apos;m {data.name}. I am a <a href="https://www.worldcampus.psu.edu/">The Pennsylvania State University</a> graduate,
        a seasoned Senior Frontend Developer with over 10 years of experience.
        I&apos;ve worked with top firms like Nortek Consulting and Topcone Inc,
        leading web application projects and optimizing user experiences.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Shanon Crispen <Link to="/">{data.sites.self}</Link>.</p>
    </section>
  </section>
);

export default SideBar;
