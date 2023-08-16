import { RegisterFrom } from "@/modules/components/RegisterForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
const RegisterPage = ()=> {
  const router = useRouter();
  return (
    <RegisterFrom />
  )
}

export async function getServerSideProps(context) {
  return { props: { 
    ...(await serverSideTranslations(context.locale, [
      "common",
      "navbar",
      "footer"
    ])),
  } };
}

export default RegisterPage;