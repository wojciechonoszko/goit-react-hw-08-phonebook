import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const connectionsApi = createApi({
    recucerPath: 'contacts',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://conncetions-api.herokuapp.com',
        prepareHeaders: (headers, { getState }) => {
            const token = getState().auth.token;
            if (token) {
                headers.set('authorization', `Bearer ${token}`);

            }
            return headers;
        },
    }),
    tagTypes: ['Contact'],
    endpoints: builder => ({
        getContacts: builder.query({
        query: () => '/contacts',
        keepUnusedDataFor: 1,
        providesTags: ['Contact'],
    }),
    addContact: builder.mutation({
        query: data=> ({
            url: '/contacts',
            method: 'POST',
            body: data,
        }),
        invalidatesTags: ['Contact'],
    }),
    deleteContact: builder.mutation({
        query: id => ({
            url: `/contacts/${id}`,
            method: 'DELETE',
        }),
        invalidatesTags: ['Contact'],
    }),
}),
})

export const{
    useGetContactsQuery,
    useDeleteContactsMutation,
    useAddContactMutation,
} = connectionsApi