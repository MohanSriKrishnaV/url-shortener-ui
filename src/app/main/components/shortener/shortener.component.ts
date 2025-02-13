import { Component, OnInit } from '@angular/core';
import { ShortenerService } from '../../shortener.service';
// import { ToastrService } from 'ngx-toastr';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-shortener',
  templateUrl: './shortener.component.html',
  styleUrls: ['./shortener.component.css']
})
export class ShortenerComponent implements OnInit {

  longUrl: string = '';
  shortUrl: string | null = null;

  constructor(private snackBar: MatSnackBar, private urlShortenerService: ShortenerService) { }
  ngOnInit(): void {
    // throw new Error('Method not implemented.');
  }

  shortenUrl() {
    if (this.longUrl) {
      this.urlShortenerService.shortenUrl(this.longUrl).subscribe((res: any) => {
        this.shortUrl = res.shortUrl;

      }, (err: any) => {
        console.error('Error shortening URL', err);
        this.snackBar.open('Error shortening URL', 'Close', { duration: 3000 });
        // this.toastr.error("Error shortening URL")
        this.shortUrl = null;
      })
    }
  }
  copyToClipboardAndRedirect(url: string) {
    navigator.clipboard.writeText(url).then(() => {
      // this.openSnackBar('URL copied to clipboard!');
      window.open(`http://localhost:3000/url-shortener/${url}`, '_blank');

      // Clear clipboard after 5 seconds
      setTimeout(() => {
        navigator.clipboard.writeText('').then(() => {
          console.log('Clipboard cleared');
        }).catch(err => {
          console.error('Failed to clear clipboard', err);
        });
      }, 5000); // Adjust the delay as needed
    }).catch(err => {
      console.error('Failed to copy URL to clipboard', err);
      this.openSnackBar('Failed to copy URL to clipboard');
    });
  }
  private openSnackBar(message: string) {
    this.snackBar.open(message, 'Close', {
      duration: 3000, // Duration in milliseconds
      horizontalPosition: 'center',
      verticalPosition: 'top'
    });
  }
}
