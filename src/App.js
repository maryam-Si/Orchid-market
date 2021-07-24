import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/Login/LoginAdmin";
import AdminPanel from "./pages/admin/admin-panel-page/AdminPanel";
import PanelProducts from "./pages/admin/panel-products/PanelProducts";
import PanelOrders from "./pages/admin/panel-orders/PanelOrders";
import PanelQuantity from "./pages/admin/panel-quantity/PanelQuantity";
import { ProtectedRoute } from "./ProtectedRoute";
import NotFound from "./pages/NotFound";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Container from "./components/store/container/Container";
import HomePage from "./pages/store/HomePage";
import BasketPage from "./pages/store/BasketPage";

function App() {
  return (
    <div className="App">
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
      <ToastContainer />
    </div>
  );
}

export default App;
