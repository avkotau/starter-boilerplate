import React, {useEffect} from 'react';
import { Form, Avatar, Button, Input, Row, Col, message } from 'antd';
import { UserOutlined } from '@ant-design/icons';
import Flex from 'components/shared-components/Flex';

const EditProfile = ({ user }) => {
    const [form] = Form.useForm();

    useEffect(() => {
        if (user) {
            form.setFieldsValue({
                name: user.name,
                email: user.email,
                phone: user.phone,
                website: user.website,
                address: `${user.address?.street}, ${user.address?.city}`
            });
        }
    }, [user, form]);

    const onFinish = (values) => {
        const key = 'updatable';
        message.loading({ content: 'Updating...', key });
        setTimeout(() => {
            message.success({ content: 'Profile updated successfully!', key, duration: 2 });
        }, 1000);
    };

    return (
        <>
            <Flex alignItems="center" mobileFlex={false} className="text-center text-md-left">
                <Avatar size={90} src={`https://robohash.org/${user?.id}`} icon={<UserOutlined />} />
                <div className="ml-md-3 mt-md-0 mt-3">
                    <Button type="primary">Change Avatar</Button>
                </div>
            </Flex>
            <div className="mt-4">
                <Form
                    form={form}
                    name="editProfile"
                    layout="vertical"
                    onFinish={onFinish}
                >
                    <Row gutter={16}>
                        <Col span={12}>
                            <Form.Item name="name" label="Name" rules={[{ required: true, message: 'Please input your name!' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email', message: 'Please input a valid email!' }]}>
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="phone" label="Phone">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={12}>
                            <Form.Item name="website" label="Website">
                                <Input />
                            </Form.Item>
                        </Col>
                        <Col span={24}>
                            <Form.Item name="address" label="Address">
                                <Input />
                            </Form.Item>
                        </Col>
                    </Row>
                    <Button type="primary" htmlType="submit">Save Changes</Button>
                </Form>
            </div>
        </>
    );
};

export default EditProfile;
