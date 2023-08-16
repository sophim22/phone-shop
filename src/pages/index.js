import { HomePage } from "@/modules/components/Home";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

export default function Home() {
  return (
    <div>
      <HomePage/>
    </div>
  );
}

export async function getServerSideProps(context) {
  return {
    props: {
      ...(await serverSideTranslations(context.locale, [
        "common",
        "navbar",
        "footer"
      ])),
    },
  };
}
