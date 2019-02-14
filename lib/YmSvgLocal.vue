<template>
  <svg :class="svgClass" aria-hidden="true">
    <use :xlink:href="path"></use>
  </svg>
</template>

<script>
export default {
  name: 'YmSvgLocal',
  props: {
    svgPath: {
      type: String,
      required: true,
    },
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
    path() {
      return `${this.svgPath}#${this.svgName}`;
    },
    svgClass() {
      if (this.className) {
        return `#ym-svg ${this.className}`;
      }
      return 'ym-svg';
    },
  },
};
</script>
