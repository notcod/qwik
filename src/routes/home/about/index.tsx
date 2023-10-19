import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

export default component$(() => {
    return (
        <>

      <header class="flex flex-col shrink-0 box-border min-h-[100px] text-white bg-indigo-950 pt-8 pb-20 px-5 max-sm:pb-10" maxWidth={1200} lazyLoad={false}>
        <section class="flex flex-col shrink-0 box-border min-h-[100px] text-white bg-indigo-950 w-full self-stretch grow max-w-[1200px] items-stretch mx-auto pt-8 pb-20 px-5 max-sm:pb-10">
          <div class="flex flex-col relative shrink-0 box-border items-center px-5">
            <div class="flex flex-row relative shrink-0 box-border justify-center gap-7">
              <img
                loading="lazy"
                sizes="(max-width: 638px) 8vw, (max-width: 998px) 6vw, 4vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=50 50w"class="aspect-[0.94] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[50px]"
              />
              <div class="relative shrink-0 box-border h-auto text-white text-3xl font-light w-auto self-center">
                <p>+</p>
              </div>
              <img
                loading="lazy"
                sizes="(max-width: 638px) 7vw, (max-width: 998px) 5vw, 4vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=44 44w"class="aspect-[0.88] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[44px]"
              />
            </div>
            <div class="relative shrink-0 box-border h-auto text-white font-semibold text-3xl text-center w-full max-w-[500px] mt-5">
              <p>Visually build instant-on apps with Qwik and Builder.io</p>
            </div>
          </div>
          <div class="flex flex-row relative shrink-0 box-border justify-center w-full self-center max-w-[700px] gap-10 mt-20 max-sm:flex max-sm:flex-col max-sm:items-center">
            <div class="flex flex-col relative shrink-0 box-border justify-center max-w-[50%] pl-5 max-sm:items-center max-sm:max-w-[300px]">
              <div class="relative shrink-0 box-border h-auto text-white font-semibold text-left mb-2.5">
                <p>Compose with your components</p>
              </div>
              <div class="relative shrink-0 box-border h-auto text-white text-left text-xs mt-0 max-sm:text-center">
                <p>
                  This is a custom component written in Qwik and registered to Builder. You can register any code
                  component for drag-and-drop.
                </p>
              </div>
              <img
                loading="lazy"
                sizes="(max-width: 998px) 11vw, 8vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=102 102w"class="aspect-[2.88] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[102px] ml-auto mt-5 max-md:flex max-sm:hidden"
              />
            </div>
          </div>
        </section>
      </header>
            <section class="bg-white dark:bg-gray-900">
                <div class="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 grid lg:grid-cols-2 gap-8 lg:gap-16">
                    <div class="flex flex-col justify-center">
                        <h1 class="mb-4 text-4xl font-extrabold tracking-tight leading-none text-gray-900 md:text-5xl lg:text-6xl dark:text-white">We invest in the world’s potential</h1>
                        <p class="mb-8 text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">Here at Flowbite we focus on markets where technology, innovation, and capital can unlock long-term value and drive economic growth.</p>
                        <div class="flex flex-col space-y-4 sm:flex-row sm:space-y-0 sm:space-x-4">
                            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-white rounded-lg bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 dark:focus:ring-blue-900">
                                Get started
                                <svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9" />
                                </svg>
                            </a>
                            <a href="#" class="inline-flex justify-center items-center py-3 px-5 text-base font-medium text-center text-gray-900 rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                                Learn more
                            </a>
                        </div>
                    </div>
                    <div>
                        <iframe class="mx-auto w-full lg:max-w-xl h-64 rounded-lg sm:h-96 shadow-xl" src="https://www.youtube.com/embed/KaLxCiilHns" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </div>
                </div>
            </section>

            <h1>home/about 👋</h1>
            <p class="text-3xl font-bold underline">
                Can't wait to see what you build with qwik!
                <br />
                <button class="bg-violet-500 hover:bg-violet-600">Hello</button>
                Happy coding.
            </p>
            <header class="flex flex-col shrink-0 box-border min-h-[100px] text-white bg-indigo-950 pt-8 pb-20 px-5 max-sm:pb-10" maxWidth={1200} lazyLoad={false}>
        <section class="flex flex-col shrink-0 box-border min-h-[100px] text-white bg-indigo-950 w-full self-stretch grow max-w-[1200px] items-stretch mx-auto pt-8 pb-20 px-5 max-sm:pb-10">
          <div class="flex flex-col relative shrink-0 box-border items-center px-5">
            <div class="flex flex-row relative shrink-0 box-border justify-center gap-7">
              <img
                loading="lazy"
                sizes="(max-width: 638px) 8vw, (max-width: 998px) 6vw, 4vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F6414456322e24d3fb8c52d3eb8736ce5?width=50 50w"class="aspect-[0.94] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[50px]"
              />
              <div class="relative shrink-0 box-border h-auto text-white text-3xl font-light w-auto self-center">
                <p>+</p>
              </div>
              <img
                loading="lazy"
                sizes="(max-width: 638px) 7vw, (max-width: 998px) 5vw, 4vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F674df6ccd3c94f29bf67d9a8e5b00e08?width=44 44w"class="aspect-[0.88] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[44px]"
              />
            </div>
            <div class="relative shrink-0 box-border h-auto text-white font-semibold text-3xl text-center w-full max-w-[500px] mt-5">
              <p>Visually build instant-on apps with Qwik and Builder.io</p>
            </div>
          </div>
          <div class="flex flex-row relative shrink-0 box-border justify-center w-full self-center max-w-[700px] gap-10 mt-20 max-sm:flex max-sm:flex-col max-sm:items-center">
            <div class="flex flex-col relative shrink-0 box-border justify-center max-w-[50%] pl-5 max-sm:items-center max-sm:max-w-[300px]">
              <div class="relative shrink-0 box-border h-auto text-white font-semibold text-left mb-2.5">
                <p>Compose with your components</p>
              </div>
              <div class="relative shrink-0 box-border h-auto text-white text-left text-xs mt-0 max-sm:text-center">
                <p>
                  This is a custom component written in Qwik and registered to Builder. You can register any code
                  component for drag-and-drop.
                </p>
              </div>
              <img
                loading="lazy"
                sizes="(max-width: 998px) 11vw, 8vw"
                srcSet="https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2F8d9ee72a33344b4b867918b442ebd0af%2F5b6d0ff9047248eba905608b8e6a1057?width=102 102w"class="aspect-[2.88] object-contain object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[102px] ml-auto mt-5 max-md:flex max-sm:hidden"
              />
            </div>
          </div>
          <div class="flex flex-row relative shrink-0 box-border justify-center w-full self-center max-w-[700px] gap-7 flex-wrap mt-10 max-md:w-full max-md:max-w-[450px] max-sm:flex max-sm:flex-col max-sm:items-center">
            <a
              href="https://www.builder.io/c/docs/integrating-builder-pages#creating-a-builder-page"
              target="_blank"
              class="flex flex-col relative shrink-0 box-border justify-between cursor-pointer pointer-events-auto w-full overflow-hidden max-sm:items-center max-sm:max-w-[300px]"
            >
              <div class="flex flex-col relative shrink-0 box-border border overflow-hidden bg-white bg-opacity-10 pb-5 rounded-lg border-solid border-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F238f66e07d3049eaa5d93b56b86c6579?"class="aspect-[2.22] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
                />
                <div class="relative shrink-0 box-border h-auto text-white font-semibold text-center mt-2.5 mb-2.5 px-2.5">
                  <p>Create Builder pages in your app</p>
                </div>
                <div class="relative shrink-0 box-border h-auto text-white text-center text-xs w-full max-w-[450px] mt-0 mx-auto px-2.5 max-sm:text-center">
                  <p>
                    This is an example page created in Builder. Start here to review how your integration works and create
                    new pages in your app.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.builder.io/c/docs/custom-components-intro"
              target="_blank"
              class="flex flex-col relative shrink-0 box-border justify-between max-w-[48%] cursor-pointer pointer-events-auto overflow-hidden max-md:max-w-full max-md:w-full max-sm:items-center max-sm:max-w-[300px]"
            >
              <div class="flex flex-col relative shrink-0 box-border border overflow-hidden bg-white bg-opacity-10 pb-5 rounded-lg border-solid border-white">
                <div class="flex flex-col relative shrink-0 box-border bg-slate-900">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F5a4c2bdfff2049c09a9b7dbcc036a263"class="aspect-[3.3] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
                  />
                </div>
                <div class="relative shrink-0 box-border h-auto text-white font-semibold text-center mt-2.5 mb-2.5 px-2.5">
                  <p>Register your Next components</p>
                </div>
                <div class="relative shrink-0 box-border h-auto text-white text-center text-xs mt-0 px-2.5 max-sm:text-center">
                  <p>
                    Register your Nextjs components in Builder. You can drag and drop any custom component from the Visual
                    Editor onto a page.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.builder.io/c/blueprints"
              target="_blank"
              class="flex flex-col relative shrink-0 box-border justify-between max-w-[48%] border cursor-pointer pointer-events-auto overflow-hidden bg-white bg-opacity-10 pb-5 rounded-lg border-solid border-white max-md:max-w-full max-md:w-full max-sm:items-center max-sm:max-w-[300px]"
            >
              <div class="flex flex-col relative shrink-0 box-border">
                <div class="flex flex-col relative shrink-0 box-border bg-zinc-900 items-center justify-center pt-2.5 pb-4 px-2.5">
                  <img
                    loading="lazy"
                    srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F74cceb58eae948e4b1edcc930a7c23b9?format=webp&width=2000"class="aspect-[2.92] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden max-w-[170px]"
                  />
                </div>
                <div class="relative shrink-0 box-border h-auto text-white font-semibold text-center mt-2.5 mb-2.5 px-2.5">
                  <p>Integrate common use cases</p>
                </div>
                <div class="relative shrink-0 box-border h-auto text-white text-center text-xs mt-0 px-2.5 max-sm:text-center">
                  <p>
                    Reference how you can use Builder for your blog, eCommerce product listings, or for your entire site.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.builder.io/c/docs/ui-ve-tour"
              target="_blank"
              class="flex flex-col relative shrink-0 box-border justify-between max-w-[48%] cursor-pointer pointer-events-auto overflow-hidden max-md:max-w-full max-md:w-full max-sm:items-center max-sm:max-w-[300px]"
            >
              <div class="flex flex-col relative shrink-0 box-border border pointer-events-auto h-full overflow-hidden bg-white bg-opacity-10 pb-5 rounded-lg border-solid border-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2F8195e5670c27459fb5231c7e24d6de58"class="aspect-[2.22] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
                />
                <div class="relative shrink-0 box-border h-auto text-white font-semibold text-center mt-2.5 mb-2.5 px-2.5">
                  <p>Tour the Visual Editor</p>
                </div>
                <div class="relative shrink-0 box-border h-auto text-white text-center text-xs mt-0 px-2.5 max-sm:text-center">
                  <p>
                    Check out the UI of the Visual Editor and compose complex layouts without writing any code.
                  </p>
                </div>
              </div>
            </a>
            <a
              href="https://www.builder.io/c/docs/block-types"
              target="_blank"
              class="flex flex-col relative shrink-0 box-border justify-between max-w-[48%] cursor-pointer pointer-events-auto overflow-hidden max-md:max-w-full max-md:w-full max-sm:items-center max-sm:max-w-[300px]"
            >
              <div class="flex flex-col relative shrink-0 box-border border pointer-events-auto overflow-hidden bg-white bg-opacity-10 pb-5 rounded-lg border-solid border-white">
                <img
                  loading="lazy"
                  srcSet="https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=100 100w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=200 200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=400 400w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=800 800w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=1200 1200w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=1600 1600w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9?width=2000 2000w, https://cdn.builder.io/api/v1/image/assets%2FYJIGb4i01jvw0SRdL5Bt%2Fcda9ac8a8433413b9d9c3606812cabc9"class="aspect-[2.22] object-cover object-center w-full shrink-0 box-border min-h-[20px] min-w-[20px] overflow-hidden"
                />
                <div class="relative shrink-0 box-border h-auto text-white font-semibold text-center mt-2.5 mb-2.5 px-2.5">
                  <p>Learn the building blocks</p>
                </div>
                <div class="relative shrink-0 box-border h-auto text-white text-center text-xs mt-0 px-2.5 max-sm:text-center">
                  <p>
                    Creating content in Builder uses a flexible toolset of no-code blocks that you can use to create almost
                    anything.
                  </p>
                </div>
              </div>
            </a>
          </div>
        </section>
      </header>
      <footer
        class="builder-footer flex flex-col relative shrink-0 box-border min-h-[100px] text-white bg-slate-900 px-5 py-8 max-sm:pt-5"
        maxWidth={1200}
        lazyLoad={false}
      >
        <section
          class="builder-footer flex flex-col relative shrink-0 box-border min-h-[100px] text-white bg-slate-900 w-full self-stretch grow max-w-[1200px] items-stretch mx-auto px-5 py-8 max-sm:pt-5"
        >
          <div class="flex flex-col relative shrink-0 box-border w-full max-w-[500px] mt-5 mx-auto">
            <div class="gap-5 flex max-md:flex-col max-md:items-stretch max-md:gap-0">
              <div class="flex flex-col items-stretch w-6/12 max-md:w-full max-md:ml-0">
                <div class="flex flex-col relative shrink-0 box-border">
                  <div class="flex flex-col relative shrink-0 box-border">
                    <div class="relative shrink-0 box-border h-auto text-white font-semibold text-left text-base">
                      <p>Keep Learning Qwik</p>
                    </div>
                    <div class="flex flex-col relative shrink-0 box-border gap-2.5 leading-relaxed pt-2.5">
                      <a
                        href="https://qwik.builder.io/docs/"
                        target="_blank"
                        class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                      >
                        <p>Qwik Docs</p>
                      </a>
                      <a
                        href="https://qwik.builder.io/docs/qwikcity/"
                        target="_blank"
                        class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                      >
                        <p>Routing</p>
                      </a>
                      <a
                        href="https://qwik.builder.io/docs/integrations/"
                        target="_blank"
                        class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                      >
                        <p>Integrations</p>
                      </a>
                      <a
                        href="https://qwik.builder.io/docs/deployments/"
                        target="_blank"
                        class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                      >
                        <p>Deploy</p>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div class="flex flex-col items-stretch w-6/12 ml-5 max-md:w-full max-md:ml-0">
                <div class="flex flex-col relative shrink-0 box-border max-md:mt-7">
                  <div class="relative shrink-0 box-border h-auto text-white font-semibold text-left text-base">
                    <p>Learn the Builder Visual Editor</p>
                  </div>
                  <div class="flex flex-col relative shrink-0 box-border gap-2.5 pt-2.5">
                    <a
                      href="https://www.builder.io/c/docs/how-builder-works"
                      target="_blank"
                      class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                    >
                      <p>Builder Docs</p>
                    </a>
                    <a
                      href="https://www.builder.io/c/docs/custom-components-intro"
                      target="_blank"
                      class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                    >
                      <p>Custom Components</p>
                    </a>
                    <a
                      href="https://www.builder.io/c/blueprints"
                      target="_blank"
                      class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                    >
                      <p>Blueprints</p>
                    </a>
                    <a
                      href="https://forum.builder.io/"
                      target="_blank"
                      class="relative shrink-0 box-border h-auto text-white text-left text-sm cursor-pointer pointer-events-auto"
                    >
                      <p>Forum</p>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </footer>
      <img
        src="https://cdn.builder.io/api/v1/pixel?apiKey=8d9ee72a33344b4b867918b442ebd0af"
        aria-hidden="true"
        alt=""
        role="presentation"
        width="0"
        height="0"
        class="h-0 w-0 inline-block opacity-0 overflow-hidden pointer-events-none"
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
