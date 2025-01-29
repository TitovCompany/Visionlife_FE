export interface News {
    imageUrl: string | undefined;
    id: string;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
}

export interface NewsData {
    featured: News[];
    newsList: News[];
}
