import { useRouter } from "next/router";
import PRODUCT_DUMMY from "@/utils/ProductDummy";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { CategoryList } from "@/modules/components/CategoryList";
const CategoryPage = ({ item, category }) => {
  const router = useRouter();
  return <CategoryList data={item} category={category} />
};

export async function getServerSideProps(context) {
  const category = context.query.category;
  const item = PRODUCT_DUMMY.filter((data) => data.category === category);
  if (!item) {
    return { notFound: true,
      props: {
        ...(await serverSideTranslations(context.locale, [
          "common",
          "navbar",
          "footer"
        ])),
      },
    };
  }
  return { props: { 
    item,
    category,
    ...(await serverSideTranslations(context.locale, [
      "common",
      "navbar",
      "footer"
    ])),
  } };
}

export default CategoryPage;
