---
layout: default
menu: home
order: 1
---

{% for post in site.posts %}
<div class="card">
  <div class="card-body">
    <h4 class="card-title">{{ post.title }}</h4>
    <h4 class="card-subtitle">{{ post.date }}</h4>
    <div class="card-text">
      {{ post.content | strip_html | truncate: 400 }}
    </div>
    <a href="{{ site.url }}{{ post.url }}" class="card-link">Read More</a>
  </div>
</div>
{% endfor %}