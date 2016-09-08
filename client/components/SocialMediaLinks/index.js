import React from 'react';

import BaseSocialMediaLink from '../BaseSocialMediaLink';

const SocialMediaLinks = ({socialMedia}) => {
  const socialMediaLinks = socialMedia.map(socialMediaObj =>
    (<BaseSocialMediaLink
      title={socialMediaObj.title}
      link={socialMediaObj.link}
      svgPath={socialMediaObj.svgPath}
    />
  ));
  return (
    <div>
    {socialMediaLinks}
    </div>
  );
};

SocialMediaLinks.propTypes = {
  socialMedia: React.PropTypes.array,
};

export default SocialMediaLinks;
