# Project Name

Animal Adoption
<br>

## Description

Help animals by adopting an animal that needs a new caretaker or give up your animal if you are uanable to care for it.

<br>

## User Stories

- **404** - As a user I want to see a nice 404 page when I go to a page that doesn’t exist so that I know it was my fault
- **500** - As a user I want to see a nice error page when the super team screws it up so that I know that is not my fault
- **homepage** - As a user I want to be able to access the homepage and continue to the next page, depending if i am looking to adopt/give up my animal, log in and sign up. I also want to see what the page is about (introduction). logout button + profile.
- **sign up** - As a user I want to sign up on the web page so I can favorite a pet and to put up a pet for adoption.
- **login** - As a user I want to be able to log in on the web page so that I can get back to my account
- **logout** - As a user I want to be able to log out from the web page so that I can make sure no one will access my account
- **favorite list** - As a user I want to see the list of my favorite and delete them.
- **user profile** - As a user I want to be able to see my profile which includes the animals I posted as well as my favorites list
- **edit/user profile** - As a user I want to be able to edit my profile.
- **list** - As a user I want to see the list of the available animals.
- **animals details** - As a user I want to see more details of the animals, be able to get in contact with the current owner and save it as favorites.
- **adotion post** - As a user I want to be able to make a post about the animal I want to give up for adoption.
- **adotion post/edit/delete** - As a user I want to be able to make changes to my post or delete it.

<br>

## Server Routes (Back-end):

| **Method** | **Route**                   | **Description**                                                             | Request - Body                                                                                                |
| ---------- | --------------------------- | --------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------------- |
| `GET`      | `/`                         | Main page route. Renders home `index` view.                                 |                                                                                                               |
| `GET`      | `/login`                    | Renders `login` form view.                                                  |                                                                                                               |
| `POST`     | `/login`                    | Sends Login form data to the server.                                        | { email, password }                                                                                           |
| `GET`      | `/signup`                   | Renders `signup` form view.                                                 |                                                                                                               |
| `POST`     | `/signup`                   | Sends Sign Up info to the server and creates user in the DB.                | { email, password, name, address, phone number, birthday, favourite animal,, imageUrl }                       |
| `GET`      | `/profile`                  | Private route. Renders `profile` form view.                                 |                                                                                                               |
| `GET`      | `/edit-profile`             | Private route. Renders `edit-profile` form view.                            |                                                                                                               |
| `PUT`      | `/edit-profile`             | Private route. Sends edit-profile info to server and updates user in DB.    | { email, password, [firstName], [lastName], [imageUrl], {address}, phone number, birthday, favourite animal } |
| `GET`      | `/animals/list`             | Private route. Render the `animals` view.                                   |                                                                                                               |
| `GET`      | `/animals:id/details`       | Private route. Render the `details` view.                                   |                                                                                                               |
| `GET`      | `/adoption-post/create`     | Private route. Render the `adoption post` view.                             |                                                                                                               |
| `POST`     | `/adoption-post/create`     | Private route. Adds a animal do the DB.                                     | { name, age, color, imageUrl, species, breed}                                                                 |
| `GET`      | `/animals/:id/edit-details` | Private route. Renders edit-details form view.                              |                                                                                                               |
| `PUT`      | `/animals/:id/edit-details` | Private route. Sends edit-details info to server and updates animals in DB. |
| `DELETE`   | `/animals/:id/details`      | Private route. Deletes the existing adoption post                           |                                                                                                               |

## Models

User model

```javascript
{
  name: String,
  email: String,
  password: String,
  adress: {
      Street: String,
      Zipcode: String,
  },
  phonenumber: Number,
  birthdate: String,
  imageUrl: String,
  adoptionPost: [adoptionPostId],
  favorites: [animalId]
}

```

Animals model

```javascript
{
name: String,
age: Number,
color: String,
species: String,
breed: String,
imageUrl: String,

}

```

<br>

## API's

<br>

## Packages

cloudinary
multer

<br>

## Backlog

[See the Trello board.](https://trello.com/b/peU75b4E/animals-adoption-project)

<br>

## Links

### Git

The url to your repository and to your deployed project

[https://github.com/drttyy/Project2]()

[Deploy Link]()

<br>

### Slides

The url to your presentation slides

[Slides Link](https://docs.google.com/presentation/d/1P5FIi0vHZBUcgUtmt1M4_lLCO5dwdJ4UOgtJa4ehGfk/edit?usp=sharing)

### Contributors

Duarte Alves - [`Github`](https://github.com/drttyy/) - [`LinkedIn`](https://www.linkedin.com/in/duarte-alves-97157b227/)

Anna Egger - [`Github`](https://github.com/annagramcodes) - [`LinkedIn`](https://www.linkedin.com/in/anna-egger/)
