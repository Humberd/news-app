export namespace NewsModels {
  export namespace List {
    export interface RequestParams {
      searchPhrase: string;
      pageNumber: number;
      pageSize: number;
    }

    export interface ResponseParams {
      status: string;
      totalResults: number;
      articles: Article[];
    }
  }

  export interface Article {
    source: Source;
    author: string | null;
    title: string;
    description: string | null;
    url: string;
    urlToImage: string | null;
    publishedAt: string;
    content: string | null;
  }

  export interface Source {
    id: string | null;
    name: string;
  }

}
