import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./components/pages/Layout";
import {
  About,
  Contact,
  Home,
  Page404,
  Solutions,
} from "./components/utils/helper";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { featureLoader, teamLoader } from "./components/utils/loaders";
import "./styles/main.css";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} loader={teamLoader} />
      <Route path="solutions" element={<Solutions />} loader={featureLoader} />
      <Route path="contact" element={<Contact />} />
      <Route path="*" element={<Page404 />} />
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
