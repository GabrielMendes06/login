import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import { GetIdProvider } from './context/GetId'
import { BalanceProvider } from './context/ThemeContext';
import { ModalProvider } from './context/OpenModal';
import { ModalTransferProvider } from './context/OpenTransfer';
import { TransferValueProvider } from './context/TransferValueModal';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode> 
    <TransferValueProvider>
      <ModalTransferProvider>
        <ModalProvider>
          <GetIdProvider>
            <BalanceProvider>
              <BrowserRouter>
                <App />
              </BrowserRouter>
            </BalanceProvider>
          </GetIdProvider>
        </ModalProvider>
      </ModalTransferProvider>
    </TransferValueProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

