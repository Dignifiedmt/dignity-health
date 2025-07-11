import Header from './Header';
import SearchBar from './SearchBar';
import Footer from './Footer';

const ContactPage = () => (
  <div className="app-container">
    <div className="content-container">
      <Header />
      <div className="main-content">
        <SearchBar />
        <div className="contact-container">
          <h2 className="section-title">Tuntuɓe Mu</h2>
          <p className="section-description">Tuntuɓe mu don ƙarin bayani ko tambayoyi game da lafiyar mata da yara.</p>
          <div className="contact-form">
            <input
              type="text"
              placeholder="Sunanka"
              className="form-input"
            />
            <input
              type="email"
              placeholder="Imel"
              className="form-input"
            />
            <textarea
              placeholder="Saƙonka"
              className="form-textarea"
              rows="5"
            ></textarea>
            <button className="submit-button">Aika Saƙo</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  </div>
);

export default ContactPage;