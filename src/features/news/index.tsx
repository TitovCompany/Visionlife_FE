import React from "react";
import FeaturedNews from "./components/FeaturedNews";
import NewsList from "./components/NewsList";

const News: React.FC = () => {
    return (
        <div className="news-page pt-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-20 mt-20 text-center w-full">
                기업뉴스
            </h1>
            <FeaturedNews/>
            <NewsList/>
        </div>
    );
};

export default News;

