<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgName"></use>
  </svg>
</template>

<script>
export default {
  name: 'YiSvg',
  props: {
    svgId: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    svgName() {
      return `#sprite-${this.svgId}`;
    },
    svgClass() {
      if (this.className) {
        return `#yi-svg ${this.className}`;
      }
      return 'yi-svg';
    },
  },
};
</script>
