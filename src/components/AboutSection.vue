<template>
    <div class="about" id="aboutus">
        <div class="container about__wrap">
            <h2 class="about__wrap-title">{{ $t('about') }}</h2>
            <div class="about__wrap-line"></div>
            <div class="about__wrap-serveses">
                <div class="about__wrap-serveses-serves" data-aos="fade-up-right" data-aos-offset="200">
                    <img src="../assets/images/fast.svg" alt="" class="about__wrap-serveses-img">
                    <h3 class="about__wrap-serveses-serves-name">{{ $t('opit') }}</h3>
                    <p class="about__wrap-serveses-serves-desc">{{ $t('infoOpit') }}</p>
                </div>
                <div class="about__wrap-serveses-serves" data-aos="fade-up-right" data-aos-offset="150">
                    <img src="../assets/images/img2.svg" alt="" class="about__wrap-serveses-img">
                    <h3 class="about__wrap-serveses-serves-name">{{ $t('opit1') }}</h3>
                    <p class="about__wrap-serveses-serves-desc">{{ $t('infoOpit1') }}</p>
                </div>
                <div class="about__wrap-serveses-serves" data-aos="fade-up-right" data-aos-offset="100">
                    <img src="../assets/images/img3.svg" alt="" class="about__wrap-serveses-img">
                    <h3 class="about__wrap-serveses-serves-name">{{ $t('opit2') }}</h3>
                    <p class="about__wrap-serveses-serves-desc">{{ $t('infoOpit2') }}</p>
                </div>
            </div>
        </div>
        <UnderAboutBanner />
    </div>
</template>

<script>
import UnderAboutBanner from './UnderAboutBanner.vue'
    export default {
        components: {
            UnderAboutBanner
        }
    }
</script>
