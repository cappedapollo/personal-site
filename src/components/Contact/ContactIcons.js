import React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import contacts from '../../data/contact';

const ContactIcons = () => (
  <ul className="icons">
    {contacts.map((s) => (
      <li key={s.label}>
        <a href={s.link} aria-label={s.label}>
          <FontAwesomeIcon icon={s.icon} />
        </a>
      </li>
    ))}
  </ul>
);

export default ContactIcons;
