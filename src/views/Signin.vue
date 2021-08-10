<template>
  <v-container fill-height>
    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card class="elevation-12">
          <v-app-bar dark color="primary">
            <v-app-bar-title>ログイン</v-app-bar-title>
          </v-app-bar>
          <v-card-text>
            <v-form ref="form" v-model="valid">
              <v-text-field
                name="email"
                label="Email"
                type="email"
                v-model="email"
                :rules="emailRules"
                required
                data-cy="signinEmailField"
              ></v-text-field>
              <v-text-field
                name="password"
                label="Password"
                type="password"
                data-cy="signinPasswordField"
                v-model="password"
                :rules="passwordRules"
                required
              ></v-text-field>
            </v-form>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="#2195F2"
              :disabled="!valid"
              @click="submit"
              class="white--text"
              >ログイン</v-btn
            >
            <v-btn @click="submitGoogle">
              Googleアカウントでログイン
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  name: "Signin",
  data() {
    return {
      valid: false,
      email: "",
      password: "",
      emailRules: [
        v => !!v || "メールアドレスを入力してください",
        v => /.+@.+/.test(v) || "正しいメールアドレスを入力してください"
      ],
      passwordRules: [
        v => !!v || "パスワードを入力してください",
        v => v.length >= 8 || "パスワードは8文字以上で入力してください"
      ]
    };
  },
  methods: {
    submit() {
      if (this.$refs.form.validate()) {
        this.$store.dispatch("userLogin", {
          email: this.email,
          password: this.password
        });
      }
    },
    submitGoogle() {
      this.$store.dispatch("userLoginGoogle");
    }
  }
};
</script>
