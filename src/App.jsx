import Header from './components/Header';
import SearchBar from './components/SearchBar';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import NewsSection from './components/NewsSection';
import Footer from './components/Footer';

const App = () => (
  <div className="app-container">
    <div className="content-container">
      <Header />
      <div className="main-content">
        <SearchBar />
        <HeroSection />
        <AboutSection />
        <NewsSection />
        <div className="button-container">
          <a href="/shafuka" className="action-button">
            <span>Duba Duk Labarai</span>
          </a>
        </div>
        <div className="button-container">
          <button className="action-button">
            <span>Koma Sama</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default App;