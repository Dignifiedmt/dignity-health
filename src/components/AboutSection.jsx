const AboutSection = () => {
  const aboutItems = [
    {
      icon: 'Users',
      title: 'Game da Mu',
      description: 'Manufarmu ita ce samar da bayanai masu inganci da tallafi ga iyaye da masu kulawa don inganta lafiyar mata da yara a cikin al’ummarmu.',
      path: 'M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z'
    },
    {
      icon: 'Target',
      title: 'Manufarmu',
      description: 'Muna fatan al’umma inda kowane yaro zai sami damar rayuwa cikin lafiya da farin ciki, kuma kowace uwa ta sami tallafin da ake bukata don kula da kanta da yaranta.',
      path: 'M221.87,83.16A104.1,104.1,0,1,1,195.67,49l22.67-22.68a8,8,0,0,1,11.32,11.32l-96,96a8,8,0,0,1-11.32-11.32l27.72-27.72a40,40,0,1,0,17.87,31.09,8,8,0,1,1,16-.9,56,56,0,1,1-22.38-41.65L184.3,60.39a87.88,87.88,0,1,0,23.13,29.67,8,8,0,0,1,14.44-6.9Z'
    },
    {
      icon: 'Eye',
      title: 'Hangenmu',
      description: 'Ƙungiyarmu ta ƙwararru tana haɗa kai da iyaye, masu kulawa, da ƙungiyoyi don samar da bayanai masu aminci da ayyuka don haɓaka lafiyar mata da yara.',
      path: 'M247.31,124.76c-.35-.79-8.82-19.58-27.65-38.41C194.57,61.26,162.88,48,128,48S61.43,61.26,36.34,86.35C17.51,105.18,9,124,8.69,124.76a8,8,0,0,0,0,6.5c.35.79,8.82,19.57,27.65,38.4C61.43,194.74,93.12,208,128,208s66.57-13.26,91.66-38.34c18.83-18.83,27.3-37.61,27.65-38.4A8,8,0,0,0,247.31,124.76ZM128,184c-30.36,0-58.69-17.23-80.88-36,13.53-10.86,33.52-21.86,58.69-24.58A36,36,0,1,1,128,148C89.48,150.24,65.05,168.23,64.14,168.23A88.61,88.61,0,0,1,128,184Zm80.88-36c-8.76,7-22.27,14.57-36.5,18.52a36,36,0,1,1-29-24.52c25.17,2.72,45.16,13.72,58.69,24.58C186.69,166.77,158.36,149.54,128,149.54c-1.46,0-2.91.05-4.36.13A36,36,0,0,1,152,124c0-1.25-.08-2.49-.19-3.72a87.87,87.87,0,0,1,56.07,27.72Z'
    }
  ];

  return (
    <div className="about-container">
      <h3 className="about-title">Game da Mu</h3>
      <div className="about-grid">
        {aboutItems.map((item, index) => (
          <div key={index} className="about-item">
            <div className="about-icon">
              <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
                <path d={item.path}></path>
              </svg>
            </div>
            <h4 className="about-item-title">{item.title}</h4>
            <p className="about-description">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;