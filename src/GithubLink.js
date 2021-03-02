import React from 'react';
const githubIcon = require('https://raw.githubusercontent.com/ohiro18/technical.site/master/src/components/images/github.png');

const GithubLink = ({ link, text }) => {
  return (
    <a href={link} className="githubSection">
      <img className="githubIcon" src={githubIcon} alt="github" />
      {text}
    </a>
  );
};

export default GithubLink;

