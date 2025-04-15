import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from 'react-router-dom';

const News = () => {
  const { t } = useTranslation();

  const news = [
    {
      id: 1,
      title: t("news.How"),
      shortContent: t("news.When").substring(0, 100) + "...",
      content: t("news.When"),
      date: "10/05/2024",
      by: t("news.by"),
      image: "/Images/news1.png", // Ensure the path is correct
      link: `/news/1`
    },
    {
      id: 2,
      title: t("news.How2"),
      shortContent: t("news.Interesting").substring(0, 100) + "...",
      content: t("news.Interesting"),
      date: "10/05/2024",
      by: t("news.by"),
      image: "/Images/news2.png", // Ensure the path is correct
      link: `/news/2`
    },
    {
      id: 3,
      title: t("news.Ways"),
      shortContent: t("news.What").substring(0, 100) + "...",
      content: t("news.What"),
      date: "10/06/2024",
      by: t("news.by"),
      image: "/Images/news3.png", // Ensure the path is correct
      link: `/news/3`
    },
  ];

  return (
    <div className="flex flex-col items-center mt-20">
      <h1 className="text-xl md:text-[35px] font-bold">{t("news.News")}</h1>
      <p className="mt-4 text-base font-semibold text-gray-400">
        {t("news.Ecologically")}
      </p>
      <div className="flex flex-col justify-between mt-5 md:flex-row md:gap-5 lg:gap-10">
        {news.map(item => (
          <div key={item.id}>
            <Link to={item.link}>
              <img src={item.image} alt="news" className="w-full rounded-2xl cursor-pointer"/>
              <div className="flex items-center gap-2 mt-1 mb-3">
                <h1 className="font-semibold">{item.date}</h1>
                <p className="text-xs text-[#616060] ">{item.by}</p>
              </div>
              <h1 className="text-lg font-bold md:text-base md:max-w-[450px] mb-2">{item.title}</h1>
              <p className="text-[#5b5a5a] lg:max-w-[450px] text-base md:text-sm mb-5">{item.shortContent}</p>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default News;