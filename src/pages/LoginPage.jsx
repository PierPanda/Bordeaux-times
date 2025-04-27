import LoginForm from "../components/LoginForm";
import { useAuth } from "../contexts/AuthProvider";

export default function LoginPage() {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated) {
    return <div>Vous êtes déjà connecté.</div>;
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gray-100">
      <div className="w-96 rounded bg-white p-6 shadow-md">
        <h2 className="mb-4 text-2xl font-bold">Connexion</h2>
        <LoginForm />
      </div>
    </div>
  );
}
