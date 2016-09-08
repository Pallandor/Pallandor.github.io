import React from 'react';

import BasePage from '../BasePage';
// import SocialMediaLinks from '.../SOMEDIR';

// TODO: Potentially separate Title and Content into components due to constant re-use
const ContactPage = () => (
  <BasePage
    title={staticContent.title}
    content={staticContent.content}
  >
    {/* <SocialMediaLinks /> */}
  </BasePage>
);

const staticContent = {
  title: 'Contact Me',
  content: `
  Feel free to contact me on any of the social media links below!
  `,
};

export default ContactPage;
