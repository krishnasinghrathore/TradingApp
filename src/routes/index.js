import React from "react";
import { Redirect } from "react-router-dom";

// Authentication related pages
import Login from "../pages/Authentication/Login";
import Logout from "../pages/Authentication/Logout";
import Register from "../pages/Authentication/Register";
import ForgetPwd from "../pages/Authentication/ForgetPassword";

  // Dashboard
import Dashboard from "../pages/Dashboard/index";

// ECommerce 
import ProductCategoryPage from "../pages/ECommerce/ProductCategory";
import AddProductCategory from "../pages/ECommerce/AddProductCategory";

const authProtectedRoutes = [

	{ path: "/dashboard", component: Dashboard },

	//Ecommerce
	{ path: "/ecommerce-product-category", component: ProductCategoryPage },
	{ path: "/ecommerce-add-product", component: AddProductCategory },


	// this route should be at the end of all other routes
	{ path: "/", exact: true, component: () => <Redirect to="/dashboard" /> }
];

const publicRoutes = [
	{ path: "/logout", component: Logout },
	{ path: "/login", component: Login },
	{ path: "/forgot-password", component: ForgetPwd },
	{ path: "/register", component: Register },
];

export { authProtectedRoutes, publicRoutes };
