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
  editAddress: (address: address) => void;
  addAddress: (address: address) => void;
  setEditAddress: (address: address) => void;
  addressToEdit: address;
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
  addressToEdit: {
    id: 0,
    addressType: "",
    country: "",
    street: "",
    city: "",
    zipcode: "",
    phone: "",
  },

  setAddressToDelete: (address: address) => set({ addressToDelete: address }),
  setEditAddress: (address: address) => set({ addressToEdit: address }),
  removeAddress: (address) =>
    set((state) => ({
      address: state.address.filter((item) => item.id !== address.id),
    })),
  editAddress: (address) =>
    set((state) => ({
      address: state.address.map((item) =>
        item.id === address.id ? address : item
      ),
    })),
  addAddress: (address) =>
    set((state) => ({
      address: [...state.address, address],
    })),
}));
