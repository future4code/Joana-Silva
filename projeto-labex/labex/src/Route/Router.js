import AdminHomePage from "../Pages/AdminHomePage/AdminHomePage";
import ApplicationFormPages from "../Pages/ApplicationFormPage/ApplicationFormPage";
import CreatTripPage from "../Pages/CreateTripPage/CreateTripPage";
import HomePage from "../Pages/HomePage/HomePage";
import ListTripsPage from "../Pages/ListTripsPage/ListTripsPage";
import LoginPage from "../Pages/LoginPage/LoginPage";
import TripDetaislPage from "../Pages/TripDetailsPage/TripDetailsPage";

import { BrowserRouter, Switch, Route } from "react-router-dom";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={"/"}>
          <HomePage />
        </Route>

        <Route exact path={"/admin/trips/list"}>
          <AdminHomePage />
        </Route>

        <Route exact path={"/trips/application"}>
          <ApplicationFormPages />
        </Route>

        <Route exact path={"/admin/trips/create"}>
          <CreatTripPage />
        </Route>

        <Route exact path={"/trips/list"}>
          <ListTripsPage />
        </Route>

        <Route exact path={"/login"}>
          <LoginPage />
        </Route>

        <Route exact path={"/admin/trips/:id"}>
          <TripDetaislPage />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
