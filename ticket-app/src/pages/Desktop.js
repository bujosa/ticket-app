import React from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";

const { Title, Text } = Typography;

const exit = () => {
  console.log("exit");
};

const nextTicket = () => {
  console.log("Next tickets");
};

export const Desktop = () => {
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>Bujosa</Title>
          <Text>You are working on this Desktop: </Text>
          <Text type="success">5</Text>
        </Col>

        <Col span={4} aling="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />{" "}
          </Button>
        </Col>
      </Row>
      <Divider />

      <Row>
        <Col>
          <Text>Working on ticket N. : </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            55
          </Text>
        </Col>
      </Row>

      <Row>
        <Col offset={18} span={6} aling="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
