---
title: Podcasts
layout: page-2
---

# {{ title }}

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">

{% for item in page2 %}  
  
  <div class="col mb-4">
    <div class="card h-100" >
      <img src="{{ item.images[1].url | url }}" alt=" image" class="card-img-top">
      <div class="card-body">
        <h5 class="card-title my-0">{{item.name}}</h5>
        <time class="item-date small d-block text-muted mb-2" datetime="">{{item.publisher}}</time>
        <p class="card-text">{{item.description}}</p>
        <a href="{{ item.external_urls.spotify }}" class="btn btn-secondary stretched-link" target="_blank">Listen Podcast</a>
      </div>
    </div>
  </div>

{% endfor %}

  </div>

