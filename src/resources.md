---
layout: "layouts/home.njk"
title: "Resources"
description: ""
---

{% for resourceGroup, resource in resources %}

## {{resourceGroup}}
{% for Link in resource %}
 
[{{Link.text}}]({{Link.link}})

{% endfor %}

{% endfor %}