import{_ as a,o as n,c as e,R as s}from"./chunks/framework.Kv9Ilig-.js";const m=JSON.parse('{"title":"","description":"","frontmatter":{"comment":false},"headers":[],"relativePath":"other/qita.md","filePath":"other/qita.md","lastUpdated":1702343567000}'),i={name:"other/qita.md"},t=s(`<h2 id="其他" tabindex="-1">其他 <a class="header-anchor" href="#其他" aria-label="Permalink to &quot;其他&quot;">​</a></h2><h3 id="文章" tabindex="-1">文章 <a class="header-anchor" href="#文章" aria-label="Permalink to &quot;文章&quot;">​</a></h3><h3 id="window-文章" tabindex="-1">window 文章 <a class="header-anchor" href="#window-文章" aria-label="Permalink to &quot;window 文章&quot;">​</a></h3><h4 id="关闭设备加密" tabindex="-1">关闭设备加密 <a class="header-anchor" href="#关闭设备加密" aria-label="Permalink to &quot;关闭设备加密&quot;">​</a></h4><p>1、鼠标右键选中开始菜单，之后选择“windows powershell（管理员）”,输入“manage-bde -off D:”，这里要注意盘符后面的冒号同样要输入。</p><h2 id="网络" tabindex="-1">网络 <a class="header-anchor" href="#网络" aria-label="Permalink to &quot;网络&quot;">​</a></h2><h3 id="华为" tabindex="-1">华为 <a class="header-anchor" href="#华为" aria-label="Permalink to &quot;华为&quot;">​</a></h3><ul><li><p>清除配置文件内容</p></li><li><p><strong>reset saved-configuration</strong></p></li><li><p>-y reboot -n -y</p></li></ul><div class="language- vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span>恢复交换机出厂配置。</span></span>
<span class="line"><span>&lt;HUAWEI&gt; reset saved-configuration</span></span>
<span class="line"><span>Warning: The action will delete the saved configuration in the device. </span></span>
<span class="line"><span>The configuration will be erased to reconfigure. Continue? [Y/N]:y </span></span>
<span class="line"><span>Warning: Now clearing the configuration in the device. </span></span>
<span class="line"><span>Info: Succeeded in clearing the configuration in the device.</span></span>
<span class="line"><span>&lt;HUAWEI&gt; reboot</span></span>
<span class="line"><span>Info: The system is now comparing the configuration, please wait.</span></span>
<span class="line"><span>Warning: The configuration has been modified, and it will be saved to the next startup saved-configuration file flash:/vrpcfg.zip. Continue? [Y/N]:n</span></span>
<span class="line"><span>Info: If want to reboot with saving diagnostic information, input &#39;N&#39; and then execute &#39;reboot save diagnostic-information&#39;.</span></span>
<span class="line"><span>System will reboot! Continue?[Y/N]:y</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><p>port-group group-member Ethernet0/0/1 to Ethernet0/0/22</p><h3 id="锐捷" tabindex="-1">锐捷 <a class="header-anchor" href="#锐捷" aria-label="Permalink to &quot;锐捷&quot;">​</a></h3><h3 id="思科" tabindex="-1">思科 <a class="header-anchor" href="#思科" aria-label="Permalink to &quot;思科&quot;">​</a></h3>`,12),r=[t];function o(l,p,c,d,h,u){return n(),e("div",null,r)}const f=a(i,[["render",o]]);export{m as __pageData,f as default};
