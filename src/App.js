import './App.css';
import Menu from './components/navbar/Menu.js';
import Card from './components/Card/Card.js';
import Footer from './components/Footer/Footer.js';
import Portofoliu from './components/Portofoliu/Portofoliu.js';
import Programari from './components/Programari/Programari.js';
import '@fortawesome/fontawesome-free/css/all.css';
import Gallery from './components/Carousel/Gallery.js';


function App() {
  return (
    <div className="App">
      <Menu />
      <header className="App-header">
      <Gallery />
        </header>

        <section id="home">
        <h2>Servicii</h2>
        <div className="cards">
                      <Card title="Nunti" content="Lorem ipsum" icon="phone" />
                      <Card title="Majorate" content="Dolor sit amet" icon="envelope" />
                      <Card title="Individual" content="Consectetur adipiscing" icon="user" />
                
          </div>
          </section>

          <section id="portofoliu">
          <h1>Protofoliul personal</h1>
          <Portofoliu />
          </section>

          <section id="rezerva">
            
          <Programari />
          </section>

          <Footer />
    </div>
  );
}

export default App;
