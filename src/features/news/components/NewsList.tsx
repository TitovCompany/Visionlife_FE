// src/features/news/components/NewsList.tsx
import React from "react";
import { getNewsData } from "../service/newsService";
import type { News } from "../types/NewsDetail";

const NewsList: React.FC = () => {
    const { newsList } = getNewsData();
    return (
        <div className="news-list">
            {newsList.map((news: News) => (
                <div key={news.id} className="news-item">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="list-image"
                    />
                    <h3>{news.title}</h3>
                    <span>{news.author} | {new Date(news.publishedDate).toLocaleDateString()}</span>
                    <p>{news.content}</p>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
