import { SITE } from "@/app/data/site";
import RegisterForm from "./_form";

export const metadata = {
  title: `Daftar - ${SITE.name}`,
  description: "Buat akun baru di Kursus Online",
};

export default function RegisterPage() {
  return <RegisterForm />;
}
