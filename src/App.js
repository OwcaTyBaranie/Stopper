// App.js
import React from 'react';
import Timer from './components/Timer/Timer';
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.container}>
      <Timer />
    </div>
  );
}

export default App;
