"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

require("antd/lib/tree-select/style");

var _treeSelect = _interopRequireDefault(require("antd/lib/tree-select"));

var _react = _interopRequireDefault(require("react"));

var _FormItem = require("../FormItem");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ChaosTreeSelect = function ChaosTreeSelect(_ref) {
  var children = _ref.children,
      rest = _objectWithoutProperties(_ref, ["children"]);

  return _react.default.createElement(_treeSelect.default, Object.assign({}, rest), children);
};

var FinalTreeSelect = (0, _FormItem.WrapFormItem)(ChaosTreeSelect, {
  defaultDetailType: 'text'
}); // @ts-ignore

FinalTreeSelect.TreeNode = _treeSelect.default.TreeNode;
var _default = FinalTreeSelect;
exports.default = _default;