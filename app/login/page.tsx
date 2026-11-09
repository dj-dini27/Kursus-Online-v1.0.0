import { SITE } from "@/app/data/site";
import LoginForm from "./_form";

export const metadata = {
  title: `Masuk - ${SITE.name}`,
  description: "Masuk ke akun Kursus Online Anda",
};

export default function LoginPage() {
  return <LoginForm />;
}
