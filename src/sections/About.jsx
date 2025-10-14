const About = () => {
  return (
    <section className="sm:px-10 px-5 my-20" id="about">
      <div className="relative min-h-screen flex items-center justify-center flex-col">
        <img
          src="/assets/terminal.png"
          alt="terminal background"
          className="absolute inset-0 min-h-screen"
        />
        <div className="max-w-7xl w-full relative z-10 sm:px-10 px-5 flex flex-col  items-center ">
          <div className="w-full lg:w-1/2">
            <h3 className="sm:text-4xl text-3xl font-semibold text-zinc-50 mb-6">
              About Me
            </h3>
            <ul className="space-y-4">
              <li className="text-lg text-zinc-50">
                您好,我是凯布,迄今已有半年的前端学习经验,我非常着迷于前端的技能,主要攻克方向为React及其相关生态
              </li>
              <li className="text-lg text-zinc-50">
                喜欢折腾:装过主机、修过NS手柄漂移、弄过Proxy订阅规则、折腾过StableDiffusion及SillyTavern
              </li>
              <li className="text-lg text-zinc-50">
                对Ai生图、对话和LLM有足够的了解, 学习途中看过 Git Pro JavaScript
                DOM编程艺术 犀牛书 ES6教程,对基础知识有足够的了解
                大学时期学过一些C和Python,现在正朝着前端方向努力
              </li>
              <li className="text-lg text-zinc-50">
                能正常阅读英文文档和看英文视频
              </li>
              <li className="text-lg text-zinc-50 font-semibold italic">
                Just take one step today!
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
