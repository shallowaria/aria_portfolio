### 设计思路

1. 添加依赖
2. 设计一个透明且 Fix 的 Navbar,其在屏幕为 sm 下会有不同的样式，用 useState()来控制状态
3. 使用<Canvas>制作具有动态光影的文字标题，用 useFrame 控制其文字轻微摆动和顺逆动态光源，通过 easing 使其改变相机位置和文字旋转，maath 的用法参考了[这里](https://sudeeptobose.medium.com/basic-3d-camera-movement-with-react-three-fiber-and-maath-library-4b060bfe7c5c)
   ，再添加一个 Sparkles 为页面背景增加星光
4. 使用 sphereGeometry 生成一个球体，为其添加地球的材质，用 useFrame 使其自转；同时再根据经纬度计算出其在 3D 图像上的确切位置，生成一个球体代表我的位置，其 mesh 的 position 属性为 lat 和 lng,通过原生 THREEjs 创建一个 CityLabel，用 useFrame 使标签永远面向 camera(即屏幕) ,将其和 position 球打包成一个 gruop，添加 OrbitControls，并在手机上禁用此组件防止用户无法下滑
5. 将此前的 About 和 Works 页面迁移过来并更新样式,素材来自于[iconfont](https://www.iconfont.cn/)和官网的 icon
6. 为 Works 添加一个可互动的 3D 电脑屏幕，模型从[Sketchfab](https://sketchfab.com/feed)上下载，并用[此网站](https://gltf.pmnd.rs/)将其转化为可用的代码，然后用 useTexture 添加材质，根据传进来的 currentProject 不同（由项目的左右按钮控制）,在屏幕上呈现不同的图片，折腾我好久：useTexture 默认 flipY 为 true，需要在其内添加返回函数改为 false，并在 mesh 内传入 map 完成修改，然后用 useGSAP 的 from 属性添加触发模型动画，让其看起来更丝滑
7. Study Route 文字部分:用 group 在父元素控制子元素在 hover 时的状态.3D 部分：在[ReadyPlay](https://readyplayer.me/avatar)网站上建立一个我的 3D 模型，导出为 glb 样式，然后给其转化为 FBX 样式，在[Mixamo](https://www.mixamo.com/)绑定需要的动作后导出为 FBX 样式，将它们存放在 public 内，然后用[此网站](https://gltf.pmnd.rs/)将模型转化成代码并用 useGLTF 导入页面，为其添加自然光，聚光灯，OrbitControls 和 Suspence，然后用 useState 设置其默认动作，使用 onPointerOver 传参，接着加载动画:

- 用 useFBX 加载动画
- [animationName][0].name 设置动画名称
- useAnimations 输入动画数组和使用动画的 ref 得到 actions
- useEffect 内 action.play() 播放动画，同时设置 fadeIn 和 fadeOut 过渡流畅

### 用到的网站：

- [iconfont](https://www.iconfont.cn/)
- [Three.js](https://threejs.org/docs)
- [React Three Fiber](https://r3f.docs.pmnd.rs/getting-started/introduction)
- [drei](https://drei.docs.pmnd.rs/getting-started/introduction)
- [maath tutorial](https://sudeeptobose.medium.com/basic-3d-camera-movement-with-react-three-fiber-and-maath-library-4b060bfe7c5c)
- [Sketchfab](https://sketchfab.com/feed)
- [GLBF generated](https://gltf.pmnd.rs)
- [ReadyPlay](https://readyplayer.me/avatar)
- [Mixamo](https://www.mixamo.com/)
