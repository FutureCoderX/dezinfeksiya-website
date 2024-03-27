<template>
    <div class="modal" @click="closeModal" >
        <div class="modal__block" @click.stop="">
            <!-- <button class="modal__block-btn" @click="closeModal">
                <img src="../assets/images/x-10366.svg" alt="" style="height: 25px; width: 25px;">
            </button> -->
            <p class="modal__block-p">Запрос успешно отправлено 
                Ожедайте наших операторов 
                спасибо за доверие  
            </p>
            <p class="modal__block-p2">🎊🎈</p>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return{

            }
        },
        methods:{
            closeModal(){
                this.$emit('close')
            }
        }
    }
</script>
