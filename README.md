# Cocktail Capstone Project

## Technologies Used
MongoDB, Express, React, Node

## Intro

## User Stories

1. Intro Page
 - When a user visits the intro page they should:
    - See an image or animation
    - See the title of the app
    - See the button to enter
     - On clicking 'enter'
        - redirect to '/'

2. Home Page
 - When a user visits the home page they should:
    - See a clear call to action that:
        - They should choose to browse based on recipes
            - On clicking 'recipes'
                - show 'recipesIndex'
                    - limit to 50 recipes
        - They should browse based on ingredients - not-MVP
            - On clicking 'ingredients'
                - show 'ingredientIndex'
            - On clicking 'collections'
                - show 'collectionsIndex'

3. Collections 
    - When a user visits the collections page they should
        - See a column of collection
            - When a user clicks on a collection:
                - The collection item highlights
                - a recipes index appears displaying only recipes in that specific collection
                - They can rename the collection
                    - modal window
                - They can Delete the collection
                    - Model window confirmation
            - When a user clicks on a recipe
                - they can remove the recipe from the collection
                    - modal window confirmation
