import { Inject, Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsModels } from '../models/news-models';
import { HttpClient } from '@angular/common/http';
import { NEWS_SERVICE_API_KEY } from '../models/news-service-api-key';
import { environment } from '../../environments/environment';
import { fakeNews } from './fake-news';
import { tap } from 'rxjs/operators';

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
    /**
     * API free tier allows only localhost domains, however, we need it to also work on external domains
     */
    if (!environment.production) {
      return this.readFakeNews(params);
    }

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

  private readFakeNews(params: NewsModels.List.RequestParams): Observable<NewsModels.List.ResponseParams> {
    return of(fakeNews())
      .pipe(
        tap(response => {
          if (params.searchPhrase) {
            response.articles = response.articles.filter(article => {
              article.title.includes(params.searchPhrase) || article.description?.includes(params.searchPhrase);
            });
          }

          const initialOffset = (params.pageNumber - 1) * params.pageSize;
          response.articles = response.articles.slice(initialOffset, initialOffset + params.pageSize);
        }),
      );
  }
}
