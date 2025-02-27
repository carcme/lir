import { filter } from "motion/react-client";
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

const mySpaceId = import.meta.env.VITE_CONTENTFUL_SPACE_ID;
const myaccessToken = import.meta.env.VITE_CONTENTFUL_ACCESS_TOKEN;

export const useLirMenuStore = create()(
  persist(
    (set, get) => ({
      menus: [],
      menusDE: [],
      menuEN: [],
      lirDocs: [],
      isLoading: false,
      error: null,

      //   fetchMenus: async () => {
      //     set({ isLoading: true, error: null });
      //     try {
      //       const response = await fetch(
      //         `https://graphql.contentful.com/content/v1/spaces/${mySpaceId}/environments/master`,
      //         {
      //           method: "POST",
      //           headers: {
      //             "content-type": "application/json",
      //             authorization: `Bearer ${myaccessToken}`,
      //           },
      //           body: JSON.stringify({
      //             query,
      //           }),
      //         }
      //       );
      //       if (!response.ok) throw new Error("Failed to fetch user");
      //       const data = await response.json();

      //       const sanitise = data ? data.lirMenuItemCollection.items : [];

      //       set({
      //         menus: sanitise,
      //         isLoading: false,
      //       });
      //     } catch (error) {
      //       set({ error: error.message, isLoading: false });
      //     }
      //   },
    }),
    {
      name: "menu-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);
const query = `
    {
      lirMenuItemCollection {
        items {
          title
          desc
          blockText
          image {
            url
            description
            width
            height
          }
          featured
          slug
          tags
          price 
        }
      }
    }
    `;
