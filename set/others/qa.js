async function setting() {

    onLode(0);

    const api = "https://script.google.com/macros/s/AKfycbz_xi25X5oqtDZLhO_6Mvb5hNLRwLaOqeoJmDML5-W9EdKCDverpj-hZnjE3m_hnVzonQ/exec";
    const response = await fetch(api);
    const data = await response.json();

    const HTML = document.getElementById('qas');
    for (var i = 0; i < data.length; i++) {
        if (data[i][2] != "") {
            contentNode = document.createRange().createContextualFragment(`<div style="margin:5px;border-radius: 10px;background-color:white;margin-left:10px;width:800px;padding: 5px;">
        <h4>`+ data[i][1] + ` 様のコメント</h4>
        <hr>
        <p style="color:black">Q.`+ data[i][0] + `</p>
        <p style="color:black">A.`+ data[i][2] + `</p>
        </div>`);
            HTML.appendChild(contentNode);
        }
    }

    onLode(1);
}


/**
 * ロード時のアニメーション用関数
 * @param {number} i 開始か終了か
 */
function onLode(i) {
    //位置取得
    const spinner = document.getElementById("Load");
    if (i == 0) {
        //表示
        spinner.style.display = "block";
    } else {
        //非表示
        spinner.style.display = "none";
    }
}

setting();