import { Outlet, Link, useLoaderData, Form } from 'react-router-dom';
import Navbar from '../components/navbar';

export async function loader() {
  return {};
}

export async function action() {
  return {};
}

const Root = () => {
  const { contacts } = useLoaderData();
  return (
    <>

      <Navbar />
      <div id='outlet'>
        <Outlet />
      </div>
    </>
  );
};

export default Root;
