<template>
    <div class="modal-bg" @click.self="closeModal">
		<div class="modal">
            <h1>Lorem ipsum dolor sit amet, consectetur adipisicing elit</h1>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
     /* .modal-bg{
        background: rgba(0,0,0,0.5);
        width: 100%;
        height: 100%;
        position: fixed;
        top: 0;
    }
    .modal{
        width: 400px;
        padding: 40px;
        margin: 100px auto;
        background: #fff;
    } */
    /* Modal background */
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

/* Modal content */
.modal {
    background-color: #fff; /* White background */
    border-radius: 5px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.3); /* Shadow effect */
    padding: 20px;
    max-width: 80%; /* Adjust as needed */
    max-height: 80%; /* Adjust as needed */
    overflow: auto; /* Enable scrolling if content exceeds dimensions */
}

/* Close modal on clicking outside */
.modal-bg {
    cursor: pointer;
}
       
</style>