import React from "react";
import { Row, Col, Typography, Button } from "antd";
import { DownloadOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const newTicket = () => {
  console.log("New Ticket");
};

export const CreateTicket = () => {
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}> Press the button for create new ticket </Title>
          <Button
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            size="large"
            onClick={newTicket}></Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Your number</Text>
          <br />
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};
