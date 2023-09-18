import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductsPage from "./Pages/HomePage/HomePage";
import ProfilePage from "./Pages/ProfilePage/ProfilePage";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import SharedLayout from "./Pages/SharedLayout/SharedLayout";
import PersonalForm from "./Components/Form/PersonalForm/PersonalForm";
import AddressForm from "./Components/Form/AddressForm/AddressForm";
import PaymentForm from "./Components/Form/PaymentForm/PaymentForm";
import "./App.css";
const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<ProductsPage />} />
          <Route path="profile" element={<ProfilePage />}>
            <Route index element={<PersonalForm />} />
            <Route path="addresses" element={<AddressForm />} />
            <Route path="payment_methods" element={<PaymentForm />} />
          </Route>
          <Route path="*" element={<ErrorPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
