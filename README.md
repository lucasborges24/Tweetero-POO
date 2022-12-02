<p align="center">
  <img src="https://bootcampra.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F5e9da2a7-eb35-45d8-bdab-81e5dcf58be8%2Fimage_2022-01-20_171006.png?table=block&id=18efc483-8d4f-4e53-92bf-30c8c2ce4063&spaceId=f797e032-5eb2-4c9d-beb7-cd7181e19e47&width=250&userId=&cache=v2" alt="logo" width="80px"/>
</p>
<h1 align="center">Tweetero API - OOP</h1>
<h2 align="center">Built with</h2>
<div align="center">
  <img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" height="30px"/> 
  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge&logo=express&logoColor=white" height="30px"/>
</div>

## General Info

Tweetero is an API to be consumed by a copy website of twiter, [tweetero-front](https://lucasborges24.github.io/tweetero-front/). The project's goal was implement the features in a OOP rather than a functional paradigm. Looking at the features of the project, we can:

&Rarr; Do **login**;

&Rarr; **Post** new tweets;

&Rarr; **View** existing tweets with pagination.

&Rarr; **View** existing tweets by username.

## Table of Contents

- [How to Run Locally](#how-to-run-locally)
- [API Reference](#api-reference)
  - [Sign in ](#signin)
  - [Post a Tweet](#post-a-tweet)
  - [Get Tweets](#get-tweets)
  - [Get Tweets By Username](#get-tweets-by-username)
- [Author](#author)

## How to Run Locally

Enter in the folder you will create the project. You need to clone the repository project. Open your terminal and type

```bash
git clone https://github.com/lucasborges24/Tweetero-POO-back.git
```

Go to the project directory

```bash
  cd Tweetero-POO-back
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm start
```

Optionally, if you want to edit something in the code, use the following script to save changes at real time

```bash
  npm run dev
```

## API Reference

### Signin

```bash
    POST /sign-up
```

#### Request

- **Payload**:

```js
    {
        "username": "awesome_user", // string (REQUIRED)
        "avatar": "https://domain.com/image.jpg" // url image (REQUIRED)
    }
```

#### Response

- **StatusCode**: `200 OK`

```js
    "Tudo certo!"
```

### Post a Tweet

```bash
    POST /tweets
```

#### Request

- **Payload**:

```js
    {
        "username": "awesome_user", // string (REQUIRED)
        "tweet": "hiii, I'm a tweet!" // url image (REQUIRED)
    }
```

#### Response

- **StatusCode**: `201 Created`

```js
    "OK, seu tweet foi criado"
```

### Get Tweets

#### All Tweets 

```bash
    POST /sign-up
```

#### Request

- Without Payload!

#### Response

- **StatusCode**: `200 OK`

```js
[
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 13",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 12",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 11",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 10",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 9",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 8",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 7",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 6",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 5",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 4",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 3",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 2",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 1",
    "avatar": "https://domain.com/image.jpg"
  },
]
```

#### Tweets by Pagination 

```bash
    POST /sign-up?page=[page]
```
> **page** is a number more or equal than 1. 
#### Request

- Without Payload!

#### Response

- **StatusCode**: `200 OK`

```js
[
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 3",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 2",
    "avatar": "https://domain.com/image.jpg"
  },
  {
    "username": "awesome_username",
    "tweet": "hi, i'm a tweet 1",
    "avatar": "https://domain.com/image.jpg"
  },
]
```

> Above an example with `page=2` and quantity per page equal to 10.

### Get Tweets by Username

```bash
    POST /sign-up/username
```
> **username** is a string. 
#### Request

- Without Payload!

#### Response

- **StatusCode**: `200 OK`

```js
[
  {
    "username": "teste",
    "tweet": "I'm the only tweet from 'teste'",
    "avatar": "url"
  }
]
```

> Above an example with `username=teste`.

## Author

[![gitHub](https://img.shields.io/badge/-GitHub-181717?logo=gitHub&logoColor=white&style=for-the-badge)](https://github.com/lucasborges24)
[![LinkedIn][linkedin-shield]][linkedin-url]
[![AGPL License](https://img.shields.io/badge/-Instagram-E4405F?logo=instagram&logoColor=white&style=for-the-badge)](https://www.instagram.com/lucas__fisica/)

<!-- MARKDOWN LINKS & IMAGES -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=blue
[linkedin-url]: https://www.linkedin.com/in/lucas-b-barbosa-12a157216/
