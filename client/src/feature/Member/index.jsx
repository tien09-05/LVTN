import React from "react";
import { useParams } from "react-router-dom";
import TypeCustomer from "../../components/TypeCustomer/TypeCustomer";
import AccountPage from "./pages/AccountPage/AccountPage";
const Member = () => {
    const { type } = useParams();
    return <>{type === "account" ? <AccountPage /> : <TypeCustomer />}</>;
};

export default Member;
