import React from 'react';
import Navigator from './routes/homeStack';
import {ContextProvider} from './context/contextFile';
export default function App() {
  return (
    <ContextProvider>
      <Navigator />
    </ContextProvider>
  );
}
