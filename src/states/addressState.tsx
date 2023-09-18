import { create } from "zustand";

interface address {
  id: number;
  addressType: string;
  country: string;
  street: string;
  city: string;
  zipcode: string;
  phone: string;
}

interface AddressDetails {
  address: address[];
  removeAddress: (address: address) => void;
  addressToDelete: address;
  setAddressToDelete: (address: address) => void;
  addAddress: (address: address) => void;
}
export const useAddressStore = create<AddressDetails>((set) => ({
  address: [
    {
      id: 1,
      addressType: "Home",
      country: "India",
      street: "Street 1",
      city: "Bangalore",
      zipcode: "560100",
      phone: "9876543210",
    },
  ],
  addressToDelete: {
    id: 0,
    addressType: "",
    country: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
  },
  setAddressToDelete: (address: address) => set({ addressToDelete: address }),
  removeAddress: (address) =>
    set((state) => ({
      address: state.address.filter((item) => item.id !== address.id),
    })),
  addAddress: (address) =>
    set((state) => ({
      address: [...state.address, address],
    })),
}));
