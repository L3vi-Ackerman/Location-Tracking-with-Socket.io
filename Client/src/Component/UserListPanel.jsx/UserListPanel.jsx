import React from "react";
import { memberList } from "./userData";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Image from "react-bootstrap/Image";
const UserListPanel = () => {
  const userListPanelStyle = {
    border: "1px solid black",
    padding: "1vw",
    width: "20%",
    backgroundColor: "white",
    position: "fixed",
    bottom: "10px",
    right: "10px",
    zIndex: 1000,
  };
  const userListDiv = {
    display: "flex",
    alignItems: "center",
    margin: "0.5vw",
    padding: "0.5vw",
    borderBottom: "1px solid #ddd",
  };
  const circularAvatarStyle = {
    width: "50px",
    height: "50px",
    borderRadius: "50%",
    display: "inline-block",
    border: "1px solid #333",
    marginRight: ".5vw",
  };
  const liStyle = {
    textDecoration: "none",
    fontSize: "1 vw",
    padding: "0.5vw",
    listStyle: "none",
  };

  return (
    <>
      <Card
        style={{
          width: "18rem",
          position: "fixed",
          bottom: "10px",
          right: "10px",
          zIndex: "400",
        }}
      >
        <ListGroup variant="flush">
        <ListGroup.Item
          className="bg-primary text-white"
          style={{height:'100%', padding: "0.5vw", textAlign: "center" }}
        >
          Check Out on your Friends!
        </ListGroup.Item>
          {memberList.map((item, index) => {
             return (
                <ListGroup.Item key={index} style={{ cursor: "pointer" }} className="d-flex align-items-center">
                  <Image
                    src=""
                    className="me-3"
                    roundedCircle
                    style={{ width: "50px", height: "50px",border:'1px solid #ddd' }}
                  />
                  {item.name}
                </ListGroup.Item>
              );
          })}
        </ListGroup>
      </Card>
    </>
  );
};

export default UserListPanel;
