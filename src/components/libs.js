export function trim(string) {
  return (string || "").replace(/^[\s\uFEFF]+|[\s\uFEFF]+$/g, "");
}

export function hasClass(el, cls) {
  if (!el || !cls) return false;
  if (cls.indexOf(" ") !== -1)
    throw new Error("className should not contain space.");
  if (el.classList) {
    return el.classList.contains(cls);
  }
  return (" " + el.className + " ").indexOf(" " + cls + " ") > -1;
}

/**
 * @description
 * @param {Element} el
 * @param {string} cls
 * @returns
 */
export function addClass(el, cls) {
  if (!el) return;
  let curClass = el.className;
  let classes = (cls || "").split(" ");

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.add(clsName);
    } else if (!hasClass(el, clsName)) {
      curClass += " " + clsName;
    }
  }
  if (!el.classList) {
    el.className = curClass;
  }
}

export function removeClass(el, cls) {
  if (!el || !cls) return;
  let classes = cls.split(" ");
  let curClass = " " + el.className + " ";

  for (let i = 0, j = classes.length; i < j; i++) {
    let clsName = classes[i];
    if (!clsName) continue;

    if (el.classList) {
      el.classList.remove(clsName);
    } else if (hasClass(el, clsName)) {
      curClass = curClass.replace(" " + clsName + " ", " ");
    }
  }
  if (!el.classList) {
    el.className = trim(curClass);
  }
}

export const on = (function() {
  if (document.addEventListener) {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.addEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event && handler) {
        element.attachEvent("on" + event, handler);
      }
    };
  }
})();

/* istanbul ignore next */
export const off = (function() {
  if (document.removeEventListener) {
    return function(element, event, handler) {
      if (element && event) {
        element.removeEventListener(event, handler, false);
      }
    };
  } else {
    return function(element, event, handler) {
      if (element && event) {
        element.detachEvent("on" + event, handler);
      }
    };
  }
})();

/**
 * @description 获取光标位置
 * @param {*} ctrl 输入框dom节点
 * @returns 光标在输入框的位置
 */
export function getCursorPos(ctrl) {
  let Sel,
    doc = document,
    CaretPos = 0;
  //IE Support
  if (doc.selection) {
    ctrl.focus();
    Sel = doc.selection.createRange();
    Sel.moveStart("character", -ctrl.value.length);
    CaretPos = Sel.text.length;
  } else if (ctrl.selectionStart || ctrl.selectionStart === 0) {
    CaretPos = ctrl.selectionStart;
  }
  return CaretPos;
}

export function setCursorPos(ctrl, pos) {
  var range;

  if (ctrl.setSelectionRange) {
    ctrl.focus();
    ctrl.setSelectionRange(pos, pos);
  } else if (ctrl.createTextRange) {
    range = ctrl.createTextRange();
    range.collapse(true);
    range.moveEnd("character", pos);
    range.moveStart("character", pos);
    range.select();
  }
}

/**
 * @description 两数相减
 * @param {Number} num1 必须为数字
 * @param {Number} num2 必须为数字
 * @returns 返回两数相减的值
 */
export function accSub(num1, num2) {
  let precision1 = getPrecision(num1),
    precision2 = getPrecision(num2),
    maxPrecision = Math.max(precision1, precision2),
    precisionFactor = Math.pow(10, maxPrecision),
    val1 = parseInt(num1 * precisionFactor, 10),
    val2 = parseInt(num2 * precisionFactor, 10);

  return (val1 - val2) / precisionFactor;
}

export function getPrecision(value) {
  if (value === undefined) return 0;
  const valueString = value.toString();
  const dotPosition = valueString.indexOf(".");
  let precision = 0;
  if (dotPosition !== -1) {
    precision = valueString.length - dotPosition - 1;
  }
  return precision;
}

export function isObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}

export function isArray(obj) {
  return Object.prototype.toString.call(obj) === "[object Array]";
}

export function isUndefinedOrNull(a) {
  return a === undefined || a === null;
}
