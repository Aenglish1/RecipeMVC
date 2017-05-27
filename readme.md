# RecipeMVC

My Demo recipe app for code school

To start my app for development:

```
DEBUG=RecipeMVC:* npm run dev
```

To start for production:

```
npm run prod
```


### To use the debugger in development

Using two different terminal tabs...

* In tab one, run the project as usual in dev `DEBUG=RecipeMVC:* npm run dev`
* In another tabs, run the debugger script `npm run debug`
* ... this should open up a blank chrome windows with the debugger window
* ... if you add `debug` to the project, the chome tab will catch it and allow
  ... us to inspect the request

## Deployment

To deploy the app:
1. Be Aaron English
2. `git push heroku master`

## PROJECT TIMELINE

*PM 5/25*

[x] Configure project

... [x] List port out

... [x] Switch from Jade to HBS

... [x] Install Bootstrap

... [x] Some default messaging

[x] Dummy JSON file with bunch-o-recipes

[x] List bunch-o-recipes

[x] Show a single recipe


---

*Lunch 5/26*

[ ] Pixel pushing

Develop 5 realistic recipes: Title, image, ingredients, directions, story
... [ ] Recipe 1

... [ ] Recipe 2

... [ ] Recipe 3

... [ ] Recipe 4

... [ ] Recipe 5

[x] About Page

-----

*PM 5x/26*

[x] Install nodemon so we don't lose our sh*t

[x] Add a recipe

[x] Edit a recipe

[ ] Delete a recipe

[ ] Ship to Heroku

~~[ ] Use persistence layer (like mongo or postgres)~~
