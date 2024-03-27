<template>
  <header class="header">
    <div class="container">
      <div class="header__wrap">
        <a href="#" class="header__wrap-link">
          <img src="../assets/images/logo.png" alt="">
        </a>
        <div class="menu-toggle" id="mobile-menu" @click="toggleMenu">
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div class="header__wrap-menu"  :class="{ show: showMenu }">
          <ul class="header__wrap-menu-list" style="margin: 0;">
            <li class="header__wrap-menu-list-link"><a href="#" style="text-decoration: none; margin: 0;">{{ $t('glavniy') }}</a></li>
            <li class="header__wrap-menu-list-link"><a href="#aboutus" style="text-decoration: none; margin: 0;">{{ $t('about') }}</a></li>
            <li class="header__wrap-menu-list-link"><a href="#usluga" style="text-decoration: none; margin: 0;">{{ $t('usluga') }}</a></li>
            <li class="header__wrap-menu-list-link"><a href="#faqus" style="text-decoration: none; margin: 0;">{{ $t('faq') }}</a></li>
          </ul>
          <div class="header__wrap-btns" :class="{ show: showMenu }">
            <button class="header__wrap-btns-lang" @click="switchLang">
              {{ $i18n.locale }}
            </button>
          </div>
          <a href="#loginus" class="btn">{{ $t('svyaz') }}</a>
        </div>
      </div>
    </div>
  </header>
  <BannerSectionVue />
</template>

<script>
import BannerSectionVue from './BannerSection.vue';
export default {
  components:{
    BannerSectionVue
  },
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    switchLang() {
      this.$i18n.locale == "ru" ? (this.$i18n.locale = "uz") : (this.$i18n.locale = "ru");
    },
    toggleMenu() {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
