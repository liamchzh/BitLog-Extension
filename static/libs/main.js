require(['jquery', 'md5'], function ($) {

  $("#save").click(function () {

    var account = $("#account").val();
    var pswd = $("#pswd").val();

    var pswd_md5 = $.md5(pswd).substring(8,24);

    localStorage["account"] = account;
    localStorage["pswd"] = pswd;
    localStorage["pswd_md5"] = pswd_md5;

    window.close();

  });

  $(".form-signin").ready( function () {
    var account = localStorage["account"];
    var pswd = localStorage["pswd"];
    var pswd_md5 = localStorage["pswd_md5"];

    if(!account || !pswd){
      return;
    }

    $("#account").val(account);
    $("#pswd").val(pswd);

  });

  $("#login").click(function () {});

  $("#logout").click(function () {});
  
});
