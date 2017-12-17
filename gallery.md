---
layout: default
menu: gallery
order: 3
published: true
---
{% assign number = 1 %}
<div class="make-gallery-grid">
{% for image in site.gallery %}
    <div class="item-{{ number }} thumb">
        <a href="{{ image.url }}">
            <img src="{{ image.thumbnail }}" alt="{{ image.alt }}"/>
        </a>
    </div>
{% assign number = number | plus: 1 %}
{% endfor %}
</div>