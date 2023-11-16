mtr = document.getElementById("myTable");
//使用ajax加载csv文件的数据
$.ajax({
    url: "list.csv",
    success: function (result) {
        frag = document.createDocumentFragment();
        // 对csv文件的数据先以行分割
        userList = result.split("\n");
        // 我们在对每一行以逗号作分割
        for (i = 0; i < userList.length-1; i++) {
            userary = userList[i].split(",");
            tr = document.createElement("tr");
            // 对每行的内容遍历到td标签去
            for (j = 0; j < userary.length; j++) {
                td = document.createElement("td");
                if (j == 0) {
                    dir = document.createElement("a");
                    dir.setAttribute("onclick", "copyInnerTextOfCell(event)");
                    dir.append(userary[0]);
                    td.appendChild(dir);
                } else if (j == 2) {
                    usertag = userary[2].split("；");
                    // 对每行的内容遍历到td标签去
                    for (k = 0; k < usertag.length; k++) {
                        dit = document.createElement("div");
                        dit.setAttribute("class","el-button el-button--default is-round");
                        dit.setAttribute("onclick", "onClick(this)");
                        dit.append(usertag[k]);
                        td.appendChild(dit);
                    }
                } else {
                    td.append(userary[j]);
                }
                tr.appendChild(td);
            }
            frag.appendChild(tr);
        }
        // 加载到web页面
        mtr.appendChild(frag);
    }
});
copyInnerTextOfCell = (event) => {
    let innerText = event.target.innerText;
    var tmpInput = document.createElement("input");
    document.body.appendChild(tmpInput);
    tmpInput.value = "点歌 " + innerText;
    tmpInput.select();
    document.execCommand("cut"); // copy
    tmpInput.remove();
    style = 'alert-success';
    time = 1200;
    $('<div id="el-message">')
        .appendTo(body)
        .html("已复制："+innerText)
        .show()
        .delay(time)
        .fadeOut(10, function () {
            $('#el-message').remove();
        });
}

function onSearch(obj,num) {//js函数开始
    setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
        var storeId = document.getElementById('myTable');//获取table的id标识
        var rowsLength = storeId.rows.length;//表格总共有多少行
        var key = obj.value;//获取输入框的值

        var searchCol = num;//要搜索的哪一列，这里是第一列，从0开始数起

        for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
            var searchText = storeId.rows[i].cells[searchCol].innerHTML;//取得table行，列的值
            var keyy = new RegExp(key, 'i');
            if (searchText.match(keyy)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                storeId.rows[i].style.display = '';//显示行操作，
            } else {
                storeId.rows[i].style.display = 'none';//隐藏行操作
            }
        }
    }, 200);//200为延时时间
}
function onClick(obj) {//js函数开始
    setTimeout(function () {//因为是即时查询，需要用setTimeout进行延迟，让值写入到input内，再读取
        var storeId = document.getElementById('myTable');//获取table的id标识
        var rowsLength = storeId.rows.length;//表格总共有多少行
        var key = obj.innerText;//获取输入框的值
        if (key == "全部歌曲")
            key = "";
        var searchCol = 2;//要搜索的哪一列，这里是第一列，从0开始数起

        for (var i = 1; i < rowsLength; i++) {//按表的行数进行循环，本例第一行是标题，所以i=1，从第二行开始筛选（从0数起）
            var searchText = storeId.rows[i].cells[searchCol].innerText;//取得table行，列的值
            var keyy = new RegExp(key, 'i');
            if (searchText.match(keyy)) {//用match函数进行筛选，如果input的值，即变量 key的值为空，返回的是ture，
                storeId.rows[i].style.display = '';//显示行操作，
            } else {
                storeId.rows[i].style.display = 'none';//隐藏行操作
            }
        }
    }, 200);//200为延时时间
}