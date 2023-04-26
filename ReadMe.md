-BeerVine-
- Personal drink catalog to track favorited and "wishlist" beverages, of which the user can review, edit, and delete.


Screenshot
- *Need landing page*
- Show page logged in/logged out
![Alt text](../../../Screenshot%202023-04-24%20at%2012.09.58%20PM.png)
![Alt text](../../../Screenshot%202023-04-24%20at%2012.11.03%20PM.png)


Technologies Used
- JavaScript
- Express
- Mongoose
- MongoDb
- HTML
- CSS
- Google OAuth


Getting Started
(your deployment url here)
- Trello: https://trello.com/b/Mm3f15XZ/brewvine


- Next steps (IceBox)
Tuesday morning 4/25 - Next Steps
- Jason:
- Sean: 
- Phillipi: Modified the models to store an image in DB and started styling pages.
- Joel:


Monday morning 4/24 - Next Steps
- Sean: Work on fly.io deployment

- Phillipi: Populate database with data
- Joel: Setup EnsureLoggedIn, reorganize ReadMe and Trello board.


- Phillip: Work on CSS
- Joel: Setup EnsureLoggedIn, reorganize ReadMe and Trello board.

Monday afternoon 4/24 -
- Sean: Work on fly.io ***CURRENT KNOWN ISSUE with fly.io deployment (https://community.fly.io/t/reliability-its-not-great/11253)
- Phillip: Work on CSS
- Joel: Completed EnsureLoggedIn, worked with Jason to figure out Delete Reviews setup.
- Jason: Worked with Joel to figure out Delete Reviews setup and discuss filtering option.

TUesday morning 4/25 - Next Steps
- Sean: Work on fly.io deployment/Home Page creation
- Phillip: Work on CSS
- Jason: Working on sort/filter method to show drink type.
- Joel: Work on icons showing in edit view, and avatar not showing on reviews.









***Working diary/notes***
Sunday, Apr 23, Joel:
    - Main setup for google Oauth complete. 
    - Navbar initial setup complete with logos and basic formatting.
        - Home/Google image only rendering on index page. This needs fixed.
    - Commented out existing userSchema due to it having it's own model.

    - REVIEWS:
        - Added review setup to show page.(not complete!!!)
        - Updated reviewSchema for user centric functionality.
        - It seems there is no server response currently when trying to submit review.
        - at 2 hour mark of oAuth video.

    - EDIT:
        - Currently, you can leave the edit fields blank and then it "disappers" from show page. Needs corrected so that each filed is required.

    - EDIT:
        - Currently, you can leave the edit fields blank and then it "disappers" from show page. Needs corrected so that each filed is required.