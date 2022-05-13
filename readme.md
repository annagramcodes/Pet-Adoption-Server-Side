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

| **Method** | **Route** | **Description**                                              | Request - Body                                                             |
| ---------- | --------- | ------------------------------------------------------------ | -------------------------------------------------------------------------- |
| `GET`      | `/`       | Main page route. Renders home `index` view.                  |                                                                            |
| `GET`      | `/login`  | Renders `login` form view.                                   |                                                                            |
| `POST`     | `/login`  | Sends Login form data to the server.                         | { email, password }                                                        |
| `GET`      | `/signup` | Renders `signup` form view.                                  |                                                                            |
| `POST`     | `/signup` | Sends Sign Up info to the server and creates user in the DB. | { email, password, name, adress, phone number, birthdate, favorite animal} |
| `GET` | `/profile` | Private route. Renders `profile` view. | |
| `GET` | `/edit-profile` | Private route. Renders `edit-profile` form view. | |
| `PUT` | `/edit-profile` | Private route. Sends edit-profile info to server and updates user in DB. | { email, password, name, [imageUrl], {adress}, phone number, birthdate, favorite animal } |
| `GET` | `/animal/list` | Render the `animals(cats or dog list)` view. | | --> do we need 2 list pages or can we dynamically change the animal views fe. with an if statement + DOM Manipulation.
| `GET` | `/animal:id/details` | Private route. Render the `details` view. | |
| `POST` | `/adoption-post/create` | Private route. Adds an animal to the database and to the list. | { name, age, image, species, breed, } | => redirects to animals details page
| `GET` | `/animal:id/edit-details` | Private route. Renders `edit-details` form view. | |
| `PUT` | `/animal:id/edit-details` | Private route. Sends edit-animals info to server and updates user in DB.| |
| `DELETE` | `/animal:id/details` | Private route. Deletes the existing adotion post | |
| `DELETE` | `/private/favorites/:restaurantId` | Private route. Deletes the existing favorite from the current user. | |
| `GET` | `/restaurants` | Renders `restaurant-list` view. | |
| `GET` | `/restaurants/details/:id` | Renders `restaurant-details` view for the particular restaurant. | |

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
  adoptionPost: [adoptionPostId]
 favorites: [FavoriteId], ??????????
}

```

Animals model

```javascript
{
name: String,
age: Number,
species: String,
breed: String,
imageUrl: String,

}


```

Favorites model

```javascript
{
  placeId: String,
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

Duarte Alves - [`<github-username>](https://github.com/drttyy/) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/duarte-alves-97157b227/)

Anna Egger - [`<github-username>`](https://github.com/annagramcodes) - [`<linkedin-profile-link>`](https://www.linkedin.com/in/anna-egger/)
