define('@weex-component/hello', function (require, exports, module) {

;
  module.exports = {
    data:function () {return {
    	intervalValue:"5000",
      	isShowIndicators:"true",
     	isAutoPlay:"true",
     	itemList: [
        	{pictureUrl: 'http://img.tbxzs.com/banners/2016/08/57b6b2105e883.jpg'},
        	{pictureUrl: 'http://img.tbxzs.com/banners/2016/08/57a039c4e5cd9.jpg'},
        	{pictureUrl: 'http://img.tbxzs.com/banners/2016/07/57984fbe91cbf.jpg'}
     	],

    	icon1: 'http://192.168.1.105/home-taobao.png',
    	icon2: 'http://192.168.1.105/home-mall.png',
    	icon3: 'http://192.168.1.105/home-tmall-chaoshi.png',
    	icon4: 'http://192.168.1.105/home-charge.png',
    	icon5: 'http://192.168.1.105/home-help.png',

    	img1: 'http://img.tbxzs.com/recommends/2016/06/576115a98250c.jpg',
        img2: 'http://img.tbxzs.com/recommends/2016/06/57611601f1e9d.jpg',
      	img3: 'http://img.tbxzs.com/recommends/2016/06/576116aa376b3.jpg',
      	img4: 'http://img.tbxzs.com/recommends/2016/06/57611700e6c9b.jpg'
    }},

     methods: {
      handler: function (arg1, e) {
        this.$openURL('http://alibaba.github.io/weex/')
      }
    }
  }



;module.exports.style = {
  "slider": {
    "width": 750,
    "height": 280
  },
  "slider-pages": {
    "flexDirection": "row",
    "height": 280
  },
  "thumb": {
    "width": 750,
    "height": 280
  },
  "cell": {
    "flexDirection": "column",
    "justifyContent": "space-between"
  },
  "shortcut": {
    "flex": 1,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderTopColor": "#EEEEEE",
    "borderTopWidth": 6
  },
  "shortcut-cell": {
    "flex": 1,
    "flexDirection": "column",
    "justifyContent": "center",
    "alignItems": "center"
  },
  "shortcut-image": {
    "height": 100,
    "width": 100
  },
  "shortcut-text": {
    "fontSize": 25,
    "marginTop": 20
  },
  "recommend-cell": {
    "flex": 2,
    "flexDirection": "row",
    "justifyContent": "space-between",
    "borderColor": "#EEEEEE",
    "borderWidth": 6
  },
  "left-cell": {
    "flex": 0.38,
    "borderRightColor": "#EEEEEE",
    "borderRightWidth": 3
  },
  "right-cell": {
    "flexDirection": "column",
    "justifyContent": "space-between",
    "flex": 0.62
  },
  "right-bottom-cell": {
    "flexDirection": "row",
    "flex": 2,
    "borderTopColor": "#EEEEEE",
    "borderTopWidth": 3
  },
  "right-bottom-left-cell": {
    "flex": 1,
    "borderRightColor": "#EEEEEE",
    "borderRightWidth": 3
  },
  "right-bottom-right-cell": {
    "flex": 1
  },
  "highlight": {
    "color": "#ff0000"
  },
  "indicator": {
    "position": "absolute",
    "width": 690,
    "height": 220,
    "top": 140,
    "left": 300,
    "itemColor": "white",
    "itemSelectedColor": "rgb(200, 200, 200)",
    "itemSize": 20
  }
}

;module.exports.template = {
  "type": "div",
  "classList": [
    "cell"
  ],
  "children": [
    {
      "type": "slider",
      "classList": [
        "slider"
      ],
      "attr": {
        "interval": function () {return this.intervalValue},
        "autoPlay": function () {return this.isAutoPlay}
      },
      "children": [
        {
          "type": "indicator",
          "classList": [
            "indicator"
          ]
        },
        {
          "type": "div",
          "classList": [
            "slider-pages"
          ],
          "repeat": function () {return this.itemList},
          "events": {
            "click": "goWeexSite"
          },
          "children": [
            {
              "type": "image",
              "classList": [
                "thumb"
              ],
              "attr": {
                "src": function () {return this.pictureUrl}
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "classList": [
        "shortcut"
      ],
      "children": [
        {
          "type": "div",
          "classList": [
            "shortcut-cell"
          ],
          "events": {
            "click": function ($event) {this.handler('recommend1',$event)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.icon1}
              },
              "classList": [
                "shortcut-image"
              ]
            },
            {
              "type": "text",
              "classList": [
                "shortcut-text"
              ],
              "attr": {
                "value": "淘宝返利"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "shortcut-cell"
          ],
          "events": {
            "click": function ($event) {this.handler('recommend2',$event)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.icon2}
              },
              "classList": [
                "shortcut-image"
              ]
            },
            {
              "type": "text",
              "classList": [
                "shortcut-text"
              ],
              "attr": {
                "value": "商城返利"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "shortcut-cell"
          ],
          "events": {
            "click": function ($event) {this.handler('recommend3',$event)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.icon3}
              },
              "classList": [
                "shortcut-image"
              ]
            },
            {
              "type": "text",
              "classList": [
                "shortcut-text"
              ],
              "attr": {
                "value": "天猫超市"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "shortcut-cell"
          ],
          "events": {
            "click": function ($event) {this.handler('recommend4',$event)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.icon4}
              },
              "classList": [
                "shortcut-image"
              ]
            },
            {
              "type": "text",
              "classList": [
                "shortcut-text"
              ],
              "attr": {
                "value": "在线充值"
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "shortcut-cell"
          ],
          "events": {
            "click": function ($event) {this.handler('recommend5',$event)}
          },
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.icon5}
              },
              "classList": [
                "shortcut-image"
              ]
            },
            {
              "type": "text",
              "classList": [
                "shortcut-text"
              ],
              "attr": {
                "value": "帮助中心"
              }
            }
          ]
        }
      ]
    },
    {
      "type": "div",
      "classList": [
        "recommend-cell"
      ],
      "children": [
        {
          "type": "div",
          "classList": [
            "left-cell"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.img1}
              },
              "style": {
                "flex": 1
              },
              "events": {
                "click": function ($event) {this.handler('1',$event)}
              }
            }
          ]
        },
        {
          "type": "div",
          "classList": [
            "right-cell"
          ],
          "children": [
            {
              "type": "image",
              "attr": {
                "src": function () {return this.img2}
              },
              "style": {
                "flex": 2
              },
              "events": {
                "click": function ($event) {this.handler('2',$event)}
              }
            },
            {
              "type": "div",
              "classList": [
                "right-bottom-cell"
              ],
              "children": [
                {
                  "type": "div",
                  "classList": [
                    "right-bottom-left-cell"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.img3}
                      },
                      "style": {
                        "flex": 1
                      },
                      "events": {
                        "click": function ($event) {this.handler('3',$event)}
                      }
                    }
                  ]
                },
                {
                  "type": "div",
                  "classList": [
                    "right-bottom-right-cell"
                  ],
                  "children": [
                    {
                      "type": "image",
                      "attr": {
                        "src": function () {return this.img4}
                      },
                      "style": {
                        "flex": 1
                      },
                      "events": {
                        "click": function ($event) {this.handler('4',$event)}
                      }
                    }
                  ]
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}

;})

// require module
bootstrap('@weex-component/hello', {"transformerVersion":"0.3.1"})