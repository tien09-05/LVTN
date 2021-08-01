import React, { useEffect, useState } from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import VoucherPage from "./pages/VoucherPage";
import DetailVoucherPage from "./pages/DetailVoucherPage";
import { voucherApi } from "../../api/voucherApi";

const Voucher = () => {
    const match = useRouteMatch();
    const [data, setData] = useState([]);
    useEffect(() => {
        voucherApi.getAllVouchers().then((data) => setData(data.data));
    }, []);
    return (
        <BrowserRouter>
            <Switch>
                <Route
                    exact
                    path={match.url}
                    render={() => <VoucherPage vouchers={data} />}
                />
                <Route
                    exact
                    path={`${match.url}/:id`}
                    render={() => <DetailVoucherPage vouchers={data} />}
                />
            </Switch>
        </BrowserRouter>
    );
};

export default Voucher;
