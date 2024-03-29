import Images from './components/Images';
import './App.css';

function App() {
  return (
    <div id="root">
      <div className="hero is-fullheight is-bold is-info">
        <div className="hero-body">
          <div className="container">
            <div className="header content">
              <h2 className="subtitle is-6">React</h2>
              <h1 className="title is-1">Unsplash Infinite Scroll</h1>
            </div>
            <Images />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
