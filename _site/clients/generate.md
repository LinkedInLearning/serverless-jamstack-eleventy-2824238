---
pagination:
  data: clients
  size: 1
  alias: client
permalink: 'clients/{{client.name | slug }}/'
layout: page
---

<h1 class="mt-0">{{client.name}}</h1>
<p>{{client.title}}, <span class="font-weight-bold text-secondary">{{client.company}}</span></p>

<img src="{{client.profile_photo}}" class="w-50 d-block mb-3" alt="{{client.name}}">

<h2 class="mb-0">Friends</h2>

<p class="mt-1"> 
{% for friend in client.friends %}<a class="badge badge-secondary mr-2" href="/clients/{{ friend.name | slug }}">{{friend.name}}</a>{% endfor %}
</p>

<h2 class="mb-0">Posts</h2>

{% for post in client.posts %}

---

#### {{post.title}}

<time class="item-date small d-block text-muted mb-2"
  datetime="{{ course.date | safe }}">{{ post.date_created | safe }}</time>

<p>{{post.text}}</p>

{% endfor %}
