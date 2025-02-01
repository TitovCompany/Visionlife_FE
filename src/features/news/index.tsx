import React from "react";
import FeaturedNews from "./components/FeaturedNews";
import NewsList from "./components/NewsList";
import { Outlet, useParams } from "react-router-dom";

const News: React.FC = () => {
    const { id } = useParams();

    return (
        <div className="news-page pt-20">
            <h1 className="text-4xl font-bold text-gray-900 mb-20 mt-20 text-center w-full">
                언론 보도
            </h1>

            {/* 상세 페이지인 경우 뉴스 목록 숨기고 DetailNews만 표시 */}
            {id ? <Outlet /> : (
                <>
                    <FeaturedNews />
                    <NewsList />
                </>
            )}
        </div>
    );
};

export default News;
