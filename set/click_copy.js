   // コピー対象をJavaScript上で変数として定義する
   function copyTo() {
      Target = document.getElementById("code");
      // 選択しているテキストをクリップボードにコピーする
      navigator.clipboard.writeText(Target.textContent);

      // コピーをお知らせする
      alert("下記のコードをコピーしました");

   }

   function copy1() {
      Target1 = document.getElementById("code1");
      // 選択しているテキストをクリップボードにコピーする
      navigator.clipboard.writeText(Target1.textContent);

      // コピーをお知らせする
      alert("下記のコードをコピーしました");

   }

   function copy2() {
      Target2 = document.getElementById("code2");
      // 選択しているテキストをクリップボードにコピーする
      navigator.clipboard.writeText(Target2.textContent);

      // コピーをお知らせする
      alert("下記のコードをコピーしました");

   }

   function copy3() {
      Target3 = document.getElementById("code3");
      // 選択しているテキストをクリップボードにコピーする
      navigator.clipboard.writeText(Target3.textContent);

      // コピーをお知らせする
      alert("下記のコードをコピーしました。");

   }