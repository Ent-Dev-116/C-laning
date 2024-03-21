async function setting(){

    onLode(0);

    const api="https://script.google.com/macros/s/AKfycbwAR6MwYqf0TkgJIfbBrTHUqzc5PvxoG-kNojnjDx-h4MNAHGl7VqxybHdq61rHhGhoPQ/exec";
    const response=await fetch(api);
    const data=await response.json();

    const HTML = document.getElementById('canvas');
    for (var i = 0; i < data.length; i++) {
        contentNode = document.createRange().createContextualFragment(`
        <p class="box">`+data[i][0]+`<span class="date"></span><span class="cont">`+data[i][1]+`</span></p>
        `);
        HTML.appendChild(contentNode);
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