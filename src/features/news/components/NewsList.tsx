import React from "react";
import newsData from "../../../data/newsData.json";


    const truncateText = (text: string, maxLength: number) => {
        return text.length > maxLength ? text.slice(0, maxLength) + "..." : text;
    };

const NewsList: React.FC = () => {
    const newsList = newsData?.newsList ?? [];

    if (newsList.length === 0) {
        return <div className="text-center text-xl font-semibold text-gray-600">No news available</div>;
    }

    return (
        <section className="max-w-screen-lg mx-auto px-4 py-6 space-y-6">
            {newsList.map((news, index) => (
                <React.Fragment key={news.id}>
                    <article className="flex items-start gap-6">
                        {/* 이미지 섹션 */}
                        <div className="w-48 h-36 flex-shrink-0">
                            <img
                                src={news.imageUrl ? news.imageUrl : "/img/news/news-image.jpg"}
                                alt={news.title}
                                className="w-full h-full object-cover" // 둥근 모서리 제거
                            />
                        </div>
                        {/* 텍스트 섹션 */}
                        <div className="flex flex-col space-y-2">
                            <div className="flex items-center space-x-2">
                                <span className="bg-gray-200 text-gray-700 text-sm font-semibold px-2 py-1 rounded-md">
                                    {news.type}
                                </span>
                                <h3 className="text-lg font-bold text-gray-800">{news.title}</h3>
                            </div>
                            <p className="text-sm text-gray-600 leading-relaxed">{truncateText(news.content, 150)}</p>
                            <p className="text-xs text-gray-500">
                                <span>{news.author}</span> |{" "}
                                <span>{new Date(news.publishedDate).toLocaleDateString()}</span>
                            </p>
                        </div>
                    </article>
                    {/* 하단 구분선 */}
                    {index < newsList.length - 1 && <hr className="my-4 border-gray-300" />}
                </React.Fragment>
            ))}
        </section>
    );
};

export default NewsList;
