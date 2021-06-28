# Cocktail Capstone Project

## Technologies Used
MongoDB, Express, React, Node, Bootstrap

## Intro
The intention of this project is to build an application that I as the creator would actually use, and build it in React. I like cocktails. I liked bartending but I didn't like when people would order cocktails by name, it's just hard to remember them all and flipping through those recipe cards was a nightmare. So I built those cards digitally. My initial goals for this app are to be able to look up cocktails by name, and add them to collections. Beyond that, my goals are to implement a tool to search for recipes by the ingredients that a user has on hand, and then refactor pages and components so that all searches and tools and indexes exist on a single page.

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

[Wireframes](https://app.moqups.com/DudhfxfJUX/view/page/a9080d65c)