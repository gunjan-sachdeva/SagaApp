import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import DataComponent from './components/DataComponent';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <DataComponent />
      </div>
    </Provider>
  );
}

export default App;
