---
layout: page
title: members
permalink: /members/
nav: false
---

<div class="member-join">
<h4>Join us</h4>
<p>We are recruiting PhD students and postdoctoral associates. If you are interested, please <a href="{{ '/contact/' | relative_url }}">get in touch</a> with a brief description of your research interests and a CV.</p>
</div>

{% assign group_keys = "postdoc,phd,master,undergrad" | split: "," -%}
{% assign group_titles = "Postdoctoral associates,PhD students,Master's students,Undergraduates" | split: "," -%}
{% for key in group_keys -%}
{% assign people = site.data.members | where: "group", key -%}
{% if people.size > 0 -%}

<h3 class="member-group">{{ group_titles[forloop.index0] }}</h3>
<div class="member-grid">
{% for m in people -%}
{% assign photo = m.photo | default: "placeholder.svg" -%}
<div class="member-card">
<img class="member-photo" src="{{ '/assets/img/members/' | append: photo | relative_url }}" alt="{{ m.name }}" loading="lazy">
<div class="member-body">
{% if m.email and m.email != "" -%}
{% assign parts = m.email | split: "@" -%}
{% endif -%}
<h4 class="member-name">{{ m.name }}{% if m.name_zh and m.name_zh != "" %} <span class="member-name-zh">({{ m.name_zh }})</span>{% endif %}{% if m.email and m.email != "" %} <a class="member-email" href="mailto:{{ parts[0] }}&#64;{{ parts[1] }}" title="Email {{ m.name }}" aria-label="Email {{ m.name }}"><i class="fa-solid fa-envelope"></i></a>{% endif %}{% if m.linkedin and m.linkedin != "" %} <a class="member-email" href="{{ m.linkedin }}" target="_blank" rel="noopener" title="LinkedIn: {{ m.name }}" aria-label="LinkedIn: {{ m.name }}"><i class="fa-brands fa-linkedin"></i></a>{% endif %}</h4>
<div class="member-role">{{ m.role }}</div>
{% if m.topic and m.topic != "" %}<div class="member-topic">{{ m.topic }}</div>{% endif -%}
{% if m.bio and m.bio != "" %}<p class="member-bio">{{ m.bio }}</p>{% endif -%}
</div>
</div>
{% endfor -%}
</div>
{% endif -%}
{% endfor %}

Former members are listed on the [alumni page]({{ '/alumni/' | relative_url }}).
