import React from 'react';
import styled from '@emotion/styled';

import CodeBlock from './codeBlock';
import AnchorTag from './anchor';

const StyledPre = styled('pre')`
  padding: 16px;
  background: ${props => props.theme.colors.preFormattedText};
`;

export default {
  // eslint-disable-next-line react/display-name
  h1: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h1 className="heading1" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  h2: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h2 className="heading2" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  h3: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h3 className="heading3" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  h4: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h4 className="heading4" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  h5: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h5 className="heading5" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  h6: props => (
    // eslint-disable-next-line jsx-a11y/heading-has-content
    <h6 className="heading6" id={props.children.replace(/\s+/g, '').toLowerCase()} {...props} />
  ),
  // eslint-disable-next-line react/display-name
  p: props => <p className="paragraph" {...props} />,
  // eslint-disable-next-line react/display-name
  pre: props => (
    <StyledPre>
      <pre {...props} />
    </StyledPre>
  ),
  code: CodeBlock,
  a: AnchorTag,
  // TODO add `img`
  // TODO add `blockquote`
  // TODO add `ul`
  // TODO add `li`
  // TODO add `table`
};
