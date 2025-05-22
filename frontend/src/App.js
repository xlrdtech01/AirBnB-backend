import { useDispatch } from "react-redux";
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";
import SignupFormPage from "./components/SignupFormPage";
import * as sessionActions from "./store/session";
import Navigation from "./components/Navigation";
import ListingsView from "./components/ListingsView";
import FilterBar from './components/ListingsView/FilterBar';
import CreateListing from './components/CreateListing';
import SpotPages from './components/SpotPage';
import Footer from "./components/Footer";
import AccountPage from "./pages/accountpage";

function App() {
  const dispatch = useDispatch();
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    dispatch(sessionActions.restoreUser()).then(() => setIsLoaded(true));
  }, [dispatch]);

  return (
    <>
      <Navigation isLoaded={isLoaded} />
      {isLoaded && (
        <Routes>
          <Route path="/" element={
            <>
              <FilterBar />
              <ListingsView />
              <Footer />
            </>
          } />
          <Route path="/spots/:spotId" element={<SpotPages />} />
          <Route path="/signup" element={<SignupFormPage />} />
          <Route path="/spots/new" element={<CreateListing />} />
          <Route path="/account/*" element={<AccountPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
