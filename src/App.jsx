import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import Footer from "./components/Footer";
import {useState} from "react";

const App = () => {
    const handleBackToTop = () => {
        window.scrollTo({top: 0, behavior: "smooth"});
    };

    return (
        <div className="app-container">
            <div className="content-container">
                <Header />
                <div className="main-content">
                    <SearchBar />
                    <HeroSection />
                    <AboutSection />

                    <div className="button-container">
                        <button className="action-button" onClick={handleBackToTop}>
                            <span>Koma Sama</span>
                        </button>
                    </div>
                </div>
                <Footer />
            </div>
        </div>
    );
};

export default App;
