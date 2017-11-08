---
layout: default
menu: about
order: 1
publshed: false
---

<!-- {% for post in site.posts %}
<div class="card">
  <div class="card-header">
    <div class="card-subtitle h-100">
      <h3 class="text-center">{{ post.date | date: "%b %d" }}</h3>
      <h3 class="text-center">{{ post.date | date: "%Y" }}</h3>
    </div>
    <div class="card-title h-100 align-middle">
      <h3>{{ post.title }}</h3>
    </div>  
  </div>
  <div class="card-body">
    <div class="card-text">
      {{ post.content | strip_html | truncate: 400 }}
    </div>
    <a href="{{ site.url }}{{ post.url }}" class="card-link btn btn-primary">Read More</a>
  </div>
  {% if post.tags.size > 0 %}  
  <div class="card-footer">
    tags: {{ post.tags | join: ' | ' }}
  </div>
  {% endif %}
</div>
{% endfor %} -->

{% include lorem.md %}