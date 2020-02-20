import styled from 'styled-components/native';
import { Dimensions } from 'react-native';

export const SOpacity = styled.View`
  height: 150px;
  width: 150px;
  background-color: #f77;
  border-radius: ${Math.round(
    Dimensions.get('window').width + Dimensions.get('window').height
  ) / 2};
`;
