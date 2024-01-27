
import { persist, createJSONStorage } from 'zustand/middleware';
import { CMCTokenInfo } from './cmcTokenInfo'
import { create } from 'zustand';


type TokensStore = {
    tokens: CMCTokenInfo[];
    favTokenIds: number[];
    addToken: (token: CMCTokenInfo) => void;
    removeToken: (tokenId: number) => void;
    addFavToken: (tokenId: number) => void;
    removeFavToken: (tokenId: number) => void;

};

const storage = createJSONStorage(() => sessionStorage);

export const useTokensStore = create(
    persist<TokensStore>(
        (set, get) => ({
            tokens: [],
            favTokenIds: [1,2],
            addToken: (token) => set((state) => ({ tokens: [...state.tokens, token] })),
            removeToken: (tokenId: number) => set((state) => ({ tokens: state.tokens.filter((token) => token.id !== tokenId) })),
            addFavToken: (tokenId: number) => set((state) => ({
                favTokenIds: state.favTokenIds.includes(tokenId) ? state.favTokenIds : [...state.favTokenIds, tokenId],
            })),
            removeFavToken: (tokenId) => set((state) => ({
                favTokenIds: state.favTokenIds.filter((id) => id !== tokenId),
            })),
        }),
        {
            name: 'token-storage', // name of the item in the storage (must be unique)
            storage: createJSONStorage(() => sessionStorage),
        },
    ),
)