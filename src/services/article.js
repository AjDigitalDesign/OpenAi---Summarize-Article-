import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const rapidApiKey = import.meta.env.VITE_RAPID_API_ARTICLE_KEY;

// const axios = require('axios');
//
// const options = {
//     method: 'GET',
//     url: 'https://article-extractor-and-summarizer.p.rapidapi.com/summarize',
//     params: {
//         url: 'https://time.com/6266679/musk-ai-open-letter/',
//         length: '3'
//     },
//     headers: {
//         'X-RapidAPI-Key': '5942d44195msh820c98262edf688p18fd56jsnb5e200674c62',
//         'X-RapidAPI-Host': 'article-extractor-and-summarizer.p.rapidapi.com'
//     }
// };
//
// try {
//     const response = await axios.request(options);
//     console.log(response.data);
// } catch (error) {
//     console.error(error);
// }

export const articleApi = createApi({
    reducerPath: 'articleApi',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://article-extractor-and-summarizer.p.rapidapi.com/',
        prepareHeaders: (headers) => {
            headers.set('X-RapidAPI-Key', rapidApiKey);
            headers.set('X-RapidAPI-Host', 'article-extractor-and-summarizer.p.rapidapi.com');

            return headers;
        },
    }),
    endpoints: (builder) => ({
        getSummary: builder.query({
            // encodeURIComponent() function encodes special characters that may be present in the parameter values
            // If we do not properly encode these characters, they can be misinterpreted by the server and cause errors or unexpected behavior. Thus that RTK bug
            query: (params) => `summarize?url=${encodeURIComponent(params.articleUrl)}&length=3`,
        }),
    }),
})

export const { useLazyGetSummaryQuery } = articleApi