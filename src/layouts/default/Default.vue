<script setup>
import router from '@/router';
import { watch } from 'vue';
import { onMounted } from 'vue';
import { ref } from 'vue'
import { useDisplay } from 'vuetify';

const { mdAndUp } = useDisplay()
let activeIndex = ref(0)


let forward = () => {
  if (activeIndex.value < (years.value.length - 1)) {
    activeIndex.value++
  }
}
let back = () => {
  if (activeIndex.value > 0) {
    activeIndex.value--
  }

}
let selectSlide = (i, path) => {
  activeIndex.value = i;
  router.push(path)
}

let colorForDot = (i) => {
  if (i == activeIndex.value) {
    return "#E91E63"
  }
  if (i < activeIndex.value) {
    return "#00BCD4"
  }
  if (i > activeIndex.value) {
    return "grey"
  }

}

let years = ref([
  {
    color: 'cyan',
    // color: 'grey',
    year: 'июнь 2021',
    title: `Городская сессия <br/> (инициатор ТВЭЛ)`,
    description: "",
    path: '/',

  },
  {
    color: 'cyan',
    // color: 'grey',
    year: '',
    title: `Трансформация сознания`,
    description: "",
    path: '/s1_1',

  },

  {
    // color: 'pink',
    color: 'grey',
    year: 'февраль 2022',
    title: "Cоздание Союза Смарт Глазов",
    description: "",
    path: '/s2',

  },
  {
    color: 'grey',
    year: 'апрель 2022',
    title: "Команда туристической платформы",
    description: "",
    path: '/s3',

  },
  {
    color: 'grey',
    year: 'май 2023',
    title: `Туристическая платформа <br/> "ГОРОДА И ВЕСИ"`,
    description: "gorodaivesi.ru",
    path: '/s4',

  },
  {
    color: 'grey',
    year: 'сентябрь 2023',
    title: "Подключение партнеров",
    description: "совместные проекты и интеграция",
    path: '/s5',

  },
  {
    color: 'grey',
    year: 'ноябрь 2023',
    title: "Экскурсия",
    description: "шагая по улице Т.Барамзиной",
    path: '/s6',

  },
])

let activeSlide = ref(1)


watch(activeIndex, () => {
  let path = years.value[activeIndex.value].path
  router.push(path)
})

onMounted(() => {
  addEventListener("keydown", (e) => {
    if (e.key == 'ArrowRight' || e.key == 'ArrowDown') {
      forward()
    }
    if (e.key == 'ArrowLeft' || e.key == 'ArrowUp') {
      back()
    }
    if (e.code == 'Space') {
      forward()
    }

  }
  )
})
</script>
<template>
  <v-app style="height:100dvh">
    <v-main style="height:90dvh">
      <v-row style="height: 100%;">
        <v-col cols="5" class="d-md-flex justify-center align-center d-none " style="height: 100%;">
          <div class="pa-8" style="max-height: 92dvh; overflow: auto;">
            <v-timeline align="start" side="end">
              <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="colorForDot(i)"
                :class="{ active: i == activeIndex, before: i < activeIndex, after: i > activeIndex }"
                @click="selectSlide(i, year.path)">
                <template v-slot:opposite>
                  <div :class="`pt-1 headline font-weight-bold `" v-text="year.year">

                  </div>
                </template>
                <div>
                  <h3 :class="`mt-n1 headline font-weight-bold `">
                    <span v-html="year.title"></span>
                  </h3>
                  <div>
                    {{ year.description }}
                  </div>
                </div>
              </v-timeline-item>
            </v-timeline>
          </div>
        </v-col>
        <v-col style="max-height: 100dvh; overflow: auto;" cols="12" md="7">
          <h3 class="font-weight-bold active text-center" v-if="!mdAndUp">
            <span v-html="years[activeIndex].title"></span>
            <p class="text-caption">{{years[activeIndex].year}}</p>
          </h3>

          <router-view />
        </v-col>
      </v-row>
    </v-main>
    <v-footer class="d-flex justify-center" absolute height="80">
      <v-btn class="ma-1" @click="back()" v-if="activeIndex!=0">
        назад
      </v-btn>
      <v-btn class="ma-1" @click="forward()" v-if="activeIndex!=years.length-1">
        вперед
      </v-btn>
    </v-footer>
  </v-app>
</template>

<style>
.v-timeline-item {
  cursor: pointer;
}

.active {
  color: #E91E63
}

.before {
  color: #00BCD4
}

.after {
  color: grey;
}
</style>

