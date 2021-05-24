---
pagination:
  data: page1
  size: 1
  alias: item
permalink: 'page1/{{item.name | slug }}/'
layout: playlist
---
<div class="float">
   <h1>{{item.name}}</h1>
   <p>{{item.description}} <span class="font-weight-bold text-secondary">{{item.owner.display_name}}</span></p>
   <img src="{{item.images}}" class="w-50 d-block mb-3" alt="{{item.name}}">
</div>

<div class="float">
  <h2 class="mb-">Full Playlist</h2>
  <iframe src="{{ item.embed }}" width="500" height="580" frameborder="0" allowtransparency="true" allow="encrypted-media">
  <iframe>

  <a href="{{ item.external_urls.spotify }}" class="btn btn-secondary stretched-"  target="_blank">Listen Full Playlist</a>
</div>

