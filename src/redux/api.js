import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const phonebookAPI = createApi({
    reducerPath: 'phonebookAPI',
    tagTypes: ['Contacts'],
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://62dd680c79b9f8c30aa8f202.mockapi.io',
    }),
    endpoints: build => ({
        getContacts: buil.query({
            query: () => 'contacts',
            providesTags: ['Contact'],
        }),
        addContact: build.mutation({
            query: contact=> ({
                url: 'contacts',
                method: 'POST',
                body: contact,
            }),
            invalidatesTags: ['Contact'],
        }),
        removeContact: build.mutation({
            query: id => ({
                url: `contacts/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ['Contact'],
        }),
    }),
});

export const {
    useGetContactsQuery,
    useAddContactMutation,
    useRemoveContactMutation,
} = phonebookAPI;