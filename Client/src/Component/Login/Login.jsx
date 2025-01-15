import Box from "@mui/material/Box";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

function Login() {
    return (
        <Box
          sx={{
            width: "70%",
            height:"100%",
            height: "auto",
            margin:"auto",
            borderRadius: 1,
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 2,
            boxShadow: 3,
          }}
        >
          {/* Form on the Left */}
          <Box sx={{ flex: 1, marginRight: 2 }}>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>
    
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </Form>
          </Box>
    
          {/* Image on the Right */}
          <Box
            sx={{
              flex: 1,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src="./signup-image.jpg"
              alt="Placeholder"
              style={{
                width: "100%",
                maxWidth: "100%",
                height:'100%',
                borderRadius: "8px",
                objectFit: "cover",
              }}
            />
          </Box>
        </Box>
      );
}

export default Login;
