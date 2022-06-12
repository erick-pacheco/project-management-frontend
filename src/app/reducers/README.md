[Skip to main content](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

[

![Redux Logo](https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg)

**Redux**](https://redux.js.org/)

SearchK

[

![Redux Logo](https://redux.js.org/img/redux.svg)

](https://redux.js.org/)

-   [](https://redux.js.org/introduction/getting-started)
-   [](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
-   [](https://redux.js.org/usage/)
-   [](https://redux.js.org/api/api-reference)
-   [](https://redux.js.org/faq)
-   [](https://redux.js.org/style-guide/)
-   [](https://www.github.com/reduxjs/redux)
-   [](https://redux.js.org/introduction/getting-started#help-and-discussion)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

    -   [](https://redux.js.org/tutorials/index)
    -   [](https://redux.js.org/tutorials/quick-start)
    -   [](https://redux.js.org/tutorials/typescript-quick-start)
    -   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

        -   [](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
        -   [](https://redux.js.org/tutorials/essentials/part-2-app-structure)
        -   [](https://redux.js.org/tutorials/essentials/part-3-data-flow)
        -   [](https://redux.js.org/tutorials/essentials/part-4-using-data)
        -   [](https://redux.js.org/tutorials/essentials/part-5-async-logic)
        -   [](https://redux.js.org/tutorials/essentials/part-6-performance-normalization)
        -   [](https://redux.js.org/tutorials/essentials/part-7-rtk-query-basics)
        -   [](https://redux.js.org/tutorials/essentials/part-8-rtk-query-advanced)
    -   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

    -   [](https://redux.js.org/tutorials/videos)
-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [](https://redux.js.org/tutorials/essentials/part-2-app-structure#)

-   [🏠](https://redux.js.org/)
-   Tutorials
-   Redux Essentials
-   Redux App Structure

On this page

Redux Essentials, Part 2: Redux App Structure
=============================================

##### WHAT YOU'LL LEARN

-   The structure of a typical React + Redux app
-   How to view state changes in the Redux DevTools Extension

Introduction[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#introduction "Direct link to heading")
---------------------------------------------------------------------------------------------------------------------

In [Part 1: Redux Overview and Concepts](https://redux.js.org/tutorials/essentials/part-1-overview-concepts), we looked at why Redux is useful, the terms and concepts used to describe different parts of Redux code, and how data flows through a Redux app.

Now, let's look at a real working example to see how these pieces fit together.

The Counter Example App[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#the-counter-example-app "Direct link to heading")
-------------------------------------------------------------------------------------------------------------------------------------------

The sample project we'll look at is a small counter application that lets us add or subtract from a number as we click buttons. It may not be very exciting, but it shows all the important pieces of a React+Redux application in action.

The project has been created using [the official Redux template for Create-React-App](https://github.com/reduxjs/cra-template-redux). Out of the box, it has already been configured with a standard Redux application structure, using [Redux Toolkit](https://redux-toolkit.js.org/) to create the Redux store and logic, and [React-Redux](https://react-redux.js.org/) to connect together the Redux store and the React components.

Here's the live version of the project. You can play around with it by clicking the buttons in the app preview on the right, and browse through the source files on the left.

If you'd like to try create this project on your own computer, you can [start a new Create-React-App project](https://create-react-app.dev/docs/getting-started#selecting-a-template) using our Redux template:

```
npx create-react-app redux-essentials-example --template redux
```

### Using the Counter App[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#using-the-counter-app "Direct link to heading")

The counter app has already been set up to let us watch what happens inside as we use it.

Open up your browser's DevTools. Then, choose the "Redux" tab in the DevTools, and click the "State" button in the upper-right toolbar. You should see something that looks like this:

![Redux DevTools: initial app state](https://d33wubrfki0l68.cloudfront.net/d022445258f43bdd1c8438d1af81f1442d071998/0b19a/assets/images/devtools-initial-3b52cedcebd74c327ee3b9b2342d69db.png)

On the right, we can see that our Redux store is starting off with an app state value that looks like this:

```
{  counter: {    value: 0  }}
```

The DevTools will show us how the store state changes as we use the app.

Let's play with the app first to see what it does. Click the "+" button in the app, then look at the "Diff" tab in the Redux DevTools:

![Redux DevTools: first dispatched action](https://d33wubrfki0l68.cloudfront.net/95e2b81c8e83d2fcaf343bcebece19f273359694/c7183/assets/images/devtools-first-action-c9d4378ec1ec3e1c8f93b1e8e4a1d033.png)

We can see two important things here:

-   When we clicked the "+" button, an action with a type of `"counter/increment"` was dispatched to the store
-   When that action was dispatched, the `state.counter.value` field changed from `0` to `1`

Now try these steps:

-   Click the "+" button again. The displayed value should now be 2.
-   Click the "-" button once. The displayed value should now be 1.
-   Click the "Add Amount" button. The displayed value should now be 3.
-   Change the number "2" in the textbox to a "3"
-   Click the "Add Async" button. You should see a progress bar fill the button, and after a couple seconds, the displayed value should change to 6.

Go back to the Redux DevTools. You should see a total of five actions dispatched, one for each time we clicked a button . Now select the last `"counter/incrementByAmount"` entry from the list on the left, and click the "Action" tab on the right side:

![Redux DevTools: done clicking buttons](https://d33wubrfki0l68.cloudfront.net/e61a3b0a0233817bbeb4a6b15909583bf7cda6ca/465f1/assets/images/devtools-done-clicking-8826e622b87734ea2a0044233a2a642f.png)

We can see that this action object looked like this:

```
{  type: 'counter/incrementByAmount',  payload: 3}
```

And if you click the "Diff" tab, you can see that the `state.counter.value` field changed from a `3` to a `6` in response to that action.

The ability to see what is happening inside of our app and how our state is changing over time is very powerful!

The DevTools have several more commands and options to help you debug your app. Try clicking the "Trace" tab in the upper right. You should see a JavaScript function stack trace in the panel, with several sections of source code showing the lines that were executing when the action reached the store. One line in particular should be highlighted: the line of code where we dispatched this action from the `<Counter>` component:

![Redux DevTools: action stack traces](https://d33wubrfki0l68.cloudfront.net/e147d6d500a5dc1017f2a956e76cf4077123c532/1c52c/assets/images/devtools-action-stacktrace-8ee180838c97840a749b9209e80c8a72.png)

This makes it easier to trace what part of the code dispatched a specific action.

Application Contents[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#application-contents "Direct link to heading")
-------------------------------------------------------------------------------------------------------------------------------------

Now that you know what the app does, let's look at how it works.

Here are the key files that make up this application:

-   `/src`
    -   `index.js`: the starting point for the app
    -   `App.js`: the top-level React component
    -   `/app`
        -   `store.js`: creates the Redux store instance
    -   `/features`
        -   `/counter`
            -   `Counter.js`: a React component that shows the UI for the counter feature
            -   `counterSlice.js`: the Redux logic for the counter feature

Let's start by looking at how the Redux store is created.

### Creating the Redux Store[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-the-redux-store "Direct link to heading")

Open up `app/store.js`, which should look like this:

app/store.js

```
import { configureStore } from '@reduxjs/toolkit'import counterReducer from '../features/counter/counterSlice'export default configureStore({  reducer: {    counter: counterReducer  }})
```

The Redux store is created using the `configureStore` function from Redux Toolkit. `configureStore` requires that we pass in a `reducer` argument.

Our application might be made up of many different features, and each of those features might have its own reducer function. When we call `configureStore`, we can pass in all of the different reducers in an object. The key names in the object will define the keys in our final state value.

We have a file named `features/counter/counterSlice.js` that exports a reducer function for the counter logic. We can import that `counterReducer` function here, and include it when we create the store.

When we pass in an object like `{counter: counterReducer}`, that says that we want to have a `state.counter` section of our Redux state object, and that we want the `counterReducer` function to be in charge of deciding if and how to update the `state.counter` section whenever an action is dispatched.

Redux allows store setup to be customized with different kinds of plugins ("middleware" and "enhancers"). `configureStore` automatically adds several middleware to the store setup by default to provide a good developer experience, and also sets up the store so that the Redux DevTools Extension can inspect its contents.

#### Redux Slices[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#redux-slices "Direct link to heading")

A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.

For example, in a blogging app, our store setup might look like:

```
import { configureStore } from '@reduxjs/toolkit'import usersReducer from '../features/users/usersSlice'import postsReducer from '../features/posts/postsSlice'import commentsReducer from '../features/comments/commentsSlice'export default configureStore({  reducer: {    users: usersReducer,    posts: postsReducer,    comments: commentsReducer  }})
```

In that example, `state.users`, `state.posts`, and `state.comments` are each a separate "slice" of the Redux state. Since `usersReducer` is responsible for updating the `state.users` slice, we refer to it as a "slice reducer" function.

#### Detailed Explanation: Reducers and State Structure

```

```

[](https://redux.js.org/api/combinereducers)

```

```

```

```

### Creating Slice Reducers and Actions[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#creating-slice-reducers-and-actions "Direct link to heading")

Since we know that the `counterReducer` function is coming from `features/counter/counterSlice.js`, let's see what's in that file, piece by piece.

features/counter/counterSlice.js

```
import { createSlice } from '@reduxjs/toolkit'export const counterSlice = createSlice({  name: 'counter',  initialState: {    value: 0  },  reducers: {    increment: state => {      // Redux Toolkit allows us to write "mutating" logic in reducers. It      // doesn't actually mutate the state because it uses the immer library,      // which detects changes to a "draft state" and produces a brand new      // immutable state based off those changes      state.value += 1    },    decrement: state => {      state.value -= 1    },    incrementByAmount: (state, action) => {      state.value += action.payload    }  }})export const { increment, decrement, incrementByAmount } = counterSlice.actionsexport default counterSlice.reducer
```

Earlier, we saw that clicking the different buttons in the UI dispatched three different Redux action types:

-   `{type: "counter/increment"}`
-   `{type: "counter/decrement"}`
-   `{type: "counter/incrementByAmount"}`

We know that actions are plain objects with a `type` field, the `type` field is always a string, and we typically have "action creator" functions that create and return the action objects. So where are those action objects, type strings, and action creators defined?

We *could* write those all by hand, every time. But, that would be tedious. Besides, what's *really* important in Redux is the reducer functions, and the logic they have for calculating new state.

Redux Toolkit has a function called `createSlice`, which takes care of the work of generating action type strings, action creator functions, and action objects. All you have to do is define a name for this slice, write an object that has some reducer functions in it, and it generates the corresponding action code automatically. The string from the `name` option is used as the first part of each action type, and the key name of each reducer function is used as the second part. So, the `"counter"` name + the `"increment"` reducer function generated an action type of `{type: "counter/increment"}`. (After all, why write this by hand if the computer can do it for us!)

In addition to the `name` field, `createSlice` needs us to pass in the initial state value for the reducers, so that there is a `state` the first time it gets called. In this case, we're providing an object with a `value` field that starts off at 0.

We can see here that there are three reducer functions, and that corresponds to the three different action types that were dispatched by clicking the different buttons.

`createSlice` automatically generates action creators with the same names as the reducer functions we wrote. We can check that by calling one of them and seeing what it returns:

```
console.log(counterSlice.actions.increment())// {type: "counter/increment"}
```

It also generates the slice reducer function that knows how to respond to all these action types:

```
const newState = counterSlice.reducer(  { value: 10 },  counterSlice.actions.increment())console.log(newState)// {value: 11}
```

### Rules of Reducers[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#rules-of-reducers "Direct link to heading")

We said earlier that reducers must always follow some special rules:

-   They should only calculate the new state value based on the `state` and `action` arguments
-   They are not allowed to modify the existing `state`. Instead, they must make *immutable updates*, by copying the existing `state` and making changes to the copied values.
-   They must not do any asynchronous logic or other "side effects"

But why are these rules important? There's a few different reasons:

-   One of the goals of Redux is to make your code predictable. When a function's output is only calculated from the input arguments, it's easier to understand how that code works, and to test it.
-   On the other hand, if a function depends on variables outside itself, or behaves randomly, you never know what will happen when you run it.
-   If a function modifies other values, including its arguments, that can change the way the application works unexpectedly. This can be a common source of bugs, such as "I updated my state, but now my UI isn't updating when it should!"
-   Some of the Redux DevTools capabilities depend on having your reducers follow these rules correctly

The rule about "immutable updates" is particularly important, and worth talking about further.

### Reducers and Immutable Updates[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#reducers-and-immutable-updates "Direct link to heading")

Earlier, we talked about "mutation" (modifying existing object/array values) and "immutability" (treating values as something that cannot be changed).

In Redux, our reducers are *never* allowed to mutate the original / current state values!

##### WARNING

```
// ❌ Illegal - by default, this will mutate the state!state.value = 123
```

There are several reasons why you must not mutate state in Redux:

-   It causes bugs, such as the UI not updating properly to show the latest values
-   It makes it harder to understand why and how the state has been updated
-   It makes it harder to write tests
-   It breaks the ability to use "time-travel debugging" correctly
-   It goes against the intended spirit and usage patterns for Redux

So if we can't change the originals, how do we return an updated state?

##### TIP

Reducers can only make *copies* of the original values, and then they can mutate the copies.

```
// ✅ This is safe, because we made a copyreturn {  ...state,  value: 123}
```

We already saw that we can [write immutable updates by hand](https://redux.js.org/tutorials/essentials/part-1-overview-concepts#immutability), by using JavaScript's array / object spread operators and other functions that return copies of the original values. However, if you're thinking that "writing immutable updates by hand this way looks hard to remember and do correctly"... yeah, you're right! :)

Writing immutable update logic by hand *is* hard, and accidentally mutating state in reducers is the single most common mistake Redux users make.

That's why Redux Toolkit's `createSlice` function lets you write immutable updates an easier way!

`createSlice` uses a library called [Immer](https://immerjs.github.io/immer/) inside. Immer uses a special JS tool called a `Proxy` to wrap the data you provide, and lets you write code that "mutates" that wrapped data. But, Immer tracks all the changes you've tried to make, and then uses that list of changes to return a safely immutably updated value, as if you'd written all the immutable update logic by hand.

So, instead of this:

```
function handwrittenReducer(state, action) {  return {    ...state,    first: {      ...state.first,      second: {        ...state.first.second,        [action.someId]: {          ...state.first.second[action.someId],          fourth: action.someValue        }      }    }  }}
```

You can write code that looks like this:

```
function reducerWithImmer(state, action) {  state.first.second[action.someId].fourth = action.someValue}
```

That's a lot easier to read!

But, here's something *very* important to remember:

##### WARNING

You can *only* write "mutating" logic in Redux Toolkit's `createSlice` and `createReducer` because they use Immer inside! If you write mutating logic in reducers without Immer, it *will* mutate the state and cause bugs!

With that in mind, let's go back and look at the actual reducers from the counter slice.

features/counter/counterSlice.js

```
export const counterSlice = createSlice({  name: 'counter',  initialState: {    value: 0  },  reducers: {    increment: state => {      // Redux Toolkit allows us to write "mutating" logic in reducers. It      // doesn't actually mutate the state because it uses the immer library,      // which detects changes to a "draft state" and produces a brand new      // immutable state based off those changes      state.value += 1    },    decrement: state => {      state.value -= 1    },    incrementByAmount: (state, action) => {      state.value += action.payload    }  }})
```

We can see that the `increment` reducer will always add 1 to `state.value`. Because Immer knows we've made changes to the draft `state` object, we don't have to actually return anything here. In the same way, the `decrement` reducer subtracts 1.

In both of those reducers, we don't actually need to have our code look at the `action` object. It will be passed in anyway, but since we don't need it, we can skip declaring `action` as a parameter for the reducers.

On the other hand, the `incrementByAmount` reducer *does* need to know something: how much it should be adding to the counter value. So, we declare the reducer as having both `state` and `action` arguments. In this case, we know that the amount we typed into the textbox is being put into the `action.payload` field, so we can add that to `state.value`.

##### WANT TO KNOW MORE?

For more information on immutability and writing immutable updates, see [the "Immutable Update Patterns" docs page](https://redux.js.org/usage/structuring-reducers/immutable-update-patterns) and [The Complete Guide to Immutability in React and Redux](https://daveceddia.com/react-redux-immutability-guide/).

### Writing Async Logic with Thunks[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#writing-async-logic-with-thunks "Direct link to heading")

So far, all the logic in our application has been synchronous. Actions are dispatched, the store runs the reducers and calculates the new state, and the dispatch function finishes. But, the JavaScript language has many ways to write code that is asynchronous, and our apps normally have async logic for things like fetching data from an API. We need a place to put that async logic in our Redux apps.

A thunk is a specific kind of Redux function that can contain asynchronous logic. Thunks are written using two functions:

-   An inside thunk function, which gets `dispatch` and `getState` as arguments
-   The outside creator function, which creates and returns the thunk function

The next function that's exported from `counterSlice` is an example of a thunk action creator:

features/counter/counterSlice.js

```
// The function below is called a thunk and allows us to perform async logic.// It can be dispatched like a regular action: `dispatch(incrementAsync(10))`.// This will call the thunk with the `dispatch` function as the first argument.// Async code can then be executed and other actions can be dispatchedexport const incrementAsync = amount => dispatch => {  setTimeout(() => {    dispatch(incrementByAmount(amount))  }, 1000)}
```

We can use them the same way we use a typical Redux action creator:

```
store.dispatch(incrementAsync(5))
```

However, using thunks requires that the `redux-thunk` *middleware* (a type of plugin for Redux) be added to the Redux store when it's created. Fortunately, Redux Toolkit's `configureStore` function already sets that up for us automatically, so we can go ahead and use thunks here.

When you need to make AJAX calls to fetch data from the server, you can put that call in a thunk. Here's an example that's written a bit longer, so you can see how it's defined:

features/counter/counterSlice.js

```
// the outside "thunk creator" functionconst fetchUserById = userId => {  // the inside "thunk function"  return async (dispatch, getState) => {    try {      // make an async call in the thunk      const user = await userAPI.fetchById(userId)      // dispatch an action when we get the response back      dispatch(userLoaded(user))    } catch (err) {      // If something went wrong, handle it here    }  }}
```

We'll see thunks being used in [Part 5: Async Logic and Data Fetching](https://redux.js.org/tutorials/essentials/part-5-async-logic)

#### Detailed Explanation: Thunks and Async Logic

```

```

```

```

There's one more function in this file, but we'll talk about that in a minute when we look at the `<Counter>` UI component.

##### WANT TO KNOW MORE?

See [the Redux Thunk docs](https://github.com/reduxjs/redux-thunk), the post [What the heck is a thunk?](https://daveceddia.com/what-is-a-thunk/) and the [Redux FAQ entry on "why do we use middleware for async?"](https://redux.js.org/faq/actions#how-can-i-represent-side-effects-such-as-ajax-calls-why-do-we-need-things-like-action-creators-thunks-and-middleware-to-do-async-behavior) for more information.

### The React Counter Component[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#the-react-counter-component "Direct link to heading")

Earlier, we saw what a standalone React `<Counter>` component looks like. Our React+Redux app has a similar `<Counter>` component, but it does a few things differently.

We'll start by looking at the `Counter.js` component file:

features/counter/Counter.js

```
import React, { useState } from 'react'import { useSelector, useDispatch } from 'react-redux'import {  decrement,  increment,  incrementByAmount,  incrementAsync,  selectCount} from './counterSlice'import styles from './Counter.module.css'export function Counter() {  const count = useSelector(selectCount)  const dispatch = useDispatch()  const [incrementAmount, setIncrementAmount] = useState('2')  return (    <div>      <div className={styles.row}>        <button          className={styles.button}          aria-label="Increment value"          onClick={() => dispatch(increment())}        >          +        </button>        <span className={styles.value}>{count}</span>        <button          className={styles.button}          aria-label="Decrement value"          onClick={() => dispatch(decrement())}        >          -        </button>      </div>      {/* omit additional rendering output here */}    </div>  )}
```

Like with the earlier plain React example, we have a function component called `Counter`, that stores some data in a `useState` hook.

However, in our component, it doesn't look like we're storing the actual current counter value as state. There *is* a variable called `count`, but it's not coming from a `useState` hook.

While React includes several built-in hooks like `useState` and `useEffect`, other libraries can create their own [custom hooks](https://reactjs.org/docs/hooks-custom.html) that use React's hooks to build custom logic.

The [React-Redux library](https://react-redux.js.org/) has [a set of custom hooks that allow your React component to interact with a Redux store](https://react-redux.js.org/api/hooks).

#### Reading Data with `useSelector`[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#reading-data-with-useselector "Direct link to heading")

First, the `useSelector` hook lets our component extract whatever pieces of data it needs from the Redux store state.

Earlier, we saw that we can write "selector" functions, which take `state` as an argument and return some part of the state value.

Our `counterSlice.js` has this selector function at the bottom:

features/counter/counterSlice.js

```
// The function below is called a selector and allows us to select a value from// the state. Selectors can also be defined inline where they're used instead of// in the slice file. For example: `useSelector((state) => state.counter.value)`export const selectCount = state => state.counter.value
```

If we had access to a Redux store, we could retrieve the current counter value as:

```
const count = selectCount(store.getState())console.log(count)// 0
```

Our components can't talk to the Redux store directly, because we're not allowed to import it into component files. But, `useSelector` takes care of talking to the Redux store behind the scenes for us. If we pass in a selector function, it calls `someSelector(store.getState())` for us, and returns the result.

So, we can get the current store counter value by doing:

```
const count = useSelector(selectCount)
```

We don't have to *only* use selectors that have already been exported, either. For example, we could write a selector function as an inline argument to `useSelector`:

```
const countPlusTwo = useSelector(state => state.counter.value + 2)
```

Any time an action has been dispatched and the Redux store has been updated, `useSelector` will re-run our selector function. If the selector returns a different value than last time, `useSelector` will make sure our component re-renders with the new value.

#### Dispatching Actions with `useDispatch`[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#dispatching-actions-with-usedispatch "Direct link to heading")

Similarly, we know that if we had access to a Redux store, we could dispatch actions using action creators, like `store.dispatch(increment())`. Since we don't have access to the store itself, we need some way to have access to just the `dispatch` method.

The `useDispatch` hook does that for us, and gives us the actual `dispatch` method from the Redux store:

```
const dispatch = useDispatch()
```

From there, we can dispatch actions when the user does something like clicking on a button:

features/counter/Counter.js

```
<button  className={styles.button}  aria-label="Increment value"  onClick={() => dispatch(increment())}>  +</button>
```

### Component State and Forms[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#component-state-and-forms "Direct link to heading")

By now you might be wondering, "Do I always have to put all my app's state into the Redux store?"

The answer is NO. Global state that is needed across the app should go in the Redux store. State that's only needed in one place should be kept in component state.

In this example, we have an input textbox where the user can type in the next number to be added to the counter:

features/counter/Counter.js

```
const [incrementAmount, setIncrementAmount] = useState('2')// laterreturn (  <div className={styles.row}>    <input      className={styles.textbox}      aria-label="Set increment amount"      value={incrementAmount}      onChange={e => setIncrementAmount(e.target.value)}    />    <button      className={styles.button}      onClick={() => dispatch(incrementByAmount(Number(incrementAmount) || 0))}    >      Add Amount    </button>    <button      className={styles.asyncButton}      onClick={() => dispatch(incrementAsync(Number(incrementAmount) || 0))}    >      Add Async    </button>  </div>)
```

We *could* keep the current number string in the Redux store, by dispatching an action in the input's `onChange` handler and keeping it in our reducer. But, that doesn't give us any benefit. The only place that text string is used is here, in the `<Counter>` component. (Sure, there's only one other component in this example: `<App>`. But even if we had a larger application with many components, only `<Counter>` cares about this input value.)

So, it makes sense to keep that value in a `useState` hook here in the `<Counter>` component.

Similarly, if we had a boolean flag called `isDropdownOpen`, no other components in the app would care about that - it should really stay local to this component.

In a React + Redux app, your global state should go in the Redux store, and your local state should stay in React components.

If you're not sure where to put something, here are some common rules of thumb for determining what kind of data should be put into Redux:

-   Do other parts of the application care about this data?
-   Do you need to be able to create further derived data based on this original data?
-   Is the same data being used to drive multiple components?
-   Is there value to you in being able to restore this state to a given point in time (ie, time travel debugging)?
-   Do you want to cache the data (ie, use what's in state if it's already there instead of re-requesting it)?
-   Do you want to keep this data consistent while hot-reloading UI components (which may lose their internal state when swapped)?

This is also a good example of how to think about forms in Redux in general. Most form state probably shouldn't be kept in Redux. Instead, keep the data in your form components as you're editing it, and then dispatch Redux actions to update the store when the user is done.

One other thing to note before we move on: remember that `incrementAsync` thunk from `counterSlice.js`? We're using it here in this component. Notice that we use it the same way we dispatch the other normal action creators. This component doesn't care whether we're dispatching a normal action or starting some async logic. It only knows that when you click that button, it dispatches something.

### Providing the Store[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#providing-the-store "Direct link to heading")

We've seen that our components can use the `useSelector` and `useDispatch` hooks to talk to the Redux store. But, since we didn't import the store, how do those hooks know what Redux store to talk to?

Now that we've seen all the different pieces of this application, it's time to circle back to the starting point of this application and see how the last pieces of the puzzle fit together.

index.js

```
import React from 'react'import ReactDOM from 'react-dom'import './index.css'import App from './App'import store from './app/store'import { Provider } from 'react-redux'import * as serviceWorker from './serviceWorker'ReactDOM.render(  <Provider store={store}>    <App />  </Provider>,  document.getElementById('root'))
```

We always have to call `ReactDOM.render(<App />)` to tell React to start rendering our root `<App>` component. In order for our hooks like `useSelector` to work right, we need to use a component called `<Provider>` to pass down the Redux store behind the scenes so they can access it.

We already created our store in `app/store.js`, so we can import it here. Then, we put our `<Provider>` component around the whole `<App>`, and pass in the store: `<Provider store={store}>`.

Now, any React components that call `useSelector` or `useDispatch` will be talking to the Redux store we gave to the `<Provider>`.

What You've Learned[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#what-youve-learned "Direct link to heading")
----------------------------------------------------------------------------------------------------------------------------------

Even though the counter example app is pretty small, it showed all the key pieces of a React + Redux app working together. Here's what we covered:

##### SUMMARY

-   We can create a Redux store using the Redux Toolkit `configureStore` API
    -   `configureStore` accepts a `reducer` function as a named argument
    -   `configureStore` automatically sets up the store with good default settings
-   Redux logic is typically organized into files called "slices"
    -   A "slice" contains the reducer logic and actions related to a specific feature / section of the Redux state
    -   Redux Toolkit's `createSlice` API generates action creators and action types for each individual reducer function you provide
-   Redux reducers must follow specific rules
    -   Should only calculate a new state value based on the `state` and `action` arguments
    -   Must make *immutable updates* by copying the existing state
    -   Cannot contain any asynchronous logic or other "side effects"
    -   Redux Toolkit's `createSlice` API uses Immer to allow "mutating" immutable updates
-   Async logic is typically written in special functions called "thunks"
    -   Thunks receive `dispatch` and `getState` as arguments
    -   Redux Toolkit enables the `redux-thunk` middleware by default
-   React-Redux allows React components to interact with a Redux store
    -   Wrapping the app with `<Provider store={store}>` enables all components to use the store
    -   Global state should go in the Redux store, local state should stay in React components

What's Next?[​](https://redux.js.org/tutorials/essentials/part-2-app-structure#whats-next "Direct link to heading")
-------------------------------------------------------------------------------------------------------------------

Now that you've seen all the pieces of a Redux app in action, it's time to write your own! For the rest of this tutorial, you'll be building a larger example app that uses Redux. Along the way, we'll cover all the key ideas you need to know to use Redux the right way.

Continue on to [Part 3: Basic Redux Data Flow](https://redux.js.org/tutorials/essentials/part-3-data-flow) to get started building the example app.

[Edit this page](https://github.com/reduxjs/redux/edit/master/docs/tutorials/essentials/part-2-app-structure.md)

Last updated on **4/16/2022**

[

Previous

Redux Overview and Concepts

](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)

[

Next

Basic Redux Data Flow

](https://redux.js.org/tutorials/essentials/part-3-data-flow)

Docs

-   [Getting Started](https://redux.js.org/introduction/getting-started)
-   [Usage Guide](https://redux.js.org/usage)
-   [Tutorial](https://redux.js.org/tutorials/essentials/part-1-overview-concepts)
-   [FAQ](https://redux.js.org/faq)
-   [API Reference](https://redux.js.org/api/api-reference)

Community

-   [Reactiflux Discord](https://discord.gg/0ZcbPKXt5bZ6au5t)
-   [Stack Overflow](http://stackoverflow.com/questions/tagged/redux)
-   [Feedback](https://redux.js.org/introduction/getting-started#help-and-discussion)

More

-   [GitHub](https://github.com/reduxjs/redux)
-   [![Deployed by Netlify](https://www.netlify.com/img/global/badges/netlify-color-accent.svg)](https://www.netlify.com/)

[![Redux Logo](https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg)](https://redux.js.org/)

Copyright © 2015--2022 Dan Abramov and the Redux documentation authors.