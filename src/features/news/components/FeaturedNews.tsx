import React from "react";
import newsData from "../../../data/newsData.json";

const FeaturedNews: React.FC = () => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    const newsList = newsData?.news ?? [];

    if (newsList.length === 0) {
        return <div>No news available</div>;
    }

    return (
        <div className="featured-news">
            {newsList.map((news) => (
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
                            <span>{news.author}</span> |{" "}
                            <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default FeaturedNews;
