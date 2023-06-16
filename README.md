# Academify
### Education Portal App - NODE.JS - EXPRESS.JS - MONGODB - EJS
====================================================
Preparation 
------------
```
npm  install
```
Starting application 
--------------------
```
npm run start
```
Fixed linter
--------------------
```
npm run lint
```

Endpoints
--------------------

```js
https://localhost:3000
```

##### Users Endpoints 

```js
`/users/signup` >>> Post >>> User register

`/users/login` >>> Post >>> User login

`/users/logout` >>> Get >>> User logout

`/users/dashboard` >>> Get >>> Personalized dashboard content

`/users/:id` >>> Delete >>> Delete user by admin
```

##### Category Endpoints 

```js
`/categories` >>> Post >>> Create category by admin
`/categories/:id` >>> Delete >>> Delete category by admin
```

##### Course Endpoints 

```js
`/courses` >>> Post >>> Create course by teacher
`/courses` >>> Get >>> Get all courses
`/courses/:slug` >>> Get >>> Get single course
`/courses/:slug` >>> Delete >>> Delete single course by teacher
`/courses/:slug` >>> Put >>> Update single course by teacher
`/courses/enroll` >>> Post >>> Enroll course by student
`/courses/release` >>> Get >>> Release course by student
```

##### Page Endpoints 

```js
`/` >>> Get >>> Show main ejs page 
`/about` >>> Get >>> Show about ejs page
`/login` >>> Get >>> Show login ejs page
`/register` >>> Get >>> Show register ejs page
`/contact` >>> Get >>> Show about ejs page
`/contact` >>> Post >>> Send email communication - contact page
```
