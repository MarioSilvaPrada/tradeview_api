import React, { FC } from 'react';

import * as S from './style';
import ChartContainer from 'components/ChartContainer';

const App: FC = () => (
  <S.Container>
    <h1>Home</h1>
    <ChartContainer />
  </S.Container>
);

export default App;
