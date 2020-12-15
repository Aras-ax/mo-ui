export default {
  name: "mo-row",
  props: {
    gutter: {
      type: [Number, String],
      default: 0,
      validator(val) {
        val = parseInt(val);
        if (val < 0) {
          // eslint-disable-next-line
          console.error("[mo-row]的[gutter]属性必须大于零");
          return false;
        }
        if (val % 2 !== 0) {
          // eslint-disable-next-line
          console.warn("[mo-row]的[gutter]属性建议设成偶数");
          return false;
        }
        return true;
      }
    },
    tag: {
      type: String,
      default: "div"
    }
  },
  computed: {
    style() {
      let style = {};
      if (this.gutter) {
        style.marginLeft = `-${this.gutter / 2}px`;
        style.marginRight = `-${this.gutter / 2}px`;
      }
      return style;
    }
  },
  render(h) {
    return h(
      this.tag,
      {
        class: ["mo-row"],
        style: this.style
      },
      [this.$slots.default]
    );
  }
};
