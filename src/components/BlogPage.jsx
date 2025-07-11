import { useState, useEffect } from 'react';
import Header from './Header';
import SearchBar from './SearchBar';
import BlogSection from './BlogSection';
import ResourceSection from './ResourceSection';
import Footer from './Footer';

const BlogPage = () => {
  const [blogs, setBlogs] = useState([]);
  const [resources, setResources] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [blogsResponse, resourcesResponse] = await Promise.all([
          fetch('/posts.json'),
          fetch('/resources.json')
        ]);

        if (!blogsResponse.ok || !resourcesResponse.ok) {
          throw new Error('An kasa ɗaukar bayanai');
        }

        const blogsData = await blogsResponse.json();
        const resourcesData = await resourcesResponse.json();

        setBlogs(blogsData);
        setResources(resourcesData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  const addItem = (type, newItem) => {
    const newId = Math.max(...[...blogs, ...resources].map(item => item.id), 0) + 1;
    const item = { id: newId, ...newItem };
    if (type === 'blog') {
      setBlogs([...blogs, item]);
    } else {
      setResources([...resources, item]);
    }
  };

  const removeItem = (type, id) => {
    if (type === 'blog') {
      setBlogs(blogs.filter(item => item.id !== id));
    } else {
      setResources(resources.filter(item => item.id !== id));
    }
  };

  if (error) {
    return <div>Kuskure: {error}</div>;
  }

  return (
    <div className="app-container">
      <div className="content-container">
        <Header />
        <div className="main-content">
          <SearchBar />
          <BlogSection blogs={blogs} onAdd={addItem} onRemove={removeItem} />
          <ResourceSection resources={resources} onAdd={addItem} onRemove={removeItem} />
        </div>
        <Footer />
      </div>
    </div>
  );
};

export default BlogPage;