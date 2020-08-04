import React from 'react';
import User from './User.js';
import ErrorBoundary from './ErrorBoundary.js';

function App() {
  const user = {
    id: 1,
    username: 'cheoljin',
  };

  return (
    <ErrorBoundary>
      <User />
    </ErrorBoundary>
  );
}

export default App;
