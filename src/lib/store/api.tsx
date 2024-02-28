import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_URL } from '../constants/envs';
import { IBanner } from '../types/banner';
import { ICollection } from '../types/collection';
import { IShortCut } from '../types/shortcuts';

export const baseAPI = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: [],
  endpoints: (builder) => ({
    banners: builder.query<IBanner[], void>({
      query: () => ({
        url: '/main-banner/all',
        method: 'GET',
      }),
    }),
    shortcuts: builder.query<IShortCut[], void>({
      query: () => ({
        url: '/main-shortcut/all',
        method: 'GET',
      }),
    }),
    collections: builder.query<{ items: ICollection[] }, void>({
      query: () => ({
        url: '/collections?prearrangedDiscount',
        method: 'GET',
      }),
    }),
  }),
});

export const { useBannersQuery, useShortcutsQuery, useCollectionsQuery } = baseAPI;
