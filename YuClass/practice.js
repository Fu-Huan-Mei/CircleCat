<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>跑马灯轮播图特效</title>
    <style>
        *{
            margin:0;
            padding:0;
        }
        .carousel{
            width:650px;
            height:360px;
            border:1px solid #000;
            margin:50px auto;
            position: relative;
            overflow: hidden;
           
        }
        .carousel ul{
            width:5000px;
            list-style: none;
            position: relative;
            left:0px;
            transition: left .5s ease 0s;
        }
        .carousel ul li{
            float:left;
        }
        ul img{
            width:650px;
            height:360px;
        }
        .carousel .leftbtn{
            position: absolute;
            /*居中效果*/
            left:20px;
            top:50%;
            margin-top:-25px;
            width:50px;
            height:50px;
            background-color: #E3E4E5;
            border-radius: 50%;
        }
        .carousel .rightbtn{
            position: absolute;
            top:155px;
            left:580px;
            width:50px;
            height:50px;
            background-color: #E3E4E5;
            border-radius: 50%;
        }
    </style>
</head>
<body>
    <div class="carousel">
        <ul class="list" id="list">
            <li><img src="../information/img/img1.jpg"></li>
            <li><img src="../information/img/img2.jpg"></li>
            <li><img src="../information/img/img3.jpg"></li>
            <li><img src="../information/img/img4.jpg"></li>
        </ul>
        <a href="javascript:;" class="leftbtn" id="leftbtn"></a>
        <a href="javascript:;" class="rightbtn" id="rightbtn"></a>
    </div>
    <script>
        /*难点*/
        //获取按钮和ul,ul整体进行运动
        var leftbtn = document.getElementById("leftbtn");
        var rightbtn = document.getElementById("rightbtn");
        var list = document.getElementById("list");
        //克隆第一张图片
        var cloneli = list.firstElementChild.cloneNode(true);
        //添加到list中
        list.appendChild(cloneli);
        //显示当前ul显示到第几张，从0开始(不用写for循环，可以自己设置)
        var idx = 0;
        //节流锁（避免用户点击过快，图片快速移动）
        var lock = true;
        //右边按钮监听
        rightbtn.onclick = function(){
            //判断锁的状态
            if(!lock) return;
            lock = false;//关锁
            //给list加过度：因为CSS中会把过度去掉
            list.style.transition = "left .5s ease 0s";
            idx++;
            if(idx>3){//说明图片到了最后一张了
                //设置一个延时器，延时器的功能就是将ul瞬间拉回0的位置
                setTimeout(() => {
                    //问题1的解决：去除过度属性，因为要瞬间移动，不要过渡返回的效果
                    list.style.transition = "none";
                    list.style.left = 0;//问题1：还是有图片移回去第一张的动画，因为有过度效果
                    idx = 0;   
                },500);
            }
            list.style.left = idx * -650 + "px";
            //定时器，打开锁（函数节流）
            setTimeout(function(){
                lock = true;
            },500);
        }
        //给左按钮添加事件监听
        leftbtn.onclick = function(){
             //判断锁的状态
            if(!lock) return;
          
            lock = false;//关锁
            //判断是否为第0张：如果是，则用假的替换真的
            if(idx==0){
                list.style.transition = "none";
                //直接瞬间移动到最后一张假图片上
                list.style.left = -4 * 650 + "px";
                setTimeout(() => {
                    //问题1的解决：去除过度属性，因为要瞬间移动，不要过渡返回的效果
                    //加过度
                    list.style.transition = "left .5s ease 0s";
                    //把idx改为真正的最后一张图片的编号
                    idx = 3;
                    list.style.left = -idx * 650 + "px";
                }, 0);
            }else{
                idx--;
                list.style.left = -idx *650 +"px";
            }

            //函数节流：定时器，打开锁
            setTimeout(function(){
                lock = true;
            },500);
        }
    </script>
</body>
</html>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>呼吸轮播图</title>
    <style>
        * {
            margin: 0;
            padding: 0;
        }

        .carousel {
            width: 650px;
            height: 360px;
            border: 1px solid #000;
            margin: 50px auto;
            position: relative;
        }

        .carousel ul {
            list-style: none;
        }

        .carousel ul li {
            position: absolute;
            top: 0;
            left: 0;
            /*透明度为0*/
            opacity: 0;
            transition: opacity 1s ease 0s;
        }

        /*第一张图片透明度要是1，因为要显示出来*/
        .carousel ul li:first-child {
            opacity: 1;
        }

        ul img {
            width: 650px;
            height: 360px;
        }

        .carousel .leftbtn {
            position: absolute;
            /*居中效果*/
            left: 20px;
            top: 50%;
            margin-top: -25px;
            width: 50px;
            height: 50px;
            background-color: #E3E4E5;
            border-radius: 50%;
        }

        .carousel .rightbtn {
            position: absolute;
            top: 155px;
            left: 580px;
            width: 50px;
            height: 50px;
            background-color: #E3E4E5;
            border-radius: 50%;
        }
    </style>
</head>

<body>
    <div class="carousel">
        <ul class="list" id="list">
            <li><img src="../information/img/img1.jpg"></li>
            <li><img src="../information/img/img2.jpg"></li>
            <li><img src="../information/img/img3.jpg"></li>
            <li><img src="../information/img/img4.jpg"></li>
        </ul>
        <a href="javascript:;" class="leftbtn" id="leftbtn"></a>
        <a href="javascript:;" class="rightbtn" id="rightbtn"></a>
    </div>
    <script>
        //获取按钮和ul,ul整体进行运动
        var leftbtn = document.getElementById("leftbtn");
        var rightbtn = document.getElementById("rightbtn");
        var list = document.getElementById("list");
        var lis = document.getElementsByTagName("li");
        //显示当前是第几张图片
        var idx = 0;
        //节流
        var lock = true;
        //右边按钮监听
        rightbtn.onclick = function () {
            //判断节流
            if (!lock) return;
            lock = false;
            //还没有改变idx，此时的idx就是老图，老图要淡出
            lis[idx].style.opacity = 0;
            idx++;
            if (idx > 3) {
                idx = 0;
            }
            //改了idx，此时idx该图片就是信徒，新图要淡入
            lis[idx].style.opacity = 1;
            //动画结束之后，开锁
            setTimeout(function () {
                lock = true
            }, 1000)
        }

        //左边按钮监听
        leftbtn.onclick = function () {
            //判断节流
            if (!lock) return;
            lock = false;
            //还没有改变idx，此时的idx就是老图，老图要淡出
            lis[idx].style.opacity = 0;
            idx--;
            if (idx < 0) {
                idx = 3;
            }
            //改了idx，此时idx该图片就是信徒，新图要淡入
            lis[idx].style.opacity = 1;
            //动画结束之后，开锁
            setTimeout(function () {
                lock = true
            }, 1000)
        }
    </script>
</body>

</html>



  /*！！重点看呀！这里设置时又卡壳了！！设置menu3中“我的京东”*/
         /*我自己先设置menu3即单独给它设置width、height、padding等，但出现了i下移的情况*/
        .menu3{
            float: left;
            position: relative;
        }
        .menu3 .title2{
            position: relative;
            padding:0 7px;
/*重点呀！！注意：该设置款元解决问题1的问题！！！！*/
            border:1px solid transparent;
            border-bottom: none;
/*重点！！！！层级设置在下拉框上的兄弟元素才会起到背景颜色遮盖下拉框上边框一部分的效果*/
            z-index: 9999;
        }
/*！！！重点：鼠标移入是移入到menu3，但是效果是给下拉框上的兄弟元素即小标题给是个值得，不是给整一个menu3!!!*/
        .menu3:hover .title2{
            background-color: #fff;
            /*问题1：如果在鼠标移入时才设置边框，则会撑大元素，导致该区域放大*/
            /* border:1px solid black; */
            border-color: #ccc;
        }
        .menu3 .title2 i{
            font-size: 12px;
        }
        .menu3 .hide-div2{
            position: absolute;
            top:30px;
            left:0px;
            width:281px;
            height:230px;
            border:1px solid #ccc; 
            background-color: #fff;
            display: none;
        }
        /*下拉框出现*/
        .menu3:hover .hide-div2{
            display: block;
        }
        /*下拉框2的第一部分内容*/
        .top2{
            position: absolute;
            top:0px;
            left:0px;
            width:265px;
            height:48px;
            padding:10px 0px 10px 15px;
        }
        .top2 a,
        .middle2 a,
        .bottom2 a{
            float:left;
            width:88px;
            height:24px;
        }
        /*设置下拉框的横线*/
        .space-line1,
        .space-line2{
            position:absolute;
            left:0px;
            top:68px;
            width:280px;
            height:0px;
            border-bottom:1px solid #eee;
        }
        /*设置下拉框中间位置的内容*/
        .menu3 .middle2{
            position: absolute;
            top:68px;
            left:0px;
            width:265px;
            height:48px;
            padding:10px 0px 10px 15px;
        }
        /*单独设置第二条下拉框的横向位置*/
        .space-line2{
            top:136px;
        }
        /*设置下拉框下边位置的内容*/
        .menu3 .bottom2{
            position: absolute;
            top:137px;
            left:0px;
            width:265px;
            height:72px;
            padding:10px 0px 10px 15px;
        }