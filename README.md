### 设计思路

1. 添加依赖
2. 设计一个透明且 Fix 的 Navbar,其在屏幕为 sm 下会有不同的样式，用 useState()来控制状态
3. 使用<Canvas>制作具有动态光影的文字标题，用 useFrame 控制其文字轻微摆动和顺逆动态光源，通过 easing 使其改变相机位置和文字旋转，此处的[参考文章](https://sudeeptobose.medium.com/basic-3d-camera-movement-with-react-three-fiber-and-maath-library-4b060bfe7c5c)
   ，再添加一个 Sparkles 为页面背景增加星光
4. 使用 sphereGeometry 生成一个球体，为其添加地球的材质，用 useFrame 使其自转；同时再根据经纬度计算出其在 3D 图像上的确切位置，生成一个球体代表我的位置，其 mesh 的 position 属性为 lat 和 lng,通过原生 THREEjs 创建一个 CityLabel，用 useFrame 使标签永远面向 camera(即屏幕) ,将其和 position 球打包成一个 gruop，添加 OrbitControls，并在手机上禁用此组件防止用户无法下滑
5. 将此前的 About 和 Works 页面迁移过来并更新样式

### 资源网站：

- 图标下载：[iconfont](https://www.iconfont.cn/)
- [Three.js](https://threejs.org/docs)
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [drei](https://drei.docs.pmnd.rs/getting-started/introduction)
