import { menulist } from "../sitedata";
import Head from "next/head";
import styles from "../styles/Home.module.scss";
import NavBar from "../components/organisms/NavBar";
import Carousel from "../components/organisms/Carousel";

export default function Home({ navmenu }) {
  // console.log(navmenu);
  return (
    <div className={styles.container}>
      <Head>
        <title>discovery+</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar menuitems={navmenu} />
      <Carousel />
    </div>
  );
}

export const getStaticProps = async () => {
  return {
    props: {
      navmenu: menulist.nav,
    },
  };
};
