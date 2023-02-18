<template>
  <div class="q-pa-md items-start q-gutter-md">
    <div>
      <div class="text-center text-h4" style="text-decoration:underline; font-weight: bold;">WELCOME TO NOTHING</div>
    </div>
    <div>
        <p style="font-size: 1rem; line-height: 180%;">
            当サイトはVue.jsに慣れるための練習と、何か形に残るものを作りたかったという私の自己満足のためのサイトである。<br>
            そのため、諸君らの中に何かを学びたいだとか、現代社会に一石を投じるコラムを見たいだとか、そういった高尚な目的を持っているのであれば
            残念ながらその期待には応えられない。<br>
            あくまで当サイトは、中途半端な知識を面白おかしくひけらかす私に対して非常にメタ的でシニカルな笑いを楽しむ、
            そういった厨二病的で悪趣味な場所なのだ。<br>
            詳細な概要は以下の記事に記載したので、そちらからご覧頂きたい。<br>
        </p>
    </div>
    <q-card class="my-card">
      <q-img src="../assets/my_icon.jpg" style="height: 350px; width:100%;">
        <div class="absolute-bottom text-right">
          <div class="text-h6">このサイトとは</div>
          <div class="text-subtitle2">2023/02/18 更新</div>
        </div>
      </q-img>

      <q-card-actions align="right">
        <q-btn flat class="text-subtitle1 text-blue-6 fit" to="./thissite">続きを読む</q-btn>
      </q-card-actions>
    </q-card>
    <div>
      <div class="text-center text-h4" style="text-decoration:underline; font-weight: bold; margin-top: 40px;">REQUESTS</div>
    </div>
    <div>
        <p style="font-size: 1.3rem; line-height: 180%;" align="middle">
            <br>
            <a href="https://forms.gle/JeF3vNd6t8aNchKX8" target="_blank">このサイトで語って欲しいことリクエスト</a><br>
            <a href="https://forms.gle/2fFLgAaUwyGasTHn9" target="_blank">改善案・技術的アドバイス</a><br>
        </p>
    </div>
    <div>
      <div class="text-center text-h4" style="text-decoration:underline; font-weight: bold; margin-top: 40px;">POLICIES</div>
    </div>
    <div>
        <p style="font-size: 1rem; line-height: 180%;">
          <br>
          第一に、当サイトは、商用目的での運用を一切行わないことをここに記す。すなわち、アフィリエイト広告を埋め込むことや
          特定企業から依頼を受けて商品を紹介する、といったことは一切行わない。<br>
          しかしながら、Google Formを通しての記事リクエストなど報酬が発生しない依頼については、この限りではない。<br>
          <br>
          第二に、当サイトは<a href="https://ja.vuejs.org/" target="_blank">Vue.js</a> + 
          <a href="https://quasar.dev/" target="_blank">Quasar</a>でコードを記述し、
          ローカル環境にて<a href="https://ja.vitejs.dev/" target="_blank">vite</a>を用いてビルド・デプロイしたプロジェクトを、
          <a href="https://docs.github.com/ja/pages/getting-started-with-github-pages/about-github-pages" target="_blank">GitHub Pages</a>を用いてオンライン上でホスティングしている。
          一部、バックエンドの代わりにGoogle Apps Scriptを用いて、スプレッドシートをデータベースとして使用している部分もある。<br>
          すなわち、オープンソース・個人での無料利用が明記されているツールのみに依存しており、
          当サイトのコードは<a href="https://github.com/hasoseso-Gunnar/gunnar-hp/" target="_blank">GitHub</a>で公開している。<br>
          <br>
          第三に、当サイトは閲覧者の一切の個人情報を取得せず、これを取り扱うことはない。<br>
          しかしながら、コメント機能等を通して閲覧者自身が記録した個人情報については、これに該当しない。<br>
          上述のように個人情報を含むコメント・いわゆる「荒らし」コメント・あるいはその他私が不適切と判断したコメントについては逐一削除するが、
          手動で削除する都合上、削除までの時間だけ当サイト上に表示されてしまうことについてはご理解頂きたい。<br>
          <br>
          第四に、当サイトは様々な他サイトからテキストや画像を引用することがある。<br>
          前述のように、このサイトは営利目的ではない。また、極力出典元はサイト内に記載することを心掛けているが
          何らかの理由でテキストや画像に関して削除の申し立てがある場合には、
          <a href="https://forms.gle/2fFLgAaUwyGasTHn9" target="_blank">こちら</a>から連絡先を記載した上で、問い合わせて頂きたい。<br>
        </p>
    </div>
  </div>
</template>

<script setup lang="ts">


</script>
<style>


</style>