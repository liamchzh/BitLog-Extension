$("#save").click(function () {
  console.log("save");
  //var account = document.getElementById("account");
  //var pswd = document.getElementById("pswd");
  var account = $("#account").val();
  var pswd = $("#pswd").val();

  localStorage["account"] = account;
  localStorage["pswd"] = pswd;
})

// Restores select box state to saved value from localStorage.
function restore_options() {

  }

document.addEventListener('DOMContentLoaded', restore_options);
//document.querySelector('#save').addEventListener('click', save_options);
