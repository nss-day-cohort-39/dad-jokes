import { useJokes } from "./JokeDataProvider.js"
import { Joke } from "./Joke.js"

const contentTarget = document.querySelector(".jokeList")

export const JokeList = () => {
    const jokes = useJokes()
    contentTarget.innerHTML = jokes.map(Joke).join("")
}