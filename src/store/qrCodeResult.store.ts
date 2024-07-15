import { create } from 'zustand'

type QrCodeResultStoreType = {
  result: Blob | null;
  updateResult: (newResult: Blob) => void;
  removeResult: () => void;
}

export const useQrCodeResultStore = create<QrCodeResultStoreType>()((set) => ({
  result: null,
  updateResult: (newResult) => set({ result: newResult }),
  removeResult: () => set({ result: null }),
}));


type QrCodeFormatStoreType = {
  format: string;
  updateFormat: (newFormat: string) => void;
  removeFormat: () => void;
}

export const useQrCodeFormatStore = create<QrCodeFormatStoreType>()((set) => ({
  format: "",
  updateFormat: (newFormat) => set({ format: newFormat }),
  removeFormat: () => set({ format: "png" }),
}));