function saveAccount() {
  console.log("saveAccount()");
  var account = $("#account").eval();
  var pswd = $("#pswd").eval();

  if(!account & !pswd){
    console.log("none");
    return;
  }

  chrome.storage.local.set({"account": account, "pswd": pswd}, function () {
    console.log("save");
    message("Saved");
  });

}
