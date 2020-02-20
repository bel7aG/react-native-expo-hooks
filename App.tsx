import React, { useState } from 'react';
import { Root } from 'native-base';
import styled from 'styled-components/native';

import { Opacity } from 'components';

export default () => {
  return (
    <Root>
      <SApplication>
        <Opacity />
      </SApplication>
    </Root>
  );
};

const SApplication = styled.View`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
`;
