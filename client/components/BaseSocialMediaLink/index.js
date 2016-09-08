import React from 'react';

const BaseSocialMediaLink = ({link, title, svgPath}) => (
  <a className={style.link} href={link} title="">
    <svg className={style.svg} data-icon={title} viewBox="0 0 32 32" style={{fill:"currentcolor"}}>
      <title>{title} icon</title>
      <path d={svgPath}></path>
    </svg>
  </a>
);

const style = {
  link: 'link dim gray dib h2 w3 br-100 mr3',
  svg: 'w2',
};

BaseSocialMediaLink.propTypes = {
  link: React.PropTypes.string,
  title: React.PropTypes.string,
  svgPath: React.PropTypes.string,
};

export default BaseSocialMediaLink;
