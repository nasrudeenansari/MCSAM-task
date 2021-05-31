import './App.css';
import Header from './component/Header';
import Navbar from './component/Navbar';

function App() {
  return (
    <section className="App">
      <Navbar />
      <div className="container">
        <Header />
      </div>
    </section>
  );
}

export default App;
