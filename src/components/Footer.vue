<template>
    <footer>
        <h2>Come and join us</h2>
        <p>In Santa Catalina Market</p>
        <br>
        <p>Find us on Instagram!</p>
        <a href="/">
            <g-image src="~/assets/instagram.svg"></g-image>
        </a>
    </footer>
</template>
<script>
export default {
    name: "Footer"
}
</script>
<style lang="scss" scoped>
footer {
    padding: 3rem;
    background-color: rgb(37, 37, 37);
    color: white;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    img {
        height: 50px;
    }
}
</style>