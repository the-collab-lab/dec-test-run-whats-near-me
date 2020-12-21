import './App.css';

import LocationSample from './LocationSample';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header>Header</Header>
      <main className="main">
        <LocationSample />
      </main>
      <Footer>Footer</Footer>
    </div>
  );
}

export default App;
