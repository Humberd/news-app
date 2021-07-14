import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NewsModels } from '../models/news-models';
import { HttpClient } from '@angular/common/http';
import { NEWS_SERVICE_API_KEY } from '../models/news-service-api-key';

/**
 * `NewsApiService` didn't have api to control pagination
 * I build the request manually
 */
@Injectable({
  providedIn: 'root',
})
export class NewsService {

  constructor(
    private httpClient: HttpClient,
    @Inject(NEWS_SERVICE_API_KEY) private apiKey: string,
  ) {
  }

  /**
   * @see https://newsapi.org/docs/endpoints/top-headlines
   */
  readList(params: NewsModels.List.RequestParams): Observable<NewsModels.List.ResponseParams> {
    const searchParams = new URLSearchParams();
    searchParams.set('apiKey', this.apiKey);
    searchParams.set('country', 'us');
    if (params.searchPhrase) {
      searchParams.set('q', params.searchPhrase);
    }
    searchParams.set('pageSize', String(params.pageSize));
    searchParams.set('page', String(params.pageNumber));
    return this.httpClient.get<NewsModels.List.ResponseParams>(`https://newsapi.org/v2/top-headlines?${searchParams.toString()}`);
  }

  /**
   * Consume the NewsApiService here, make sure
   * to set the language to 'en' english and built
   * in the search functionality using the 'q'
   * variable in API calls to news-api
   */
}
