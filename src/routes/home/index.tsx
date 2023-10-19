import { component$, useSignal, useResource$, Resource } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";
import { routeLoader$ } from "@builder.io/qwik-city";

export const useDadJoke = routeLoader$(async () => {
    const response = await fetch("https://icanhazdadjoke.com/", {
        headers: { Accept: "application/json" },
    });
    return (await response.json()) as {
        id: string;
        status: number;
        joke: string;
    };
});

export default component$(() => {
    const query = useSignal("busy");
    const jokes = useResource$<{ value: string }[]>(async ({ track, cleanup }) => {
        track(() => query.value);
        // A good practice is to use `AbortController` to abort the fetching of data if
        // new request comes in. We create a new `AbortController` and register a `cleanup`
        // function which is called when this function re-runs.
        const controller = new AbortController();
        cleanup(() => controller.abort());

        if (query.value.length < 3) {
            return [];
        }

        const url = new URL("https://api.chucknorris.io/jokes/search");
        url.searchParams.set("query", query.value);

        const resp = await fetch(url, { signal: controller.signal });
        const json = (await resp.json()) as { result: { value: string }[] };

        return json.result;
    });
    const dadJokeSignal = useDadJoke();
    return (
        <>

<section class="bg-white dark:bg-gray-900 bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern.svg')] dark:bg-[url('https://flowbite.s3.amazonaws.com/docs/jumbotron/hero-pattern-dark.svg')]">
    <div class="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 z-10 relative">
        <a href="#" class="inline-flex justify-between items-center py-1 px-1 pr-4 mb-7 text-sm text-blue-700 bg-blue-100 rounded-full dark:bg-blue-900 dark:text-blue-300 hover:bg-blue-200 dark:hover:bg-blue-800">
            <span class="text-xs bg-blue-600 rounded-full text-white px-4 py-1.5 mr-3">New</span> <span class="text-sm font-medium">Jumbotron component was launched! See what's new</span> 
            <svg class="w-2.5 h-2.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
        </a>
        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 lg:px-48 dark:text-gray-200">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
        <form class="w-full max-w-md mx-auto">   
            <label for="default-email" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Email sign-up</label>
            <div class="relative">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3.5 pointer-events-none">
                    <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                        <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z"/>
                        <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z"/>
                    </svg>
                </div>
                <input type="email" id="default-email" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-white focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter your email here..." required />
                <button type="submit" class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Sign up</button>
            </div>
        </form>
    </div>
    <div class="bg-gradient-to-b from-blue-50 to-transparent dark:from-blue-900 w-full h-full absolute top-0 left-0 z-0"></div>
</section>

            <h1>home/index 👋</h1>
            <p class="text-3xl font-bold underline">
                Can't wait to see what you build with qwik!
                <br />
                <button class="bg-violet-500 hover:bg-violet-600">Hello</button>
                Happy coding.
            </p>
            <section class="section bright">
                {/* <Resource value={dadJokeSignal} onPending={() => <p>Loading...</p>} onResolved={(responsex) => <h2>{responsex.value.joke}</h2>} /> */}
                <p>{dadJokeSignal.value.joke}</p>
            </section>

            <label>
                Query: <input bind:value={query} />
            </label>
            <button>search</button>
            <Resource
                value={jokes}
                onPending={() => <>loading...</>}
                onResolved={(jokes) => (
                    <ul class="bg-[red] text-white p-8">
                        {jokes.map((joke, i) => (
                            <li class="pl-4 mb-3 underline" key={i}> {">>"} {joke.value}</li>
                        ))}
                    </ul>
                )}
            />
        </>
    );
});

export const head: DocumentHead = {
    title: "Welcome to Qwik",
    meta: [
        {
            name: "description",
            content: "Qwik site description",
        },
    ],
};
