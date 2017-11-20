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

<div class="row">
  <div class="col-12 col-lg-5 order-1 order-lg-2 d-flex">
    <img class="headshot rounded-circle mr-auto ml-auto" src="{{site.url}}/images/headshot.jpg"/>
  </div>
  <div class="col-12 col-lg-7 order-2 order-lg-1">
    <p>
    When I was in high school I had a dilemma. Do I pursue the visual arts and be a creative in the game or VFX industry? Or do I double down on math and science to become a knowledge worker in an engineering field? I chose the latter, so off I went to Queen's University in Kingston, Ontario where I did 5 years of applied mathematics in mechanical engineering. Following that up with a second degree in computer science I was ready to tackle the world.
    </p>
    <p>
    Hi! I am Adam Brykajlo and for the last two years I have been working as a software developer. And while I do love programming, I have a strong creative force in me that is more and more manifesting it's urge to be visually creative. This website is a manifestation of that need. 
    </p>
    <p>
    While the last few years have been spent honing my technical ability my artistic ability has stagnated. My particular interests in the creative arts are mostly in the 3D realm so the next several months I want to spend learning 3D modelling.
    </p>
  </div>
</div>