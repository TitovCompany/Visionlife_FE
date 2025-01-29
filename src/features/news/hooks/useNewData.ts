import { useState, useEffect } from "react";
import { getNewsData } from "../service/newsService";
import type { News } from "../types/NewsDetail";

const useNewsData = (): { news: News[] } => {
    const [news, setNews] = useState<News[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const data = await getNewsData();
            setNews(data.news);
        };

        fetchData();
    }, []);

    return { news };
};

export default useNewsData;
