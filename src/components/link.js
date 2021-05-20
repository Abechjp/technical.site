import React from 'react';
import { Link as GatsbyLink } from 'gatsby';
import isAbsoluteUrl from 'is-absolute-url';

const Link = ({ to, ...props }) =>
  // eslint-disable-next-line jsx-a11y/anchor-has-content
  isAbsoluteUrl(to) ? <a href={to} {...props}></a> : <GatsbyLink to={to} {...props} />;

export default Link;
