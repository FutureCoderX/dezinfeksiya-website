<template>
    <div class="banner">
        <div class="container">
            <div class="banner__wrap">
                <div class="banner__wrap-desc">
                    <h1 class="banner__wrap-desc-h1" data-aos="fade-right"
                    data-aos-offset="300"
                    data-aos-easing="ease-in-sine">{{ $t('title') }}</h1>
                    <p class="banner__wrap-desc-text" data-aos="zoom-in-right">{{ $t('description') }}</p>
                    <a href="#loginus" class="btn" data-aos="zoom-in">{{ $t('svyaz') }}</a>
                </div>
                <img src="../assets/images/banner.png" alt="" class="banner__wrap-img" data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>
