---
layout: default
menu: home
order: 1
---

{% for post in site.posts %}
<div class="card">
  <div class="card-body">
    <h4 class="card-title">{{ post.title }}</h4>
    <h5 class="card-subtitle">{{ post.date | date: '%b %d, %Y' }}</h5>
    <div class="card-text">
      {{ post.content | strip_html | truncate: 400 }}
    </div>
    <a href="{{ site.url }}{{ post.url }}" class="card-link btn btn-warning">Read More</a>
  </div>
  {% if post.tags.size > 0 %}  
  <div class="card-footer">
    tags: {{ post.tags | join: ' | ' }}
  </div>
  {% endif %}
</div>
{% endfor %}