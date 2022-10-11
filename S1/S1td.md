# Subject

This TD aims at implementing a shopping list using JQuery.

## Expected behaviour

The page initially displays : 
- an HTML text input element
- an HTML "Add" button
- an empty shopping list (with a &lt;ul&gt; HTML element)

When clicking on the "Add" button, the item is added in the list as an &lt;li&gt; element.

Each line also contains a "Delete" button that enables to delete this item from the list.

# Input

The HTML structure of the page is given.

The HTML is already linked with jquery file and js file.

You only need to add content to the shoppingList.js file.

# Output

The expected deliverable is a Git repo or a zip of your source code, with all your source files (HTML, JS, or CSS).

Send the URL of the Git repo or the zip to Mootse.

# Steps

## Step 1

In the shoppingList.js file, implement the jQuery "ready event" handler function, as described [here](https://learn.jquery.com/about-jquery/how-jquery-works).

Just add a fake console.log to ensure setup of JQuery is ok.

## Step 2

Define variables to hold : 
- the "ul" list element
- the "Add" button element 

## Step 3

Define a handler for the "click" event on the "Add" button.

Just add a fake console.log to ensure this handler is correctly set up.

## Step 4

Get the value of the input element in the handler of the "click" event on the "Add" button.

Just print the value of this input in the click handler to check all is ok.

## Step 5

Still in the handler, create a li element with this value, and add the li element in the ul element.

## Step 6

Still in the handler, create a "Delete" button, and add this button in the li element.

## Step 7

Add an handler to this "Delete" button, to let it remove the li element it is contained in.