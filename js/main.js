/* 把代码写到 #code 和 style标签 里 */
function writeCode(prefix, code, fn) {
    let domCode = document.querySelector('#code')
    domCode.innerHTML = prefix || ''
    let n = 0
    let id = setInterval(() => {
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0, n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0, n)
        domCode.scrollTop = domCode.scrollHeight
        if (n >= code.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 30)
}

function writeMarkdown(markdown, fn) {
    let domPaper = document.querySelector('#paper > .content')
    let n = 0
    let id = setInterval(() => {
        n += 1
        domPaper.innerHTML = markdown.substring(0, n)
        domPaper.scrollTop = domPaper.scrollHeight
        if (n >= markdown.length) {
            window.clearInterval(id)
            fn.call()
        }
    }, 30)
}


var result = `
/*
 *啦啦啦
 *啦啦啦
 *我是卖报的小行家
 *风吹雨打我都不怕
 */

*{
    transition: all 1s;
} 
html{
    background: rgb(222,222,222); font-size:16px;
}
#code{
    border:1px solid red; padding:16px;
}

/* 我需要一点代码高亮 */
.token.property{
    color: #905;
}
.token.selector{
    color: #690;
}
.token.function{
    color: #DD4A68;
}

/* 加点 3D 效果 */
#code{
    transform: rotate(360deg);
}

/* 不玩了，我来介绍一下我自己吧 */
/* 我需要一张白纸 */
#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:fixe;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    width:100%;
    height:100%;
}
#paper > pre{
    padding-left:16px;
}
`
var result2 = `
#paper{
}
/*
 *接下来把 markdown 变成 HTML - marked.js
 */
    `
var md = `
# 自我介绍

我叫 xx
1998.01.04
自学前端半年
希望应聘前端开发岗位

# 技能介绍

熟悉JavaScript CSS

# 项目介绍

1、苹果风格轮播
2、会动的简历
3、CANVAS画板

# 联系方式

企鹅：xxxxx
微信：xxxxx
邮箱：xxxxx
电话：xxxxx
`


writeCode('', result, () => {
    createPaper(() => {
        writeCode(result, result2, () => {
            writeMarkdown(md)
        })
    })
})

function createPaper(fn) {
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}
