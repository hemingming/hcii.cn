var hcUrl="/";String.prototype.NoSpace=function(){return this.replace(/\s+/g,"")};function setCookie(a,c){var b=30;var d=new Date();d.setTime(d.getTime()+b*24*60*60*1000);document.cookie=a+"="+escape(c)+";expires="+d.toGMTString()}function getCookie(a){var c,b=new RegExp("(^| )"+a+"=([^;]*)(;|$)");if(c=document.cookie.match(b)){return unescape(c[2])}else{return null}}function delCookie(c){var b=new Date();b.setTime(b.getTime()-1);var a=getCookie(c);if(a!=null){document.cookie=c+"="+a+";expires="+b.toGMTString()}}var hcScript={name:"花橙金融",version:"1.0.0",tabs:function(e,d,g){var f=this;$(e).each(function(a,b){$(b).click(function(){$(e).removeClass(g);$(this).addClass(g);$(d).hide().eq(a).show()})})},pop:function(h,g,f){var e=this;var d=document.documentElement.scrollHeight;$(g).css("height",d);var j=$(window).height();var i=document.body.scrollTop||document.documentElement.scrollTop;$(h).css("top",i+100);$(h).show();$(g).show();$(f).click(function(){e.close(h,g)})},close:function(e,d){var c=this;$(e).hide();$(d).hide()},detail:function(){var a=this;String.prototype.NoSpace=function(){return this.replace(/\s+/g,"")};var d=Number($("#in-sur").text().NoSpace()).toFixed(2);var c=Number($("#in-max").text().NoSpace()).toFixed(2);var e=Number($("#in-days").text().NoSpace());var b=$("#in-rate").text().NoSpace()/100;$("#in-checkall").click(function(){if($("#user-err").length){$("#user-err").remove()}if($("#in-checkall i").hasClass("check")){$("#in-checkall i").removeClass("check");$("#in-sum").text("0.00");$("#in-exp").text("0.00");$("#in-all").text("0.00");$("#in-init").val("")}else{$("#in-checkall i").addClass("check");if(parseInt(d)>parseInt(c)){var f=parseInt(c)*b/360*e;$("#in-init").val(parseInt(c));$("#in-sum").text(c);$("#in-exp").text(f.toFixed(2));var g=Number(c)+Number(f);$("#in-all").text(g.toFixed(2))}else{var f=parseInt(d)*b/360*e;$("#in-init").val(parseInt(d));$("#in-sum").text(d);$("#in-exp").text(f.toFixed(2));var g=Number(d)+Number(f);$("#in-all").text(g.toFixed(2))}}});$("#in-init").bind("keyup blur click",function(h){if($("#user-err").length){$("#user-err").remove()}var i=$("#in-init").val();$("#in-init").val(i.replace(/\D/g,""));if(parseInt(i)==0||i===""||isNaN(i)){$("#in-init").val("");$("#in-sum").text("0.00");$("#in-exp").text("0.00");$("#in-all").text("0.00");return false}if(parseInt(i)>d){$("#in-init").val(parseInt(d));var f=parseInt(d)*b/360*e;$("#in-sum").text(d);$("#in-exp").text(f.toFixed(2));var g=Number(d)+Number(f);$("#in-all").text(g.toFixed(2))}else{var f=parseInt(i)*b/360*e;$("#in-sum").text(parseInt(i).toFixed(2));$("#in-exp").text(f.toFixed(2));var g=Number(i)+Number(f);$("#in-all").text(g.toFixed(2))}});$("#sub-order").click(function(k){k.preventDefault();var j=$("#in-init").val();if(j==0||j===""||isNaN(j)){$("#sub-order").html("请输入认购金额");return false}else{var f=$("#billid").val();var i=$("#billorder").val();var h=j;var g=$("#cardid").val();if(f==""||h==""){$("#sub-order").attr("disabled",true).html("没有购买资格");return false}$("#sub-order").html('<img src="images/common/verfy.gif" style="margin:0 auto;display:block;">');$.ajax({url:"/paybill",type:"POST",dataType:"json",data:{"slug":f,"copies":h,"code":i,"cardid":g},success:function(m){if(m==-999){window.location.href="/login?detail"}else{if(m.statusCode!=0){if(m.statusCode==17.2){$("#sub-order").html("余额不足请先充值");setTimeout(function(){window.location.href="/user-recharge?nomoney"},2000);return false}else{$("#sub-order").html(m.message);return false}}else{var n=m.data.order.prompt;var l=m.data.order.prompt;var o=m.data.order.prompt;if(o===undefined){o=""}else{o="+"+m.data.order.prompt["OrRates"]}if(n===undefined){n=""}else{n="+"+m.data.order.prompt["OrMoney"]}if(l===undefined){l=""}else{l="+"+m.data.order.prompt["OrInterest"]}if(o=="+undefined"){o=""}if(n=="+undefined"){n=""}if(l=="+undefined"){l=""}$("#pop-contact").html('<ul class="line">'+"<li><span>产品名称：</span><em>"+m.data.view.Name+"</em></li>"+'<li><span>投资金额：</span><em><b class="amount f-t" id="order-sum">'+$("#in-sum").text()+" "+n+"</b> 元</em> </li>"+'<li><span>实际收益：</span><em><b class="profit f-t" id="order-exp">'+$("#in-exp").text()+" "+l+"</b> 元 </em></li>"+"<li><span>下单时间：</span><em>"+m.data.order.orderTime+"</em></li>"+"<li><span>订单编号：</span><em>"+m.data.order.orderCode+"</em></li>"+"</ul>"+"<ul>"+"<li><span>账户姓名：</span><em>"+m.data.user.Name+"</em></li>"+"<li><span>身份证号：</span><em>"+m.data.user.IdCard+"</em> </li>"+"<li><span>手机号码：</span><em>"+m.data.user.Moblie+"</em> </li>"+"<li><span>获得积分：</span><em>"+parseInt($("#in-sum").text())+"</em></li>"+'<li><span>账户余额：</span><strong id="usermoney">'+m.data.assets["fund"]+"</strong> 元</li>"+'<li><span>收益宝余额：</span><em class="income"><b>'+m.data.assets["vault"]+"</b> 元</em></li>"+'<li><span>交易密码：</span><em><input type="password" name="pay" class="pay" id="pay-password" maxlength="6"> <a href="/user-safety">忘记交易密码？</a></em></li>'+"<li><br/></li>"+"</ul>"+'<input type="hidden" value="'+m.data.form["CardDelId"]+","+m.data.form["ItemDelId"]+","+m.data.form["Key"]+","+m.data.form["OrderCode"]+","+m.data.form["OrderCopies"]+","+m.data.form["Strtotime"]+","+m.data.form["ThisTime"]+'" id="parampay">'+'<button type="button" class="hc-buy" id="user-pay">确认支付</button>');
$("#sub-order").html("提交订单");if(parseInt($("#order-sum").text())>parseInt($("#usermoney").text())){$("#user-pay").html("余额不足使用收益宝")}a.userpay();a.pop(".pop",".black",".close")}}},error:function(l){console.log(l);return false}})}});$(".gress").animate({width:$("#percent").text()});$("#picdata").click(function(){var i=$("#bill").attr("data");var g=$("#bill").attr("parma");if(i.length>0){$("#bill").empty().append('<img src="http://'+i+'" alt="花橙金融">')}if(g!==""){var f=g.split(",");$("#bill").empty();for(var h=0;h<f.length;h+=1){$("#bill").append('<img src="http://'+f[h]+'" alt="花橙金融">')}}});a.tabs(".param-box ul li",".param-center dl","on");$(".mcard").click(function(f){$("#cardlist").show();$("#cardlist li").each(function(i,g){var h=$(this).children(".all").attr("data");if(h==""){$(this).remove()}});f.stopPropagation()});$("#cardlist i").on("click",function(g){if($(this).hasClass("check")){$(this).removeClass("check");var f="";$("#cardid").val(f);$("#cardlist").hide();g.stopPropagation()}else{$("#cardlist i").removeClass("check");$(this).addClass("check");var f=$(this).attr("data");$("#cardid").val(f);$("#cardlist").hide();g.stopPropagation()}});$("#cardlist").click(function(f){f.stopPropagation()});$(document).click(function(){$("#cardlist").hide()})},userpay:function(){var a=this;$("#user-pay").click(function(e){if($("#user-err").length){$("#user-err").remove()}if($("#pay-password").val()==""||$("#pay-password").val().length!=6){$("#pay-password").css({"border":"1px solid #ff0000"});$(this).html("请正确输入交易密码");return false}else{var j=$("#parampay").val();var c=j.split(",")[0];var k=j.split(",")[1];var f=j.split(",")[2];var b=j.split(",")[3];var d=j.split(",")[4];var g=j.split(",")[5];var h=j.split(",")[6];var i=$("#pay-password").val();e.preventDefault();$("#user-pay").html('<img src="images/common/verfy.gif" style="margin:0 auto;display:block;">');$.ajax({url:"/topay",type:"POST",dataType:"json",data:{"cardDelId":c,"itemDelId":k,"key":f,"orderCode":b,"orderCopies":d,"strtotime":g,"thisTime":h,"payment":i},success:function(l){if(l==-999){window.location.href="/login"}else{if(l.statusCode!=0){if(l.statusCode==17.2){$("#user-pay").attr("disabled",true).html("余额不足请先充值");return false}else{$("#user-pay").html(l.message);return false}}else{$("#user-pay").hide();$("#pop-contact").html('<strong class="success"><i></i>购买成功！</strong>');setTimeout(function(){window.location.href="/user-invest"},1000);return false}}},error:function(l){console.log(l);return false}})}})},scrollTop:function(d,i,h){var f=this;if($(i).length>1){var e=h;setTimeout(function g(){var a=$(d).children().eq(0);$(d).animate({marginTop:-a.height()},800,function(){$(d).append(a);$(d).css({marginTop:0});setTimeout(g,e)})},e)}},userlogin:function(){var a=this;var c=getCookie("useraccount");if(c!=null){$("#uid").html('<span style="float:left;font-size:14px;">已登录帐号：****'+c.substr(-4)+'</span><a href="javascript:void(0);" style="float:right;font-size:14px;" id="caccount" class="orange">更换帐号</a>')}$("#user-login").on("click",function(d){d.preventDefault();var i=$("#account").val();if(i===undefined){var i=c}var e=$("#password").val().NoSpace();if(i===""||i===null||isNaN(i)||i.length!=11){$("#error").html("<p>请正确输入登录帐号？</p>");return false}if(e===""||e===null||e.length<6){$("#error").html("<p>请正确输入登录密码？</p>");return false}$("#error").html('<img src="/images/common/verfy.gif" alt="loading...">');if($("#vercode").length){var b=$("#vercode").val().NoSpace();if(b===""||b===null||isNaN(b)||b.length!=4){$("#error").html("<p>请正确输入图片验证码？</p>");return false}$.ajax({url:"/veruserlogin",type:"POST",dataType:"json",data:{"username":i,"password":e,"vercode":b},success:function(f){if($("#serror").length){$("#serror").html(f)}if(f.statusCode==1.9){$("#error").html("<p>"+f.message+'! 请 <a href="/authen">【点击认证】</a> 激活！</p>');return false}if(f.statusCode!=0){if(f.message===undefined){$("#error").html("<p>"+f+"!</p>");$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime())}else{$("#error").html("<p>"+f.message+"!</p>");$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime())}return false}if(f.statusCode==0){delCookie("hcuserinfo");window.location.href="/usercenter"}},error:function(f){console.log(f);return false}})}else{$.ajax({url:"/userlogin",type:"POST",dataType:"json",data:{"username":i,"password":e},success:function(f){if($("#serror").length){$("#serror").html(f)}if(f.statusCode==1.9){$("#error").html("<p>"+f.message+'! 请 <a href="/authen">【点击认证】</a> 激活！</p>');return false}if(f.statusCode==-2.5){$("#error").html("<p>"+f.message+"! </p>");$("#user-login").attr("id","#user-login-ver").parent().before('<dd><label class="hcuser verify">验证码</label><input type="text" name="vercode"  placeholder="验证码" class="ver-code" id="vercode"><i>验证码</i><span><img src="/captcha" id="verpicture" /></span></dd>');$("#verpicture").on("click",function(){$(this).attr("src","/captcha?nocache="+new Date().getTime())});return false}if(f.statusCode!=0){$("#error").html("<p>"+f.message+"!</p>");
return false}if(f.statusCode==0){delCookie("hcuserinfo");setCookie("useraccount",i);window.location.href="/usercenter"}},error:function(f){console.log(f);return false}})}});$("#caccount").click(function(){$("#uid").html('<label class="hcuser account">帐号</label><input type="text" name="account" placeholder="手机号码" id="account"><i>手机号码</i>')})},uregister:function(){var a=this;$("#user-reg").on("click",function(d){d.preventDefault();var f=$("#account").val().NoSpace();var b=$("#password").val().NoSpace();var e=$("#r-password").val().NoSpace();var g=$("#vercode").val().NoSpace();var h=/^0?1[3|4|5|7|8][0-9]\d{8}$/;var c=/^(([a-z]+[0-9]+)|([0-9]+[a-z]+))[a-z0-9]*$/i;if(f===""||f===null||isNaN(f)||!h.test(f)||f.length!=11){$("#error").html("<p>请正确输入注册手机号？</p>");return false}if(!c.test(b)||b.length<6){$("#error").html("<p>请以字母数字设置6位以上密码？</p>");return false}if(b!==e){$("#error").html("<p>请确认两次输入密码一致？</p>");return false}if(g===""||g===null||isNaN(g)||g.length!=4){$("#error").html("<p>请正确输入验证码？</p>");return false}$("#error").html('<img src="/images/common/verfy.gif" alt="loading...">');$.ajax({url:"/userregister",type:"POST",dataType:"json",data:{"username":f,"password":b,"surepass":e,"vercode":g},success:function(i){if(i.statusCode!=0){if(i.message===undefined){$("#error").html("<p>"+i+"!</p>");$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime())}else{$("#error").html("<p>"+i.message+"!</p>");$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime())}return false}else{$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime());window.location.href="/authen"}},error:function(i){$("#verpicture").attr("src","/captcha?nocache="+new Date().getTime());console.log(i);return false}})});$("#register input").on("click keydown mousedown",function(){$("#error").html("")});$("#verpicture").on("click",function(){$(this).attr("src","/captcha?nocache="+new Date().getTime())});return false},products:function(){var b=this;var a=3;var c=0;$.get(hcUrl+"scripts/lib/hc-products.js",function(e,d){$("#pageload").remove();$.ajax({url:"/loadproducts",type:"POST",dataType:"json",data:{"pageSize":a,"pageIndex":c,"hcType":0,"hcAmount":0,"hcCycle":0,"hcRates":0},success:function(g){if(g.statusCode==0){var f=g.data.rows;prolist(f,hcType,hcAmount,hcCycle,hcRates)}}})})},init:function(){var b=this;$(window).load(function(){$("#loading").remove()});if($("#loading").length){setTimeout(function(){$("#loading").animate({top:"-100px"},800,function(){$(this).remove()})},200)}if($("#hcii").length){setTimeout(function(){$("#hcii, .hcii").fadeIn()},20000);$("#hcii i").click(function(){$("#hcii, .hcii").fadeOut()})}if($("#products").length){b.products()}if($(".tran-ticket").length){$.get(hcUrl+"scripts/lib/hc-transfer.js",function(d,c){$("#pageload").remove()})}if($(".purch").length){b.detail()}if($("#banner").length){$(".swiper").slide({mainCell:".picure ul",effect:"left",autoPlay:true,titCell:".cursor li",interTime:4000})}if($("#notice").length){b.scrollTop("#notice > ul","#notice ul > li",2000);b.scrollTop("#hot > ul","#hot ul > li",2000);b.scrollTop("#partner > ul","#partner ul > li",3000)}if($(".user-tip").length){$(".user-tip").hover(function(){$(this).stop().children("#user-tip").fadeIn()},function(){$(this).stop().children("#user-tip").fadeOut()})}if($("#login").length){b.userlogin()}if($("#register").length){b.uregister()}if($(".job").length){$.get(hcUrl+"scripts/lib/jquery.pagination.js",function(c){$(function(){var e=$("#hiddenresult li").length;var f=10;$("#pagination").pagination(e,{prev_text:"上一页",next_text:"下一页",num_edge_entries:2,num_display_entries:4,callback:d,items_per_page:f});function d(h,k){var j=$("#hiddenresult li").clone();$("#searchresult").empty();for(var g=h*f;g<(h+1)*f;g+=1){$("#searchresult").append(j[g])}return false}if(e==0){$("#searchresult").html("<p>暂无记录, 请稍后...</p>")}})});$(".news img").each(function(){$(this).css({"width":"100%","height":"auto"})})}console.log("hc-c-ver 1.0");var a=document.createElement("input");if("placeholder" in a){return}else{$("#login dd i, #register dd i, #getpwd dd i").css({"visibility":"visible"})}$(".userlogin input").bind({focus:function(){$(this).next("i").css({"visibility":"hidden"})},blur:function(){if($(this).val()==""){$(this).next("i").css({"visibility":"visible"})}else{$(this).next("i").css({"visibility":"hidden"})}}})}};$(function(){function c(a,g){var b=1;var h=new Date();h.setTime(h.getTime()+b*30*60*60*1000);document.cookie=a+"="+escape(g)+";expires="+h.toGMTString()}$(".index_CPM .bg").fadeTo(100,0.9);$(".index_CPM .close").click(function(){$(".index_CPM").hide();c("hc-home","homepop")});var d=getCookie("hc-home");if(d==null||d==undefined){$("#yindaotopdiv").show()}});