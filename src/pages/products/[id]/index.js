import { useRouter } from "next/router";
import { ProductDetail } from "@/modules/components/ProductDetail";
import PRODUCT_DUMMY from "@/utils/ProductDummy";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Product = ({ item, id }) => {
  const router = useRouter();
  return <ProductDetail product={item} />
};

export async function getServerSideProps(context) {
  const id = context.query.id;
  const item = PRODUCT_DUMMY.find((data) => data.id == id);
  if (item) {
    return {
      props: {
        item,
        id,
        ...(await serverSideTranslations(context.locale, [
          "common",
          "navbar",
          "footer"
        ])),
      }
    };
  }
  return {
    notFound: true,
    props: {
      ...(await serverSideTranslations(context.locale, [
        "common",
        "navbar",
        "footer"
      ])),
    },
  };
}

export default Product;
