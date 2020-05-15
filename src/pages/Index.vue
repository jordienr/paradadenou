<template>
<div>
  <div class="layout">
    <Hero />
  </div>
  <g-image class="caracol" width="80" v-bind:style="{ left: caracolPosition + 'px' }" src="~/assets/logo.svg"></g-image>
  <div class="fw-layout" id="wheretofindus">
    <WhereToFindUs />
  </div>
  <div class="layout">
    <Statement />
  </div>
  <div class="fw-layout">
    <Footer />
  </div>
</div>
</template>

<script>
import Hero from '@/components/Hero'
import WhereToFindUs from '@/components/WhereToFindUs'
import Statement from '@/components/Statement'
import Footer from '@/components/Footer'

export default {
  metaInfo: {
    title: 'Index',
  },
  data() {
    return {
      caracolPosition: 10
    }
  },
  components: {
    Hero,
    WhereToFindUs,
    Statement,
    Footer
  },
  mounted() {
    setInterval(() => {
      this.caracolPosition += 2
    }, 1000)

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();

      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
  },
  methods: {
  }
}
</script>
<style lang="scss" scoped>
.layout {
  max-width: 1100px;
  margin: auto;
}
.caracol {
  margin-bottom: -.7rem;
  position: relative;
  transition: .1s;
}
</style>