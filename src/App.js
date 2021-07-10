import "./App.css";
import { Switch, Route } from "react-router-dom";
import LoginAdmin from "./pages/admin/Login/LoginAdmin";
import AdminPanel from "./pages/admin/admin-panel-page/AdminPanel";

function App() {
  return (
    <div className="App">
      <Switch>
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
    </div>
  );
}

export default App;
