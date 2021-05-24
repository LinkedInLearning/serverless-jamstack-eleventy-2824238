---
title: Places
layout: page-3
---

<h1 style="color: #091E47;">{{ title }}</h1>

<div class="container mt-5">
  <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3">  

{% for item in page3 %}

  <div class="card" style="width: 18rem;">
    <div style=”width: 141px; height: 176px; overflow: hidden;">  
      <img src="{{ item.image_url | url }}" class="card-img-top" id="crop" alt="...">
    </div>   
      <div class="card-body">
            <h5 class="card-title">{{item.name}}</h5>
            <p class="card-text">{{item.location.display_address}}</p>
      </div>
      <ul class="list-group list-group-flush">
          <li class="list-group-item">Price: {{item.price}}</li>
          <li class="list-group-item"> Reviews: {{item.review_count}} <br> Rating: {{item.rating}}</li>
          <li class="list-group-item">Phone: {{item.display_phone}}</li>
      </ul>
      <div class="card-body">
          <a href="{{item.go | url}}" class="card-link" target="_blank">Go!</a>
          <a href="{{item.url}}" class="card-link" target="_blank">Yelp</a>
      </div> 
  </div>

{% endfor %}

  </div>
</div>

<style>
#crop {
    width: 261px; /* width of container */
    height: 266px; /* height of container */
    object-fit: cover;
    border: 5px solid #040832;
    margin-top: 20px;
    margin-bottom: 20px;
    position: relative;
    left: 55px;
}
</style>
