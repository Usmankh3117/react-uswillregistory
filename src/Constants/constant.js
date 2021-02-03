var env = "development";
export const Constant = {
    apiURl:
        env === "development"
            ? "http://freeonlinewill.theuswillregistry.org/api/v1"
            : "http://localhost:8080/v1"
};