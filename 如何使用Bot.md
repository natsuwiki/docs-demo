---
{
    "title": "NatsuBot简介",
    "description": "",
    "navbar": true,
    "sideBar": true,
    "footer": true,
    "outline": [
        1,
        3
    ],
    "editLink": false,
    "lastUpdated": true,
    "aside": "right",
    "layout": "doc",
    "custom": {},
    "hero": {
        "image": {
            "src": "\\images\\home\\index_home.png",
            "alt": "",
            "width": "",
            "height": ""
        },
        "name": "VitePressSimple",
        "text": "quick to config vitePress",
        "description": "",
        "tagline": "",
        "actions": [],
        "features": [],
        "head": []
    }
}
---

# NatsuCow bot使用篇

## 公众指令：

### 地区传送点系统：

地区传送点系统所用指令 **均需通过私聊的方式发送指令**，即向游戏中发送指令前缀`/msg YutoriNatsu`

公众指令列表（公开可用）：

`/msg YutoriNatsu1 传送点`：查看传送点列表

::: info **地区传送点系统** 指令列表

`/msg YutoriNatsu1 传送a`：传送至 **崔尼蒂主街区**

`/msg YutoriNatsu1 传送c`：传送至 **椰汁橙工业区**

`/msg YutoriNatsu1 传送d`：传送至 **末地刷沙收集**

:::

目前来讲，传送点系统并未设置白名单制，因此任何人都可以使用系统

当你使用以上指令后，Bot会在传送至预设点后自动向你发送`/tpa`请求，随后bot会回到`/home`点。你仅需**接受请求即可到达地区**，无需手动/tpa YutoriNatsu，这样做反而会产生错误！

---

### /tpa系统

NatsuBot 会自动处理/tpa请求，只要Bot未被锁定时。

::: tip 指令

`/tpa YutoriNatsu1`可传送至bot处(默认位于崔尼蒂主街区)

:::

事实上，bot同样也可用接受`/tpahere`请求，但是由于Bot未内置挂机系统指令，因此千万不要将Bot用于挂机器等需要挂机的场景，否则可能会导致巨大的错误！

---

### 群服互传系统

以下是在**TSL吃瓜群**(956925343)可用指令列表

::: info 群服消息互传系统指令

Bot会自动将你在QQ群956925343发送的消息转发至游戏中，不过当你想要使你的某条消息不要转发至游戏中时，你可以在你要发送至QQ群956925343的消息带有前缀：

`>1`

这样做Bot将不会转发该消息至游戏中。例如：`>1 喵喵`

:::

---

### 更多功能开发ing

## 管理员权限指令

游戏内：

`/msg YutoriNatsu1 #状态`：查看Bot当前状态

...

TSL吃瓜群：

`#关闭`停止群服消息互传程序

`#开机`开启程序

`#重启`重启程序

`#状态`查看程序运行状态

...
