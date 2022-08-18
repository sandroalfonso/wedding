import Footer from './components/Footer';
import Gallery from './components/Gallery';
import Header from './components/Header';
import Healthprotocol from './components/Healthprotocol';
import RSVP from './components/RSVP';
import Seeyou from './components/Seeyou';
import Sidebar from './components/Sidebar';
import Where from './components/Where';
import Countdown from './components/Countdown';
import GiftRegistry from './components/GiftRegistry';
function App() {
  return (
    <>
      <Sidebar />
      <div id='raman-main'>
        <Header />
        
        <Countdown/>
        
        
        <Healthprotocol />
        <Gallery />
        <GiftRegistry />
        <Where />
        <RSVP />

        <Seeyou />
        <Footer />
      </div>
    </>
  );
}

export default App;
