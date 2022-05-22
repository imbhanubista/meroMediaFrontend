import React, { lazy, Suspense } from "react";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Spinner, Text } from "@chakra-ui/react";
import DetailMedia from "../components/users/DetailMedia";
const ResetPass = React.lazy(() => import("../components/authPages/ResetPass"));
const ForgetPass = React.lazy(() =>
  import("../components/authPages/ForgetPass")
);
const Error = lazy(() => import("./Error"));
const Login = React.lazy(() => import("../components/authPages/Login"));
const Signup = React.lazy(() => import("../components/authPages/Signup"));
const Home = React.lazy(() => import("../components/dashboard/Home"));
const ThumbnailCreate = React.lazy(() =>
  import("../components/dashboard/ThumbnailCreate")
);
const MediaCreate = React.lazy(() =>
  import("../components/dashboard/MediaCreate")
);
const ListThumbnail = React.lazy(() =>
  import("../components/dashboard/ListThumbnail")
);
const ListMedia = React.lazy(() => import("../components/dashboard/ListMedia"));
const EditThumb = React.lazy(() =>
  import("../components/dashboard/UpdateThumb")
);
const UpdateMedia = React.lazy(() =>
  import("../components/dashboard/UpdateMedia")
);
const ListUsers = React.lazy(() => import("../components/dashboard/ListUsers"));
const Logout = React.lazy(() => import("../components/dashboard/Logout"));
const SettingPage = React.lazy(() =>
  import("../components/setting/SettingPage")
);
const ChangePassword = lazy(() =>
  import("../components/setting/ChangePassword")
);
const EditProfile = lazy(() => import("../components/setting/Editprofile"));
const UserMediaList = lazy(() => import("../components/users/UserMediaList"));
const PurchasedMedia = lazy(() =>
  import("../components/dashboard/PurchaseMedia")
);
const TotalPurchase = lazy(() =>
  import("../components/dashboard/TotalPurchase")
);
const PurchaseMediaDetailsComponent = lazy(() =>
  import("../components/users/PurchaseMediaDetailsComponent")
);
const SearchData = lazy(() => import("../components/users/SearchData"));
const Routing = () => {
  const selector = useSelector((state) => state.reducer);
  const isLoggedIn = Object.keys(selector).length > 0;
  return (
    <Suspense
      fallback={
        <div>
          <Spinner size={"lg"} />
          <Text color={"blue"}> Wait for a second !!!</Text>
        </div>
      }
    >
      <BrowserRouter>
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forget" element={<ForgetPass />} />
          <Route path="/reset" element={<ResetPass />} />
          <Route path="/*" element={<Error />} />

          <Route
            path="/home"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <Home />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/create_thumb"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                <ThumbnailCreate />
              </PrivateRoute>
            }
          />
          <Route
            path="/create_media"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <MediaCreate />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/list_thumb"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <ListThumbnail />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/list_media"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <ListMedia />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_thumb/:id"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <EditThumb />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/update_media"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <UpdateMedia />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/users"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <ListUsers />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/logout"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <Logout />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/settings"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <SettingPage />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/change_password"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <ChangePassword />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/edit_profile"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <EditProfile />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/" element={<UserMediaList />} />

          <Route
            path="/purchase"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <PurchasedMedia />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/total_purchase"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <TotalPurchase />{" "}
              </PrivateRoute>
            }
          />
          <Route
            path="/view/:id"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <PurchaseMediaDetailsComponent />{" "}
              </PrivateRoute>
            }
          />
          <Route path="/detail/:id" element={<DetailMedia />} />
          <Route
            path="/search"
            element={
              <PrivateRoute isLoggedIn={isLoggedIn}>
                {" "}
                <SearchData />{" "}
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </Suspense>
  );
};

export default Routing;
