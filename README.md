#This is my learning of react router 
yay yyayyyy

So, we technically make single page applications in React,
but traditionally websites does not involves just a single page in applications, on each click it would send a fresh request to a server, which paints the entire dom as new and shows up a brand new html page.

but react was not designed to work this way. it's supposed to be SPA (Single Page Application).
SPAs handle all the routing on the front end of the browser and not send any additional request to the server,that's where the react router is needed, cuz react does not come fully loaded with routing mechanism.

so we make use of additional library which is called react-router-dom, which allows us to easily handle routing in the browser.
The way it works is, when we click to a different link in a website, the react router intercepts that request and stops it reaching the server, instead it swaps the page content depending on whatever page we requested, WHERE EACH PAGE IS JUST A REACT COMPONENT.
and this is all very fast process cuz it is handled on the front end in the browser.

get started with:
npm i react-router-dom

import BrowserRouter, Routes, Route in the app,
wrap the content that requires routing with BrowserRouter, 
then, Routes and Route.

But, using routes AND route actually reloads the page lol, we need the REACT ROUTER DOM TO INTERCEPT THE REQUEST TO SERVER, so we can use Link or NavLink component for doing this,

the difference between link and NavLink is that, navlink gives an extra attribute called class,which gets active when we click it, which can help us style components differently for the active ones.

v6.4
using RouterProvider component to wrap instead of BrowserRouter, and we pass a router to BrowserProvider, which is being created outside of template using createBowserRouter, which take element as createRoutesFromElements.
Routes component can't be used with createBrowserRouter funtion.

We will use OUTLET component to render from the routes. OUTLET must be in the parent route element.

LOADERS: load data into components before it renders
