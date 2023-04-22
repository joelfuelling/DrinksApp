ROUGH draft, and I don't know if all the syntax is correct. I googled if 'String' is the right validator for email and it is. 

***App functionality revolves around the ***logged in user***

feature creep can doom a project! Focus on MVP for now.

I think we said that all the edit/create/delete stuff would be in the user portion, since that makes most sense.

GitHUB requirement notes:
    Because your app's functionality revolves around the logged in user, ***implement authentication and basic navigation first!***
    Prioritize and implement the user stories one at a time

        This link is a very simple rundown of adding a feature.
            https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_2/project_2/guide-to-add-feature-to-web-app.md

        This.CRUD.guide.is.awesome!
            https://github.com/takis-fuego-cohort/lessons-and-labs/blob/main/Unit_2/project_2/guide-to-user-centric-crud.md
    One-To-One Relationship
    One-To-Many Relationship



PASSPORT INFO:::

IMPORTANT: req.user will be the logged in user's Mongoose document❗️
- If a user is not logged in, req.user will be undefined.
- You will then be able to access the req.user document in all of the controller actions - so, ***DO NOT*** write code to retrieve the user document from the DB because req.user is already the document!

