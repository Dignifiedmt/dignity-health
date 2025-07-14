import Header from "./components/Header";
import SearchBar from "./components/SearchBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import BlogSection from "./components/BlogSection";
import ResourceSection from "./components/ResourceSection";
import Footer from "./components/Footer";
import {useState} from "react";

// Example data for preview
const previewBlogs = [
    {
        id: 1,
        title: "Amfanin Rigakafi",
        body: "Rigakafi yana taimakawa wajen kare lafiyar yara.",
        descriptionHa: "Rigakafi yana da matukar muhimmanci ga yara.",
        image: "https://via.placeholder.com/120x70?text=Blog",
    },
];
const previewResources = [
    {
        id: 1,
        title: "Jagorar Lafiya",
        body: "Jagora mai sauki don kula da lafiyar iyali.",
        descriptionHa: "Jagora ga iyaye da masu kulawa.",
        image: "https://via.placeholder.com/120x70?text=Resource",
    },
];

const App = () => {
    // Dummy handlers for preview
    const handleAdd = () => {};
    const handleRemove = () => {};

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
                    {/* <div className="preview-row">
                        <BlogSection
                            blogs={previewBlogs}
                            onAdd={handleAdd}
                            onRemove={handleRemove}
                            hideAddButton={true}
                        />
                        <ResourceSection
                            resources={previewResources}
                            onAdd={handleAdd}
                            onRemove={handleRemove}
                            hideAddButton={true}
                        />
                    </div> */}
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
