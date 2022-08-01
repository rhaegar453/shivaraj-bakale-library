import styled from 'styled-components';

var colors = {
  primary: '#5800FF',
  secondary: '#0096FF',
  success: '#00D7FF',
  danger: '#F55353',
  greyDark: '#333333',
  greyLight: '#e8e8e8',
  greyLightest: '#F8F8F8'
};

/* eslint-disable no-constant-condition */
var ButtonSizes = {
  large: '14px 16px',
  default: '6px 12px',
  full: '14px 16px'
};
var Button = styled.button.withConfig({
  displayName: "button__Button",
  componentId: "sc-1p0qnaf-0"
})(["padding:", ";background-color:", ";color:", ";border-radius:5px;border:none;font-size:", ";width:", ";"], function (_ref) {
  var _ref$size = _ref.size,
      size = _ref$size === void 0 ? 'default' : _ref$size;
  return ButtonSizes[size];
}, function (_ref2) {
  var _ref2$variant = _ref2.variant,
      variant = _ref2$variant === void 0 ? 'primary' : _ref2$variant,
      bgColor = _ref2.bgColor;
  return bgColor || colors[variant];
}, function (_ref3) {
  var color = _ref3.color;
  return color || '#ffffff';
}, function (_ref4) {
  var _ref4$size = _ref4.size,
      size = _ref4$size === void 0 ? 'default' : _ref4$size;
  return size === 'large' || size === 'full' ? '16px' : '14px';
}, function (_ref5) {
  var size = _ref5.size;
  return size === 'full' ? '-webkit-fill-available' : 'auto';
});

var index$2 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Button
});

var Input = styled.input.withConfig({
  displayName: "input__Input",
  componentId: "sc-uv7i04-0"
})(["padding:8px 14px;border:1px solid #e8e8ee;border-radius:5px;width:-webkit-fill-available;:invalid{border-color:", ";color:", ";}:focus-visible{outline:none;}"], colors.danger, colors.danger);

var index$1 = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Input
});

var Chip = styled.span.withConfig({
  displayName: "chip__Chip",
  componentId: "sc-1kfwgxg-0"
})(["display:inline-block;padding:6px 12px;border-radius:100px;font-size:14px;color:white;margin:8px;background-color:", ";"], function (_ref) {
  var _ref$variant = _ref.variant,
      variant = _ref$variant === void 0 ? 'primary' : _ref$variant;
  return colors[variant];
});

var index = /*#__PURE__*/Object.freeze({
  __proto__: null,
  'default': Chip
});

export { index$2 as Button, index as Chip, index$1 as Input };
//# sourceMappingURL=index.js.map
