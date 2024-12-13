import {useEffect, useState} from "react";
import {useHistory} from "react-router-dom";
import Loading from "../../../../components/shared-components/Loading";
import { Card, Table, Button, Tooltip, message } from 'antd';
import { EyeOutlined, DeleteOutlined } from '@ant-design/icons';

const UserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const history = useHistory();

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setLoading(false);
            });
    }, []);

    const deleteUser = (userId) => {
        setUsers(users.filter(user => user.id !== userId));
        message.success({ content: `User ${userId} deleted successfully`, duration: 2 });
    };

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Company',
            dataIndex: ['company', 'name'],
            key: 'company',
        },
        {
            title: 'Actions',
            key: 'actions',
            render: (_, record) => (
                <div className="d-flex justify-content-end">
                    <Tooltip title="View">
                        <Button
                            type="primary"
                            icon={<EyeOutlined />}
                            onClick={() => history.push(`/app/pages/user/${record.id}`)}
                            size="small"
                            className="mr-2"
                        />
                    </Tooltip>
                    <Tooltip title="Delete">
                        <Button
                            danger
                            icon={<DeleteOutlined />}
                            onClick={() => deleteUser(record.id)}
                            size="small"
                        />
                    </Tooltip>
                </div>
            ),
        },
    ];

    if (loading) {
        return <Loading cover="content" />;
    }

    return (
        <Card title="User List">
            <Table
                dataSource={users}
                columns={columns}
                rowKey="id"
                pagination={{ pageSize: 5 }}
            />
        </Card>
    );
};

export default UserList;
