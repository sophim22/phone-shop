import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { Contact } from "@/modules/components/Contact";
const ContactPage = ()=> {
  const router = useRouter();
  return (
    <Contact />
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

export default ContactPage;