import TokenInfo from '@/app/components/token-info'
import { create } from 'zustand'
import { CMCTokenInfo } from './cmcTokenInfo'


type TokenStore = {
  tokens: CMCTokenInfo[];
  addToken: (token: CMCTokenInfo) => void;
  removeToken: (tokenId: number) => void;
};


export const useAllTokenStore = create<TokenStore>((set) => ({
    tokens: [], // Initial state of tokens is an empty array
    addToken: (token) =>
      set((state) => ({
        tokens: [...state.tokens, token],
      })),
    removeToken: (tokenId) =>
      set((state) => ({
        tokens: state.tokens.filter((token) => token.id !== tokenId),
      })),
  }));

  export const useFavTokenStore = create<TokenStore>((set) => ({
    tokens: [], // Initial state of tokens is an empty array
    addToken: (token) =>
      set((state) => ({
        tokens: [...state.tokens, token],
      })),
    removeToken: (tokenId) =>
      set((state) => ({
        tokens: state.tokens.filter((token) => token.id !== tokenId),
      })),
  }));