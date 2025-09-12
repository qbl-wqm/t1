// 等待DOM加载完成
document.addEventListener('DOMContentLoaded', function () {
    // 获取按钮元素
    const changeColorBtn = document.getElementById('changeColorBtn');
    const navLinks = document.querySelectorAll('.nav-link');

    // 定义一些颜色
    const colors = ['#f4f4f4', '#e8f5e9', '#fff3e0', '#e3f2fd', '#f3e5f5'];
    let currentColorIndex = 0;

    // 为按钮添加点击事件
    changeColorBtn.addEventListener('click', function () {
        // 循环切换背景色
        currentColorIndex = (currentColorIndex + 1) % colors.length;
        document.body.style.backgroundColor = colors[currentColorIndex];

        // 显示提示信息
        alert(`背景色已更改为: ${colors[currentColorIndex]}`);
    });

    // 为导航链接添加点击事件
    navLinks.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault(); // 阻止默认跳转行为
            alert(`你点击了: ${this.textContent}`);
        });
    });

    // 页面加载完成后的提示
    console.log('页面加载完成，外部JavaScript已生效！');
});
