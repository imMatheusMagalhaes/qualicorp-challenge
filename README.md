# MarkdownBlog
Mobile-friendly web application that manages posts written with simple markup language [Markdown](https://www.markdownguide.org)

###### Suggestions for improvement

- jwt authentication (BACK-END);
- application state (FRONT-END);
- roles  (FRONT-END and BACK-END);
- tags on posts (FRONT-END and BACK-END);
- search posts tool (FRONT-END and BACK-END);

###### Tested operating systems

- Ubuntu 20.04.x
- Windows 11

## FRONT-END
`NODE VERSION >= v16.17.0`
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

## BACK-END
`NODE VERSION >= v10.24.1`
## Project setup
```
npm install
```

### Compiles for development
```
npm run dev
```

## ENDPOINTS

## GET ALL POSTS
`GET http://localhost:8888/post/get-all`

###### EXAMPLE RESPONSE

```
[
	{
		"identity": {
			"low": 180,
			"high": 0
		},
		"labels": [
			"Post"
		],
		"properties": {
			"createdAt": 1664718189279,
			"author": "Matheus Magalhães",
			"updatedAt": 1664718225274,
			"title": "README",
			"mk": "# FRONT-END\n\n## Project setup\n```\nnpm install\n```\n\n### Compiles and hot-reloads for development\n```\nnpm run serve\n```\n\n# BACK-END\n\n## Project setup\n```\nnpm install\n```\n\n### Compiles for development\n```\nnpm run dev\n```\n"
		},
		"elementId": "180"
	}
]
```

## CREATE
`POST http://localhost:8888/post/create`

###### BODY

```
{
    "title":"<POST_TITLE>",
    "author":"<POST_AUTHOR>",
    "mk":"<MARKDOWN_TEXT>"
}
```

###### EXAMPLE RESPONSE
```
{
	"identity": {
		"low": 172,
		"high": 0
	},
	"labels": [
		"Post"
	],
	"properties": {
		"createdAt": 1664719867102,
		"author": "<POST_AUTHOR>",
		"updatedAt": 1664719867102,
		"title": "<POST_TITLE>",
		"mk": "<MARKDOWN_TEXT>"
	},
	"elementId": "172"
}
```

## UPDATE
`PUT http://localhost:8888/post/update/<POST_ID>`

###### BODY

```
{
    "mk":"<MARKDOWN_TEXT>",
}
```

###### EXAMPLE RESPONSE
```
{
	"identity": {
		"low": 172,
		"high": 0
	},
	"labels": [
		"Post"
	],
	"properties": {
		"createdAt": 1664719867102,
		"author": "<POST_AUTHOR>",
		"updatedAt": 1664719993480,
		"title": "<POST_TITLE>",
		"mk": "<MARKDOWN_TEXT>"
	},
	"elementId": "172"
}
```

## DELETE
`DELETE http://localhost:8888/post/delete/<POST_ID>`

###### EXAMPLE RESPONSE

```
[]
```





