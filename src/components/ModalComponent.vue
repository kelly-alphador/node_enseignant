<template>
    <div class="modal-bg" @click.self="closeModal">
		<div class="modal">
            <button @click="closeModal">X</button>
                <slot></slot>
        </div>
    </div>
</template>
<script>
export default {
    methods:{
        closeModal(){
            console.log('on me clique');
            this.$emit('close')
        }
    }
}
</script>
<style scoped>
.modal-bg {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5); /* Translucent black */
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999; /* Ensure it's on top of other content */
}
/* Close button */
.modal button {
    position: absolute;
    top: 0;
    right:0;
    background: #f44336;
    /* border: 1px black solid; */
    color: white;
    width: 50px;
    border: none;
    font-size: 20px;
    cursor: pointer;
    
}
.modal button:hover{
    background: red;
}

/* Styling for 'X' symbol */

/* Modal content */
.modal {
    background-color: #fff; /* White background */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Shadow effect */
    padding: 35px;
    max-width: 80%; /* Adjust as needed */
    max-height: 80%; /* Adjust as needed */
    overflow: auto; /* Enable scrolling if content exceeds dimensions */
    position: relative;
   
}

/* Close modal on clicking outside */
.modal-bg {
    cursor: pointer;
}
       
</style>