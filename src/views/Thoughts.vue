<template>
  <div class="q-pa-md items-start q-gutter-md">
  <div>
    <div class="text-center text-h4" style="text-decoration:underline; font-weight: bold;">THOUGHTS</div>
  </div>
    <q-card class="my-card">
      <q-img src="https://cdn.quasar.dev/img/parallax2.jpg" style="height: 350px; width:100%;">
        <div class="absolute-bottom text-right">
          <div class="text-h6">ジャンプ主人公の時流と関係性の考察</div>
          <div class="text-subtitle2">2023/02/18 更新</div>
        </div>
      </q-img>

      <q-card-actions align="right">
        <q-btn flat class="text-subtitle1 text-blue-6">続きを読む</q-btn>
      </q-card-actions>
    </q-card>

    <q-card class="my-card">
      <q-img src="../assets/my_icon.jpg" style="height: 350px; width:100%;">
        <div class="absolute-bottom text-right">
          <div class="text-h6">このサイトとは</div>
          <div class="text-subtitle2">2023/02/18 更新</div>
        </div>
      </q-img>

      <q-card-actions align="right">
        <q-btn flat class="text-subtitle1 text-blue-6" to="./thissite">続きを読む</q-btn>
      </q-card-actions>
    </q-card>
  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>

</style>