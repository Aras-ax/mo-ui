// 图标默认颜色分类
export const DEFAULT_COLORS = [
  "#ffcd58",
  "#ace06f",
  "#7ee6f2",
  "#6ebbff",
  "#ff7348",
  "#b792f7"
];

// 图表基础配置
export const CHARTBASE_CONFIG = {
  comment: {
    height: 20,
    fontsize: 12
  },
  title: {
    height: 32,
    fontsize: 16
  },
  legend: {
    height: 22,
    fontsize: 14
  }
};

// 坐标轴与文字间的边距
export const PADDING = 3;

// 鼠标悬浮框在鼠标的上方偏移量
export const TIP_OFFSET_TOP = 30;

// 鼠标悬浮框在鼠标的水平方向偏移量
export const TIP_OFFSET_HORIZONTAL = 12;

// 柱图配置
export const BAR_CONFIG = {
  barGap: 2,
  MAX_WIDTH: 50
};

// 贝塞尔曲线相关
export const BezierCurve = {
  va(arr, i, j) {
    return [arr[2 * j] - arr[2 * i], arr[2 * j + 1] - arr[2 * i + 1]];
  },
  dista(arr, i, j) {
    return Math.sqrt(
      Math.pow(arr[2 * i] - arr[2 * j], 2) +
        Math.pow(arr[2 * i + 1] - arr[2 * j + 1], 2)
    );
  },
  getControlPoints(x1, y1, x2, y2, x3, y3, t = 0.5) {
    let v = this.va(arguments, 0, 2);
    let d01 = this.dista(arguments, 0, 1);
    let d12 = this.dista(arguments, 1, 2);
    let d012 = d01 + d12;
    return [
      {
        x: Math.floor(x2 - (v[0] * t * d01) / d012),
        y: Math.floor(y2 - (v[1] * t * d01) / d012)
      },
      {
        x: Math.floor(x2 + (v[0] * t * d12) / d012),
        y: Math.floor(y2 + (v[1] * t * d12) / d012)
      }
    ];
  },
  drawCurvedPath(ctrlPoints, points) {
    let len = points.length;
    let path = "",
      i;
    if (len < 2) return path;
    if (len == 2) {
      path += `M${points[0].x} ${points[0].y} L${points[1].x} ${points[1].y}`;
    } else {
      path += `M${points[0].x} ${points[0].y}`;
      path += ` Q ${ctrlPoints[0].x} ${ctrlPoints[0].y}, ${points[1].x} ${points[1].y}`;
      for (i = 2; i < len - 1; i += 1) {
        path += ` C ${ctrlPoints[2 * (i - 1) - 1].x} ${
          ctrlPoints[2 * (i - 1) - 1].y
        }, ${ctrlPoints[2 * (i - 1)].x} ${ctrlPoints[2 * (i - 1)].y}, ${
          points[i].x
        } ${points[i].y}`;
      }
      path += ` Q ${ctrlPoints[2 * (i - 1) - 1].x} ${
        ctrlPoints[2 * (i - 1) - 1].y
      }, ${points[i].x} ${points[i].y}`;
    }
    return path;
  }
};
