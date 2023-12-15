"use client";
import LoginForm from "../ui/login-form";
import { useFormState, useFormStatus } from "react-dom";
import { authenticate } from "@/app/lib/actions";

export default function LoginPage() {
  const [errorMessage, dispatch] = useFormState(authenticate, undefined);

  return (
    <form action={dispatch}>
      <main className="flex items-center justify-center md:h-screen">
        <div>
          <LoginForm />
        </div>
      </main>
    </form>
  );
}
 