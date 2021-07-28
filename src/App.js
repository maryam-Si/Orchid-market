import React, { Suspense, lazy } from "react";
import Loading from "./components/loading/Loading";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Container from "./components/store/container/Container";
import { BrowserRouter as Router } from "react-router-dom";
const HomePage = lazy(() => import("./pages/store/home/HomePage"));
const BasketPage = lazy(() => import("./pages/store/BasketPage"));
const CategoryPage = lazy(() => import("./pages/store/category/CategoryPage"));
const ProductDetail = lazy(() =>
  import("./pages/store/productDetail/ProductDetail")
);
const LoginAdmin = lazy(() => import("./pages/admin/Login/LoginAdmin"));
const AdminPanel = lazy(() =>
  import("./pages/admin/admin-panel-page/AdminPanel")
);
const PanelProducts = lazy(() =>
  import("./pages/admin/panel-products/PanelProducts")
);
const PanelOrders = lazy(() =>
  import("./pages/admin/panel-orders/PanelOrders")
);
const PanelQuantity = lazy(() =>
  import("./pages/admin/panel-quantity/PanelQuantity")
);
function App() {
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loading />}>
          <Router>
            <Switch>
              <Route path="/" exact>
                <Container>
                  <HomePage />
                </Container>
              </Route>

              <Route path="/cart" exact>
                <Container>
                  <BasketPage />
                </Container>
              </Route>

              <Route path="/category/:categoryName" exact>
                <Container>
                  <CategoryPage />
                </Container>
              </Route>
              <Route path="/category/:categoryName/:product/:id" exact>
                <Container>
                  <ProductDetail />
                </Container>
              </Route>

              <Route path="/admin/login" exact component={LoginAdmin} />

              <ProtectedRoute path="/admin/panel-products" exact>
                <AdminPanel>
                  <PanelProducts />
                </AdminPanel>
              </ProtectedRoute>

              <ProtectedRoute path="/admin/panel-quantity" exact>
                <AdminPanel>
                  <PanelQuantity />
                </AdminPanel>
              </ProtectedRoute>

              <ProtectedRoute path="/admin/panel-orders" exact>
                <AdminPanel>
                  <PanelOrders />
                </AdminPanel>
              </ProtectedRoute>

              <Route path="*" component={NotFound} />
            </Switch>
          </Router>
        </Suspense>

        <ToastContainer />
      </div>
    </>
  );
}

export default App;
