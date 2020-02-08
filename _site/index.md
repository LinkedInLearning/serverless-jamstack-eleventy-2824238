---
title: Welcome
date: Created
layout: page
tags:
  - home
  - welcome
  - info
---

<div class="row">
  <div class="main-content col-lg-9">
    <header class="mb-4">
      <h4 class="text-secondary mt-2 mb-0">Latest Posts</h4>
      <div class="small">&raquo; <a class="text-secondary" href="/posts">more posts</a></div>
    </header>
    <div class="row">
      <div class="col">
          {%- for item in collections.post -%}
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
      </div>
    </div>
  </div>
</div>