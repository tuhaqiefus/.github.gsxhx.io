// sub-header.js

// 用于注入子页眉 HTML 的函数
function injectSubHeader() {
    const subHeaderHtml = `
        <div class="子页眉" id="子页眉">
            <div class="子页眉背景填充"></div>
            <div class="子页眉内容">
                <div class="子页眉图片区域">
                    <a href="../index.html">
                        <img src="../home.jpg" alt="子页眉图片">
                    </a>
                </div>
                <div class="子页眉标题区域">
                    <div class="子页眉一级标题">
                        公司介绍
                        <span class="子页眉一级标题箭头" id="子页眉一级标题箭头">▼</span>
                        <div class="子页眉一级标题下拉菜单" id="子页眉一级标题下拉菜单">
                            <a class="子页眉一级标题下拉菜单项" href="../cn/html11.html" target="_blank">公司介绍</a>
                            <a class="子页眉一级标题下拉菜单项" href="../cn/html21.html" target="_blank">工程业绩</a>
                            <a class="子页眉一级标题下拉菜单项" href="../cn/html31.html" target="_blank">可持续性</a>
                            <a class="子页眉一级标题下拉菜单项" href="../cn/html41.html" target="_blank">科技研发</a>
                            <a class="子页眉一级标题下拉菜单项" href="../cn/html71.html" target="_blank">宣传中心</a>
                        </div>
                    </div>
                    <div class="子页眉二级标题">
                        <span class="子页眉二级标题下拉箭头" id="子页眉二级标题下拉箭头">▼</span>
                        <div class="子页眉二级标题下拉菜单" id="子页眉二级标题下拉菜单">
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html11.html" target="_blank">愿景理念</a>
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html12.html" target="_blank">发展历史</a>
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html13.html" target="_blank">资质荣誉</a>
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html14.html" target="_blank">组织架构</a>
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html15.html" target="_blank">全球分支</a>
                            <a class="子页眉二级标题下拉菜单项" href="../cn/html16.html" target="_blank">总部地址</a>
                        </div>
                    </div>
                </div>
            </div>
            <div class="子页眉二级标题下拉菜单" id="子页眉二级标题下拉菜单_重复">
                <a class="子页眉二级标题下拉菜单项" href="https://www.bilibili.com" target="_blank">微电子</a>
                <a class="子页眉二级标题下拉菜单项" href="https://www.bilibili.com" target="_blank">石油化工</a>
                <a class="子页眉二级标题下拉菜单项" href="https://www.bilibili.com" target="_blank">光电产业</a>
                <a class="子页眉二级标题下拉菜单项" href="https://www.bilibili.com" target="_blank">洁净系统</a>
            </div>
        </div>
    `;

    // 找到主体内容块并在其之前插入子页眉
    const mainContentBlock = document.querySelector('.统一主体内容块一级块');
    if (mainContentBlock) {
        mainContentBlock.insertAdjacentHTML('beforebegin', subHeaderHtml);
    } else {
        // 如果找不到主体内容块，则作为备用方案追加到 body
        document.body.insertAdjacentHTML('beforeend', subHeaderHtml);
    }
}

// 初始化子页眉交互的函数
function initSubHeader() {
    const 子页眉元素 = document.getElementById('子页眉');
    const 子页眉一级标题箭头 = document.getElementById('子页眉一级标题箭头');
    const 子页眉一级标题下拉菜单 = document.getElementById('子页眉一级标题下拉菜单');
    const 子页眉二级标题下拉箭头 = document.getElementById('子页眉二级标题下拉箭头');
    // 注意：请确保 HTML 中的 ID 唯一，这里选择第一个匹配的元素
    const 子页眉二级标题下拉菜单 = document.querySelector('.子页眉二级标题下拉菜单');

    // 子页眉滚动监听
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        if (scrollTop > 15 * window.innerHeight / 100) { // 15vh 转换为像素
            子页眉元素.classList.add('展开');
            子页眉元素.classList.add('固定');
        } else {
            子页眉元素.classList.remove('展开');
            子页眉元素.classList.remove('固定');
        }
    });

    // --- **以下是处理 document.title 的关键部分** ---
    // 这个 DOMContentLoaded 监听器现在被移到了文件的最外层，只执行一次
    // 它只会在整个页面 DOM 完全加载后执行，保证元素已存在
    // 这里不再需要重复定义，因为我们会在文件末尾统一处理
    // --- **以上是处理 document.title 的关键部分** ---

    // 子页眉一级、二级标题下拉菜单功能
    if (子页眉一级标题箭头 && 子页眉一级标题下拉菜单) {
        子页眉一级标题箭头.addEventListener('click', function(event) {
            event.stopPropagation();
            子页眉一级标题箭头.classList.toggle('展开');
            子页眉一级标题下拉菜单.classList.toggle('显示');
            // 关闭另一个菜单
            if (子页眉二级标题下拉箭头 && 子页眉二级标题下拉菜单) {
                子页眉二级标题下拉箭头.classList.remove('展开');
                子页眉二级标题下拉菜单.classList.remove('显示');
            }
        });
    }

    if (子页眉二级标题下拉箭头 && 子页眉二级标题下拉菜单) {
        子页眉二级标题下拉箭头.addEventListener('click', function(event) {
            event.stopPropagation();
            子页眉二级标题下拉箭头.classList.toggle('展开');
            子页眉二级标题下拉菜单.classList.toggle('显示');
            // 关闭另一个菜单
            if (子页眉一级标题箭头 && 子页眉一级标题下拉菜单) {
                子页眉一级标题箭头.classList.remove('展开');
                子页眉一级标题下拉菜单.classList.remove('显示');
            }
        });
    }

    // 点击其他地方关闭下拉菜单
    document.addEventListener('click', function(event) {
        if (子页眉一级标题下拉菜单 && 子页眉一级标题箭头 && !子页眉一级标题下拉菜单.contains(event.target) && !子页眉一级标题箭头.contains(event.target)) {
            子页眉一级标题箭头.classList.remove('展开');
            子页眉一级标题下拉菜单.classList.remove('显示');
        }
        if (子页眉二级标题下拉菜单 && 子页眉二级标题下拉箭头 && !子页眉二级标题下拉菜单.contains(event.target) && !子页眉二级标题下拉箭头.contains(event.target)) {
            子页眉二级标题下拉箭头.classList.remove('展开');
            子页眉二级标题下拉菜单.classList.remove('显示');
        }
    });
}

// 确保在 DOM 加载完成后调用这些函数
document.addEventListener('DOMContentLoaded', () => {
    // 确保先注入 HTML
    injectSubHeader();
    // 再初始化交互，此时 HTML 元素已在 DOM 中
    initSubHeader();

    // 重新把 document.title 的逻辑放在这个唯一的 DOMContentLoaded 监听器里
    const titleText = document.title; // 获取 <title> 标签的内容

    // 设置子页眉二级标题
    const 子页眉二级标题 = document.querySelector('.子页眉二级标题');
    const 子页眉二级标题下拉箭头 = document.getElementById('子页眉二级标题下拉箭头'); // 确保能获取到箭头元素
    if (子页眉二级标题 && 子页眉二级标题下拉箭头) {
        子页眉二级标题.childNodes.forEach(node => {
            if (node.nodeType === Node.TEXT_NODE) {
                node.remove();
            }
        });
        const textNode = document.createTextNode(titleText);
        子页眉二级标题.insertBefore(textNode, 子页眉二级标题下拉箭头);
    }

    // 设置主体顶上标题的 h1 内容
    const 主体顶上标题h1 = document.querySelector('.主体顶上标题 h1');
    if (主体顶上标题h1) {
        主体顶上标题h1.textContent = titleText;
    }
});