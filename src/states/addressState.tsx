import { create } from "zustand";

interface address {
  id: number;
  addressType: string;
  country: string;
  fullname: string;
  street: string;
  city: string;
  state: string;
  zipcode: string;
  phone: string;
}

interface AddressDetails {
  id: number;
  address: address[];
  // addAddress: (address: string[]) => void;
  removeAddress: (address: address) => void;
}
export const useAddressStore = create<AddressDetails>((set) => ({
  address: [
    {
      id: 1,
      addressType: "Home",
      country: "India",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chşlakdşlkaennai",
      state: "Tamilnadu aşlsdlşakd",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 2,
      addressType: "Work",
      country: "Hungary",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chennai",
      state: "Tamilnadu",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 3,
      addressType: "Home",
      country: "India",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chşlakdşlkaennai",
      state: "Tamilnadu aşlsdlşakd",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 4,
      addressType: "Work",
      country: "Hungary",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chennai",
      state: "Tamilnadu",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 1,
      addressType: "Home",
      country: "India",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chşlakdşlkaennai",
      state: "Tamilnadu aşlsdlşakd",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 2,
      addressType: "Work",
      country: "Hungary",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chennai",
      state: "Tamilnadu",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 3,
      addressType: "Home",
      country: "India",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chşlakdşlkaennai",
      state: "Tamilnadu aşlsdlşakd",
      zipcode: "600001",
      phone: "1234567890",
    },
    {
      id: 4,
      addressType: "Work",
      country: "Hungary",
      fullname: "Rajesh",
      street: "Street 1",
      city: "Chennai",
      state: "Tamilnadu",
      zipcode: "600001",
      phone: "1234567890",
    },
  ],
  id: 0,
  changeId: (id: number) => set((state) => ({ id: id })),
  removeAddress: (address) =>
    set((state) => ({
      address: state.address.filter((item) => item.id !== address.id),
    })),
}));
