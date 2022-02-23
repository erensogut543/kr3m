# Kr3m

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.1.0.

## Development server
To run this project on your local machine, first you should run "npm install" and then,
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Content

This project covers only frontend implementation(part 1) of the given demo task.
All fields are loaded from coupon-list.json file which is in src/asset folder.
When loading this file to show observable and http usage, http get method is used.
Loading functionality is implemented.
Page is responsive, on mobile there is only one coupon item on a line but if it is not there are visible 4 items for each rows on the screen.

## Assumptions

Data type of "Discount" field  is number and it indicates the discount in Euro. 
"ID" fields are not hashed because if there is a real backend server, the hashed ID's will return to client.
Images are loaded by urls, normally these images should be on file server but in this demo these are kept in asset folder.
"Title" field keep coupon owner company.
Search filter applied for only Title(company name) field.



