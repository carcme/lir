import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export const useLirMenuStore = create()(
  persist(
    (set, get) => ({
      menus: [],

      setMenus: () => set((state) => ({ menus: state.menus })),

      getSlug: (slug) =>
        set((state) => ({
          menus: state.menus.map((menu) =>
            menu.slug === slug ? { menu } : []
          ),
        })),

      getMenu: () => ({ menus: menus }),
    }),
    {
      name: "menu-storage", // name of the item in the storage (must be unique)
      storage: createJSONStorage(() => sessionStorage), // (optional) by default, 'localStorage' is used
    }
  )
);

// export const useAlbumStore = create((set) => ({
//   albums: [],

//   setAlbums: () => set((state) => ({ albums: state.albums })),

//   getAlbum: () => ({ albums: albums }),
// }));
