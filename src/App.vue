<template>
  <HeaderSection />
  <AboutSection />
  <ServiceSection />
  <ProofSection />
  <FaqSectionVue />
  <ModalPage @click="isModalOpen = false" v-show="isModalOpen"/>
  <div class="login" id="loginus">
        <div class="container login__wrap">
            <div class="login__wrap-log">
                <h2 class="login__wrap-log-title">{{ $t('otklik') }}</h2>
                <form class="form" @submit.prevent="submitForm">
                    <input type="text" id="name" placeholder="Ваши имя" v-model="name">
                    <input type="tel" id="phone" placeholder="+998 90 123-45-67" v-model="phone">
                    <button class="form__btn" type="submit" @click="isModalOpen = true">{{ $t('otpravit') }}</button>
                </form>
            </div>
            <div class="login__wrap-info">
                <p class="login__wrap-info-text">{{ $t('otklik2') }}</p>
                <!-- <img src="./assets/images/people.svg" alt=""> -->
            </div>
        </div>
    </div>
  <FooterSection />
</template>

<script>
import HeaderSection from "./components/HeaderSection.vue";
import AboutSection from './components/AboutSection.vue';
import ServiceSection from './components/ServiceSection.vue';
import ProofSection from './components/ProofSection.vue';
import FaqSectionVue from './components/FaqSection.vue';
import FooterSection from './components/FooterSection.vue';
import ModalPage from './components/ModalPage.vue';
export default {
  name: "App",
  components: { HeaderSection, AboutSection, ServiceSection, ProofSection, FaqSectionVue, FooterSection, ModalPage },
  data() {
    return {
      isModalOpen: false,
      name: '',
      phone: ''
    }
  },
  methods: {
    handleSubmit() {
      if (this.name && this.phone) {
        this.$emit('submit', this.name, this.phone);
      }
    }
  }
};
</script>
