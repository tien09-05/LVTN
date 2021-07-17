import React, { useEffect, useState } from "react";
import "./style.css";

import { useSelector } from "react-redux";
import { checkoutApi } from "../../../../api/checkoutApi";
import YourCheckout from "../../components/YourCheckout";
import YourVoucher from "../../components/YourVoucher";
import InfoAccount from "../../components/InfoAccount";
import { Redirect } from "react-router-dom";
const AccountPage = () => {
    const account = useSelector((state) => state.auth);
    const [dondatphong, setDonDatPhonng] = useState([]);
    useEffect(() => {
        if (account) {
            checkoutApi.getAllCheckouts().then((res) => {
                setDonDatPhonng(
                    res.data.filter(
                        (item) => item.khachhang._id === account._id
                    )
                );
            });
        }
    }, [account]);
    return (
        <>
            {account ? (
                <>
                    <div className="account text-white w-50">
                        <InfoAccount account={account} />
                    </div>
                    <div className="account__history text-white w-50">
                        <YourCheckout dondatphong={dondatphong} />
                        <YourVoucher account={account} />
                    </div>
                </>
            ) : (
                <Redirect to="/" />
            )}
        </>
    );
};

export default AccountPage;
