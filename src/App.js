import './App.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Issues from './Components/Issues';
function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <Issues />
        <Footer />
      </div>
    </>
  );
}

export default App;
