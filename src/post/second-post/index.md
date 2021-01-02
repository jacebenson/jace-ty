---
title: "This is the second post"
subtitle: "It's after the first"
summary: "Soo many posts! here is more text we'll see what happens in the footer"
linkText: "Continue reading second post"
date: 2020-12-05T22:00:00-05:00
---

# Text
```markdown
It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)
```

It's very easy to make some words **bold** and other words *italic* with Markdown. You can even [link to Google!](http://google.com)


# Headings
```markdown
# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag
```

# This is an <h1> tag
## This is an <h2> tag
###### This is an <h6> tag

# Emphasis

```markdown
*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_
```

*This text will be italic*
_This will also be italic_

**This text will be bold**
__This will also be bold__

_You **can** combine them_

# Lists

## Unordered

```markdown
* Item 1
* Item 2
  * Item 2a
  * Item 2b
```

* Item 1
* Item 2
  * Item 2a
  * Item 2b

## Ordered

```markdown
1. Item 1
1. Item 2
1. Item 3
   1. Item 3a
   1. Item 3b
```

# Images 

```markdown
![Thumbnail](./featured-thumbnail.jpg)
Format: ![Alt Text](./featured-thumbnail.jpg)

```

![GitHub Logo](./featured-thumbnail.jpg)
Format: ![Alt Text](./featured-thumbnail.jpg)

# Links

```markdown
http://github.com - automatic!
[GitHub](http://github.com)
```

http://github.com - automatic!
[GitHub](http://github.com)

# Blogquotes

```markdown
As Kanye West said:

> We're living the future so
> the present is our past.

Or with the Cite Tag

> Hello
<cite>Thing 1</cite>
```

As Kanye West said:

> We're living the future so
> the present is our past.

Or with the Cite Tag

> Hello
<cite>Thing 1</cite>

# Inline Code

```markdown
I think you should use an
`<addr>` element here instead.
```

I think you should use an
`<addr>` element here instead.

# Block Code

````markdown
```shell
npm run start #comments
```
````


```bash
npm run start #comments
```

# Tables 

````
{{ "| First Header | Second Header |" | escape }}
| ------------ | ------------- |
| Content from cell 1 | Content from cell 2 |
| Content in the first column | Content in the second column |
| Content in the first column | Content in the second column |
| Content in the first column | Content in the second column |
````

| First Header | Second Header |
| ------------ | ------------- |
| Content from cell 1 | Content from cell 2 |
| Content in the first column | Content in the second column |
| Content in the first column | Content in the second column |
| Content in the first column | Content in the second column |

# Custom Tags

## Details / Summary Tags

```js
{{ "{%" | escape }} details 'Reasons to create content', 'font-size:2em;', 'open' {{ "%}" | escape }}

- This
- Is
- A
- Open
- List

{{ "{%" | escape }} details 'Nested Reason' {{ "%}" | escape }}

- This
- Is
- A
- Closed
- List
{{ "{%" | escape }} enddetails {{ "%}" | escape }}

{{ "{%" | escape }} enddetails {{ "%}" | escape }}
```

{% details 'Reasons to create content', 'font-size:2em;', 'open' %}

- This
- Is
- A
- Open
- List

{% details 'Nested Reason' %}

- This
- Is
- A
- Closed
- List
{% enddetails %}

{% enddetails %}