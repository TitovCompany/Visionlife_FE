// src/features/news/service/newsService.ts
import newsData from "../../../data/newsData.json";
import { NewsData } from "../types/NewsDetail";

export const getNewsData = (): NewsData => {
    return newsData;
};
