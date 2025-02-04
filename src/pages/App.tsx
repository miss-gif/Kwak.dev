import RestrictedRoute from "@/routes/RestrictedRoute";
import AppRoutes from ".";

const App = () => {
  return (
    <RestrictedRoute>
      <AppRoutes />
    </RestrictedRoute>
  );
};

export default App;
