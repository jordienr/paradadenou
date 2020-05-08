<template>
    <header class="hero">
    <g-image src="~/assets/logotype.svg" alt="Logo Parada d9" />
    <h1 class="headline">A taste of Mallorca</h1>  
    <a href="#wheretofindus" class="cta">
      Where to find us
    </a>
    <div class="images-wrapper">
      <g-image src="~/assets/img/1.png" />
      <g-image src="~/assets/img/2.png" />
      <g-image src="~/assets/img/3.png" />
      <g-image src="~/assets/img/4.png" />
      <g-image src="~/assets/img/5.png" />
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
  padding-top: 4rem;
  img {
    max-width: 300px;
  }
  .headline {
    font-weight: lighter;
    margin: 0;
  }
  .cta {
    padding: .8rem 2rem;
    border-radius: 8px;
    color: #0D3E87;
    text-decoration: none;
    font-weight: bold;
    font-size: 1.4rem;
    border: solid 2px #0D3E87;
    margin-top: 4rem;
    transition: .1s;
    &:hover {
      transition: .1s;
      background-color: #0D3E87;
      color: white;
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
      max-width: 160px;
      box-shadow: 0 4px 12px #eaeaea;
      &:hover {
        transform: scale(1.1);
        transition: .1s;
      }
    }
  }
}
</style>
