# News App

Frontend test task for recruitment

## Introduction

Your task is to create a simple News App that will display a list of
article snippets on its main view and upon clicking, either the image or title
of the snippet, will move to the second screen - a details page of the article.
1
## Screens and Video

Url to video with explanation:
[Video](https://www.loom.com/share/625ea39129b54cc5a4a70896172f3612)

Url to app screens:
[Screens](https://drive.google.com/drive/folders/1MDTkRF2wZ-FBKjMXu5bn1DEprhABiA4N)

## Consuming the News API

Register on the News API site [newsapi.org](https://newsapi.org/) to get the API key and set up
the angular-news-api library that is already provided in the package.json as a
dependency, instructions on usage can be found in:
[angular-news-api](https://www.npmjs.com/package/angular-news-api)

## /news - Main screen

Implement a list of snippets of articles as shown in the video and screens.

Consume the News API for the article list, use the "top headlines" endpoint
to get the articles, make sure they are in english language and that you will
implement a search functionality - do it in the news.service.ts file


Build a search mat input with debounce functionality and a mat progress bar indicating
loading.

Build the html structure in a responsive manner as per screens and video.

Be as close to the provided materials as possible, please take caution and implement
all visible animations on route changes and images/links

## /article - Details page

Implement a details page of the article as shown in the video and screens.

Take the article object from the window.history.state as it should be passed
from the article list during routerLink navigation.

The main image is in the returned article object.

The left side article meta (first 3 positions) is taken from the returned News API object:
* article.source.name
* article.author
* article.publishedAt
* 3 comments [form the comments array in NewsDetailComponent]

The description of the article is combined from two returned variables in
the article object:
* article.description
* article.content

Use mat button to build the Read more button

Build the comments html populating it with the mocked comments
that are left in the NewsDetailComponent

Build the html structure in a responsive manner as per screens and video.

## Additional information

Some of the application functionalities are already set up.

Angular Material and most of the modules used in the app already reside
in the app.module.ts

Most of the files you will be working on have short comments on what should be
created in them.

You can use Bootstrap, already included in index.html, to build the responsiveness
of the application.

The design uses Montserrat font in 300,400,500 weights, access it from Google Fonts
and include in the project.

Please be sure to look carefully at the page/views/navigation behavior in the video and try to implement
it as close as possible.

## Example article

Example article object from the NewsApi response:

```json
{
    "source": {
        "id": "source_id",
        "name": "source_name"
    },
    "author": "author",
    "title": "article_title",
    "description": "article_description",
    "url": "url_to_article",
    "urlToImage": "url_to_image",
    "publishedAt": "2001-01-01T01:01:00Z",
    "content": "article_content"
}
```

## Development server

Run `npm run start` for a dev server.
