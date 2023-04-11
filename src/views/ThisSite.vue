<template>
    <div class="q-pa-md items-start q-gutter-md">
        <div>
            <div class="text-left text-h4" style="font-weight: bold;">このサイトとは</div>
            <div class="text-subtitle2">2023/02/18 更新</div>
        </div>
        <q-img src="../assets/my_icon.jpg" class="insert_img"></q-img>
        <div class="text-subtitle2 text-right">これは、私が高校2年生のときに、渋谷にて太陽と「一蓮托生の儀」を行った際の貴重な画像だ。(東京国立博物館収蔵)</div>
        <div class="text-left text-h5 article_headline">はじめに</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                このサイトを作成したのはポートフォリオ的なものを作りたかったというのが50%、残りの50%は暇つぶしだ。<br>
                本来、私はやるべきことが常に山積みであり、こんなおままごとに興じている暇は一切ないのだ。<br>
                しかしながら、人間というのは面白いもので、テスト前で勉強しなければいけない時にいきなり掃除をしだしたり、
                こうやって海外渡航を直前に控えて忙しいはずのときに、深夜遅くまでつまらない趣味にふけってしまうものだ。
            </p>
        </div>
        <div class="text-left text-h5 article_headline">つぎに</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                では、これを読んでいる諸君は、私の暇つぶしに付き合っている憐れな被害者なのかと言うと、これは少し私の意図するところとは違う。<br>
                私は文字通り諸君の時間を奪っているのだから、せめてこのサイトが有意義なものであればと望んでいる。
                簡単に言えば、ボランティアで諸君らを喜ばせようとしているのだ。<br>
                今、このサイトを閲覧している画面の向こうの君は、おそらく私の知り合いか、あるいはその知り合いくらいの人であろう。
                つまりは、私がどういう人であるかを知っていて、そのうえで冷やかしでこのサイトを見に来たといったところであろう。<br>
                私もなかなかプライドを捨てられない人間で、知り合いが見ているとなれば、それは勿論面白いことを書かざるを得ない。<br>
                そこで、当然私も色々自分で考えながら記事を書いていく訳だが、このサイトを盛り上げるために是非諸君らにも協力して頂きたい。<br>
                具体的には、以下のリンク(Google Form)から当サイトで私に語って欲しいことや改善案等を送ってほしい。<br>
                <br>
                <a href="https://forms.gle/JeF3vNd6t8aNchKX8" target="_blank">このサイトで語って欲しいことリクエスト</a><br>
                <a href="https://forms.gle/2fFLgAaUwyGasTHn9" target="_blank">改善案・技術的アドバイス</a><br>
                <br>

                リクエストについては、頂いたものは一つ一つ私が目を通し、面白いものがあれば取り上げて本サイトに記事として投稿する。<br>
            </p>
        </div>
        <div class="text-left text-h5 article_headline">そのつぎに</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                そもそも、このサイトはWordPressなどのHP作成ツール、はてなブログやLivedoor、
                あるいはnoteなどのブログが簡単に作れるサイトなどを用いて作成していない、非常に硬派なブログである。<br>
                具体的には、このサイトはVue.jsのプロジェクトをViteがローカルでビルドしており、
                GitHub上にpushしたリモートブランチをGitHub Pagesでデプロイしている。なので、(少なくともこちらとしては)完全サーバレスで、
                ドメインも無料、サーバー代も無料というわけだ。ただ、正直ドメインは変えたいので、無料でドメインを取得する方法があれば教えて欲しい。<br>
                さらには、Vue.jsのバージョンは最新のVue3、script set up構文を用いたComposition APIでの記法を採用しており、
                スクリプト部分はTypeScriptで書いている。つまり、「ガワ」だけはとりあえず超イケイケの仕様なのだ。<br>
                <br>
                コードは<a href="https://github.com/hasoseso-Gunnar/gunnar-hp" target="_blank">ここから</a>確認できる。<br>
                <br>
                私もWebアプリケーションの開発の歴がまだ浅く、実はブログのようなものをゼロから作るというのは初の試みであり、かなり難航している。<br>
                操作していて諸君らも気付いたと思うが、色々なところで粗が目立つだろう。また、現状当ブログは静的Webサイトという化石のような仕様となっており、
                Vue.jsの強みである双方向バインディングなどは全く活かせていない。<br>
                また、routerの設定で何回も躓き、ディレクトリ構造も非常に稚拙なものとなっている。<br>
                レスポンシブ対応(スマホ対応)やバックエンド開発、また英語対応など、今後の運用の中で様々な改善を行っていく予定なので、しばらく目を瞑って頂きたい。<br>
                また、もし諸君らの中にVue.jsを用いたフルスタックの開発経験のある者がいれば、先述のフォームから是非アドバイスを欲しい。<br>
            </p>
        </div>
        <div class="text-left text-h5 article_headline">おわりに</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                以上のことを踏まえ、当サイトがどのようなものであるかは、諸君にもご理解頂けただろう。<br>
                ただ、百聞は一見に如かずと言うか、とにもかくにもこの記事だけでなく他のページも見てもらって、諸君らにはおおよその方向性を
                感じてもらうに越したことはない。<br>
                当サイトの公開と同時に一つ試しに一つ記事を書いてみたので、是非とも<a href="psychessentialism">こちら</a>から読んでみてほしい。こちらの記事はちょっと小難しい話に
                なってしまったかもしれないが、とにかくこんな感じで色々なジャンルの物事を取り扱っていくつもりだ。<br>
                当然、現時点ではカテゴリー機能とかタグ機能とかといったものはないので、とにかく思い立ったことはなんでも「THOUGHTS」にまとめていくつもりだ。<br>
                <br>
                以前にもYoutubeでライブ実況を試してみたり、色々と挑戦してきて全て三日坊主で終わった私だが、今回は果たしてどこまで持つのか、
                是非とも私以外の間で賭けでもしながら楽しんで見守ってほしい。<br>
                それでは、本記事はこんなところで終わりである。<br>
                「ページの先頭に戻る」ボタンだとか「記事一覧」ボタンとか、そういったものはないので、
                他のページを見たい時には左上のメニューバーを経由してもらうことになる。<br>
                <br>
                以上
                <br>
            </p>
        </div>
    </div>
    <div class="q-pa-md items-start q-gutter-md">
        <div class="text-left text-h5 article_headline">COMMENTS</div>
    </div>
    <div v-if="comments?.length === 0" style="font-size: 18px; margin-left: 20px;">コメントなし</div>
    <div v-for="comment in comments" :key="comment" class="comment_section">
        <q-card class="my-card bg-secondary text-white">
            <q-card-section>
                <div class="text-subtitle1">({{ comment.historyCommentId }}) {{ comment.historyName }}</div>
                <div class="text-subtitle2">{{ comment.historyTime }}</div>
            </q-card-section>

            <q-card-section class="text-subtitle1">
                {{ comment.historyText }}
            </q-card-section>

            <q-separator dark />

            <q-card-actions align="right">
                <q-btn flat @click="liked"><q-icon name="thumb_up_off_alt"></q-icon>({{ comment.historyLiked }})</q-btn>
            </q-card-actions>
        </q-card>
    </div>
    <div class="q-pa-md" style="max-width: 400px">
        <q-form
            @submit="onSubmit"
            @reset="onReset"
            class="q-gutter-md"
            >
            <q-input
                outlined
                v-model="name"
                label="ニックネーム *"
                hint="コメント欄に表示される名前"
                lazy-rules
                :rules="[ val => val && val.length > 0 || '必須項目です。']"
            />

            <q-input
                outlined
                type="textarea"
                v-model="text"
                label="コメント *"
                :rules="[ val => val && val.length > 0 || '必須項目です。']"
            />

            <q-toggle v-model="accept" color="purple-5" label="本当に送信しますか？" />

            <div>
                <q-btn label="送信" type="submit" color="purple-5"/>
                <q-btn label="リセット" type="reset" color="purple-5" flat class="q-ml-sm" />
            </div>
        </q-form>
    </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from "vue";
    import { useQuasar } from "quasar";

    //ページを増やすときはここを必ず変える！
    const pageId = ref<string>('1');

    const $q = useQuasar();
    const name = ref<any>('');
    const text = ref<any>('');
    const accept = ref<boolean>(false);

    //コメント一覧
    const comments = ref<Array<any>>([]);

    // 画面読み込み時に実行
    onMounted(async () => {

        //GASにリクエスト送信
        const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            body: `page_id=${pageId.value}`,
        };

        const promise = await fetch("https://script.google.com/macros/s/AKfycbwbsbS1aOhLjrBFW652ieIVY27RbpkLqcYCgJO1R3JSswSXJtuB9-4qY8HhwGL12UCH/exec", requestOptions)
        const data = await promise.json();

        if(data){
            // 結果を挿入
            comments.value = data.res.map(function (value: any) {
                return {
                    historyCommentId: value.comment_id,
                    historyName: value.name,
                    historyText: value.text,
                    historyTime: value.time,
                    historyLiked: value.liked,
                };
            });

        }else{
            $q.notify({
                color: 'red-5',
                textColor: 'white',
                icon: 'warning',
                message: 'コメントの読み込みにエラーが発生しました。'
            });
        }

    })


    async function onSubmit () {
        if (accept.value !== true) {

            $q.notify({
                color: 'red-5',
                textColor: 'white',
                icon: 'warning',
                message: '「本当に送信しますか？」にチェックしてください'
            })

        }else{

            let date = new Date();
            let time = ref<string>(date.toLocaleString());

            //GASにリクエスト送信
            const requestOptions = {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `page_id=${pageId.value}&comment_id=${comments.value.length + 1}&name=${name.value}&text=${text.value}&time=${time.value}&liked=0`,
            };

            const promise = await fetch("https://script.google.com/macros/s/AKfycbwchV_5zaDRk6nXZNhksLyFy5NFAJKrR73dg7eoEw7fXlgFgxsX1Z8AY5gWU-TnOXvPzQ/exec", requestOptions)
            const data = await promise.json();

            if(data.type == 'ok'){
            
                //送信完了通知
                $q.notify({
                    color: 'green-4',
                    textColor: 'white',
                    icon: 'cloud_done',
                    message: '送信しました'
                });

                comments.value[comments.value.length] = {
                    historyCommentId: comments.value.length + 1,
                    historyName: name.value,
                    historyText: text.value,
                    historyTime: time.value,
                    historyLiked: '0',
                };

                onReset();
            }else{
                $q.notify({
                    color: 'red-5',
                    textColor: 'white',
                    icon: 'warning',
                    message: 'エラーが発生しました。'
                });
            };
        };
    }

    function onReset (){
        name.value = ''
        text.value = ''
        accept.value = false
    }

    function liked () {
        $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'thumb_up_off_alt',
            message: 'いいね機能近日実装予定'
        });
    }
</script>
<style scoped>
    blockquote {
        margin: 0;
    }

    blockquote p {
        padding: 15px;
        background: #eee;
        border-radius: 5px;
    }

    strong{
        font-weight: bold
    }

    .responsive_flex{
        display: flex;
    }

    .insert_img{
        height: 400px;
        margin-left: 10px;
    }

    .comment_section{
        max-width: 400px; 
        margin-left: 10px;
        margin-bottom: 10px;
    }

    @media screen and (max-width: 1024px){
        div.responsive_flex{
            display: block;
        }
        div.insert_img{
            margin-bottom: 10px;
            height: 200px;
        }
        div.comment_section{
            max-width: 90%; 
            margin-left: 5%;
            margin-bottom: 10px;
        }
    }
</style>