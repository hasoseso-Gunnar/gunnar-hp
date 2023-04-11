<template>
    <div class="q-pa-md items-start q-gutter-md">
        <div>
            <div class="text-left text-h4" style="font-weight: bold;">モテ度チェッカー GPT中級編</div>
            <div class="text-subtitle2">2023/04/12 更新</div>
        </div>
        <q-img src="../assets/picturesForBlogs/motedochecker.jpg" class="yokonaga_img"></q-img>
        <div class="text-subtitle2 text-right">今回作成したモテ度チェッカーのweb版の結果画面。精度はともかくコンセプトはよい感じがする。</div>
        <div class="text-left text-h5 article_headline">自分のモテ度を知りたい！</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                我々は常に他人からの評価を気にしながら、生きている。<br>
                <br>
                社会心理学ではこういった心的過程を「評価懸念」と呼んだりするが、社会生活を行っている人間であれば、個人差はあれど皆持ち併せているものである。<br>
                <br>
                他人からの評価の中でも、特に10代20代の多くの人が気にするのは異性あるいは同性からの「モテ度」ではないだろうか。<br>
                自分は一体どれくらい「モテる」んだろう...。
                普段はクールぶってる男性諸君も、女性からの恋愛対象として自分の評価はどのくらいなのか、一度くらい悶々と考えたことがあるだろう。<br>
                <br>
                <strong>考えたって仕方がないんだから、実際に画面の向こうの諸君がどのくらいのモテ度なのか、AIにズバッと測定してもらおうではないか。</strong><br>
                <br>
                以下に早速「モテ度チェッカー」なるツールを載せておいたので、是非とも使ってみて欲しい。<br>
                そのうえで、その下にツールの作成方法を載せたので、そちらも興味がある者は確認してみてほしい。<br>
                <br>
                また、<a href="../views/howToStartGPT.vue">前回</a>はChatGPT入門編として簡単なチャットbotを作成する方法を紹介した。<br>
                そちらに関してもまだ読んでいない諸君に関しては、是非ともbot君との無味乾燥な会話を楽しんで欲しい。<br>
                <br>
                それでは、早速やってみよう。<br>
                <br>
            </p>
        </div>
        <div class="text-left text-h5 article_headline">モテ度チェッカー(α版)</div>
        <div class="q-gutter-y-md column" style="max-width: 800px">
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.age" 
                :options="options[0]" 
                label="年齢*" 
            />
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.gender" 
                :options="options[1]" 
                label="性別*" 
            />
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.height" 
                :options="options[2]" 
                label="身長(cm)*" 
            />
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.shape" 
                :options="options[3]" 
                label="体型*" 
            />
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.job" 
                :options="options[4]" 
                label="職業*" 
            />
            <q-select 
                clearable 
                color="purple-12" 
                v-model="profile.personality" 
                :options="options[5]" 
                multiple
                label="性格(複数可)*" 
            />
            <q-input 
                clearable 
                color="purple-12" 
                v-model="profile.hobby" 
                label="趣味(自由記述)" 
            />
            <q-input 
                clearable 
                color="purple-12" 
                v-model="character" 
                label="どんな感じの口調でアドバイスを貰いたい？" 
            />
            <q-btn
                label="測定開始！"
                :loading="loading"
                type="submit"
                color="purple-5"
                class="text-h6"
                @click="sendRequestToGPT"
            />

            <p class="text-center">※結果が出るまでに最長で30～40秒ほど掛かります。気長に待ちましょう。</p>
            <p class="text-center" style="margin-top: -10px;">※結果は下の画面に表示されます。</p>
            <q-card class="q-pa-md q-mt-xl">
                <p>あなたのモテ度は...</p>
                <p class="text-h1 text-center" style="margin-bottom: -20px;">{{ score }}</p>
                <p class="text-h4 text-right" style="margin-right: 50px;">点</p>
                <p class="">【bot君からの一言アドバイス】</p>
                <p> {{ advice }}</p>
            </q-card>
        </div>
        <div class="text-left text-h5 article_headline" style="margin-top: 100px;">使用方法 / 注意事項</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                ・各項目に情報を入力し、「測定開始！」ボタンを押すことでAIの計算が始まる。<br>
                ・「*」が付いている項目は必要事項なので注意。<br>
                ・今回は試作品ということで、異性からの「モテ度」を想定に限定したものとなっている。
                決して性的マイノリティへの配慮が足りていない訳ではない。<br>
                ・入力された情報をこちら側で保存すること等は行っていないので、安心してほしい。<br>
                ・表示がバグった時は、もう一度測定ボタンを押すと解決するかもしれない。<br>
                ・AIから結構辛辣なことを言われるので、心の準備が必要。<br>
                ・「どんな口調で～」のところは、ChatGPTに漫画やアニメの学習データがないらしく、
                そういったキャラの口調はあまり再現してくれない。(残念)<br>
                <br>
            </p>
        </div>
        <div class="text-left text-h5 article_headline">作り方(フロントエンド)</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                さて、十分に楽しんでくれただだろうか？<br>
                実際の自分のスペックを入力して一喜一憂している者や、
                嫌いな人の情報を入れてその点数の低さにほくそ笑む者など、楽しみ方は無限大だ。<br>
                ちなみに、筆者の嘘偽りない情報を何回か入れたところ、70～80点の間のことが多かった。
                AIからは「学生だということが減点の理由」とかいう、かなり理不尽なことを言われることが多かった。<br>
                また、職業を「無職」に設定すると途端に10～30点くらいになることから、どうやらAIにとって職業は重要な判断基準らしい。<br>
                <br>
                まぁ、そんなこんなで、私も自分で作っておきながら意外と楽しんじゃったワケだが、これがどういった仕組みで動いているのか、
                気になる者も多いことだと思う。<br>
                基本的には、前回に引き続きフロントエンドはVue.js(Vue3)とTypeScriptで記述しており、
                バックエンドのGoogle Apps Script(GAS)ではGPTのAPI周りの処理を書いているといった感じだ。<br>
                とりあえず以下に、フロントエンド周りの処理を記載しておく。<br>
                <br>
                <br>
                <iframe height="500px" style="width: 100%;" scrolling="no" title="Untitled" src="https://codepen.io/superhyperhelix/embed/XWxbwBr?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                See the Pen <a href="https://codepen.io/superhyperhelix/pen/XWxbwBr">
                Untitled</a> by はそせそガナー (<a href="https://codepen.io/superhyperhelix">@superhyperhelix</a>)
                on <a href="https://codepen.io">CodePen</a>.
                </iframe>
                <br>
                <br>
                リクエストの際にプロフィール情報とキャラ設定を分けているのは、後ほど説明するバックエンド側での処理を簡略化するためだ。<br>
                また、プロフィール情報はオブジェクトをString型に変換したものをそのままバックエンドに渡してしまっている。
                というのも、system権限でChatGPTに「このオブジェクトの内容から判断してください～」と指示をするだけでそのまま理解して処理してくれるので、
                余計な下処理が一切必要ないからだ。<br>
                自然言語処理とは、なるほど偉大なものだ。<br>
                <br>
            </p>
        </div>
        <div class="text-left text-h5 article_headline">作り方(バックエンド)</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                今回大きく変更したのはバックエンドだ。<br>
                厳密には、バックエンドにおける<strong>GPTへの「プロンプト」を大きく変更した。</strong><br>
                プロンプトとは、GPTへ渡すテキストデータ...つまりはGPTへ送る「指示」だと思ってもらえばよい。<br>
                <br>
                前回も紹介したと思うが、GPTにはsystem権限を用いて絶対的な「ルール」を課すことができる。
                例えば、前回は「受け答えを一流のビジネスマンのように」と特定のキャラになりきって返答してもらう例を出した。<br>
                <br>
                では、今回はどのようなプロンプトを渡したのかと言うと、下記を実際に見てもらった方が早いだろう。<br>
            </p>
                <pre><code>let requestOptions = {
    'muteHttpExceptions' : true,
    'headers': headers, 
    'method': 'POST',
    'payload': JSON.stringify({
      'model': 'gpt-3.5-turbo',
      "messages": [
        {"role":"system", "content":`あなたは熟練の結婚相談所の職員です。\n
        あなたはこれからオブジェクト形式で送られてくるプロフィールを「どれくらい異性にモテそうか」という基準で評価し、\n
        0(最低)～100(最高)とした1点刻みの点数をつけ、この後提示するオブジェクトのvalueの「※点数※」部分に出力してください。\n
        また、同時にその点数を出した理由をこの後提示するオブジェクトの「※評価理由※」部分に200文字程度で出力してください。\n
        なお、この「評価理由」の口調は必ず${character}風にしてください。\n
        最後に、出力の形式は必ず{"score":※点数※, "advice": ※評価理由※ }のオブジェクト型とし、それ以外の形式を出力してはいけません。\n
        `},
        {"role": "user", "content": profile}
        ]})
  };</code></pre>
            <p style="font-size: 1rem; line-height: 180%;">
                見づらくて申し訳ないが、これが今回の「モテ度チェッカー」の核心となる部分である。<br>
                ${character}は、フロントから指示のあったキャラクターの名前が入る変数だ。<br>
                <br>
                前回の応用で、「結婚相談所の職員」というキャラ付けを行わせながら出力の形式を指定することで、
                <strong>精度の高い結果を、処理しやすい形で</strong>出力させることに成功している。<br>
                逆に、このルールを課さずに、user権限のみを用いて「上記のプロフィールの人のモテ度を教えてください。」などと指定してしまうと、
                「モテ度は主観的な指標なのでAIである私は評価できません云々」と講釈を垂れ始める。何ともつまらないヤツである。<br>
                <br>
                ※実際に試してみた結果が以下の画像だ。
            </p>
        </div>
        <q-img src="../assets/picturesForBlogs/gpt_is_munou.jpg" style="max-width: 600px;"></q-img>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                user権限ではこんな感じの塩対応をしてくるのだが、system権限でルールを課した途端に
                ご主人様に尻尾を振る犬さながら素直に言うことを聞くようになるのは、少しばかり憐れに思えてくる。<br>
                <br>
                まぁ、とにかく今回言いたかったのは、<strong>system権限でのルールを設定してあげることで期待通りの結果が返ってくるよ</strong>、
                ということだ。これはOpenAIが提供しているChatGPTのコンソール上では行えない(少なくとも筆者は知らない)ので、GPTのAPIを使っている者の特権といったところだろう。<br>
                諸君らも是非、実際に試してみて欲しい。
            </p>
        </div>
        <div class="text-left text-h5 article_headline">まとめ</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                今回の要点としては、system権限の使い方次第でChatGPTでも色々なことができるよ、ということだ。<br>
                <br>
                先日、<a href="https://news.yahoo.co.jp/articles/4fce568441c898a66641a2f3dc73b4f61f702e34">岸田首相とOpenAIのCEOであるSam Altmanが会談をした</a>ことで、
                世間ではより一層「AI旋風」が強く吹き始めたように思える。<br>
                イタリアでは政府がChatGPTの一時的な使用禁止を行っているなど、ヨーロッパ(EU)圏ではGPT規制の気運が高まっている。
                そういった中、OpenAIのCEOが直々に日本にアプローチをしてきたのは非常に幸運なことだろう。<br>
                日本はソフト面での開発に関してはアメリカや中国に比べて後れを取っていると言わざるを得ない。
                しかし、ハード面においてはまだまだ世界を引っ張っていくだけの力を備えていると思う。<br>
                そういった意味において、日本とOpenAI(アメリカ)がwin-winの関係を築くことも不可能ではないだろう。<br>
                <br>
                なんにせよ、経済と技術力が停滞し二進も三進も行かなくなっていた日本にとって、OpenAIの積極的介入は希望の光となることは間違いないだろう。<br>
                これを機に、是非とも日本では一層GAIの開発・自然言語処理の研究・そして機械学習全般の分野が盛り上がることを期待している。<br>
                <br>
                なお、次回は「そもそもChatGPTはどういう仕組みなのか」「ChatGPTで精度の高い返答を得るにはどうすればいいのか」ということを紹介・検討していく。
                後者に関しては正直論文が一本書けるレベルかもしれない。<br>
                加えて、次々回以降はGPT-3における「Embedding」と「Fine-Tuning」の方法について紹介・実演して行きたいと思う。
                これに関しては、GPTの有料プランへの加入が必要となるので、筆者自身が身銭を切っていく壮大なプロジェクトだ。<br>
                <br>
                どちらの内容も是非とも楽しみにしていて欲しい。<br>
                なお、こういった小難しい話に関しては今後は「STUDIES」カテゴリに分類することにした。
                もうちょっと砕けた感じの話は「THOUGHTS」カテゴリに分類していくので、そちらの更新も期待していて欲しい。<br>
                <br>
                ちなみに、先日このHPがGoogleの検索結果に表示されるよう設定を行ったので、私の直接の知り合い以外も閲覧が可能になった。<br>
                つまり、OpenAI関係者が読んでいてもおかしくはないのだ。<br>
                もしこの記事をSam Altman本人が読んでいるようであれば、是非とも私にコンタクトを取ってきてほしい。
                一緒に素晴らしい世の中を作っていくパートナーとして共に歩んでいこうではないか。<br>
                <br>
                では、そんなところで今日のところはこの記事を締めくくりたいと思う。<br>
                以上。<br>
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
    const pageId = ref<string>('8');

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


    //コメント送信時の処理
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
    };

    function onReset (){
        name.value = ''
        text.value = ''
        accept.value = false
    };

    //GPT周りの変数
    const score = ref<string>('--')
    const advice = ref<string>('')
    const loading = ref<boolean>(false);
    const options = ref<Array<any>>([
        ["17歳以下","18","19","20","21","22","23","24","25","26","27","28","29","30","31","32","33","34","35","36","37","38","39","40","41歳以上"],
        ["男性","女性","その他"],
        ["139cm以下","141～145cm","146～150cm","151～155cm","156～160cm","161～165cm","166～170cm","171～175cm","176～180cm","181～185cm","186～190cm","191cm以上"],
        ["痩せ型","やや痩せ型","普通","ややぽっちゃり","ぽっちゃり"],
        ["学生","営業職","事務職","IT職","士業・専門職","フリーランス","公務員","経営者","フリーター","主婦・主夫","無職"],
        ["社交的","内向的","面倒くさがり","大らか","感受性が豊か","マイペース","クリエイティブ","前向き","慎重","大胆","理想主義者","現実主義者","正直者","負けず嫌い","根気強い","繊細","熱血"]
    ])
    const character = ref<string>('');

    interface profileObject {
        age: string;
        gender: string;
        height: string;
        shape: string;
        job: string;
        personality: Array<string>;
        hobby: string;
    }
    const profile = ref<profileObject>({
        age: "",
        gender: "",
        height: "",
        shape: "",
        job: "",
        personality: [],
        hobby: "",
    })

    //GPTメッセージ送信時の処理
    async function sendRequestToGPT(){

        loading.value = true;

        //必須項目が入力されていないとき
        if(profile.value.age == '' || profile.value.gender == '' || profile.value.height == '' || profile.value.shape == '' || profile.value.job == '' || profile.value.personality[0] == ''){
            $q.notify({
                color: 'red-5',
                textColor: 'white',
                icon: 'warning',
                message: '「趣味」以外は必須項目だヨ！'
            })

        }else{
            const requestBody = profile.value;

            character.value = (character.value == "") ? "プロフェッショナル" : character.value;

            //GASにリクエスト送信
            const requestOptions = {
                method: 'POST',
                headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                body: `profile=${JSON.stringify(requestBody)}&character=${character.value}`,
            };

            const promise = await fetch("https://script.google.com/macros/s/AKfycbwpTDxb7Hk0I0LXRE87N3iUO5KAAr-5jrQVDNDDDeImBFRRpVssGyo5ObwoL_CrBvFwVQ/exec", requestOptions);
            const data = await promise.json();

            let obj;
            try{
                obj = JSON.parse(data);
                score.value = obj["score"];
                advice.value = obj["advice"];
            }catch{
                advice.value = data;
            }

            //送信完了通知
            $q.notify({
                color: 'green-4',
                textColor: 'white',
                icon: 'cloud_done',
                message: '結果が出ました！'
            });
        };

        loading.value = false;
    };

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
        height: 600px;
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
    pre code {
        font-size: .8rem;
        margin: 1.5rem 0;
        padding: 0.5rem 0.5rem;
        background-color: #364549;
        color: #e3e3e3;
        width: 100%;
        display: inline-block;
        font-family: Consolas, Menlo, Monaco, -apple-system, BlinkMacSystemFont, "Segoe UI", Meiryo, monospace;
        overflow-x: auto;
        -webkit-overflow-scrolling: touch;
    }

    .article_headline{
        font-weight: bold;
        margin-top: 30px;
        padding: 0.4em 0.5em;
        color: #494949;
        background: #f4f4f4;
        border-left: solid 5px #9c27b0;
        border-bottom: solid 3px #d7d7d7;
    }
</style>