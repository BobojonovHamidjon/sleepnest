import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import Contact from './Contact';

const NewsDetail = () => {
    const { id } = useParams();
    const { t } = useTranslation();
    const [newsItem, setNewsItem] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    // Dummy news data (replace with your actual data fetching logic)
    const dummyNewsData = [
        {
            id: '1',
            title: t("news.How"),
            content: t("news.What"),
            date: "10/05/2024",
            by: t("news.by"),
            image: "/Images/news1.png"
        },
        {
            id: '2',
            title: t("news.How2"),
            content: t("news.Interesting"),
            date: "10/05/2024",
            by: t("news.by"),
            image: "/Images/news2.png"
        },
        {
            id: '3',
            title: t("news.Ways"),
            content: t("news.When"),
            date: "10/06/2024",
            by: t("news.by"),
            image: "/Images/news3.png"
        }
    ];

    useEffect(() => {
        // Simulate fetching data based on ID
        const foundNews = dummyNewsData.find(news => news.id === id);
        if (foundNews) {
            setNewsItem(foundNews);
            setLoading(false);
        } else {
            setError(new Error(t('news_not_found')));
            setLoading(false);
        }
    }, [id, t]);

    if (loading) {
        return <div>{t('loading')}...</div>;
    }

    if (error) {
        return <div>{t('error_loading_news')}: {error.message}</div>;
    }

    if (!newsItem) {
        return <div>{t('news_not_found')}</div>;
    }

    return (
        <>
        <div className="container mx-auto mt-0 p-4 flex flex-col items-center">
            {newsItem.image && (
                <img
                    src={newsItem.image}
                    alt={newsItem.title}
                    className="rounded-md mb-4 mt-20  " // Kenglikni moslashtirish uchun w-full va max-w-2xl qo'shildi
                    style={{
                        width: '1015px',
                        height: '568px',
                        objectFit: 'cover'
                    }}
                />
            )}
            <p className="text-gray-600 mb-2">{newsItem.date} | {newsItem.by}</p> {/* Sana va muallif yuqoriga ko'chirildi */}
            <h1 className="text-3xl font-bold mb-4">{newsItem.title}</h1>
            <p className="text-lg text-gray-400 w-[1015px]">{newsItem.content}</p>
            {/* You can add more details here */}
        </div>
        <Contact/>
        </>
    );
};

export default NewsDetail;