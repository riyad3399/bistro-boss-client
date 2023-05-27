import { Helmet } from "react-helmet-async";
import orderCoverImg from "../../../assets/shop/banner2.jpg";
import Cover from "../../Shared/Cover/Cover";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "../OrderTab/OrderTab";
import { useParams } from "react-router-dom";

const Order = () => {
  const categories = ['salad', 'pizza', 'soup', 'dessert', 'drinks'];
  const { category } = useParams();
  const initialIndex = categories.indexOf(category)
  const [tabIndex, setTabIndex] = useState(initialIndex);
  const [menu] = useMenu();
  console.log(category);
  const desserts = menu.filter((item) => item.category === "dessert");
  const soup = menu.filter((item) => item.category === "soup");
  const salad = menu.filter((item) => item.category === "salad");
  const pizza = menu.filter((item) => item.category === "pizza");
  const offered = menu.filter((item) => item.category === "offered");
  return (
    <div>
      <Helmet>
        <title>Order - Bistro Boss</title>
      </Helmet>
      <Cover img={orderCoverImg} title={"Order Food"}></Cover>
      <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
        <div className="text-center mt-16">
          <TabList>
            <Tab>
              <p className="text-xl font-semibold">Salad</p>
            </Tab>
            <Tab>
              <p className="text-xl font-semibold">Pizza</p>
            </Tab>
            <Tab>
              <p className="text-xl font-semibold">Soup</p>
            </Tab>
            <Tab>
              <p className="text-xl font-semibold">Dessert</p>
            </Tab>
            <Tab>
              <p className="text-xl font-semibold">Drinks</p>
            </Tab>
          </TabList>
        </div>

        <TabPanel>
          <h3 className="text-4xl text-center font-semibold my-10 border-y-4 w-4/12 mx-auto py-4">
            Salads
          </h3>
          <OrderTab items={salad}></OrderTab>
        </TabPanel>
        <TabPanel>
          <h3 className="text-4xl text-center font-semibold my-10 border-y-4 w-4/12 mx-auto py-4">
            Pizzas
          </h3>
          <OrderTab items={pizza}></OrderTab>
        </TabPanel>
        <TabPanel>
          <h3 className="text-4xl text-center font-semibold my-10 border-y-4 w-4/12 mx-auto py-4">
            Soups
          </h3>
          <OrderTab items={soup}></OrderTab>
        </TabPanel>
        <TabPanel>
          <h3 className="text-4xl text-center font-semibold my-10 border-y-4 w-4/12 mx-auto py-4">
            Desserts
          </h3>
          <OrderTab items={desserts}></OrderTab>
        </TabPanel>
        <TabPanel>
          <h3 className="text-4xl text-center font-semibold my-10 border-y-4 w-4/12 mx-auto py-4">
            Offered
          </h3>
          <OrderTab items={offered}></OrderTab>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Order;
