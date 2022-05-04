import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "routes";
import NotFound from "pages/NotFound";
import Loading from "components/shared/Loading";


const App = () => {

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