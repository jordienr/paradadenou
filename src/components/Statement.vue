<template>
<div class="statement">
    <h2>What we offer</h2>
    <p>🥩 <span>Local,</span> high quality ingredients</p>
    <p>👩🏼‍🍳 <span>Homemade,</span> flavorfull Mallorcan dishes</p>
    <p>🍳 </span></span> <span>Whatever you want.</span> If you bring us ingredients from the market we will cook them for you however you want</p>
</div>
</template>
<script>
export default {
    name: "Statement"
}
</script>

<style lang="scss" scoped>
.statement {
padding: 2rem 0;
p {
    font-size: 1.2rem;
    padding: 1rem;
}
p span {
    box-shadow: inset 0 -12px rgb(236, 240, 255);
}
}
</style>