

export interface FeaturedNews {
    imageUrl: string | undefined;
    id: string;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
}

export interface NewsList {
    imageUrl: string | undefined;
    id: string;
    title: string;
    content: string;
    author: string;
    publishedDate: string;
}

export interface NewsData {
    featured: FeaturedNews[];
    newsList: NewsList[];
}
