<template>
    <div class="service" id="usluga">
        <div class="container service__wrap">
            <h2 class="service__wrap-title" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1000">{{ $t('usluga') }}</h2>
            <p class="service__wrap-desc" data-aos="fade-down"
     data-aos-easing="linear"
     data-aos-duration="1100">{{ $t('InfoUslugi') }}</p>
            <div class="service__wrap-serveses">
                <div class="service__wrap-serveses-block" data-aos="zoom-in-right" data-aos-duration="1000">
                    <div class="service__wrap-serveses-block-desc">
                        <h2 class="service__wrap-serveses-block-desc-h2">{{ $t('Usluga1title') }}</h2>
                        <p class="service__wrap-serveses-block-desc-p">{{ $t('Usluga1info') }}</p>
                    </div>
                    <img src="../assets/images/serve1.svg" alt="" class="serveses__img">
                </div>
                <div class="service__wrap-serveses-block" data-aos="zoom-in-right" data-aos-duration="1500">
                    <div class="service__wrap-serveses-block-desc">
                        <h2 class="service__wrap-serveses-block-desc-h2">{{ $t('Usluga2title') }}</h2>
                        <p class="service__wrap-serveses-block-desc-p">{{ $t('Usluga2info') }}</p>
                    </div>
                    <img src="../assets/images/serve2.svg" alt="">
                </div>
                <div class="service__wrap-serveses-block" data-aos="zoom-in-right" data-aos-duration="2000">
                    <div class="service__wrap-serveses-block-desc">
                        <h2 class="service__wrap-serveses-block-desc-h2">{{ $t('Usluga3title') }}</h2>
                        <p class="service__wrap-serveses-block-desc-p">{{ $t('Usluga3info') }}</p>
                    </div>
                    <img src="../assets/images/serve3.svg" alt="">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
