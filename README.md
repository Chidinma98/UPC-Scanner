# Project Overview

## Project Schedule

|  Day | Deliverable | Status
|---|---| ---|
|Monday| Proposals / Setup Tasks in Trello | Incomplete
|Tuesday| Product Routes and CRUD Implemented, Landing Page, Product Add Page, Product Display Page | Incomplete
|Wednesday| Comment Routes and CRUD, Comment Page / Comment Component inside Product Info Page | Incomplete
|Thursday| CSS, Looking for Bugs, Post MVP Components for Product Information | Incomplete
|Friday| Demonstration  | Incomplete


## Project Description

UPC scanning app to obtain a variety of information about a product. This includes
brand name, product name, price, among many other fixed attributes. Additionally, users may
comment on products and give them ratings as well as the price they paid in order to help
future consumers with their decisions.

## Wireframes

![](https://res.cloudinary.com/djderutky/image/upload/v1560621340/upc-scanner/wireframes_snaxcn.png)

## Priority Matrix

![](https://res.cloudinary.com/djderutky/image/upload/v1560621347/upc-scanner/priority-matrix_b6b9wz.png)

### MVP/PostMVP - 5min

#### MVP 

- Add product.
- View product information.
- CRUD on comments.
- CRU  on products.
- Add comments.
- CSS

#### PostMVP
- Additional product information components.
- Upload and display images on product information.
- Users to have an image.
- Comments in comments.

## React Architectural Design
![](https://res.cloudinary.com/djderutky/image/upload/v1560711732/upc-scanner/architecture_wphtyi.png)

## ERD
![](https://res.cloudinary.com/djderutky/image/upload/v1560735314/upc-scanner/upc-erd_fursee.png)

## Functional Components
Functional components are those colored red in the architectural design section.

## Time Frame
| Component | Priority | Estimated Time | Actual Time |
| --- | :---: |  :---: | :---: |
| Trello | H | 0.5 hrs | |
| Product Routes / CRUD | H | 3 hrs | |
| Landing Page | H | 2 hrs | |
| Product Add Page | H | 4 hrs | | 
| Product Info Page | H | 4 hrs | |
| Comment Routes / CRUD | H | 3 hrs | |
| Comment Component | H | 3 hrs | |
| Comment Page | H | 4 hrs | |
| CSS | H | 7 hrs | |
| Try to Break App | H | 3 hrs | |
| Post MVP Components | H | 6 hrs | |
| Presentation Practice | H | 1 hr | |

## Helper Functions
Helper functions should be generic enought that they can be reused in other applications. Use this section to document all helper functions that fall into this category.

#### SAMPLE.....
| Function | Description | 
| --- | :---: |  
| Capitalize | This will capitalize the first letter in a string of text | 

## Additional Libraries
 Use this section to list all supporting libraries and thier role in the project. 
 
 #### SAMPLE.....
| Library | What it Does | 
| --- | :---: |  
| Bootstrap | Used to help style my application | 
| Giphy API | Used to get gifs to use | 


## Code Snippet

Use this section to include a brief code snippet of functionality that you are proud of an a brief description  

#### SAMPLE.....
```
function reverse(string) {
	// here is the code to reverse a string of text
}
```

## Change Log
 Use this section to document what changes were made and the reasoning behind those changes.  

#### SAMPLE.....
| Original Plan | Outcome | 
| --- | :---: |  
| Have one Book component | Split that component into BookInfo and BookInteraction as the component grew too complicated | 

## Issues and Resolutions
 Use this section to list of all major issues encountered and their resolution.

#### SAMPLE.....
**ERROR**: app.js:34 Uncaught SyntaxError: Unexpected identifier                                
**RESOLUTION**: Missing comma after first object in sources {} object