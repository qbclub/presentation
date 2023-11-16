<script setup>
import router from '@/router';
import {ref} from 'vue'

let years = ref([
    {
        color: 'cyan',
        year: 'июнь 2021',
        title:"Городская сессия (инициатор ТВЭЛ)",
        description: "трансофрмация сознания",
        path: '/',
        number: 1,
    },

    {
        color: 'pink',
        year: 'февраль 2022',
        title:"создание Союза Смарт Глазов",
        description: "",
        path: '/s2',
        number: 2,
    },
    {
        color: 'pink',
        year: 'апрель 2022',
        title:"Проектная команда туристической платформы",
        description: "",
        path: '/s3',
        number: 3,
    },
    {
        color: 'pink',
        year: 'май 2023',
        title:"Туристическая платформа ГОРОДА И ВЕСИ",
        description: "gorodaivesi.ru",
        path: '/s4',
        number: 4,
    },
    {
        color: 'pink',
        year: 'сентябрь 2023',
        title:"Подключение партнеров",
        description: "совместные проекты и интеграция",
        path: '/s5',
        number: 5,
    },
    {
        color: 'pink',
        year: 'ноябрь 2023',
        title:"Экскурсия",
        description: "Шагая по улице Т.Барамзиной",
        path: '/s6',
        number: 6,
    },
])

</script>
<template>
    <div class="pa-16">


    <v-timeline align="start" side="end">
        <v-timeline-item v-for="(year, i) in years" :key="i" :dot-color="year.color" size="small" @click="router.push(year.path)">
            <template v-slot:opposite>
                <div :class="`pt-1 headline font-weight-bold text-${year.color}`" v-text="year.year">
                
                </div>
            </template>
            <div>
                <h3 :class="`mt-n1 headline font-weight-light mb-4 text-${year.color}`">
                    {{ year.title }}
                </h3>
                <div>
                   {{ year.description }}
                </div>
            </div>
        </v-timeline-item>
    </v-timeline>
</div>
</template>
<style>
.v-timeline-item{
    cursor: pointer;
}
</style>