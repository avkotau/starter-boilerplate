import {useEffect, useState} from "react";
import { Menu} from 'antd';
import { Link, Redirect, Route, Switch, useRouteMatch, useLocation } from 'react-router-dom';import Loading from "../../../../components/shared-components/Loading";
import {UserOutlined} from "@ant-design/icons";
import EditProfile from "./EditProfile";
import InnerAppLayout from "../../../../layouts/inner-app-layout";

const SettingOption = () => {
    const match = useRouteMatch();
    const location = useLocation();

    return (
        <Menu
            defaultSelectedKeys={[`${match.url}/edit-profile`]}
            mode="inline"
            selectedKeys={[location.pathname]}
        >
            <Menu.Item key={`${match.url}/edit-profile`}>
                <UserOutlined />
                <span>Edit Profile</span>
                <Link to={`${match.url}/edit-profile`} />
            </Menu.Item>
        </Menu>
    );
};

const SettingContent = () => {
    const match = useRouteMatch();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const userId = match.params.id;
        fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
            .then(response => response.json())
            .then(data => {
                setUser(data);
                setLoading(false);
            });
    }, [match.params.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <Switch>
            <Redirect exact from={`${match.url}`} to={`${match.url}/edit-profile`} />
            <Route path={`${match.url}/edit-profile`}>
                <EditProfile user={user} />
            </Route>
        </Switch>
    );
};

const UserDetail = () => {
    return (
        <InnerAppLayout
            sideContentWidth={320}
            sideContent={<SettingOption />}
            mainContent={<SettingContent />}
        />
    );
};

export default UserDetail;
