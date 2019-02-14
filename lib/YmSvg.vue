<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="svgId"></use>
  </svg>
</template>

<script>
export default {
  name: 'YmSvg',
  props: {
    svgName: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  computed: {
    svgId() {
      return `#sprite-${this.svgName}`;
    },
    svgClass() {
      if (this.className) {
        return `ym-svg ${this.className}`;
      }
      return 'ym-svg';
    },
  },
};
</script>
