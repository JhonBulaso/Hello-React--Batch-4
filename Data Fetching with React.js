Data Fetching with React
We are currently fetching data, but it’s still pseudo data coming from a promise we set up ourselves.
The lessons up to now about asynchronous React and advanced state management were preparing
us to fetch data from a real remote third-party API. We will use the reliable and informative Hacker
News API¹⁶⁰ to request popular tech stories.
Instead of using the initialStories array and getAsyncStories function (you can remove these),
we will fetch the data directly from the API:
src/App.js
// A
const API_ENDPOINT = 'https://hn.algolia.com/api/v1/search?query=';
const App = () => {
...
React.useEffect(() => {
dispatchStories({ type: 'STORIES_FETCH_INIT' });
fetch(`${API_ENDPOINT}react`) // B
.then((response) => response.json()) // C
.then((result) => {
dispatchStories({
type: 'STORIES_FETCH_SUCCESS',
payload: result.hits, // D
});
})
.catch(() =>
dispatchStories({ type: 'STORIES_FETCH_FAILURE' })
);
}, []);
...
};
First, the API_ENDPOINT (A) is used to fetch popular tech stories for a certain query (a search term). In
this case, we fetch stories about React (B). Second, the native browser’s fetch API¹⁶¹ is used to make
this request (B). For the fetch API, the response needs to be translated into JSON (C). Finally, the
returned result follows a different data structure (D), which we send as payload to our component’s
state reducer.
¹⁶⁰https://hn.algolia.com/api
¹⁶¹https://mzl.la/2Z1kyjU
Fundamentals of React 112
In the previous code example, we used JavaScript’s Template Literals¹⁶² for a string interpolation.
When this feature wasn’t available in JavaScript, we’d have used the + operator on strings instead:
Code Playground
const greeting = 'Hello';
// + operator
const welcome = greeting + ' React';
console.log(welcome);
// Hello React
// template literals
const anotherWelcome = `${greeting} React`;
console.log(anotherWelcome);
// Hello React
Check your browser to see stories related to the initial query fetched from the Hacker News API.
Since we used the same data structure for a story for the sample stories, we didn’t need to change
anything, and it’s still possible to filter the stories after fetching them with the search feature. We
will change this behavior in one of the next sections though.
Exercises:
• Confirm your source code¹⁶³.
– Confirm the changes¹⁶⁴.
• Read through Hacker News¹⁶⁵ and its API¹⁶⁶.
• Read more about the browser native fetch API¹⁶⁷ for connecting to remote APIs.