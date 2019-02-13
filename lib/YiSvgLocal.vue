<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="path"></use>
  </svg>
</template>

<script>
export default {
  name: 'YiSvgLocal',
  props: {
    svgPath: {
      type: String,
      required: true,
    },
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
    path() {
      const svgPath = require(this.svgPath);
      return `${svgPath}#${this.svgId}`;
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
