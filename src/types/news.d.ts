export interface NewsType {
  id: string;
  type: string;
  imageUrl: string;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
  views: number;
}

export interface News {
  imageUrl: string | undefined;
  id: string;
  title: string;
  content: string;
  author: string;
  publishedDate: string;
  views: number;
  type: string;
}

export interface NewsData {
  news: News[];
  newsList: News[];
}
