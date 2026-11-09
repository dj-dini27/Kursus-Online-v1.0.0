import { SITE } from "@/app/data/site";
import ForgotPasswordForm from "./_form";

export const metadata = {
  title: `Lupa Kata Sandi - ${SITE.name}`,
  description: "Atur ulang kata sandi akun Kursus Online Anda",
};

export default function ForgotPasswordPage() {
  return <ForgotPasswordForm />;
}
