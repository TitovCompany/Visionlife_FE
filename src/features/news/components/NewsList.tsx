import React from "react";
import newsData from "../../../data/newsData.json"; // 정적 데이터 import

const NewsList: React.FC = () => {
    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

    const newsList = newsData?.newsList ?? [];

    if (newsList.length === 0) {
        return <div>No news available</div>;
    }

    return (
        <div className="news-list">
            {newsList.map((news) => (
                <div key={news.id} className="list-item">
                    <img
                        src={news.imageUrl}
                        alt={news.title}
                        className="list-image"
                    />
                    <div className="list-content">
                        <h2 className="list-title">{news.title}</h2>
                        <p className="list-content">
                            {truncateText(news.content, 200)}
                        </p>
                        <p className="list-meta">
                            <span>{news.author}</span> |{" "}
                            <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default NewsList;
