<template>
    <div class="q-pa-md items-start q-gutter-md">
        <div>
            <div class="text-left text-h4" style="font-weight: bold;">今日から君も！ GPT入門</div>
            <div class="text-subtitle2">2023/04/09 更新</div>
        </div>
        <q-img src="../assets/picturesForBlogs/openai.jpg" class="yokonaga_img"></q-img>
        <div class="text-subtitle2 text-right">約1か月前にGPT-4を発表したOpenAI...。果たしてAIバブルはいつまで続くのか？</div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">熱狂</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                最近、ネット上の話題はChatGPTで持ちきりである。まさに「熱狂」...。ネット上では熱がこもって皆が狂っている状況といっても過言ではない。<br>
                そんなChatGPT(も含めた他のGPTシリーズ)だが、実際に日常生活で有効活用している人は少ないのではないだろうか。
                所詮は10分くらい会話を楽しんだら「まあこんなもんか」と飽きてしまって、それ以降触れていないという人も多いと思う。
                実際のところ、色々カスタマイズして遊ぶならともかく、純粋にAIとの無機質な対話を長い間楽しめる人というのはいないだろう。
                いるとすれば、少々心配である。<br>
                <br>
                なんにせよ、世間では何かと話題が尽きないGPTだが、何かと嘘を吐いたり支離滅裂なことを言い出したり専門的な知識が不足していたり...。<br>
                所詮はまだ「その程度」である、と多くの人が認識しているだろう。<br>
                <br>
                しかしながら、今はまだ「その程度」のGPTだが、近い将来その能力が飛躍的に向上することもありえないことではない。
                そんな状況になった時、君はAIを「利用する側」にいるのか？それとも「利用される側」にいるのか？まあ、煽るだけ煽ったが、そんなことはその時になったら考えればよいのかもしれない。<br>
                しかしながら、私のようなミーハーな人間はこういった目新しいものに飛びついてしまう、何とも仕方のない生物なのだ。<br>
                <br>
                そこで、今回この記事では(実生活が忙しくて少し後れを取ってしまったが)<strong>「無料で」</strong>今話題の<strong>「ChatGPT」</strong>を<strong>「超簡単に」</strong>Webアプリケーションに組み込んでしまえるテクニックを伝授しよう。<br>
                <br>
                ただ、今回の記事は完全な素人でも理解できる説明にはなっていない点だけご了承願いたい。
                仮に、今回のスクリプトをゼロから説明するとなると、一つの教科書が出来上がるくらいの分量になってしまうからだ。<br>
                今回は実際にHTMLやCSS、JavaScriptを用いてWebページを作成したことがある「初級～中級者」くらいを対象としているので悪しからず。<br>
                <br>
                そんなことはどうでもいいから、できたものだけ見せてくれ、という短気な者も諸君らの中にはいるだろう。
                そのため、とりあえず最初に実際に出来上がったものを以下に載せるので、実際に触ってみて楽しんでみてほしい。<br>
                <br>
                それでは、早速やっていこう。
            </p>
        </div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">使用方法 / 注意事項</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                ・「メッセージ」欄に文字を入力し、「送信」ボタンを押すことでテキストが送信される。<br>
                ・無料版のAPIなので、返信はかなり遅い。読み込みが長いのはバグではないので気長に待つべし。<br>
                ・サイトの仕様上、ページを更新すると会話はリセットされるので注意。<br>
                ・一度に送信する文字数が多いと、エラーが返ってくるので、送る内容は1000文字以内が望ましい。<br>
                ・何か不具合が発生した場合は、トップページの「改善案・技術的アドバイス」より不具合の内容を教えてほしい。<br>
                <br>
            </p>
        </div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">今回実際に作成したbot君</div>
        <q-card class="q-pb-lg">
            <div class="q-pa-md row justify-center">
                <div style="width: 80%;">
                    <diV v-for="thread in threads">
                        <q-chat-message
                            :name= thread.name
                            :avatar=thread.avatar
                            :text=thread.thread
                            :sent=thread.sent
                            bg-color="grey-2"
                        />
                    </diV>
                    <q-chat-message
                        bg-color="grey-2"
                        name="bot君"
                        avatar="https://cdn.quasar.dev/img/avatar2.jpg"
                        v-if="botkunLoading"
                    > 
                        <q-spinner-dots size="2rem" />
                    </q-chat-message>
                </div>
            </div>
            <div style="width: 80%; margin-left: auto; margin-right: auto;">
                <q-input                
                    outlined
                    dense
                    v-model="message[0]"
                    label="メッセージ"
                    icon="send"
                   >
                    <template v-slot:after>
                        <q-btn 
                            flat 
                            dense
                            label="送信"
                            type="submit"
                            @click="sendGPTmessage"
                        />
                    </template>
                </q-input>
            </div>
        </q-card>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">フロントエンド</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                さて、いかがだっただろうか。<br>
                ここからは上記のbotをどのように作成したかの説明を行っていく。<br>
                こういった技術には全く興味がない者も諸君らの中にはいるだろうから、そういった者は記事最後の「おわりに」まで読み飛ばしてしまって構わない。<br>
                <br>
                少々見にくいが以下がフロントエンドでの処理である。<br>
                ※Vue.jsではpre + codeタグを用いたTypeScriptのコードブロックでの表示が上手く行かず、代わりにCodePenでの表示が非常に簡単だったので、そちらを採用した。<br>
                <br>
                    <iframe height="300" style="width: 100%; height: 500px;" scrolling="no" title="Untitled" src="https://codepen.io/superhyperhelix/embed/dygPZMe?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/superhyperhelix/pen/dygPZMe">
                    Untitled</a> by はそせそガナー (<a href="https://codepen.io/superhyperhelix">@superhyperhelix</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                <br>
                <br>
                筆者はVue.jsとTypeScriptを使用しているので、馴染みのない諸君には申し訳ない。<br>
                ただ、行っていることは至極シンプルで、inputタグ(今回はq-input)内に入力されたテキストをバックエンド(今回はGAS/Google Apps Script)に送信し、
                バックエンドからのレスポンスをテキスト形式で表示させているに過ぎない。<br>
                今回はチャットbotのようなUIにしたかったので色々とゴチャついているが、この処理がベースとなっている。<br>
                <br>
                なお、今回はわざわざバックエンドを用意しているが、実はフロントエンドで処理を完結させることもできる。<br>
                しかし、フロントだけで処理を完結させるとなると個人のAPIキーを公開することとなり、セキュリティ的に脆弱性が生まれる。
                そのため、有料のプランに加入している者ならば、なおさらバックエンドを用意する必要があるだろう。<br>
                以上のことを踏まえ、今回はそういった観点からも参考となりそうなコードを記述してみた。<br>
                <br>
            </p>
        </div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">バックエンド</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                さて、こちらが簡易的に用意したバックエンド(GAS)のコードである。<br>
                <br>
                    <iframe height="300" style="width: 100%; height: 500px;" scrolling="no" title="Untitled" src="https://codepen.io/superhyperhelix/embed/OJBPOje?default-tab=js" frameborder="no" loading="lazy" allowtransparency="true" allowfullscreen="true">
                    See the Pen <a href="https://codepen.io/superhyperhelix/pen/OJBPOje">
                    Untitled</a> by はそせそガナー (<a href="https://codepen.io/superhyperhelix">@superhyperhelix</a>)
                    on <a href="https://codepen.io">CodePen</a>.
                    </iframe>
                <br>
                <br>
                多少の心得のある者が読めば、特に難しい内容ではないと思う。<br>
                先述のOpenAIのAPIキーの発行方法は、<a href="https://auto-worker.com/blog/?p=6988">こちら</a>のサイトを参考にするのがよいだろう。<br>
                また、ChatGPTのAPIに対するjsでのリクエスト方法に関しては<a href="https://atmarkit.itmedia.co.jp/ait/articles/2303/24/news029.html">こちら</a>のサイトを参考にした。
                まずハンズオンでWebアプリケーションに実装してみるのには、この方法が一番シンプルだろう。<br>
                こちらの内容か、上記の私のコードをGAS(Google Apps Script)のスクリプトエディタにコピペすれば、お手軽バックエンドの完成だ。<br>
                もし諸君の中で、特にChatGPTのWebアプリへの実装等は望んでおらず個人で楽しみたいものがいれば、pythonでの記述の方が簡単かもしれない。<br>
                そして、もちろんAWSやGoogle Firebaseなどのリッチなものを使える環境にあるブルジョワジーの諸君に関しては、GASなどケチなものを使わず、
                そちらを使った方がよいだろう。あくまで今回は「無料」で行えることに重点を置き、GASでの実装方法を紹介した。<br>
                <br>
                しかし、実は上記の手順を踏んだだけでは、GASを外部から叩くことはできない。
                意外と知られていないが、GASはWebアプリケーションとしてデプロイすることで、URLが発行され、そこに対してリクエストを送信できるようになる。<br>
                これについては、<a href="https://auto-worker.com/blog/?p=3565">こちら</a>の記事などで詳しいことが記述されているので、興味がある者は参考にしてほしい。<br>
                <br>
                なお、今回は行っていないが、requestOptionsのpayloadオブジェクト内でmessagesの内容を定義する際に{"role":"user", "content":message}の直前に
                {"role":"system", "content":"xxxx"}といったオブジェクトを加えることで、system権限を用いてChatGPTに対して絶対命令を付け加えることが可能である。<br>
                例えば、<pre><code> let requestOptions = {
    'muteHttpExceptions' : true,
    'headers': headers, 
    'method': 'POST',
    'payload': JSON.stringify({
    'model': 'gpt-3.5-turbo',
    "messages": [
        {"role":"system", "content":"あなたは一流のビジネスマンです。どんなメッセージに対しても生産性が高く、最も効率の良い返答をしてください。"},
        {"role": "user", "content": message}
    ]})
};</code></pre>
                といった具合にリクエスト内容を書き換えてあげれば、ChatGPTに対してキャラ設定などをしてあげることもできる。他にも、<br>
                <br>
                「漢字の読み仮名も含めて『ち』『や』『つ』『と』の文字が絶対に含まれないように返答をしてください。」<br>
                「どんなメッセージに対しても、必ずクスッと笑えるジョークを一言付け加えて返答を行ってください。」<br>
                「会話の形式がしりとりになるよう、必ずユーザーの文末の文字を返答の文頭に加えた上で自然な返答をしてください。」<br>
                <br>
                といった形で様々な縛りを課すこともできる。とにかく、自由自在にカスタマイズできるってことだ。<br>
                これを少し応用すれば、カスタマーサポート用のチャットbotを既存サービス等に導入することも可能だろう。<br>
                是非とも諸君らには創意工夫を凝らして、実際に活用してほしい。<br>
            </p>
        </div>
        <div class="text-left text-h5" style="font-weight: bold; margin-top: 30px;">おわりに</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                今回は、あの<strong>「ChatGPT」</strong>を<strong>超簡単</strong>に<strong>完全無料</strong>で実装する方法を紹介した。<br>
                もうすでにネット上では旬が去ってしまった話題だったかもしれないが、少しでも誰かにインスピレーションを与えることができていれば幸いである。<br>
                今回はあくまで「入門編」だったので、もし私の方でも余裕ができればGPT-3を用いた「Fine-Tuning」や「Embedding」を通した追加学習済みGPTの作成方法や、
                より高度なWebアプリケーションへの組み込みを解説するかもしれない。<br>
                まだ未定ではあるが、諸君らには首を長くして待っていて欲しい。<br>
                <br>
                最後にChatGPTに関して個人的な所感を述べると、正直まだ今はAIの黎明期だと思う。
                今回の記事を読んでもチンプンカンプンな読者も多いだろうし、AIというのはまだ多くの人々にとって手の届かない場所にある。
                ChatGPTも所詮はただのちょっとした物知り博士だ。<br>
                <br>
                ここで、少し昔の話をしよう。卓上計算機──つまりは電卓のことだが、諸君らは電卓(計算機)が1800年代にはすでに発明されていたことをご存知だろうか？<br>
                もちろん、コンピュータの発明以前なので、今のようなボタンがあって液晶パネルがあって...というものではなく手回し式の計算機であった。
                (少なくとも1900年代初頭に日本で発明されたタイガー手動式計算機はそういう形状だった)
                なんにせよ計算機というものは比較的早いうちから存在していたのだ。<br>
                しかし、当然のことながら計算機、それこそ電卓が一般家庭に普及するようになるのは、1970～80年代頃である。<br>
                それまで手回し式の計算機などが爆発的に普及しなかったのは価格や使用する際の難易度など、様々な障壁があったからだろう。<br>
                1970年に発売された最後のタイガー手動式計算機は当時の物価で35,000円ほどしたらしい。今ならば2倍ほどの価格だろうか。(<a href="https://www.tiger-inc.co.jp/temawashi/temawashi4.html">※出典</a>)<br>
                当然「使いづらくて」「高い」物は家になど置いておかないし、世の中全般に普及もしない。<br>
                <br>
            </p>
        </div>
        <q-img src="../assets/picturesForBlogs/tiger_calculator.jpg" class="yokonaga_img"></q-img>
        <div class="text-subtitle2 text-right">先述のタイガー手回し式計算機。レトロ感がオシャレだけど使いにくそう。</div>
        <div>
            <p style="font-size: 1rem; line-height: 180%;">
                <br>
                そう、私のChatGPTに対する印象はこの「手回し式計算機」なのだ。<br>
                確かに便利なのだが、ほぼすべての人々に行き渡るほどの「手軽さ」と「性能」そして「シンプルさ」を兼ね備えていない。<br>
                現在、ChatGPTからより精度の高い回答を得るために様々なプロンプトの方法が検討されているが、
                プロンプトが「呪文」と揶揄されるように、その複雑性は非常に高まっており逆に一般の人がアクセスしづらくなっているだろう。<br>
                <br>
                では、ChatGPTを含めたAI全般が「電卓」になるときはいつなのか。あるいは、<strong>シンギュラリティはいつ来るのか。</strong><br>
                それは、人間側が「誰でも」「簡単に」使用することができ、AI側が「完全に人間の意図を理解」できるようになり、
                なおかつAIによる「自己学習」が可能になったタイミングだろう。<br>
                まぁ、簡単に言えば四次元ポケットのないドラえもんのようなものを想像してもらえば、それが私のイメージに近いと思われる。<br>
                「そんなもの簡単にできるわけがないだろう」と思う諸君もいるだろうが、筆者自身は倫理的な問題を抜きにすれば今後10年以内、
                いや下手をすればそれよりも早く以上の要件を満たすAIの技術が確立されると考えている。<br>
                なぜそう言えるのか、個人的には現在のハードウェアのとてつもないスピードでの進化と膨大な学習データの蓄積が将来的に可能にすると憶測している。<br>
                まぁ、語りだせばキリがないのでこの辺にしておくが、私が生きている間にAIはもう2,3回大きな進化を遂げることは間違いないだろう。<br>
                <br>
                なんにせよ、GPTに過度な期待はしていないが、この先の「AI」に対する期待はしている側の人間だということは知っておいて貰いたい。<br>
                諸君らはどうだろうか？今のところコメント欄への書き込みが無くて寂しいので、ここまで読んでくれた狂信的な私のファンは所感を是非とも書いてほしい。<br>
                <br>
                では、最後は少し話が脱線してしまったが、今回の記事はこれにて締めくくりたい。<br>
                <br>
                以上。<br>
                <br>
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
    const pageId = ref<string>('7');

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
    const message = ref<Array<string>>(['']);
    const botkunLoading = ref<boolean>(false);
    const threads = ref<Array<any>>([
        {
            name:'bot君',
            thread:['なんでも話しかけてね！'],
            avatar:'https://cdn.quasar.dev/img/avatar2.jpg',
            sent:false,
        }
    ]);

    //GPTメッセージ送信時の処理
    async function sendGPTmessage(){

        botkunLoading.value = true;

        // 結果を挿入
        threads.value.push({
            name:'諸君',
            thread: message.value,
            avatar:'https://cdn.quasar.dev/img/avatar4.jpg',
            sent:true,
        });

        //GASにリクエスト送信
        const requestOptions = {
            method: 'POST',
            headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
            body: `message=${message.value[0]}`,
        };

        message.value = [''];

        const promise = await fetch("https://script.google.com/macros/s/AKfycbzxPJHFTRwVBQ_uluyIc1LEXu2QaUSGKAzEZQb9PssIXItoMzdF1HuglTMBFELeMWhR/exec", requestOptions);
        const data = await promise.json();

        // レスポンスを挿入
        threads.value.push({
            name:'bot君',
            thread:[data.res],
            avatar:'https://cdn.quasar.dev/img/avatar2.jpg',
            sent:false,
        })

        botkunLoading.value = false;
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
</style>