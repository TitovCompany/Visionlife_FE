import React from "react";
import { useNavigate } from "react-router-dom";
import newsData from "../../../data/newsData.json";

const truncateText = (text: string, maxLength: number) => {
    return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
};

const FeaturedNews: React.FC = () => {
    const navigate = useNavigate();
    const featuredNews = newsData?.news ?? [];

    if (featuredNews.length === 0) {
        return <div className="text-center text-xl font-semibold text-gray-600">No news available</div>;
    }

    return (
        <section className="max-w-screen-xl mx-auto px-4 py-6">
            <hr className="mb-6 border-gray-300" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {featuredNews.map((news) => (
                    <div
                        key={news.id}
                        className="flex flex-col cursor-pointer hover:opacity-80 transition duration-300"
                        onClick={() => navigate(`/company/news/${news.id}`)}

                    >
                        <img
                            src={news.imageUrl || `/img/news/default-image-${news.id}.jpg`}
                            alt={news.title}
                            className="w-full h-70 object-cover mb-4"
                        />
                        <div className="flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold text-gray-800 mb-2">{news.title}</h3>
                            <p className="text-gray-600 text-sm mb-4 flex-grow">{truncateText(news.content, 130)}</p>
                        </div>
                    </div>
                ))}
            </div>
            <hr className="mt-6 border-gray-300" />
        </section>
    );
};

export default FeaturedNews;
