import { Route, Routes } from "react-router-dom";
import { PageRouteList } from "../components/routesList";

export const PageRout = () => <Routes>{PageRouteList.map(item => <Route key={item.id} path={item.path} element={item.element} />)} </Routes>