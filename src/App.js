import React, { Suspense } from 'react';
import './App.css';

import Articles from './components/articles';

function App() {
  return (
    <div className="App">
      <Suspense fallback='Loading...'>
        <Articles  />
      </Suspense>
    </div>
  );
}

export default App;
