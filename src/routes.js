import * as pages from "pageComponents";
const routes = [
  {
    name: "Search",
    component: pages.Search,
    path: "/",
  },
  {
    name: "Details",
    component: pages.Details,
    path: "/character/:id",
  },
];

export default routes;
