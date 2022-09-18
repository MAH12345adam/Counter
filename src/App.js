import React from 'react'
import styles from './App.module.css';

function App() {
  const [count, setCount] = React.useState(0);

  const onCtlickMinus = () => {
    if (!count) return
    setCount(count - 1)
  }


  return (
    <div className={styles.App}>
      <div className={styles.counter}>
        <h1>{count}</h1>
        <div className={styles.forms}>
          <button className={styles.button_1} onClick={() => setCount(count + 1)}>Plus</button>
          <button className={styles.button_2} onClick={onCtlickMinus}>Minus</button>
          <button className={styles.button_3} onClick={() => setCount(0)}>Clear</button>
        </div>
      </div>
    </div>
  );
}

export default App;
