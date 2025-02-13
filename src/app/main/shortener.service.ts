import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShortenerService {

  private apiUrl = 'http://localhost:3000/url-shortener/shorten';

  constructor(private http: HttpClient) { }

  shortenUrl(longUrl: string): Observable<{ shortUrl: string }> {
    return this.http.post<{ shortUrl: string }>(this.apiUrl, { longUrl });
  }
}
