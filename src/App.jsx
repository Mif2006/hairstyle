import React, { useState } from 'react';
import './index.css';
import { FaInstagram } from "react-icons/fa";

const App = () => {
  const [openAccordion, setOpenAccordion] = useState(null);

  const toggleAccordion = (index) => {
    setOpenAccordion(openAccordion === index ? null : index);
  };

  const faqData = [
    {
      title: "Почему я создала эту линию",
      content: (
        <>
          <p>Каждый день я работала с волосами после осветлений, окрашиваний, горячих укладок и неправильного ухода.</p>
          <p>Я видела, как волосы преображаются после профессиональных процедур, но также понимала, что сохранить этот результат дома бывает непросто.</p>
          <p>Хорошие средства часто стоят слишком дорого, а доступные не всегда дают обещанный эффект.</p>
          <p>Поэтому я решила создать уход, который объединяет профессиональный результат, удобство использования и разумную стоимость.</p>
        </>
      )
    },
    {
      title: "Что делает эту продукцию особенной",
      content: (
        <>
          <p>В основе каждого средства — мой многолетний опыт работы с волосами и понимание того, что действительно необходимо для их восстановления.</p>
          <p>Производство находится в Бразилии — стране, которая является одним из мировых лидеров в области профессионального ухода за волосами.</p>
          <p>Каждая формула тщательно отбиралась, чтобы помогать волосам оставаться сильными, живыми и красивыми не только после салона, но и каждый день.</p>
        </>
      )
    },
    {
      title: "Что входит в линейку",
      content: (
        <>
          <ul className="custom-list">
            <li>• Шампуни</li>
            <li>• Реконструкторы</li>
            <li>• Липидные маски</li>
            <li>• Протеиновые маски</li>
            <li>• Детокс-уходы</li>
            <li>• Термозащита</li>
          </ul>
          <p>Всё необходимое для полноценного домашнего ухода и поддержания результата между посещениями мастера.</p>
        </>
      )
    },
    {
      title: "Моя философия",
      content: (
        <>
          <p>Я верю, что красивые волосы — это не роскошь, а состояние заботы о себе.</p>
          <p>Когда волосы здоровы, блестят и легко укладываются, появляется особенное чувство уверенности.</p>
          <p>Именно ради этого я создаю свои продукты.</p>
          <p className="signature">
            С любовью к своему делу,<br />
            Бэлла Абдулаева
          </p>
        </>
      )
    }
  ];

  return (
    <div className="mobile-container">
      {/* Top Header */}
      <header className="top-header">
        <span className="brand-name">БЭЛЛА А.</span>
        {/* <span className="category-name">ВОЛОСЫ</span> */}
      </header>

      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-image-wrapper">
          <img 
            src="/HeroImg.jpg" 
            alt="Hero Woman" 
            className="hero-image" 
          />
        </div>
        <div className="hero-text">
          <h1>Красота начинается <br />с волос</h1>
          <p>Меня зовут<br />Бэлла Абдулаева.</p>
        </div>
        
        {/* Inside hero-section */}
        <div className="founder-message">
          <p>Более 20 лет я занимаюсь восстановлением и реконструкцией волос. За это время я помогла тысячам женщин вернуть волосам силу, блеск и здоровье.</p>
          <p>Создавая собственную линию ухода, я хотела решить главную проблему своих клиентов — сохранить результат профессионального ухода в домашних условиях.</p>
          <p>Так появились средства, которыми я пользуюсь сама, рекомендую своим клиентам и которым доверяю каждый день.</p>
        </div>
        
        <a href='https://n921382.yclients.com/company/857452/personal/menu?o=&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAdGRleASJdRJleHRuA2FlbQIxMQBzcnRjBmFwcF9pZA8xMjQwMjQ1NzQyODc0MTQAAaeZrHwV0Fkz7FKBVs9yKUbl7klpoipOHYHkuqCgUSQMvz1I2HjtVWJrqb4lvw_aem_RZzFe56LBzfO6SmGjtRLYg'>
          <button className="primary-btn">Запись на процедуру</button>
        </a>
      </section>

      {/* Quality Section (Bento Grid) */}
      <section className="quality-section">
        <h2 className="section-title">КАЧЕСТВО И НАТУРАЛЬНОСТЬ<br />В КАЖДОЙ КАПЛЕ</h2>
        <div className="bento-grid">
          <div className="bento-item bento-large">
            <img src="/Hair7.JPG" alt="FAQ" />
            {/* <span className="bento-label">FAQ</span> */}
          </div>
          <div className="bento-item bento-small top-right">
            <img src="/Hair3.jpg" alt="Блог" />
            {/* <span className="bento-label">Блог</span> */}
          </div>
          <div className="bento-item bento-small bottom-right">
            <img src="/Hair2.jpg" alt="О нас" />
            {/* <span className="bento-label">О нас</span> */}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why-choose-us-section">
        <h2 className="section-title">Результаты, которые говорят <br /> сами за себя</h2>
        
        <div className="slider-wrapper">
  <video
    className="slider-image"
    autoPlay
    muted
    loop
    playsInline
  >
    <source
      src="/HairVid1.MP4"
      type="video/mp4"
    />
    Your browser does not support the video tag.
  </video>
{/* 
  <div className="slider-dots">
    <span className="dot active"></span>
    <span className="dot"></span>
  </div> */}
</div>

<div className="features-section">
  <h2 className="section-title">Кому подходит уход</h2>

  <ul className="features-list">
    <li>
      <div className="circle-icon"></div>
      <span>Осветлённым волосам</span>
    </li>

    <li>
      <div className="circle-icon"></div>
      <span>Повреждённым волосам</span>
    </li>

    <li>
      <div className="circle-icon"></div>
      <span>Сухим и пористым волосам</span>
    </li>

    <li>
      <div className="circle-icon"></div>
      <span>Кудрявым волосам</span>
    </li>

    <li>
      <div className="circle-icon"></div>
      <span>Волосам после окрашивания</span>
    </li>

    <li>
      <div className="circle-icon"></div>
      <span>Всем, кто хочет сохранить здоровье и красоту волос в домашних условиях</span>
    </li>
  </ul>
</div>

        {/* 2x2 Photo Grid */}
        <div className="photo-grid">
  <img src="/Hair4.jpg" alt="Couple hugging" className="grid-img" />

  <video
    className="grid-video"
    autoPlay
    muted
    loop
    playsInline
  >
    <source src="/HairVid2.mp4" type="video/mp4" />
  </video>

  <img src="/Hair5.jpg" alt="Close up woman" className="grid-img" />
  <img src="/Hair1.jpg" alt="Close up woman red lips" className="grid-img" />
</div>

<div className="instagram-btn-wrapper">
  <a
    href="https://www.instagram.com/bella_stylist_?igsh=MWZsMXNkd2ZqZmV3dA=="
    target="_blank"
    rel="noopener noreferrer"
    className="instagram-btn"
  >
    <FaInstagram />
    <span>Галерея результатов</span>
  </a>
</div>
      </section>

      <section className="awards-section">

<h2 className="section-title">👑 Красота — это больше, чем профессия</h2>


<div className="awards-hero-wrapper">

<img src="/Awardsprimary.JPG" alt="Awards Hero" className="awards-hero-image" />

</div>

<div className="awards-content">

<p>

Для Бэллы красота — не просто работа, а часть жизни.
Победа в конкурсе красоты стала ещё одним подтверждением того, что уверенность, любовь к себе и внимание к деталям всегда заметны окружающим.
Те же принципы она вкладывает в свою работу и в создание каждого продукта.

</p>

<h2 className="section-title">🏆 Годы опыта. Результаты. Победы.</h2>

</div>

<div className="awards-carousel">


<img src="awcarousel2.JPG" alt="Award 2" className="award-slide" />

{/* <img src="/awcarousel3.JPG" alt="Award 3" className="award-slide" /> */}

<img src="awcarousel5.JPG" alt="Award 4" className="award-slide" />

<img src="awcarousel4.JPG" alt="Award 4" className="award-slide" />
<img src="awcarousel6.JPG" alt="Award 4" className="award-slide" />
<img src="awcarousel1.JPG" alt="Award 1" className="award-slide" />
<img src="awcarousel7.JPG" alt="Award 4" className="award-slide" />

</div>

</section>

      {/* Philosophy / Accordion Section */}
      <section className="philosophy-section">
        <h2 className="section-title">НАША ФИЛОСОФИЯ УХОДА<br />ЗА ВОЛОСАМИ</h2>
        
        <div className="accordion">
          {faqData.map((item, index) => (
            <div className="accordion-item" key={index}>
              <div 
                className="accordion-header" 
                onClick={() => toggleAccordion(index)}
              >
                <span>{item.title}</span>
                <svg 
                  className={`arrow-icon ${openAccordion === index ? 'rotated' : ''}`} 
                  width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1"
                >
                  <circle cx="12" cy="12" r="11" stroke="white"/>
                  <path d="M8 10L12 14L16 10" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className={`accordion-content-wrapper ${openAccordion === index ? 'open' : ''}`}>
                <div className="accordion-content">
                  <div className="accordion-inner-text">
                    {item.content}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      

      {/* Footer / Socials */}
      <footer className="footer-section">
  <h2 className="section-title">Связаться со мной</h2>

  <div className="social-buttons">
    <a
      href="https://wa.me/79254218738"
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
      aria-label="WhatsApp"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M12.01 2.014C6.5 2.014 2.014 6.5 2.014 12.01c0 1.954.558 3.784 1.517 5.334L2.014 22l4.82-1.488a9.962 9.962 0 005.176 1.455h.004c5.506 0 9.991-4.485 9.991-9.991 0-2.668-1.038-5.174-2.923-7.058A9.923 9.923 0 0012.01 2.014zm5.498 14.334c-.229.645-1.327 1.233-1.848 1.341-.497.103-1.155.181-3.32-.716-2.618-1.085-4.298-3.738-4.428-3.91-.131-.173-1.056-1.408-1.056-2.686 0-1.278.665-1.908.898-2.164.232-.256.505-.32.671-.32.166 0 .332.001.481.008.156.007.368-.061.576.438.214.512.723 1.765.788 1.893.065.128.108.277.026.438-.082.16-.124.256-.248.405-.124.149-.26.324-.372.443-.122.13-.25.27-.107.518.143.248.636 1.054 1.366 1.705.94.842 1.728 1.097 1.977 1.22.25.123.395.103.541-.065.146-.168.634-.738.804-.991.17-.253.34-.212.568-.128.228.085 1.442.682 1.691.805.249.123.415.184.475.287.06.103.06.598-.17 1.243z"/>
      </svg>
    </a>

    <a
      href="https://t.me/+79254218738"
      target="_blank"
      rel="noopener noreferrer"
      className="social-btn"
      aria-label="Telegram"
    >
      <svg width="24" height="24" viewBox="0 0 24 24" fill="#000" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.888-.666 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
      </svg>
    </a>
  </div>
</footer>
    </div>
  );
};

export default App;