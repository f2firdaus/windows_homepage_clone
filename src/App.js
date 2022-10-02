import winlogo from './winlogo.png';
import folder from './folder.png'
import chrome from './chrome.png'
import winstore from './winstore.png';
import firefox from './firefox.png';
import whatsapp from './whatsapp.jpg'
import wifi from './wifi.png';
import sound from './sound.png'
import message from './message.jpg';
import folderlogo from './folderlogo.png'
function App() {
  return (
    <>
    <img src={folderlogo} alt="folderlogo" className="folderlogo" />
      <div className="footer">
        <div className="fooleft">
          <img src={winlogo} alt="logo" width="80px" />
          <input type="text" placeholder="Type here to Search" />
          <img className="folder" src={folder} alt="folder" height="100%" />
          <img src={chrome} alt="chrome" className="chrome" />
          <img src={winstore} alt="winstore" className="winstore" />
          <img src={firefox} alt="firefox" className="firefox" />
          <img src={chrome} alt="chrome" className="chrome" />
          <img src={chrome} alt="chrome" className="chrome" />
          <img src={whatsapp} alt="whatsapplogo" className="whatsapp" /> 
          <img src={chrome} alt="chrome" className="chrome" />
        </div>
        <div className="fooright">
    <h3 >27°c </h3>
    <img src={wifi} alt="wifi" className="wifi" />
          <img src={sound} alt="sound" className="sound" />
          <h3 className>ENG</h3>
          <div className="time-date">
            <p>10:02PM</p>
            <p>02-10-2022</p>
          </div>
          <img src={message} alt="message" className="message" />
        </div>
      
      </div>
      
      
    </>
  );
}

export default App;
