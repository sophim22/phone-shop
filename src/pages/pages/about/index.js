import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { About } from "@/modules/components/About";
const AboutPage = ()=> {
  const router = useRouter();
  return (
    <About />
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


export default AboutPage;