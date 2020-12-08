export default {
  name: "mo-col",
  props: {
    span: {
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: "div"
    },
    offset: {
      type: Number,
      default: 0
    },
    padding: {
      type: Number,
      default: 0
    }
  },
  computed: {
    style() {
      let gutter = 0;
      let $parent = this.$parent;
      while ($parent) {
        if ($parent.$options.name === "mo-row") {
          gutter = $parent.gutter;
          break;
        }
        $parent = $parent.$parent;
      }
      let style = {};
      style.padding = `${this.padding}px ${gutter / 2}px`;
      return style;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: [`mo-col__${this.span}`, `mo-col--offset__${this.offset}`],
        style: this.style
      },
      [this.$slots.default]
    );
  }
};
