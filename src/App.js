import './App.scss';
import qrCode from './images/image-qr-code.png';
import QrText from './QrText';

function App() {
  return (
    <div className="App">
      <div>
        <img src={qrCode} alt="qr code"/>
      </div>
      <QrText/>
    </div>
  );
}

export default App;
