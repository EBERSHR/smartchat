// import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import store from './store';
// import { FirebaseAppProvider } from 'reactfire';
// import firebaseConfig from './firebaseConfig';

ReactDOM.render(
  // <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <Provider store={store}>
      {/* <Suspense fallback={'Conectando la app...'}> */}
        <App />
      {/* </Suspense> */}
    </Provider>,
  // </FirebaseAppProvider>,
  document.getElementById('root')
);
