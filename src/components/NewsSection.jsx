const NewsSection = () => {
  const newsItems = [
    {
      title: 'Sabon Shirin Lafiyar Mata',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
      image: '/images/news1.jpg'
    },
    {
      title: 'Shirye-shiryen Lafiyar Yara',
      description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
      image: '/images/news2.jpg'
    },
    {
      title: 'Taron Al’umma Kan Lafiya',
      description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
      image: '/images/news3.jpg'
    }
  ];

  return (
    <div className="news-container">
      <h3 className="news-title">Labarai</h3>
      <div className="news-grid">
        {newsItems.map((item, index) => (
          <div key={index} className="news-item">
            <div className="news-image" style={{ backgroundImage: `url("${item.image}")` }}></div>
            <div className="news-content">
              <h4 className="news-item-title">{item.title}</h4>
              <p className="news-description">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;