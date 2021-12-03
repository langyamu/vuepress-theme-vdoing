---
home: true
# heroImage: /img/web.png
heroText: 如影
tagline: 书读得少，想得太多
# actionText: 立刻进入 →
# actionLink: /web/
bannerBg: "https://cdn.jsdelivr.net/gh/Mu-Yan/Mu-Yan.github.io/blogsImg/18.jpg" # auto => 网格纹背景(有bodyBgImg时无背景)，默认 | none => 无 | '大图地址' | background: 自定义背景样式       提示：如发现文本颜色不适应你的背景时可以到palette.styl修改$bannerTextColor变量

# features: # 可选的
#  - title: 前端
#    details: JavaScript、ES6、Vue框架等前端技术
#   link: /web/ # 可选
#    imgUrl: /img/web.png # 可选
#  - title: 后端
#    details: html(5)/css(3)，前端页面相关技术
#    link: /back-end/
#    imgUrl: /img/other.png
#  - title: 技术
#    details: 技术文档、教程、技巧、总结等文章
#    link: /technology/
#    imgUrl: /img/other.png

# 文章列表显示方式: detailed 默认，显示详细版文章列表（包括作者、分类、标签、摘要、分页等）| simple => 显示简约版文章列表（仅标题和日期）| none 不显示文章列表
# postList: detailed
# simplePostListLength: 10 # 简约版文章列表显示的文章数量，默认10。（仅在postList设置为simple时生效）
---


<!-- 小熊猫 -->

[comment]: <> (<img src="/img/panda-waving.png" class="panda no-zoom" style="width: 130px;height: 115px;opacity: 0.8;margin-bottom: -4px;padding-bottom:0;position: fixed;bottom: 0;left: 0.5rem;z-index: 1;"> )

[comment]: <> (## 关于)

<style>
.anchor-down {
  display: block;
  margin: 12rem auto 0;
  bottom: 45px;
  width: 20px;
  height: 20px;
  font-size: 34px;
  text-align: center;
  animation: bounce-in 5s 3s infinite;
  position: absolute;
  left: 50%;
  bottom: 30%;
  margin-left: -10px;
  cursor: pointer;
}
@-webkit-keyframes bounce-in{
  0%{transform:translateY(0)}
  20%{transform:translateY(0)}
  50%{transform:translateY(-20px)}
  80%{transform:translateY(0)}
  to{transform:translateY(0)}
}
.anchor-down::before {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
  position: absolute;
  bottom: 10px;
}
.anchor-down::after {
  content: "";
  width: 20px;
  height: 20px;
  display: block;
  border-right: 3px solid #fff;
  border-top: 3px solid #fff;
  transform: rotate(135deg);
}
</style>

<script>
export default {
  mounted() {
    this.initAnchorDown();

    async function setSiteFirstImage() {
      let imgSrc = await (new Promise((resolve) => {
        let tmpImage = new Image(),
            images = Array(18).fill(null).map((item, index) => `https://cdn.jsdelivr.net/gh/Mu-Yan/Mu-Yan.github.io/blogsImg/${index + 1}.jpg`)

        images.push(...[
          'https://ae01.alicdn.com/kf/U97bbc76ed57d4a0eb5cda490415884b1i.jpg',
          'https://zihonghuang.gitee.io/image/bg1.jpg',
          'https://pan.zealsay.com/zealsay/cover/5.jpg',
          'https://pan.zealsay.com/zealsay/cover/6.jpg',
          'https://pan.zealsay.com/zealsay/cover/7.jpg',
          'https://pan.zealsay.com/mweb/blog/WechatIMG10.png',
        ]),
            imgSrc = images[parseInt(Math.random() * images.length + 1)]

        tmpImage.src = imgSrc
        tmpImage.onload = function () {
          resolve(imgSrc)
        }
        tmpImage.onerror = function () {
          resolve(null)
        }
      }))
      if (imgSrc) {
        document.querySelector('.home-wrapper .banner')
            .style
            .background = `url("${imgSrc}") center center / cover no-repeat`
        document.querySelector('.body-bg')
            .style
            .background = `url("${imgSrc}") center center / cover no-repeat`
      }
    }

    setSiteFirstImage()
    let timer = setInterval(setSiteFirstImage, 30000)
  },

  methods: {
    initAnchorDown() {
      const ifJanchor = document.getElementById("JanchorDown");
      ifJanchor && ifJanchor.parentNode.removeChild(ifJanchor);
      let a = document.createElement('a');
      a.id = 'JanchorDown';
      a.className = 'anchor-down';
      document.querySelector('.home-wrapper .banner').append(a);
      let targetA = document.getElementById("JanchorDown");
      targetA.addEventListener('click', e => { // 添加点击事件
        this.scrollFn();
      })
    },
    scrollFn() {
      const windowH = document.querySelector('.home-wrapper .banner').clientHeight; // 获取窗口高度
      // document.documentElement.scrollTop = windowH; // 滚动条滚动到指定位置
      this.scrollIntoView('.main-wrapper')
    },
    scrollIntoView(traget) {
      const tragetElem = document.querySelector(traget);
      const tragetElemPostition = tragetElem.offsetTop;

      // 判断是否支持新特性
      if (
          typeof window.getComputedStyle(document.body).scrollBehavior ==
          "undefined"
      ) {
        // 当前滚动高度
        let scrollTop =
            document.documentElement.scrollTop || document.body.scrollTop;
        // 滚动step方法
        const step = function () {
          // 距离目标滚动距离
          let distance = tragetElemPostition - scrollTop;
          // 目标滚动位置
          scrollTop = scrollTop + distance / 5;
          if (Math.abs(distance) < 1) {
            window.scrollTo(0, tragetElemPostition);
          } else {
            window.scrollTo(0, scrollTop);
            setTimeout(step, 20);
          }
        };
        step();
      } else {
        tragetElem.scrollIntoView({
          behavior: "smooth",
          inline: "nearest"
        });
      }
    }
  }
}
</script>
