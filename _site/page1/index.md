---
title: Playlist
layout: page-1
---

<h1 style="color: #091E47;">{{ title }}</h1>

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">  

{% for item in page1 %}

  <div class="col mb-4">
    <div class="card h-100">
      <h5 class="card-header text-white bg-secondary mb-0">{{item.name}}</h5>
      <img src=" {{ item.images }} " class="w-100 d-block mb-3" alt="{{item.name}}">
      <div class="card-body">
        <h6 class="card-title text-muted my-0">{{item.owner.display_name}}</h6>
        <div class="card-text font-italic my-0">{{item.description}}</div>
        <a class="btn btn-sm btn-outline-secondary card-link mt-2 stretched-link" href="{{item.name | slug}}">more info</a>
      </div>
    </div>
  </div>

{% endfor %}

  </div>
</div>
