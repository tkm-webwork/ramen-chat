<template>
  <v-app height="auto">
    <v-container fluid class="profile">
      <v-row align="center" justify="center">
        <v-col cols="12" sm="10" md="8">
          <span v-if="getStateUser.user.displayName" class="white--text">{{
            getStateUser.user.displayName
          }}</span>
          <span v-else class="white--text">ログインユーザー</span>
          <p class="white--text">過去の投稿一覧</p>
          <div v-for="(message, index) in messages" :key="index">
            <v-card
              class="messages-list"
              v-if="message.content.data2.email == getStateUser.user.email"
            >
              <v-card-text class="message-content">{{
                message.content.data1
              }}</v-card-text>
              <v-card-actions>
                <v-row align="center" justify="end">
                  <span>
                    <v-icon color="pink">mdi-heart</v-icon>
                    <span class="good-count">{{ message.content.data3 }}</span>
                  </span>
                  <span v-if="!isAuthenticated">
                    <span></span>
                  </span>
                  <span
                    v-else-if="
                      message.content.data2.email == getStateUser.user.email
                    "
                  >
                    <v-btn
                      text
                      large
                      color="error"
                      @click="deleteMessage(index)"
                      >投稿を削除</v-btn
                    >
                  </span>
                </v-row>
              </v-card-actions>
            </v-card>
          </div>
          <!-- 戻るボタン -->
          <p>
            <v-btn color="#2195F2" to="/message" class="white--text">チャットに戻る</v-btn>
          </p>
          <!-- アカウント削除ボタン -->
          <p>
            <v-btn class="delete-btn white--text" color="#FF5252" @click="deleteUser"
              >アカウント削除</v-btn
            >
          </p>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>

<script>
import firebase from "firebase";

export default {
  name: "Profile",
  data() {
    return {
      user: this.$store.getters.getStateUser,
      userName: "",
      messages: []
    };
  },
  computed: {
    getStateUser() {
      return this.$store.getters.getStateUser;
    },
    isAuthenticated() {
      return this.$store.getters.isAuthenticated;
    },
    getStateUserName() {
      return this.$store.getters.getUserName;
    }
  },
  methods: {
    deleteUser() {
      this.$store.dispatch("userDelete");
    },
    deleteMessage(index) {
      firebase
        .database()
        .ref("messages")
        .child(index)
        .remove();
    }
  },
  mounted() {
    firebase
      .database()
      .ref("messages")
      .on("value", data => (this.messages = data.val()));
  }
};
</script>
