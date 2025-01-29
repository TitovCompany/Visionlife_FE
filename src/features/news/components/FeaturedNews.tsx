import React from "react";
import { getNewsData } from "../service/newsService";
import type {News} from "../types/NewsDetail";

const FeaturedNews: React.FC = () => {
    const { featured } = getNewsData();

    const truncateText = (text: string, maxLength: number) => {
        if (text.length > maxLength) {
            return text.slice(0, maxLength) + "...";
        }
        return text;
    };

    return (
        <div className="featured-news">
            {featured.map((news: News) => (
                <div key={news.id} className="featured-item">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="featured-image"
                    />
                    <div className="featured-content">
                        <h2 className="featured-title">{news.title}</h2>
                        <p className="featured-content">
                            {truncateText(news.content, 130)}
                        </p>
                        <p className="featured-meta">
                            {news.author} | {new Date(news.publishedDate).toLocaleDateString()}
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedNews;
