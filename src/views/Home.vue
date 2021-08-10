<template>
  <v-container fluid fill-height class="home">
    <v-layout class="home-cont" justify-center align-center column pa-5>
      <!-- pc用 -->
      <div class="hidden-sm-and-down">
        <div class="display-1 white--text text-center mb-9">
          青森県のラーメンについて語り合えるチャットアプリ
        </div>
        <div class="display-4 font-weight-black white--text text-center">
          ら〜めんチャット
        </div>
        <div
          class="
            display-4
            font-weight-black
            white--text
            text-center
            margin-buttom
          "
        >
          Ramen chat
        </div>
      </div>
      <!-- sp用 -->
      <div class="hidden-md-and-up">
        <div class="display-1 white--text text-center mb-9">
          青森県のラーメンについて語り合えるチャットアプリ
        </div>
        <div class="display-2 font-weight-black white--text text-center">
          ら〜めんチャット
        </div>
        <div
          class="
            display-2
            font-weight-black
            white--text
            text-center
            margin-buttom
          "
        >
          Ramen chat
        </div>
      </div>
      <v-btn large color="red" dark to="/message">チャットを開始する</v-btn>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Home",
};
</script>
