//Call back Hell

function sucess(params) {
  console.log("User Logged In");
}
function getData(dataId, callback) {
  setTimeout(() => {
    console.log(dataId);
    if (callback) callback();
  }, 4000);
}

getData("username", () => {
  console.log("Getting Password...");
  getData("Password", () => {
    console.log("Getting Ip Adress...");
    getData("IP", () => {
      console.log("Waiting for response...");
      getData("Sucess", () => {
        sucess();
      });
    });
  });
}); 
