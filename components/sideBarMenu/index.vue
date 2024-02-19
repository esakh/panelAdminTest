<script setup lang="ts">
import {list} from "postcss";

const data =ref({
  Features:[
    {
      name:"Tables",
      path:""
    },
    {
      name:"Forms",
      path:""
    },
    {
      name:"Calendar",
      path:""
    },
    {
      name:"Maps",
      path:""
    },
  ],
  pages:[
    {
      name:"Login",
      path:""
    },
    {
      name:"Register",
      path:""
    },
    {
      name:"Forget Password",
      path:""
    },
  ],
  UIElements:[
    {
      name:"Button",
      path:""
    },
    {
      name:"Badges",
      path:""
    },
    {
      name:"Tabs",
      path:""
    },
    {
      name:"Cards",
      path:""
    },
    {
      name:"Alerts",
      path:""
    },
    {
      name:"Progress Bars",
      path:""
    },
    {
      name:"Modals",
      path:""
    },
    {
      name:"Switchs",
      path:""
    },
    {
      name:"Grids",
      path:""
    },
    {
      name:"FontAwesome",
      path:""
    },
    {
      name:"Typography",
      path:""
    },
  ]
})
onMounted(()=>{
  const listMenu = document.querySelectorAll('a.js-arrow')
  const show = document.querySelectorAll('.navbar__sub-list.js-sub-list')
    for(let i = 0 ; i < listMenu.length ; i++ ){
      console.log(i)
      listMenu[i].addEventListener("click" , ()=>{
        console.log(show[i])
        show[i-1].classList.toggle("show")
      })
  }
})
</script>

<template>
  <nav class="navbar-sidebar2 navbar-sidebar3">
    <ul class="list-unstyled navbar__list">
      <li class="active has-sub">
        <nuxt-link class="js-arrow text-decoration-none" to="">
          <i class="fas fa-tachometer-alt"></i>Dashboard
        </nuxt-link>
      </li>
      <li>
        <nuxt-link class="text-decoration-none" to="inbox.html">
          <i class="fas fa-chart-bar"></i>Inbox
        </nuxt-link>
        <span class="inbox-num">3</span>
      </li>
      <li>
        <nuxt-link class="text-decoration-none" to="">
          <i class="fas fa-shopping-basket"></i>eCommerce
        </nuxt-link>
      </li>
      <li class="has-sub">
        <nuxt-link  class="js-arrow text-decoration-none" to="">
          <i class="fas fa-trophy"></i>Features
          <span class="arrow">
            <i class="fas fa-angle-down"></i>
          </span>
        </nuxt-link>
        <ul class="list-unstyled navbar__sub-list js-sub-list">
          <li v-for="(item , index) in data.Features" :key="index">
            <nuxt-link class="text-decoration-none" :to="item.path">{{ item.name }}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="has-sub">
        <nuxt-link  class="js-arrow text-decoration-none" to="">
          <i class="fas fa-copy"></i>Pages
          <span class="arrow">
            <i class="fas fa-angle-down"></i>
          </span>
        </nuxt-link>
        <ul class="list-unstyled navbar__sub-list js-sub-list">
          <li v-for="(item,index) in data.pages" :key="index">
            <nuxt-link class="text-decoration-none" to="login.html">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </li>
      <li class="has-sub">
        <nuxt-link  class="js-arrow text-decoration-none" to="">
          <i class="fas fa-desktop"></i>UI Elements
          <span class="arrow">
            <i class="fas fa-angle-down"></i>
          </span>
        </nuxt-link>
        <ul class="list-unstyled navbar__sub-list js-sub-list">
          <li v-for="(item , index) in data.UIElements" :key="index">
            <nuxt-link class="text-decoration-none" :to="item.path">{{item.name}}</nuxt-link>
          </li>
        </ul>
      </li>
    </ul>
  </nav>
</template>

<style scoped>
.show{
  display: block;
}
</style>