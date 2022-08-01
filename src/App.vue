<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'

const count = ref(0)

function queryFansNum() {
  setInterval(() => {
    axios.get('https://itsuki.cupbread.cn/fans_count').then((res) => {
      count.value = res.data.result.follower
    })
  }, 1000)
}

onMounted(() => {
  queryFansNum()
})
</script>

<template>
  <section class="w3l-coming-soon-page">
    <div class="coming-page-info-6">
      <div class="wrapper">
        <div class="coming-block">
          <h1 class="animate__animated animate__rubberBand">星谷樹 Itsuki</h1>
          <p>热爱唱歌的树精灵</p>
          <div class="countdown">
            <div class="countdown__days">
              <div class="number">{{ count }}</div>
              <span class>粉丝数</span>
            </div>
          </div>
        </div>
        <div class="copyright-footer">
          <div class="w3l-copy-right-left">
            <ul class="social">
              <li>
                <a href="https://space.bilibili.com/5816642/"
                  ><span class="fa-brands fa-bilibili"></span
                ></a>
              </li>
              <li>
                <a href="https://music.163.com/#/djradio?id=973300254"
                  ><span class="fa-solid fa-music"></span
                ></a>
              </li>
              <li>
                <a href="https://button.itsuki.club/"
                  ><span class="fa-solid fa-meteor"></span
                ></a>
              </li>
            </ul>
          </div>
          <div class="w3l-copy-right"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
@import './assets/css/style.css';
</style>
