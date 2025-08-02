// headerfooter.js

// 用于注入页眉和页脚 HTML 的函数
function injectHeaderFooter() {
    const headerHtml = `
        <div class="语言栏">
            <div class="语言栏按钮组">
                <a class="语言栏按钮" href="../index.html" target="_blank">CN</a>
                <a class="语言栏按钮" href="../en/index.html" target="_blank">EN</a>
                <a class="语言栏按钮" href="../kr/index.html" target="_blank">KR</a>
            </div>
        </div>

        <header class="主页眉" id="主页眉">
            <div class="页眉内容">
                <div class="页眉列 logo">
                    <a href="https://tuhaqiefus.github.io/.github.gsxhx.io">
                        <img src="../LOGOB.svg" alt="公司Logo" class="页眉Logo" id="页眉Logo">
                    </a>
                </div>
                <div class="页眉列 btn"><a class="页眉按钮" href="../cn/html11.html" target="_blank">公司介绍</a></div>
                <div class="页眉列 btn"><a class="页眉按钮" href="../cn/html21.html" target="_blank">工程业绩</a></div>
                <div class="页眉列 btn"><a class="页眉按钮" href="../cn/html31.html" target="_blank">可持续发展</a></div>
                <div class="页眉列 btn"><a class="页眉按钮" href="../cn/html41.html" target="_blank">科技研发</a></div>
                <div class="页眉列 btn"><a class="页眉按钮" href="../cn/html71.html" target="_blank">宣传中心</a></div>
            </div>
        </header>

        <div class="页眉下拉弹窗" id="页眉下拉弹窗">
            <div class="下拉弹窗内容">
                <div class="下拉弹窗列 logo">
                    <div class="下拉弹窗Logo区域">
                        <img id="下拉弹窗提示图片" src="https://via.placeholder.com/100x100?text=Default" alt="主题简笔画">
                    </div>
                </div>
                <div class="下拉弹窗列 btn">
                    <a class="下拉弹窗子按钮" href="../cn/html11.html" target="_blank">愿景理念</a>
                    <a class="下拉弹窗子按钮" href="../cn/html12.html" target="_blank">发展历史</a>
                    <a class="下拉弹窗子按钮" href="../cn/html13.html" target="_blank">资质荣誉</a>
                    <a class="下拉弹窗子按钮" href="../cn/html14.html" target="_blank">组织架构</a>
                    <a class="下拉弹窗子按钮" href="../cn/html15.html" target="_blank">全球分支</a>
                    <a class="下拉弹窗子按钮" href="../cn/html16.html" target="_blank">总部地址</a>
                </div>
                <div class="下拉弹窗列 btn">
                    <a class="下拉弹窗子按钮" href="../cn/html21.html" target="_blank">微电子</a>
                    <a class="下拉弹窗子按钮" href="../cn/html22.html" target="_blank">光电产业</a>
                    <a class="下拉弹窗子按钮" href="../cn/html23.html" target="_blank">石油化工</a>
                    <a class="下拉弹窗子按钮" href="../cn/html24.html" target="_blank">洁净系统</a>
                    <a class="下拉弹窗子按钮" href="../cn/html25.html" target="_blank">M&P</a>
                </div>
                <div class="下拉弹窗列 btn">
                    <a class="下拉弹窗子按钮" href="../cn/html31.html" target="_blank">环境保护</a>
                    <a class="下拉弹窗子按钮" href="../cn/html32.html" target="_blank">社会政策</a>
                    <a class="下拉弹窗子按钮" href="../cn/html33.html" target="_blank">内部治理</a>
                </div>
                <div class="下拉弹窗列 btn">
                    <a class="下拉弹窗子按钮" href="../cn/html41.html" target="_blank">研发愿景</a>
                    <a class="下拉弹窗子按钮" href="../cn/html42.html" target="_blank">专有技术</a>
                    <a class="下拉弹窗子按钮" href="../cn/html43.html" target="_blank">研究设施</a>
                </div>
                <div class="下拉弹窗列 btn">
                    <a class="下拉弹窗子按钮" href="../cn/html71.html" target="_blank">集团新闻</a>
                    <a class="下拉弹窗子按钮" href="../cn/html72.html" target="_blank">员工活动</a>

                </div>
            </div>
        </div>
    `;

    const footerHtml = `
        <footer class="页脚">
            <div class="页脚内容">
                <div class="页脚左侧">
                    <img src="../LOGOB.svg" alt="页脚Logo" class="页脚Logo">
                </div>
                <div class="页脚中间">
                    <div class="footerp">
                        <p>公司地址：上海市松江区华加路99号联东U谷30幢 邮编：201600</p>
                        <p>电话：86-21-6767-0912 ；86-29-8787-6559</p>
                        <p>电子邮件：sales@xhxcg.com</p>
                        <p>Copyright &copy; XINOVA. All rights reserved.</p>
                    </div>
                </div>
                <div class="页脚右侧">
                    <button class="页脚site按钮" id="页脚site按钮">site</button>
                    <div class="页脚导航菜单" id="页脚导航菜单">
                        <div class="页脚导航列">
                            <h4 class="页脚导航标题">自有品牌</h4>
                            <a class="页脚导航按钮" href="https://www.bilibili.com" target="_blank"> C & K </a>
                        </div>
                        <div class="页脚导航列">
                            <h4 class="页脚导航标题">集团公司</h4>
                            <a class="页脚导航按钮" href="http://www.juya-tech.com/" target="_blank">上海飓亚电子科技有限公司</a>
                            <a class="页脚导航按钮" href="https://semi.xhxcg.com/index.php" target="_blank">上海鑫华夏半导体设备有限公司</a>
                            <a class="页脚导航按钮" href="http://www.ky-century.com/" target="_blank">上海庆元世纪中央空调有限公司</a>
                        </div>

                        <div class="页脚导航列">
                            <h4 class="页脚导航标题">联系我们</h4>
                            <a class="页脚导航按钮" href="https://www.bilibili.com" target="_blank">中国业务</a>
                            <a class="页脚导航按钮" href="https://www.bilibili.com" target="_blank">Overseas business</a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    `;

    // 在 <body> 的开头插入页眉
    document.body.insertAdjacentHTML('afterbegin', headerHtml);

    // 在 <body> 的末尾插入页脚
    document.body.insertAdjacentHTML('beforeend', footerHtml);
}

// 初始化页眉和页脚交互的函数
function initHeaderFooter() {
    const 主页眉元素 = document.getElementById('主页眉');
    const 页眉Logo元素 = document.getElementById('页眉Logo');
    const 页眉列s = document.querySelectorAll('.页眉列.btn');
    const 下拉弹窗列s = document.querySelectorAll('.下拉弹窗列.btn');
    const 页眉下拉弹窗元素 = document.getElementById('页眉下拉弹窗');
    const 下拉弹窗提示图片元素 = document.getElementById('下拉弹窗提示图片');
    const 页脚site按钮 = document.getElementById('页脚site按钮');
    const 页脚导航菜单 = document.getElementById('页脚导航菜单');

    // 假设的图片路径数组
    const 提示图片路径s = [
        '../assets/images/css/css1.jpg',
      '../assets/images/css/css2.jpg',
     '../assets/images/css/css3.jpg',
      '../assets/images/css/css4.jpg',
     '../assets/images/css/css7.jpg'

    ];

    // 联动高亮：页眉和下拉弹窗列
    页眉列s.forEach((col, idx) => {
        col.addEventListener('mouseenter', () => {
            col.classList.add('active');
            if (下拉弹窗列s[idx]) 下拉弹窗列s[idx].classList.add('active');
        });
        col.addEventListener('mouseleave', () => {
            col.classList.remove('active');
            if (下拉弹窗列s[idx]) 下拉弹窗列s[idx].classList.remove('active');
        });
    });

    下拉弹窗列s.forEach((col, idx) => {
        col.addEventListener('mouseenter', () => {
            col.classList.add('active');
            if (页眉列s[idx]) 页眉列s[idx].classList.add('active');
        });
        col.addEventListener('mouseleave', () => {
            col.classList.remove('active');
            if (页眉列s[idx]) 页眉列s[idx].classList.remove('active');
        });
    });

    // 控制边线显示
    function setBorderLines(show) {
        document.querySelectorAll('.页眉列, .下拉弹窗列').forEach(el => {
            if (show) {
                el.classList.add('有边线');
            } else {
                el.classList.remove('有边线');
            }
        });
        // 下拉弹窗 LOGO 列添加左边线
        const logoCol = document.querySelector('.下拉弹窗列.logo');
        if (logoCol) {
            if (show) {
                logoCol.classList.add('左边线');
            } else {
                logoCol.classList.remove('左边线');
            }
        }
    }

    // 处理鼠标进入页眉按钮的事件
    页眉列s.forEach((col, 索引) => {
        col.addEventListener('mouseenter', () => {
            页眉下拉弹窗元素.classList.add('展开');
            主页眉元素.classList.add('有边线');
            setBorderLines(true);
            if (索引 < 提示图片路径s.length) {
                下拉弹窗提示图片元素.src = 提示图片路径s[索引];
                下拉弹窗提示图片元素.classList.add('显示');
            }
        });
    });

    // 鼠标离开页眉和下拉弹窗时关闭弹窗
    let 离开页眉计时器;
    let 离开弹窗计时器;

    主页眉元素.addEventListener('mouseleave', (事件) => {
        if (事件.relatedTarget && 页眉下拉弹窗元素.contains(事件.relatedTarget)) {
            return;
        }
        离开页眉计时器 = setTimeout(() => {
            页眉下拉弹窗元素.classList.remove('展开');
            主页眉元素.classList.remove('有边线');
            setBorderLines(false);
            下拉弹窗提示图片元素.classList.remove('显示');
        }, 100);
    });

    页眉下拉弹窗元素.addEventListener('mouseenter', () => {
        clearTimeout(离开页眉计时器);
    });

    页眉下拉弹窗元素.addEventListener('mouseleave', () => {
        离开弹窗计时器 = setTimeout(() => {
            页眉下拉弹窗元素.classList.remove('展开');
            主页眉元素.classList.remove('有边线');
            setBorderLines(false);
            下拉弹窗提示图片元素.classList.remove('显示');
        }, 100);
    });

    // 页脚 site 按钮功能
    if (页脚site按钮 && 页脚导航菜单) {
        页脚site按钮.addEventListener('click', function() {
            页脚导航菜单.classList.toggle('显示');
        });

        // 点击其他地方关闭菜单
        document.addEventListener('click', function(event) {
            if (!页脚site按钮.contains(event.target) && !页脚导航菜单.contains(event.target)) {
                页脚导航菜单.classList.remove('显示');
            }
        });
    }
}

// 确保在 DOM 加载完成后调用这些函数
document.addEventListener('DOMContentLoaded', () => {
    injectHeaderFooter();
    initHeaderFooter();
});