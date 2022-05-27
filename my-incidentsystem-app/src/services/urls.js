const IMS_URL = {
  backendServer: () => {
    console.log(process.env);
    //return "http://localhost:8080";
    return process.env.REACT_APP_SERVER_URL;
    //return process.env.REACT_APP_SERVER_URL;
  },
};

export default IMS_URL;
