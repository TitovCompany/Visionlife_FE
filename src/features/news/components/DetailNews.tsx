import React from "react";
import newsData from "../../../data/newsData.json";

const DetailNews: React.FC = () => {
    const newsItem = newsData.news.find((news) => news.id === "1");

    if (!newsItem) {
        return (
            <div className="flex items-center justify-center h-screen text-gray-600 text-xl">
                해당 뉴스를 찾을 수 없습니다.
            </div>
        );
    }

    return (
        <section className="max-w-screen-lg mx-auto px-6 py-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {newsItem.title}
            </h1>

            <div className="text-gray-500 text-sm mb-6">
                <span>{newsItem.author}</span> |
                <span className="ml-2">{new Date(newsItem.publishedDate).toLocaleDateString()}</span>
            </div>

            <img
                src={newsItem.imageUrl ? newsItem.imageUrl : "/img/news/news-image.jpg"}
                alt={newsItem.title}
                className="w-full h-100 object-cover rounded-lg mb-6"
            />

            <article className="text-gray-700 text-base leading-snug whitespace-pre-line">
                {newsItem.content}
            </article>

            <hr className="mt-8 border-gray-300" />
        </section>
    );
};

export default DetailNews;
