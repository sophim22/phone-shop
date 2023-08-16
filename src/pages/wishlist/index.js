import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useRouter } from "next/router";
import { WishList } from "@/modules/components/WishList";
const WishListPage = ()=> {
  const router = useRouter();
  return (
    <WishList />
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


export default WishListPage;