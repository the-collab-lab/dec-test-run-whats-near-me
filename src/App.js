import LocationSample from './LocationSample';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header>
        <h1>Header</h1>
      </Header>
      <main className="main">
        <LocationSample />
      </main>
      <Footer>
        <p>Footer</p>
      </Footer>
    </div>
  );
}

export default App;
