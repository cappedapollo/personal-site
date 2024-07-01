import React, { useState, useEffect } from 'react';

const data = {
  name: 'Shanon Crispen',
  birthTime: new Date('1990-09-13T09:24:00'),
  DLN: '34474234',
  sex: 'Male',
  eye: 'Black',
  addressLine1: '856 Huey Rd',
  city: 'Rimersburg',
  state: 'PA',
  zipCode: '16248',
  phone: '',
  email: [
    'shanoncrispen0329@gmail.com',
  ],
  sites: {
    self: 'https://personal-site-gold-ten.vercel.app/',
    linkedin: 'https://www.linkedin/in/shanoncrispen',
    github: 'https://www.github.com/cappedapollo',
    twitter: 'https://',
    facebook: 'https://',
  },
};

const Age = () => {
  const [age, setAge] = useState();

  const tick = () => {
    const divisor = 1000 * 60 * 60 * 24 * 365.2421897; // ms in an average year
    setAge(((Date.now() - data.birthTime) / divisor).toFixed(11));
  };

  useEffect(() => {
    const timer = setInterval(() => tick(), 25);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return <>{age}</>;
};

const statsdata = [
  {
    key: 'age',
    label: 'Current age',
    value: <Age />,
  },
  {
    key: 'countries',
    label: 'Countries visited',
    value: 53,
    link: '',
  },
  {
    key: 'location',
    label: data.addressLine1,
    value: data.city,
  },
];

export { statsdata };
export default data;
