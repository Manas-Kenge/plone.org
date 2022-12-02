import React from 'react';
import { DefaultView } from '@plone/volto/components';
import { Container } from 'semantic-ui-react';

const HotfixView = (props) => {
  const { content } = props;
  return (
    <>
      <Container>
        <h1 className="documentFirstHeading">{content.id}</h1>
      </Container>
      <DefaultView {...props} />;
    </>
  );
};

export default HotfixView;
