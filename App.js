import React from 'react';
import {ImageService} from './src/services/image-service';
import { AppNavigation } from './src/Navigation/AppNavigation';

const App: () => props = () => {
  return (
    <ImageService>
      <AppNavigation />
    </ImageService>
  );
};

export default App;