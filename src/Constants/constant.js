var env = "localhost";
export const Constant = {
    apiURl:
        env === "development"
            ? "http://3.129.171.117:4000/v1"
            : "http://localhost:8080/v1"
};