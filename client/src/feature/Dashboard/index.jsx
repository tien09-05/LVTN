import React, { useEffect, useState } from "react";
import "./index.css";
import { Link, useHistory } from "react-router-dom";
import { Layout, Menu } from "antd";
import {
    UserOutlined,
    HomeOutlined,
    TeamOutlined,
    ShoppingOutlined,
    ShopOutlined,
    GiftFilled,
    TagOutlined,
} from "@ant-design/icons";
import { Route, Switch } from "react-router-dom";
import TableBranch from "./components/ChiNhanh/TableBranch";
import AddEditBranch from "./components/ChiNhanh/AddEditBranch";
import TableRoom from "./components/Room/TableRoom";
import AddEditRoom from "./components/Room/AddEditRoom";
import TableCheckout from "./components/Checkout/TableCheckout";
import AddCheckout from "./components/Checkout/AddCheckout";
import TableEmployee from "./components/Employees/TableEmployee";
import AddEditEmployee from "./components/Employees/AddEditEmployee";
import TableVoucher from "./components/Voucher/TableVoucher";
import AddEditVoucher from "./components/Voucher/AddEditVoucher";
import TableCustomer from "./components/Customers/TableCustomer";
import AddEditCustomer from "./components/Customers/AddEditCustomer";
import TableTypeCustomer from "./components/TypeCustomer/TableTypeCustomer";
import AddEditTypeCustomer from "./components/TypeCustomer/AddEditTypeCustomer";
const { Header, Content, Sider } = Layout;
const { SubMenu } = Menu;

// random ID
var ID = function () {
    return "_" + Math.random().toString(36).substr(2, 9);
};

const Dashboard = () => {
    const history = useHistory();
    const [isAdmin, setIsAdmin] = useState(false);
    // check employes
    useEffect(() => {
        if (
            !localStorage.getItem("auth") ||
            !JSON.parse(localStorage.getItem("auth")).user.hasOwnProperty(
                "tenNhanVien"
            )
        ) {
            history.push("/");
        } else {
            setIsAdmin(
                JSON.parse(localStorage.getItem("auth")).user.chucvu ===
                    "Quản Lý"
            );
        }
    }, [history]);
    console.log(isAdmin);
    return (
        <Layout style={{ minHeight: "100vh", marginTop: "100px" }}>
            <Sider style={{ minWidth: "260px !important" }}>
                <Menu theme="dark" mode="inline">
                    <SubMenu
                        icon={<ShoppingOutlined />}
                        title="Quản lí đơn đặt phòng"
                        key={ID()}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/dondatphong">
                                Xem danh sách đơn đặt phòng
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<HomeOutlined />}
                        title="Quản lí chi nhánh"
                        key={ID()}
                        disabled={!isAdmin}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/chinhanh">
                                Xem danh sách chi nhánh
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/chinhanh/add">
                                Thêm chi nhánh
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<ShopOutlined />}
                        title="Quản lí phòng"
                        key={ID()}
                        disabled={!isAdmin}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/phong">
                                Xem danh sách phòng
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/phong/add">Thêm phòng</Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<TeamOutlined />}
                        title="Quản lí nhân viên"
                        key={ID()}
                        disabled={!isAdmin}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/nhanvien">
                                Xem danh sách nhân viên
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/nhanvien/add">
                                Thêm nhân viên
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<GiftFilled />}
                        title="Quản lí Voucher"
                        key={ID()}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/voucher">
                                Xem danh sách voucher
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/voucher/add">
                                Thêm voucher
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<TagOutlined />}
                        title="Quản lí loại khách hàng"
                        key={ID()}
                        disabled={!isAdmin}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/loaikhachhang">
                                Xem danh sách loại khách hàng
                            </Link>
                        </Menu.Item>

                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/loaikhachhang/add">
                                Thêm loại khách hàng
                            </Link>
                        </Menu.Item>
                    </SubMenu>

                    <SubMenu
                        icon={<UserOutlined />}
                        title="Quản lí khách hàng"
                        key={ID()}
                        disabled={!isAdmin}>
                        <Menu.Item key={ID()}>
                            <Link to="/dashboard/khachhang">
                                Xem danh sách khách hàng
                            </Link>
                        </Menu.Item>
                    </SubMenu>
                </Menu>
            </Sider>
            <Layout className="site-layout">
                <Header
                    className="site-layout-background"
                    style={{
                        padding: 0,
                        paddingLeft: "20px",
                        marginBottom: "40px",
                        color: "#fff",
                    }}>
                    Dashboard
                </Header>
                <Content style={{ margin: "0 16px" }}>
                    <Switch>
                        {/* đơn đặt phòng */}
                        <Route
                            exact
                            path="/dashboard/dondatphong"
                            component={TableCheckout}
                        />
                        <Route
                            path="/dashboard/dondatphong/add"
                            component={AddCheckout}
                        />

                        {/* chi nhánh */}
                        <Route
                            exact
                            path="/dashboard/chinhanh"
                            component={TableBranch}
                        />
                        <Route
                            path="/dashboard/chinhanh/add"
                            component={AddEditBranch}
                        />
                        <Route
                            path="/dashboard/chinhanh/edit/:id"
                            component={AddEditBranch}
                        />

                        {/* phòng */}
                        <Route
                            exact
                            path="/dashboard/phong"
                            component={TableRoom}
                        />
                        <Route
                            path="/dashboard/phong/add"
                            component={AddEditRoom}
                        />
                        <Route
                            path="/dashboard/phong/edit/:id"
                            component={AddEditRoom}
                        />

                        {/* nhân viên */}
                        <Route
                            exact
                            path="/dashboard/nhanvien"
                            component={TableEmployee}
                        />
                        <Route
                            path="/dashboard/nhanvien/add"
                            component={AddEditEmployee}
                        />
                        <Route
                            path="/dashboard/nhanvien/edit/:id"
                            component={AddEditEmployee}
                        />

                        {/* voucher */}
                        <Route
                            exact
                            path="/dashboard/voucher"
                            component={TableVoucher}
                        />
                        <Route
                            path="/dashboard/voucher/add"
                            component={AddEditVoucher}
                        />
                        <Route
                            path="/dashboard/voucher/edit/:id"
                            component={AddEditVoucher}
                        />

                        {/* loại khách hàng */}
                        <Route
                            exact
                            path="/dashboard/loaikhachhang"
                            component={TableTypeCustomer}
                        />
                        <Route
                            path="/dashboard/loaikhachhang/add"
                            component={AddEditTypeCustomer}
                        />
                        <Route
                            path="/dashboard/loaikhachhang/edit/:id"
                            component={AddEditTypeCustomer}
                        />

                        {/* khách hàng */}
                        <Route
                            exact
                            path="/dashboard/khachhang"
                            component={TableCustomer}
                        />
                        <Route
                            path="/dashboard/khachhang/add"
                            component={AddEditCustomer}
                        />
                        <Route
                            path="/dashboard/khachhang/edit/:id"
                            component={AddEditCustomer}
                        />
                    </Switch>
                </Content>
            </Layout>
        </Layout>
    );
};

export default Dashboard;
