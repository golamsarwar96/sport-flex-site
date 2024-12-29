import Banner from "../components/Banner";
import { Outlet, useLoaderData } from "react-router-dom";
import Categories from "../components/Categories";
import Blog from "../components/Blog";
import Company from "../components/Company";
const Home = () => {
  const categories = useLoaderData();
  return (
    <div>
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Categories categories={categories}></Categories>
      </section>

      <section>
        <Outlet></Outlet>
      </section>

      <section>
        <Blog></Blog>
      </section>

      <section>
        <Company></Company>
      </section>
    </div>
  );
};

export default Home;
