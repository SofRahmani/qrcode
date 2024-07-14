import { create } from 'zustand'

type QrCodeResultStoreType = {
  result: Blob | null;
  updateResult: (newResult: Blob) => void;
}

export const useQrCodeResultStore = create<QrCodeResultStoreType>()((set) => ({
  result: null,
  updateResult: (newResult: Blob) => set({ result: newResult }),
  removeResult: () => set({ result: null }),
}));
