import { Login } from "@/modules/components/LoginForm";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
const LoginPage = ()=> {
  const router = useRouter();

  return (
    <Login />
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


export default LoginPage;