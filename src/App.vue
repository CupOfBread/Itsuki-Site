<script setup lang="ts">
  import { ref, onMounted } from 'vue'
  import axios from 'axios'

  const count = ref(0)
  const buttons = ref([
    {
      icon: 'fa-brands fa-bilibili',
      name: 'Bilibili',
      url: 'https://space.bilibili.com/5816642',
    },
    {
      icon: 'fa-solid fa-compact-disc',
      name: '樹的歌切',
      url: 'https://music.163.com/#/djradio?id=973300254',
    },
    {
      icon: 'fa-solid fa-face-grin-tongue-squint',
      name: '樹的按钮',
      url: 'https://button.itsuki.club/',
    },
    {
      icon: 'fa-solid fa-music',
      name: '樹的歌单',
      url: 'https://song.itsuki.club/',
    },
  ])

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
  <div class="bg w-full h-full text-center justify-center flex relative">
    <div class="mt-40 md:mt-44 w-2/3">
      <div class="hvr-wobble-vertical animate__animated animate__rubberBand">
        <h1 class="text-7xl md:text-9xl font-semibold text-white">星谷樹</h1>
        <h1
          class="text-4xl md:text-7xl font-semibold mt-4 text-white font-serif">
          ITSUKI
        </h1>
      </div>
      <hr class="my-4" />
      <div class="text-gray-200 tracking-wider">热爱唱歌的树精灵</div>
      <div
        class="text-white my-6 md:my-10 gap-4 md:flex justify-center text-lg">
        <div class="mb-2 md:mb-0" v-for="(item, index) in buttons" :key="index">
          <a
            :href="item.url"
            class="inline-block md:w-8 w-38 hover:w-36 h-8 border-white border border-opacity-50 hover:border-red-400 duration-300 hover:text-red-400 cursor-pointer align-top group"
            ><i class="group-hover:hidden" :class="item.icon"></i
            ><span
              class="inline-block md:hidden ml-2 group-hover:text-lg group-hover:inline-block duration-700"
              >{{ item.name }}</span
            ></a
          >
        </div>
      </div>
      <div class="text-gray-200 mt-14 md:mt-0 font-bold">
        <i
          class="fa-solid fa-heart mr-2 animate__animated animate__heartBeat animate__infinite text-red-500"></i
        >{{ count.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,') }}
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
  .bg {
    margin: 0;
    padding: 0;
    background-position: top center;
    background-repeat: no-repeat;
    // background-attachment: fixed;
    background-size: cover;
    background-color: #ffe5d9;
    background-image: linear-gradient(0deg, #00000064, #00000064),
      url('https://tva1.sinaimg.cn/large/005I8CXily1h5xsisx8fxj31hc0u00vn.jpg');
  }
  @media (max-width: 768px) {
    .bg {
      background-image: linear-gradient(0deg, #00000064, #00000064),
        url('https://tva1.sinaimg.cn/large/005I8CXily1h5xx0irj94j30i60u00u4.jpg');
    }
  }
</style>
