# Pinstagram500

This is an application where the user can add photos to collections based on the tag they give it. In addition to this, the user will be able to upload a photo to the main photos page, as well as the photos sorted by collection.

## Goals

1. Bronze (MVP)

- MERN stack
- At least 2 non-user models (associations not required)
- CRUD build throughout the app
- Multiple views
- Front-end communicated with back-end API RESTfully

2. Silver

- +1 Like
- User authentication

3. Gold Plan

- User can see what they have added to the app

## Schema Relationship Chart

https://www.lucidchart.com/documents/edit/427a12ba-e563-43ae-adf5-21a507afdd69/7ezayB~FQlW7

- Each photo will have one or many collections based on what it's tags are

- Each collection will have one or many photos

## Data Used

The data for this project will come from Unsplash:

For the photos:
https://unsplash.com/documentation#list-photos

For the collections of photos:
https://unsplash.com/documentation#list-collections

## Initial Models

1. Photo

- Width
- Height
- Likes
- Description
- User {
  name (user who "uploaded" the photo)
  }
- Url {
  raw (link to photo)
  }

2. Collection

- Title (of the collection)
- Tags {
  title
  }

- Preview_Photos {
  raw (link to photo)
  }

## Responsibilities of Contributors

1. Laura:

Backend:

- API database used to get JSON
- Seeding JSON data
- Routes and Controllers

Frontend:

- About page

2. Dee:
   Backend:

- Schemas and Models
- Routes and Controllers

Documentation for frontend and backend

3. Austin:

Frontend:

- Initializing React App
- Establishing routes and links
- Photo and Collections pages
- Axios requests to backend
