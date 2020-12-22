import Header from './components/Header';
import Footer from './components/Footer';
import Navbar from './components/Navbar';

import { Map } from './components/Map';

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Header</h1>
      </Header>
      <main className="main">
        <Map />
      </main>
      <Footer>
        <Navbar />
      </Footer>
    </div>
  );
}

export default App;
