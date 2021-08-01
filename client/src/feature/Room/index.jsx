import React, { useEffect } from "react";
import { BrowserRouter, Switch, Route, useRouteMatch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import DetailRoomPage from "./pages/DetailRoomPage/DetailRoomPage";
import { useDispatch, useSelector } from "react-redux";
import { getAllRoomsAsync } from "./roomsSlice";
const Room = () => {
    const match = useRouteMatch();
    const dispatch = useDispatch();

    const rooms = useSelector((state) => state.rooms);
    useEffect(() => {
        dispatch(getAllRoomsAsync());
    }, [dispatch]);

    return (
        <>
            {rooms ? (
                <BrowserRouter>
                    <Switch>
                        <Route
                            exact
                            path={match.url}
                            render={() => <HomePage rooms={rooms} />}
                        />
                        <Route
                            exact
                            path={`${match.url}/:id`}
                            render={() => <DetailRoomPage rooms={rooms} />}
                        />
                    </Switch>
                </BrowserRouter>
            ) : (
                "Loading..."
            )}
        </>
    );
};

export default Room;
