import React, { Suspense, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import NotFound from "./pages/NotFound";
import Loading from "./components/shared/Loading";
import productApi from "./api/productApi";

const App = () => {
   const [ productList, setProductList ] = useState([]);

   useEffect(() => {
      const fetchProductList = async () => {
         try {
            const params = { _page: 1, _limit: 10 };
            const response = await productApi.getAll(params);
            console.log(response)

            setProductList(response.data)
         } catch(error) {
            console.log(error)
         }
      } 

      fetchProductList();
   }, []);


   return (
      <>
         <Suspense fallback={<Loading />}>
            <Routes>
               {routes.map((e) => (
                  <Route key={e.path} path={e.path} element={<e.component />} />
                  ))
               }
               <Route path="*" element={<NotFound />} />
            </Routes>
         </Suspense>
      </>
   )
}

export default App;