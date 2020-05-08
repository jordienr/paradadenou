<template>
<div class="statement">
    <h2>This is what you can get from us</h2>
    <p>1. <span>Local,</span> high quality ingredients</p>
    <p>2. <span>Homemade,</span> flavorfull Mallorcan dishes</p>
    <p>3. <span>Whatever you want.</span> If you bring us ingredients from the market we will cook them for you however you want</p>
</div>
</template>
<script>
export default {
    name: "Statement"
}
</script>

<style lang="scss" scoped>
.statement {
padding: 2rem;
p {
    font-size: 1.2rem;
    font-weight: bold;
    padding: 1rem;
}
p span {
    box-shadow: inset 0 -12px rgb(220, 228, 255);
}
}
</style>