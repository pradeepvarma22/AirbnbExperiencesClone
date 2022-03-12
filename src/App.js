import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Card from './components/Card';
import Data from './data';

function App() {

  const card = Data.map(eachitem => {

    return <Card

      key={eachitem.id}
      {...eachitem}

    />
  });


  return (
    <div>
      <Navbar />
      <Hero />
      <section className='card-list'>
        {card}
      </section>
    </div>

  );
}

export default App;
