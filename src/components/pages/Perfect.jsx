import React from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import  {i18n} from '../../i18n';



const Perfect = () => {
    const { t, i18n } = useTranslation();
  const { id } = useParams();

  
  const newsData = [
    { id: 1, title: 'Mukammal gadjetlarni tanlash', image: 'Images/news1.png', content: '1-yangilik matni...' },
    { id: 2, title: 'Zamonaviy texnologiyalardan foydalanish', image:'Images/news2.png', content: '2-yangilik matni...' },
    { id: 3, title: 'Kreativ g\'oyalarni amalga oshirish', image: 'Images/news3.png', content: '3-yangilik matni...' },
  ];

  const currentNews = newsData.find(news => news.id === parseInt(id));

  if (!currentNews) {
    return <div>Yangilik topilmadi!</div>;
  }

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-4">{currentNews.title}</h1>
      <img src={currentNews.image} alt={currentNews.title} className="w-full rounded-md shadow-md" />
      <p className="mt-4">{currentNews.content}</p>
   
    </div>
  );
};

export default Perfect;