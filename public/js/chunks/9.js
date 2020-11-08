(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Smtps.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Smtps.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      addPrompt: false,
      editPrompt: false,
      showPrompt: false,
      smtp: 0,
      group: null,
      name: null,
      file: null
    };
  },
  computed: {
    smtps: function smtps() {
      return this.$store.getters.smtps;
    },
    group_smtps: function group_smtps() {
      if (this.group) return this.group.smtps;
      return [];
    }
  },
  methods: {
    editSmtp: function editSmtp(id, name) {
      this.editPrompt = true;
      this.smtp = id;
      this.name = name;
    },
    deleteSmtp: function deleteSmtp(id) {
      var _this = this;

      this.$swal({
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        type: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then(function (result) {
        if (result.value) {
          _this.$store.dispatch('deleteSmtp', id).then(function (res) {
            _this.showDialog(res.data.message, 0, 'Smtp');
          });
        }
      });
    },
    updateSmtp: function updateSmtp() {
      var _this2 = this;

      var data = {
        smtp: this.smtp,
        name: this.name
      };
      this.$store.dispatch('updateSmtp', data).then(function (res) {
        _this2.showDialog(res.data.message, 0, 'Smtp');
      });
      this.close();
    },
    close: function close() {
      this.editPrompt = false;
      this.showPrompt = false;
      this.smtp = 0;
      this.name = null;
    },
    addSmtp: function addSmtp() {
      var _this3 = this;

      if (!this.name) this.showDialog('Please fill the form', 1, 'Adding Smtp');else {
        var data = {
          name: this.name,
          file: this.file
        };
        this.$store.dispatch('addSmtp', data).then(function (res) {
          _this3.showDialog(res.data.message, 0, 'Smtp');
        });
        this.name = null;
        this.file = null;
        this.addPrompt = false;
      }
    },
    saveFile: function saveFile(input) {
      if (input.target.files && input.target.files[0]) {
        this.file = input.target.files[0];
      }
    },
    showSmtp: function showSmtp(group) {
      var _this4 = this;

      if (!group.smtps) this.$store.dispatch('getSmtpsData', group.id).then(function (res) {
        _this4.group = _this4.smtps.filter(function (s) {
          return s.id == group.id;
        })[0];
      });else this.group = this.smtps.filter(function (s) {
        return s.id == group.id;
      })[0];
      this.showPrompt = true;
    }
  },
  created: function created() {
    var _this5 = this;

    if (this.smtps.length) return;
    this.$vs.loading();
    this.$store.dispatch('getSmtps').then(function (res) {
      _this5.$vs.loading.close();
    });
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3&":
/*!*******************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3& ***!
  \*******************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { staticClass: "data-list-container", attrs: { id: "smtps" } },
    [
      _c(
        "vx-card",
        { attrs: { title: "Smtps List" } },
        [
          _c(
            "template",
            { slot: "actions" },
            [
              _c(
                "vs-button",
                {
                  attrs: {
                    color: "primary",
                    type: "filled",
                    "icon-pack": "feather",
                    icon: "icon-plus",
                    "icon-after": ""
                  },
                  on: {
                    click: function($event) {
                      _vm.addPrompt = true
                    }
                  }
                },
                [_vm._v("Add Smtp Group")]
              )
            ],
            1
          ),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.smtps },
              scopedSlots: _vm._u([
                {
                  key: "default",
                  fn: function(ref) {
                    var data = ref.data
                    return _vm._l(data, function(tr, indextr) {
                      return _c(
                        "vs-tr",
                        { key: indextr },
                        [
                          _c("vs-td", { attrs: { data: tr.id } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t" +
                                _vm._s(tr.id) +
                                "\n\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.name } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t" +
                                _vm._s(tr.name) +
                                "\n\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.smtps_count } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t" +
                                _vm._s(tr.smtps_count) +
                                "\n\t\t\t\t\t\t"
                            )
                          ]),
                          _vm._v(" "),
                          _c(
                            "vs-td",
                            [
                              _c("feather-icon", {
                                staticClass: "cursor-pointer ml-2",
                                attrs: {
                                  icon: "EyeIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-primary stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.showSmtp(tr)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "cursor-pointer ml-2",
                                attrs: {
                                  icon: "EditIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-primary stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editSmtp(tr.id, tr.name)
                                  }
                                }
                              }),
                              _vm._v(" "),
                              _c("feather-icon", {
                                staticClass: "cursor-pointer ml-2",
                                attrs: {
                                  icon: "TrashIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-danger stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.deleteSmtp(tr.id)
                                  }
                                }
                              })
                            ],
                            1
                          )
                        ],
                        1
                      )
                    })
                  }
                }
              ])
            },
            [
              _c(
                "template",
                { slot: "thead" },
                [
                  _c("vs-th", { attrs: { "sort-key": "id" } }, [_vm._v("#")]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "name" } }, [
                    _vm._v("NAME")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", { attrs: { "sort-key": "count" } }, [
                    _vm._v("SMTPS")
                  ]),
                  _vm._v(" "),
                  _c("vs-th", [_vm._v("Actions")])
                ],
                1
              )
            ],
            2
          )
        ],
        2
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { active: _vm.editPrompt },
          on: {
            cancel: _vm.close,
            accept: _vm.updateSmtp,
            close: _vm.close,
            "update:active": function($event) {
              _vm.editPrompt = $event
            }
          }
        },
        [
          _c(
            "div",
            { staticClass: "con-exemple-prompt" },
            [
              _c("span", [_vm._v("Enter Smtp Group Name")]),
              _vm._v(" "),
              _c("vs-input", {
                staticClass: "mt-3 w-full",
                attrs: { placeholder: "Name", "vs-placeholder": "Name" },
                model: {
                  value: _vm.name,
                  callback: function($$v) {
                    _vm.name = $$v
                  },
                  expression: "name"
                }
              })
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            classContent: "popup",
            title: "Add Smtp Group",
            active: _vm.addPrompt
          },
          on: {
            "update:active": function($event) {
              _vm.addPrompt = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-row mb-base" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c("vs-input", {
                  staticClass: "inputx",
                  attrs: { placeholder: "Smtp Group Name" },
                  model: {
                    value: _vm.name,
                    callback: function($$v) {
                      _vm.name = $$v
                    },
                    expression: "name"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-button",
                  {
                    on: {
                      click: function($event) {
                        return _vm.$refs.uploadFileInput.click()
                      }
                    }
                  },
                  [_vm._v("Upload Smtps List")]
                ),
                _vm._v(" "),
                _c("input", {
                  ref: "uploadFileInput",
                  staticClass: "hidden",
                  attrs: { type: "file", accept: "text/*" },
                  on: { change: _vm.saveFile }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "div",
            { staticClass: "flex justify-center flax-wrap" },
            [
              _c(
                "vs-button",
                {
                  attrs: { color: "primary", type: "filled" },
                  on: { click: _vm.addSmtp }
                },
                [_vm._v("Add Group")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            classContent: "popup",
            title: "Smtps List",
            active: _vm.showPrompt
          },
          on: {
            "update:active": function($event) {
              _vm.showPrompt = $event
            }
          }
        },
        [
          _c(
            "vs-list",
            _vm._l(_vm.group_smtps, function(tr, index) {
              return _c("vs-list-item", {
                key: index,
                attrs: {
                  title:
                    tr.username +
                    " | " +
                    tr.password +
                    " | " +
                    tr.host +
                    " | " +
                    tr.port
                }
              })
            }),
            1
          )
        ],
        1
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Smtps.vue":
/*!******************************************!*\
  !*** ./resources/js/src/views/Smtps.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Smtps.vue?vue&type=template&id=0665c1a3& */ "./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3&");
/* harmony import */ var _Smtps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Smtps.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Smtps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Smtps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Smtps.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Smtps.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Smtps.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Smtps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Smtps.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Smtps.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Smtps_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3&":
/*!*************************************************************************!*\
  !*** ./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Smtps.vue?vue&type=template&id=0665c1a3& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Smtps.vue?vue&type=template&id=0665c1a3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Smtps_vue_vue_type_template_id_0665c1a3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);