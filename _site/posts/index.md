---
layout: page
pagination:
  data: collections.post
  size: 5
eleventyExcludeFromCollections: true
permalink: /posts/{{pagination.pageNumber}}/
---

<h1 class="mb-3">Posts</h1>

{% include "pagination.njk" %}
{%- for item in pagination.items -%}
<article class="mb-5 position-relative">
  <div class="row">
    <div class="col-12 col-sm-4">
      <img class="w-100 rounded" src="{{item.data.thumbnail}}" alt="{{item.title}}">
      <time class="item-date small d-block text-muted mb-2" datetime="{{item.date }}">{{item.date | simpleDate}}</time>
    </div>
    <div class="col">
      <h4>{{item.data.title}}</h4>
      <p class="mb-0">{{item.data.summary}}</p>
    </div>
  </div>
  <div class="text-right">
    <a href="{{ item.url | url }}" class="btn btn-sm btn-outline-secondary stretched-link">read more</a>
  </div>
</article>
{%- endfor -%}
{% include "pagination.njk" %}
