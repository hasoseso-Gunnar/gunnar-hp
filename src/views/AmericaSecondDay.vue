<template>
    <div class="q-pa-md items-start q-gutter-md">
        <div>
            <div class="text-left text-h4" style="font-weight: bold;">アメリカ渡航 2~4日目</div>
            <div class="text-subtitle2">2023/03/01 更新</div>
        </div>
        <q-img src="../assets/picturesForBlogs/atlanta.jpg" class="yokonaga_img"></q-img>
        <div class="text-subtitle2 text-right">これは、私の泊まったホテルの部屋からのアトランタ市街の風景だ。</div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">いざアメリカ</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                ご存じの諸君もいるかと思うが、私はSPSPの年次学会に参加するために2023年2月22日〜27日の間にアメリカに出張することになった。<br>
                諸君もコロナがようやく終焉を迎え、海外旅行に行きたいと思い始めている者もいると思うので、
                今回は特にアメリカ旅行をするに当たって必要な事務的な手続きから、現地の実際の様子に至るまで記し、
                実際に旅行をする人のための指南書として書き記して行こうと思う。<br>
                <br>
                なお、本記事の内容は2023年2月末までの時点の話であり、将来的に書かれていることがアテにならなくなる可能性がある。
                本記事は過去の記事を情勢に応じて頻繁にアップデートする予定なのはないので、古い情報が混じっていることについては予めご了承頂きたい。<br>
                <br>
                それでは、早速語っていこう。
            </p>
        </div>
    </div>
    <div class="q-pa-md items-start q-gutter-md">
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">COMMENTS</div>
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
    const pageId = ref<string>('4');

    const $q = useQuasar();
    const name = ref<any>('');
    const text = ref<any>('');
    const accept = ref<boolean>(false);
    const display = ref<boolean>(false);

    function displayQuote(){
        display.value = true;
    };

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
        width:70%;
        margin-left: 15%;
    }
    .tatenaga_img{
        height: 400px;
        width: 50%;
        margin-left: 25%;
    }

    .comment_section{
        max-width: 400px; 
        margin-left: 10px;
        margin-bottom: 10px;
    }

    .yokonaga_img{
        width: 100%;
        height: 400px;
    }

    @media screen and (max-width: 1024px){
        div.responsive_flex{
            display: block;
        }
        div.insert_img{
            width:90%;
            margin-left: 5%;
        }
        div.comment_section{
            max-width: 90%; 
            margin-left: 5%;
            margin-bottom: 10px;
        }
        div.tatenaga_img{
            height: 300px;
            width: 90%;
            margin-left: 5%;
        }
        .yokonaga_img{
            height: 300px;
            width: 90%;
            margin-left: 5%;
        }
    }
</style>