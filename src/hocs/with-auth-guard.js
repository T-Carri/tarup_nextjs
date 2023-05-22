import { AuthGuard } from "@components/guards/auth-guards";
export const withAuthGuard = (Component) => (props) => (
    <AuthGuard>
      <Component {...props} />
    </AuthGuard>
  );