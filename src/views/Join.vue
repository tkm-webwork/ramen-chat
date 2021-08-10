<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <!-- head -->
          <v-app-bar dark color="#FF5252">
            <v-app-bar-title>新規登録</v-app-bar-title>
          </v-app-bar>
          <v-card-text>
            <v-form ref="form" v-model="valid" lazy-validation>
              <!-- name -->
              <v-text-field
                name="username"
                label="username"
                type="text"
                v-model="userName"
                data-cy="joinUserNameField"
                required
              ></v-text-field>
              <!-- email -->
              <v-text-field
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                data-cy="joinEmailField"
                required
              ></v-text-field>
              <!-- password -->
              <v-text-field
                name="password"
                label="Password"
                type="password"
                required
                v-model="password"
                :rules="passwordRules"
                data-cy="joinPasswordField"
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <!-- 登録 -->
            <v-btn
              color="#FF5252"
              :disabled="!valid"
              @click="submit"
              class="white--text"
              >登録</v-btn
            >
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Join",
  data() {
    return {
      valid: false,
      userName: "",
      email: "",
      password: "",
      emailRules: [
        (v) => !!v || "メールアドレスを入力してください",
        (v) => /.+@.+/.test(v) || "正しいメールアドレスを入力してください",
      ],
      passwordRules: [
        (v) => !!v || "パスワードを入力してください",
        (v) => v.length >= 8 || "パスワードは8文字以上で入力してください",
      ],
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userJoin", {
          userName: this.userName,
          email: this.email,
          password: this.password,
        });
      }
    },
  },
};
</script>
