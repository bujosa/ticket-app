import React, { useState, useContext, useEffect } from "react";
import { Col, Typography, Row, List, Card, Tag, Divider } from "antd";
import { useHideMenu } from "../hooks/useHideMenu";
import { SocketContext } from "../context/SocketContext";

const { Text, Title } = Typography;

export const Tail = () => {
  useHideMenu(true);

  const { socket } = useContext(SocketContext);

  const [tickets, setTickets] = useState([]);

  useEffect(() => {
    socket.on("ticket-assigned", (assigneds) => {
      setTickets(assigneds);
    });
    return () => {
      socket.off("ticket-assigned");
    };
  }, [socket]);

  return (
    <>
      <Title level={1}>Serving the client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="volcano">Escritorio: {item.desktop}</Tag>,
                  ]}>
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>Historial</Divider>
          <List
            dataSource={tickets.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket No. ${item.number}`}
                  description={
                    <>
                      <Text type="secondary">In the Desktop</Text>
                      <Tag color="magenta">{item.number}</Tag>
                      <Text type="secondary">Agent</Text>
                      <Tag color="volcano"> {item.agent}</Tag>
                    </>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};
