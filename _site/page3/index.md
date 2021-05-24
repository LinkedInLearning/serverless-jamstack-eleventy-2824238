---
title: Page3
layout: page-3
---

# {{ title }}

<div class="container mt-4">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">  

{% for item in page3 %}

  <div class="col mb-4">
    <div class="card h-100">
      <h5 class="card-header text-white bg-secondary mb-0">{{item.id}}</h5>
      <img src="{{item.profile_photo}}" class="w-50 d-block mb-3" alt="{{item.name}}">
      <div class="card-body">
        <h6 class="card-title text-muted my-0"></h6>
        <div class="card-text font-italic my-0"></div>
        <a class="btn btn-sm btn-outline-secondary card-link mt-2 stretched-link" href="{{item.name | slug}}">more info</a>
      </div>
    </div>
  </div>

{% endfor %}

  </div>
</div>
