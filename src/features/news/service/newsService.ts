import newsData from "../../../data/newsData.json";
import { NewsData } from "../types/NewsDetail";

export const getNewsData = (): NewsData => {
    try {
        if (!newsData || typeof newsData !== "object") {
            throw new Error("유효하지 않은 뉴스 데이터");
        }
        return newsData;
    } catch (error) {
        console.error("뉴스 데이터를 불러오는 중 오류 발생:", error);
        return { news: [], newsList: [] };
    }
};
