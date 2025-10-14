## 第一步

1. 添加依赖
2. NavbarNavbar 图标从[iconfont](https://www.iconfont.cn/)上下载
3. 添加媒体查询，根据屏幕是否大于 sm 显示不同的布局
4. 使用<Canvas>制作具有动态效应的文字标题，用 useFrame 控制其文字和动态光源，通过 easing 使其对鼠标移动作出反应(向鼠标移动的反方向旋转)
5. 在文字标题下方添加一个可交互的地球,用 easing 为 Canvas 设计鼠标交互，事件绑定当鼠标点击时停止自转，通过 OrbitControls 使整个页面可拖拽，视觉上更好看
