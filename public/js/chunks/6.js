(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[6],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=script&lang=js&":
/*!***************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Files.vue?vue&type=script&lang=js& ***!
  \***************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuedraggable */ "./node_modules/vuedraggable/dist/vuedraggable.common.js");
/* harmony import */ var vuedraggable__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vuedraggable__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue-select */ "./node_modules/vue-select/dist/vue-select.js");
/* harmony import */ var vue_select__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(vue_select__WEBPACK_IMPORTED_MODULE_1__);
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
      editPrompt: false,
      mergePrompt: false,
      addPrompt: false,
      filter: {
        label: 'All',
        value: 0
      },
      merge: [],
      name: null,
      deleteAction: false,
      file_id: null,
      data: {
        type: {
          label: 'Emails List',
          value: 1
        },
        file: null,
        name: null
      },
      list: null
    };
  },
  computed: {
    files: function files() {
      return this.$store.getters.files;
    },
    filtered: function filtered() {
      var _this = this;

      if (this.filter.value) return this.$store.getters.files.filter(function (f) {
        return f.type_id == _this.filter.value;
      });
      return this.$store.getters.files;
    },
    mergedTotal: function mergedTotal() {
      if (this.merge.length) return this.getConverted(this.merge.reduce(function (total, f) {
        return total + f.lines;
      }, 0));else return '0';
    }
  },
  methods: {
    editFileName: function editFileName(id, name) {
      this.editPrompt = true;
      this.file_id = id;
      this.name = name;
    },
    updateFile: function updateFile() {
      var _this2 = this;

      if (this.name == '') this.showDialog('File name cannot be empty', 1, 'File Update');else {
        var data = {
          file: this.file_id,
          name: this.name
        };
        this.$store.dispatch('updateFileName', data).then(function (res) {
          _this2.showDialog(res.data.message, 0, 'File Update');
        });
        this.editPrompt = false;
        this.file_id = null;
        this.name = null;
      }
    },
    deleteFile: function deleteFile(id) {
      var _this3 = this;

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
          _this3.$store.dispatch('deleteFile', id).then(function (res) {
            _this3.showDialog(res.data.message, 0, 'File');
          });
        }
      });
    },
    saveFile: function saveFile(input) {
      if (input.target.files && input.target.files[0]) {
        this.data.file = input.target.files[0];
      }
    },
    addFile: function addFile() {
      if (!this.data.file || !this.data.name) this.showDialog('Please fill the form', 1, 'Adding File');else {
        this.data.type = this.data.type.value;
        this.$store.dispatch('uploadFile', this.data);
        this.data.type = {
          label: 'Emails List',
          value: 1
        };
        this.data.file = null;
        this.data.name = null;
        this.addPrompt = false;
      }
    },
    openMerge: function openMerge() {
      this.mergePrompt = true;
      this.list = this.files.filter(function (f) {
        return f.type_id == 1;
      });
      this.merge = [];
      this.name = null;
      this.deleteAction = false;
    },
    saveMerge: function saveMerge() {
      var _this4 = this;

      if (!this.name || this.merge.length < 2) this.showDialog('Please select files and set file name', 1, 'Merging Files');else {
        var data = {
          fs: this.merge.map(function (f) {
            return f.id;
          }),
          name: this.name,
          deleteAction: this.deleteAction
        };
        this.$store.dispatch('saveMerge', data).then(function (res) {
          _this4.showDialog(res.data.message, 0, 'Merging');

          _this4.mergePrompt = false;
          _this4.merge = [];
          _this4.name = null;
          _this4.deleteAction = false;
        });
      }
    },
    addFiletoList: function addFiletoList(item) {
      this.merge.push(item);
      this.list = this.list.filter(function (f) {
        return f.id != item.id;
      });
    },
    removeFileFromList: function removeFileFromList(item) {
      this.merge = this.merge.filter(function (f) {
        return f.id != item.id;
      });
      this.list.push(item);
    },
    getConverted: function getConverted(lines) {
      if (lines / 1000 >= 1) return "".concat(parseInt(lines / 1000), "K");
      return "".concat(lines);
    },
    close: function close() {
      this.editPrompt = false;
      this.file_id = null;
      this.name = null;
    }
  },
  created: function created() {
    var _this5 = this;

    if (this.files.length) return;
    this.$vs.loading();
    this.$store.dispatch('getFiles').then(function (res) {
      _this5.$vs.loading.close();
    });
  },
  filters: {
    type: function type(val) {
      if (val == 1) return "Email List";else return "Attachement";
    }
  },
  components: {
    draggable: vuedraggable__WEBPACK_IMPORTED_MODULE_0___default.a,
    'v-select': vue_select__WEBPACK_IMPORTED_MODULE_1___default.a
  }
});

/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".vs-popup[data-v-2570423d]{\n  width: 800px !important;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--7-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--7-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true&":
/*!*******************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true& ***!
  \*******************************************************************************************************************************************************************************************************************/
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
    { staticClass: "data-list-container", attrs: { id: "files" } },
    [
      _c(
        "vx-card",
        { attrs: { title: "Files List" } },
        [
          _c("div", { staticClass: "flex justify-between flex-wrap" }, [
            _c(
              "div",
              [
                _vm._v("\n                    Filter: "),
                _c("v-select", {
                  staticClass: "w-full select-large",
                  attrs: {
                    options: [
                      { label: "All", value: 0 },
                      { label: "Emails List", value: 1 },
                      { label: "Attachements", value: 2 }
                    ]
                  },
                  model: {
                    value: _vm.filter,
                    callback: function($$v) {
                      _vm.filter = $$v
                    },
                    expression: "filter"
                  }
                })
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              [
                _c(
                  "vs-button",
                  {
                    staticClass: "float-left mr-3",
                    attrs: {
                      color: "success",
                      type: "filled",
                      "icon-pack": "feather",
                      icon: "icon-repeat",
                      "icon-after": ""
                    },
                    on: { click: _vm.openMerge }
                  },
                  [_vm._v("Merge Files")]
                ),
                _vm._v(" "),
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
                  [_vm._v("Add File")]
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c(
            "vs-table",
            {
              attrs: { search: "", data: _vm.filtered },
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
                          _c(
                            "vs-td",
                            { attrs: { data: tr.name } },
                            [
                              _vm._v(
                                "\n\t\t\t\t\t\t\t" +
                                  _vm._s(tr.name) +
                                  " \n                            "
                              ),
                              tr.type_id == 1
                                ? [
                                    _vm._v(
                                      "\n                                | Emails: " +
                                        _vm._s(tr.lines) +
                                        "\n                            "
                                    )
                                  ]
                                : _vm._e()
                            ],
                            2
                          ),
                          _vm._v(" "),
                          _c("vs-td", { attrs: { data: tr.type_id } }, [
                            _vm._v(
                              "\n\t\t\t\t\t\t\t" +
                                _vm._s(_vm._f("type")(tr.type_id)) +
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
                                  icon: "EditIcon",
                                  svgClasses:
                                    "w-5 h-5 hover:text-primary stroke-current"
                                },
                                on: {
                                  click: function($event) {
                                    return _vm.editFileName(tr.id, tr.name)
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
                                    return _vm.deleteFile(tr.id)
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
                    _vm._v("TYPE")
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
        1
      ),
      _vm._v(" "),
      _c(
        "vs-popup",
        {
          attrs: {
            classContent: "popup",
            title: "Add File",
            active: _vm.addPrompt
          },
          on: {
            "update:active": function($event) {
              _vm.addPrompt = $event
            }
          }
        },
        [
          _c("div", { staticClass: "vx-row mb-3" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _vm._v("\n                    File type: "),
                _c("v-select", {
                  staticClass: "w-full select-large",
                  attrs: {
                    options: [
                      { label: "Emails List", value: 1 },
                      { label: "Attachements", value: 2 }
                    ]
                  },
                  model: {
                    value: _vm.data.type,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "type", $$v)
                    },
                    expression: "data.type"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-3" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c("vs-input", {
                  staticClass: "inputx",
                  attrs: { placeholder: "File Name" },
                  model: {
                    value: _vm.data.name,
                    callback: function($$v) {
                      _vm.$set(_vm.data, "name", $$v)
                    },
                    expression: "data.name"
                  }
                })
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-3" }, [
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
                  [_vm._v("Upload File/Attachement")]
                ),
                _vm._v(" "),
                _c("input", {
                  ref: "uploadFileInput",
                  staticClass: "hidden",
                  attrs: { type: "file", accept: "text/*|image/*" },
                  on: { change: _vm.saveFile }
                }),
                _vm._v(" "),
                _vm.data.file
                  ? _c("span", { staticClass: "ml-2" }, [
                      _vm._v(_vm._s(_vm.data.file.name))
                    ])
                  : _vm._e()
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
                  on: { click: _vm.addFile }
                },
                [_vm._v("Add File")]
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
            title: "Merge Files",
            active: _vm.mergePrompt
          },
          on: {
            "update:active": function($event) {
              _vm.mergePrompt = $event
            }
          }
        },
        [
          _c("h4", [_vm._v("Drag & Drop to merge files")]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-base mt-3" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-list",
                  { staticClass: "drag-list" },
                  [
                    _c("vs-list-header", {
                      attrs: { title: "Existing Files", color: "primary" }
                    }),
                    _vm._v(" "),
                    _c(
                      "draggable",
                      {
                        staticClass: "p-2 cursor-move",
                        attrs: { list: _vm.list, group: "files" }
                      },
                      _vm._l(_vm.list, function(item, index) {
                        return _c(
                          "vs-list-item",
                          { key: index, attrs: { title: item.name } },
                          [
                            _c("vs-avatar", {
                              attrs: {
                                slot: "avatar",
                                text: _vm.getConverted(item.lines)
                              },
                              slot: "avatar"
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "ml-2",
                              attrs: {
                                icon: "PlusIcon",
                                svgClasses:
                                  "w-5 h-5 hover:text-success stroke-current"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.addFiletoList(item)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c(
                  "vs-list",
                  { staticClass: "drag-list" },
                  [
                    _c("vs-list-header", {
                      attrs: {
                        title: "Merged | Total: " + this.mergedTotal,
                        color: "primary"
                      }
                    }),
                    _vm._v(" "),
                    _c(
                      "draggable",
                      {
                        staticClass: "p-2 cursor-move",
                        attrs: { list: _vm.merge, group: "files" }
                      },
                      _vm._l(_vm.merge, function(item, index) {
                        return _c(
                          "vs-list-item",
                          { key: index, attrs: { title: item.name } },
                          [
                            _c("vs-avatar", {
                              attrs: {
                                slot: "avatar",
                                text: _vm.getConverted(item.lines)
                              },
                              slot: "avatar"
                            }),
                            _vm._v(" "),
                            _c("feather-icon", {
                              staticClass: "ml-2",
                              attrs: {
                                icon: "XIcon",
                                svgClasses:
                                  "w-5 h-5 hover:text-danger stroke-current"
                              },
                              on: {
                                click: function($event) {
                                  return _vm.removeFileFromList(item)
                                }
                              }
                            })
                          ],
                          1
                        )
                      }),
                      1
                    )
                  ],
                  1
                )
              ],
              1
            )
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "vx-row mb-base" }, [
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 mt-2 w-full" },
              [
                _c(
                  "vs-checkbox",
                  {
                    model: {
                      value: _vm.deleteAction,
                      callback: function($$v) {
                        _vm.deleteAction = $$v
                      },
                      expression: "deleteAction"
                    }
                  },
                  [_vm._v("Delete Selected Files")]
                )
              ],
              1
            ),
            _vm._v(" "),
            _c(
              "div",
              { staticClass: "vx-col sm:w-1/2 w-full" },
              [
                _c("vs-input", {
                  staticClass: "inputx",
                  attrs: { placeholder: "New File Name" },
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
                  on: { click: _vm.saveMerge }
                },
                [_vm._v("Save new file")]
              )
            ],
            1
          )
        ]
      ),
      _vm._v(" "),
      _c(
        "vs-prompt",
        {
          attrs: { active: _vm.editPrompt },
          on: {
            cancel: _vm.close,
            accept: _vm.updateFile,
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
              _c("span", [_vm._v("Enter File Name For Attachement")]),
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
      )
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./resources/js/src/views/Files.vue":
/*!******************************************!*\
  !*** ./resources/js/src/views/Files.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Files.vue?vue&type=template&id=2570423d&scoped=true& */ "./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true&");
/* harmony import */ var _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Files.vue?vue&type=script&lang=js& */ "./resources/js/src/views/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& */ "./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "2570423d",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/src/views/Files.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/src/views/Files.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./resources/js/src/views/Files.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&":
/*!***************************************************************************************************!*\
  !*** ./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--7-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--7-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=style&index=0&id=2570423d&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_7_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_7_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_style_index_0_id_2570423d_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true&":
/*!*************************************************************************************!*\
  !*** ./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true& ***!
  \*************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Files.vue?vue&type=template&id=2570423d&scoped=true& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/src/views/Files.vue?vue&type=template&id=2570423d&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Files_vue_vue_type_template_id_2570423d_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);