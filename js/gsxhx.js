// index特化常开footer.js
// 将页眉展开弹窗作为常开footer的内容使用，固定黏着在统一页眉上部





//第一图幅 轮播栏JavaScript
//第一图幅 轮播栏JavaScript
//第一图幅 轮播栏JavaScript

    document.addEventListener('DOMContentLoaded', function() {
        const 轮播容器 = document.getElementById('轮播容器');
        const 播放暂停按钮 = document.getElementById('播放暂停按钮');
        const 指示器点 = document.querySelectorAll('.指示器点');
        
        let currentIndex = 0;
        let isPlaying = true;
        let interval;
        const 图片数量 = 3;
        const 自动播放间隔 = 3210; // 3.21秒
        
        // 初始化轮播
        function initCarousel() {
            // 设置第一张图片为active状态
            const 所有图片 = document.querySelectorAll('.轮播图片');
            所有图片[0].classList.add('active');
            
            updateCarousel();
            startAutoPlay();
        }
        
        // 更新轮播位置
        function updateCarousel() {
            // 移除所有图片的active类
            const 所有图片 = document.querySelectorAll('.轮播图片');
            所有图片.forEach((图片, index) => {
                图片.classList.toggle('active', index === currentIndex);
            });
            
            // 更新指示器状态
            指示器点.forEach((点, index) => {
                点.classList.toggle('active', index === currentIndex);
            });
        }
        
        // 下一张图片
        function nextSlide() {
            currentIndex = (currentIndex + 1) % 图片数量;
            updateCarousel();
        }
        
        // 上一张图片
        function prevSlide() {
            currentIndex = (currentIndex - 1 + 图片数量) % 图片数量;
            updateCarousel();
        }
        
        // 跳转到指定图片
        function goToSlide(index) {
            currentIndex = index;
            updateCarousel();
        }
        
        // 开始自动播放
        function startAutoPlay() {
            if (interval) clearInterval(interval);
            interval = setInterval(nextSlide, 自动播放间隔);
        }
        
        // 停止自动播放
        function stopAutoPlay() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
        
        // 切换播放/暂停状态
        function togglePlayPause() {
            isPlaying = !isPlaying;
            if (isPlaying) {
                播放暂停按钮.textContent = '||';
                startAutoPlay();
            } else {
                播放暂停按钮.textContent = '▶';
                stopAutoPlay();
            }
        }
        
        // 事件监听器
        播放暂停按钮.addEventListener('click', togglePlayPause);
        
        指示器点.forEach((点, index) => {
            点.addEventListener('click', () => {
                goToSlide(index);
                // 点击指示器时重置自动播放计时器
                if (isPlaying) {
                    stopAutoPlay();
                    startAutoPlay();
                }
            });
        });
        
        // 鼠标悬停时暂停自动播放
        轮播容器.addEventListener('mouseenter', () => {
            if (isPlaying) {
                stopAutoPlay();
            }
        });
        
        // 鼠标离开时恢复自动播放
        轮播容器.addEventListener('mouseleave', () => {
            if (isPlaying) {
                startAutoPlay();
            }
        });
        
        // 初始化轮播
        initCarousel();
    });

//第二块骑缝内容轮播JavaScript 
//第二块骑缝内容轮播JavaScript 
//第二块骑缝内容轮播JavaScript 
//第二块骑缝内容轮播JavaScript 
//第二块骑缝内容轮播JavaScript 
//第二块骑缝内容轮播JavaScript 


    document.addEventListener('DOMContentLoaded', function() {
        const 内容行块 = document.getElementById('第二块骑缝内容行块');
        const 内容页 = document.querySelectorAll('.第二块骑缝内容页');
        const 标题图片 = document.querySelectorAll('.第二块骑缝标题图片');
        const 左翻页按钮 = document.getElementById('第二块骑缝左翻页');
        const 右翻页按钮 = document.getElementById('第二块骑缝右翻页');
        
        let currentPage = 0;
        let isPlaying = true;
        let interval;
        const 页面数量 = 4;
        const 自动播放间隔 = 3200; // 5秒
        
        // 初始化轮播
        function initContentCarousel() {
            updateContentCarousel();
            startContentAutoPlay();
        }
        
        // 更新轮播位置
        function updateContentCarousel() {
            // 移除所有页面的active类
            内容页.forEach((页面, index) => {
                页面.classList.toggle('active', index === currentPage);
            });
            
            // 更新标题图片状态
            标题图片.forEach((图片, index) => {
                图片.classList.toggle('active', index === currentPage);
            });
        }
        
        // 下一页
        function nextContentPage() {
            currentPage = (currentPage + 1) % 页面数量;
            updateContentCarousel();
        }
        
        // 上一页
        function prevContentPage() {
            currentPage = (currentPage - 1 + 页面数量) % 页面数量;
            updateContentCarousel();
        }
        
        // 跳转到指定页面
        function goToContentPage(pageIndex) {
            currentPage = pageIndex;
            updateContentCarousel();
        }
        
        // 开始自动播放
        function startContentAutoPlay() {
            if (interval) clearInterval(interval);
            interval = setInterval(nextContentPage, 自动播放间隔);
        }
        
        // 停止自动播放
        function stopContentAutoPlay() {
            if (interval) {
                clearInterval(interval);
                interval = null;
            }
        }
        
        // 事件监听器 - 标题图片点击
        标题图片.forEach((图片, index) => {
            图片.addEventListener('click', () => {
                goToContentPage(index);
                // 点击标题图片时重置自动播放计时器
                if (isPlaying) {
                    stopContentAutoPlay();
                    startContentAutoPlay();
                }
            });
        });
        
        // 事件监听器 - 翻页按钮点击
        左翻页按钮.addEventListener('click', () => {
            prevContentPage();
            // 点击翻页按钮时重置自动播放计时器
            if (isPlaying) {
                stopContentAutoPlay();
                startContentAutoPlay();
            }
        });
        
        右翻页按钮.addEventListener('click', () => {
            nextContentPage();
            // 点击翻页按钮时重置自动播放计时器
            if (isPlaying) {
                stopContentAutoPlay();
                startContentAutoPlay();
            }
        });
        
        // 鼠标悬停时暂停自动播放
        内容行块.addEventListener('mouseenter', () => {
            if (isPlaying) {
                stopContentAutoPlay();
            }
        });
        
        // 鼠标离开时恢复自动播放
        内容行块.addEventListener('mouseleave', () => {
            if (isPlaying) {
                startContentAutoPlay();
            }
        });
        
        // 初始化轮播
        initContentCarousel();
    });

