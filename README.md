### 设计思路

1. 添加依赖
2. 设计一个透明且 Fix 的 Navbar,其在屏幕为 sm 下会有不同的样式，用 useState()来控制状态
3. 使用<Canvas>制作具有动态光影的文字标题，用 useFrame 控制其文字轻微摆动和顺逆动态光源，通过 easing 使其改变相机位置和文字旋转，maath 的用法参考了[这里](https://sudeeptobose.medium.com/basic-3d-camera-movement-with-react-three-fiber-and-maath-library-4b060bfe7c5c)
   ，再添加一个 Sparkles 为页面背景增加星光
4. 使用 sphereGeometry 生成一个球体，为其添加地球的材质，用 useFrame 使其自转；同时再根据经纬度计算出其在 3D 图像上的确切位置，生成一个球体代表我的位置，其 mesh 的 position 属性为 lat 和 lng,通过原生 THREEjs 创建一个 CityLabel，用 useFrame 使标签永远面向 camera(即屏幕) ,将其和 position 球打包成一个 gruop，添加 OrbitControls，并在手机上禁用此组件防止用户无法下滑
5. 将此前的 About 和 Works 页面迁移过来并更新样式,素材来自于[iconfont](https://www.iconfont.cn/)和官网的 icon
6. 为 Works 添加一个可互动的 3D 电脑屏幕，模型从[Sketchfab](https://sketchfab.com/feed)上下载，并用[此网站](https://gltf.pmnd.rs/)将其转化为可用的代码，然后用 useTexture 添加材质，根据传进来的 currentProject 不同（由项目的左右按钮控制）,在屏幕上呈现不同的图片，==因为 useTexture 默认 flipY 为 true，需要在其内添加返回函数改为 false==，并在 mesh 内传入 map 完成修改，然后用 useGSAP 的 from 属性添加触发模型动画，让其看起来更丝滑

### 用到的网站：

- [iconfont](https://www.iconfont.cn/)
- [Three.js](https://threejs.org/docs)
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [drei](https://drei.docs.pmnd.rs/getting-started/introduction)
- [maath tutorial](https://sudeeptobose.medium.com/basic-3d-camera-movement-with-react-three-fiber-and-maath-library-4b060bfe7c5c)
- [Sketchfab](https://sketchfab.com/feed)
- [GLBF generated](https://gltf.pmnd.rs)
