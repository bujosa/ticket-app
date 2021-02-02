import React, { useState } from "react";
import { Row, Col, Typography, Button, Divider } from "antd";
import { CloseCircleOutlined, RightOutlined } from "@ant-design/icons";
import { useHideMenu } from "../hooks/useHideMenu";
import { getUserStorage } from "../helpers/getUserStorage";
import { Redirect, useHistory } from "react-router-dom";

const { Title, Text } = Typography;

export const Desktop = () => {
  useHideMenu(false);

  const [user] = useState(getUserStorage());

  const history = useHistory();

  const exit = () => {
    localStorage.clear();
    history.replace("/signin");
  };

  const nextTicket = () => {
    console.log("Next tickets");
  };

  if (!user.agent) {
    return <Redirect to="/signin" />;
  }

  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{user.agent}</Title>
          <Text>You are working on this Desktop: </Text>
          <Text type="success">{user.desktop}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={exit}>
            <CloseCircleOutlined />
            Exit
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
        <Col offset={18} span={6} align="right">
          <Button onClick={nextTicket} shape="round" type="primary">
            <RightOutlined />
            Next
          </Button>
        </Col>
      </Row>
    </>
  );
};
