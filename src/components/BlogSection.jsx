import {useState} from "react";

const BlogSection = ({blogs, onAdd, onRemove}) => {
    const [newBlog, setNewBlog] = useState({
        title: "",
        body: "",
        descriptionHa: "",
        image: "",
    });
    const [isFormVisible, setIsFormVisible] = useState(false);
    const [error, setError] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!newBlog.title || !newBlog.body || !newBlog.descriptionHa) {
            setError("All fields are required.");
            return;
        }
        setError("");
        onAdd("blog", newBlog);
        setNewBlog({title: "", body: "", descriptionHa: "", image: ""});
        setIsFormVisible(false);
    };

    const toggleForm = () => {
        setIsFormVisible(!isFormVisible);
        setError("");
        if (isFormVisible) {
            setNewBlog({title: "", body: "", descriptionHa: "", image: ""});
        }
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setNewBlog({...newBlog, image: reader.result});
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="blog-container">
            <div className="section-header">
                <p className="section-title">Shafuka</p>
                <p className="section-description">Sabbin bayanai kan lafiyar mata da yara</p>
            </div>
            <div className="blog-grid">
                {blogs.map((blog) => (
                    <article key={blog.id} className="resource-item">
                        <div className="resource-image" style={{backgroundImage: `url("${blog.image}")`}}></div>
                        <div className="resource-content">
                            <p className="resource-title">{blog.title}</p>
                            <p className="resource-description">{blog.body}</p>
                            <p className="resource-description">{blog.descriptionHa}</p>
                            <div className="blog-actions">
                                <a className="action-button" href={`/blog/${blog.id}`}>
                                    View More
                                </a>
                                <button
                                    className="action-button delete-button"
                                    onClick={() => onRemove("blog", blog.id)}
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
                    {isFormVisible ? "Soke" : "Ƙara Shafuka"}
                </button>
            </div>
            {isFormVisible && (
                <div className="form-container">
                    <div className="form-wrapper">
                        <input
                            type="text"
                            placeholder="Take"
                            value={newBlog.title}
                            onChange={(e) => setNewBlog({...newBlog, title: e.target.value})}
                            className="form-input"
                        />
                        <textarea
                            placeholder="Jigon Shafukan"
                            value={newBlog.body}
                            onChange={(e) => setNewBlog({...newBlog, body: e.target.value})}
                            className="form-textarea"
                            rows="5"
                        />
                        <input
                            type="text"
                            placeholder="Bayanai (Hausa)"
                            value={newBlog.descriptionHa}
                            onChange={(e) => setNewBlog({...newBlog, descriptionHa: e.target.value})}
                            className="form-input"
                        />
                        <input type="file" accept="image/*" onChange={handleImageChange} className="form-input" />
                        {newBlog.image && (
                            <img
                                src={newBlog.image}
                                alt="Preview"
                                style={{maxWidth: "100%", marginBottom: "1rem", borderRadius: "0.5rem"}}
                            />
                        )}
                        {error && <div style={{color: "red", marginBottom: "0.5rem"}}>{error}</div>}
                        <button className="submit-button" onClick={handleSubmit}>
                            Aika Shafuka
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogSection;
