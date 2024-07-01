import { faGithub } from '@fortawesome/free-brands-svg-icons/faGithub';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons/faFacebookF';
import { faInstagram } from '@fortawesome/free-brands-svg-icons/faInstagram';
import { faLinkedinIn } from '@fortawesome/free-brands-svg-icons/faLinkedinIn';
import { faAngellist } from '@fortawesome/free-brands-svg-icons/faAngellist';
import { faTwitter } from '@fortawesome/free-brands-svg-icons/faTwitter';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons/faEnvelope';
// See https://fontawesome.com/icons?d=gallery&s=brands,regular&m=free
// to add other icons.

import data from './stats/personal';

const { sites } = data;

const contacts = [
  {
    link: sites.github,
    label: 'Github',
    icon: faGithub,
  },
  {
    link: sites.facebook,
    label: 'Facebook',
    icon: faFacebookF,
  },
  {
    link: '',
    label: 'Instagram',
    icon: faInstagram,
  },
  {
    link: sites.linkedin,
    label: 'LinkedIn',
    icon: faLinkedinIn,
  },
  {
    link: 'https://angel.co/michael-d-angelo',
    label: 'Angel List',
    icon: faAngellist,
  },
  {
    link: sites.twitter,
    label: 'Twitter',
    icon: faTwitter,
  },
  {
    link: `mailto:${data.email[0]}`,
    label: 'Email',
    icon: faEnvelope,
  },
];

export default contacts;
