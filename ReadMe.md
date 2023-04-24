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



Monday 4/24 - Next Steps
- Jason: Connect reviews route to mongoDv (getting back {} currently)
- Sean: Work on fly.io deployment
- Phillip: Populate database with data
- Joel: Setup EnsureLoggedIn








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