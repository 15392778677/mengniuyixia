/*do{
    var username = prompt("please enter your username");
    var password = prompt("please enter your password");
}
while(password!="Wgh" || username!="Yyh")

alert("Congratulations !");*/

function search() {
    if (document.getElementById("search_input").value != "") {
        window.open("https://www.baidu.com/s?wd=" + document.getElementById("search_input").value);
        document.getElementById("search_input").value = "";
    }
    return false;
}
//第一个盒子
function login1(){
    var username = prompt("please enter your username");
    var password = prompt("please enter your password");
    if(username=="" || password==""){
        alert("username和password不能为空！");
    }
      else if(username=="Yyh" && password=="Wgh"){
    window.open("https://yyh-wgh-15392778677.vercel.app/");
       return true;
        }
        alert("您没有访问权限");
        return false;
    }

 //第二个盒子
    function login2(){
        var username = prompt("please enter your username");
        var password = prompt("please enter your password");
        if(username=="" || password==""){
            alert("username和password不能为空！");
        }
          else if(username=="Yyh" && password=="Wgh"){
         window.open("https://yyh-wgh-15392778677.vercel.app/wgh%E7%9A%84%E5%9C%A3%E8%AF%9E%E6%A0%91/shengdanshu.html");
           return true;
            }
            alert("您没有访问权限");
            return false;
        }
        //第三个盒子
        function login3(){
            var username = prompt("please enter your username");
            var password = prompt("please enter your password");
            if(username=="" || password==""){
                alert("username和password不能为空！");
            }
              else if(username=="Yyh" && password=="Wgh"){
             window.open("https://yyh-wgh-15392778677.vercel.app/%E4%B8%89D%E7%9B%B8%E5%86%8C/%E7%9B%B8%E5%86%8C.html");
               return true;
                }
                alert("您没有访问权限");
                return false;
            }
            //第四个盒子
            function login4(){
                var username = prompt("please enter your username");
                var password = prompt("please enter your password");
                if(username=="" || password==""){
                    alert("username和password不能为空！");
                }
                  else if(username=="Yyh" && password=="Wgh"){
                 window.open("https://studengt-model.vercel.app/");
                   return true;
                    }
                    alert("您没有访问权限");
                    return false;
                }
