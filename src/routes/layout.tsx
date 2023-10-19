import { component$, Slot } from "@builder.io/qwik";
import { useLocation, type RequestHandler } from "@builder.io/qwik-city";

import { Navbar } from "~/components/navbar";

export const onGet: RequestHandler = async ({ cacheControl }) => {
    // Control caching for this request for best performance and to reduce hosting costs:
    // https://qwik.builder.io/docs/caching/
    cacheControl({
        // Always serve a cached response by default, up to a week stale
        staleWhileRevalidate: 60 * 60 * 24 * 7,
        // Max once every 5 seconds, revalidate on the server to get a fresh version of this page
        maxAge: 5,
    });
};

export default component$(() => {
    const loc = useLocation();
    return (
        <>
            <Navbar />
            <h1>SKU</h1>
            {loc.isNavigating && <p>Loading...</p>}
            <p>pathname: {loc.url.pathname}</p>
            <p>skuId: {loc.params.skuId}</p>
            <Slot />
        </>
    );
});