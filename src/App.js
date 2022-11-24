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
import GiftRegistry2 from './components/GiftRegistry2';
import Hotels from './components/Hotels';

function App() {
  return (
    <>
      <Sidebar />
      <div id='raman-main'>
        <Header />
        <Where />
        <Gallery />
        <Hotels/>
        <GiftRegistry />
        <GiftRegistry2/>
        
        
        
        <Healthprotocol />
        {/* <RSVP /> */}
        <Countdown/>
        
        
        
        
        {/* <Seeyou /> */}
        <Footer />
      </div>
    </>
  );
}

export default App;
