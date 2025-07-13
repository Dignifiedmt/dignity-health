import {useState} from "react";

const ResourceSection = ({resources, onAdd, onRemove}) => {
    const [newResource, setNewResource] = useState({
        title: "",
        body: "",
        descriptionHa: "",
        image: "",
    });
    const [isFormVisible, setIsFormVisible] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        onAdd("resource", newResource);
        setNewResource({title: "", body: "", descriptionHa: "", image: ""});
        setIsFormVisible(false);
    };

    const toggleForm = () => setIsFormVisible(!isFormVisible);

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewResource({...newResource, image: reader.result});
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="resource-container">
            <h2 className="section-title">Abubuwan da aka Shawarta</h2>
            <div className="resource-grid">
                {resources.map((resource) => (
                    <article key={resource.id} className="resource-item">
                        <div className="resource-image" style={{backgroundImage: `url("${resource.image}")`}}></div>
                        <div className="resource-content">
                            <p className="resource-title">{resource.title}</p>
                            <p className="resource-description">{resource.body}</p>
                            <p className="resource-description">{resource.descriptionHa}</p>
                            <div style={{display: "flex", gap: "0.5rem", marginTop: "0.5rem"}}>
                                <a className="action-button" href={`/resource/${resource.id}`}>
                                    View More
                                </a>
                                <button
                                    className="action-button delete-button"
                                    onClick={() => onRemove("resource", resource.id)}
                                >
                                    Cire
                                </button>
                            </div>
                        </div>
                    </article>
                ))}
            </div>
            <div className="button-container">
                <button
                    className={`add-button toggle-form-button ${isFormVisible ? "cancel" : ""}`}
                    onClick={toggleForm}
                >
                    {isFormVisible ? "Soke" : "Ƙara Abubuwa"}
                </button>
            </div>
            {isFormVisible && (
                <div className="form-container">
                    <div className="form-wrapper">
                        <input
                            type="text"
                            placeholder="Take"
                            value={newResource.title}
                            onChange={(e) => setNewResource({...newResource, title: e.target.value})}
                            className="form-input"
                        />
                        <textarea
                            placeholder="Jigon Abubuwan"
                            value={newResource.body}
                            onChange={(e) => setNewResource({...newResource, body: e.target.value})}
                            className="form-textarea"
                            rows="5"
                        />
                        <input
                            type="text"
                            placeholder="Bayanai (Hausa)"
                            value={newResource.descriptionHa}
                            onChange={(e) => setNewResource({...newResource, descriptionHa: e.target.value})}
                            className="form-input"
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange} className="form-input" />
                        <button className="submit-button" onClick={handleSubmit}>
                            Ƙara Abubuwan
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ResourceSection;
