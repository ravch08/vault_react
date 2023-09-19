import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode, useLayoutEffect } from "react";

import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import {
  About,
  Contact,
  Footer,
  Header,
  Home,
  Page404,
  Solutions,
} from "./components/utils/helper";

import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import "./styles/main.css";

interface WrapperProps {
  children: ReactNode; // Explicitly type the children prop
}

const Wrapper = ({ children }: WrapperProps) => {
  const location = useLocation();
  useLayoutEffect(
    () => window.scrollTo({ top: 0, behavior: "smooth" }),
    [location.pathname]
  );

  return <>{children}</>;
};

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 60 * 1000,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <BrowserRouter>
        <Wrapper>
          <Header />
          <Routes>
            <Route index path="/" element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="solutions" element={<Solutions />} />
            <Route path="contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Footer />
        </Wrapper>
      </BrowserRouter>
    </QueryClientProvider>
  );
}

export default App;
