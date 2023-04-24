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

Sunday, Apr 23, Joel:
    - Main setup for google Oauth complete. 
    - Navbar initial setup complete with logos and basic formatting.
        - Home/Google image only rendering on index page. This needs fixed.
        - Formatting has pushed stuff to bottom of page, likely from importing some of the movies CSS as a starting point.
    - Commented out existing userSchema due to it having it's own model.

    - REVIEWS:
        - Added review setup to show page.(not complete!!!)
        - Updated reviewSchema for user centric functionality.
        - It seems there is no server response currently when trying to submit review.
        - at 2 hour mark of oAuth video.

    - EDIT:
        - Currently, you can leave the edit fields blank and then it "disappers" from show page. Needs corrected so that each filed is required.