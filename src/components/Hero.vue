<template>
    <header class="hero">
      <div class="images">
        <g-image class="km0" width="100" src="~/assets/km0.svg" alt="Km0" />
        <g-image width="280" src="~/assets/logotype.svg" alt="Logo Parada d9" />
      </div>
      <h1 class="headline">A taste of Mallorca</h1>
      <!-- <a href="#wheretofindus" class="cta">
        Where to find us
      </a> -->
      <div class="images-wrapper">
        <g-image width="160" quality="100" src="~/assets/img/1.png" alt="Foto de comida" />
        <g-image width="160" quality="100" src="~/assets/img/2.png" alt="Foto de comida" />
        <g-image width="160" quality="100" src="~/assets/img/3.png" alt="Foto de comida" />
        <g-image width="160" quality="100" src="~/assets/img/4.png" alt="Foto de comida" />
        <g-image width="160" quality="100" src="~/assets/img/5.png" alt="Foto de comida" />
      </div>
    </header> 
</template>
<script>
export default {
    name: "Hero"
}
</script>
<style lang="scss" scoped>
.hero {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 90vh;
  .images {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .km0 {
      margin-bottom: 1.5rem;
      background: #0D3E87;
      border-radius: 50%;
      padding: .25rem;
    }
  }
  .headline {
    font-weight: lighter;
    margin: 0;
  }
  .cta {
    padding: .8rem 2rem;
    color: #fff;
    background-color: #0D3E87;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.2rem;
    margin-top: 4rem;
    transition: .1s;
    border: solid 2px #0D3E87;
    &:hover {
      transition: .1s;
      background-color: rgb(6, 41, 94);
      color: #fff;
    }
  }
  .images-wrapper {
    display: flex;
    margin-top: 3rem;
    flex-wrap: wrap;
    justify-content: center;
    img {
      margin: 1rem;
      border: solid 1px #d4d4d4;
      transition: .1s;
      box-shadow: 0 4px 12px #eaeaea;
      &:hover {
        transform: scale(1.1);
        transition: .1s;
      }
    }
  }
}
</style>
