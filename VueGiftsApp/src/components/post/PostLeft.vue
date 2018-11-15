<template>
  <div class="contain_left">
    <div class="posts">
      <div class="posttype">
        <ul>
          <li>
            <a href="" :class="{on:navType=='tj'}" @click.prevent="changenav('tj')">推荐</a>
          </li>
          <li>
            <a href="" :class="{on:navType=='gz'}" @click.prevent="changenav('gz')">关注</a>
          </li>
          <li>
            <a href="" :class="{on:navType=='hot'}" @click.prevent="changenav('hot')">热门</a>
          </li>
        </ul>
      </div>
      <div class="postcontent">
        <ul>
          <li v-for="pmes in postmeses">
            <div class="NoImg" v-if="!pmes.postImg">
            <!--<a href="" class="p_title" v-text="pmes.posttitle"></a>-->
            <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}" class="p_title" v-text="pmes.posttitle"></router-link>
            <div class="simple" v-if="pmes.easyshow">
              <div class="p_content">
                <span >
                    <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}" v-text="pmes.posteasycon"></router-link>
                </span>
                <button class="readMore"  @click.prevent="changepoststatus(pmes.postid)">
                  阅读全文
                </button>
              </div>
              <div class="p_nav">
                <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
                <button>
                  <span v-text="pmes.postreplynum"></span><span> 条回复</span>
                </button>
                <router-link to="{name:'',params:{userid:1}"></router-link>
                <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)" v-if="!pmes.postcollectstatus"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)" v-if="pmes.postcollectstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                <button @click="colloectpost(pmes.postid)">
                  <span v-text="pmes.postcollectnum"  :class="{on:pmes.postcollectstatus}"></span><span  :class="{on:pmes.postcollectstatus}">收藏</span>
                </button>
                <svg class="Zi Zi--Heart Button-zi" @click="danzanpost(pmes.postid)" v-if="!pmes.postdianzanstatus"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                <svg class="Zi Zi--Heart Button-zi" @click="danzanpost(pmes.postid)" v-if="pmes.postdianzanstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                <button @click="danzanpost(pmes.postid)">
                  <span v-text="pmes.postdianzannum"  :class="{on:pmes.postdianzanstatus}"></span><span :class="{on:pmes.postdianzanstatus}">点赞</span>
                </button>
                <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
                <button>
                  <span>分享</span>
                </button>

                <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
                <button>
                  <span>举报</span>
                </button>
                <div class="clear"></div>
              </div>
            </div>
            <div class="rich" v-if="!pmes.easyshow">
              <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}"  class="p_rcontent" v-html="pmes.postdetailcon"></router-link>
              <div class="p_nav">
                <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
                <button>
                  <span v-text="pmes.postreplynum"></span><span>条回复</span>
                </button>
                <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)"  v-if="!pmes.postcollectstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)"  v-if="pmes.postcollectstatus" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                <button  @click="colloectpost(pmes.postid)">
                  <span v-text="pmes.postcollectnum" :class="{on:pmes.postcollectstatus}"></span><span :class="{on:pmes.postcollectstatus}">收藏</span>
                </button>
                <svg class="Zi Zi--Heart Button-zi" @click="danzanpost(pmes.postid)" v-if="!pmes.postdianzanstatus"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                <svg class="Zi Zi--Heart Button-zi" @click="danzanpost(pmes.postid)" v-if="pmes.postdianzanstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                <button @click="danzanpost(pmes.postid)">
                  <span v-text="pmes.postdianzannum" @click="danzanpost(pmes.postid)" :class="{on:pmes.postdianzanstatus}"></span><span @click="danzanpost(pmes.postid)" :class="{on:pmes.postdianzanstatus}">点赞</span>
                </button>
                <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
                <button>
                  <span>分享</span>
                </button>

                <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
                <button>
                  <span>举报</span>
                </button>
                <button class="readeLess">
                  <span  @click.prevent="changepoststatus(pmes.postid)">收起细节</span>
                </button>
                <div class="clear"></div>
              </div>
            </div>

          </div>
            <div class="Img" v-if="pmes.postImg">
              <a href="" class="p_title" v-text="pmes.posttitle"></a>
              <div class="simple" v-if="pmes.easyshow">
                <div class="content">
                  <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}">
                    <div class="small_img" :style="{backgroundImage:'url('+pmes.postImg+')'}">
                    </div>
                  </router-link>

                  <div class="words">

                      <span class="word">
                        <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}" v-text="pmes.posteasycon"></router-link>
                      </span>
                    <button class="readMore"  @click.prevent="changepoststatus(pmes.postid)">阅读全文</button>
                  </div>
                  <div class="clear"></div>
                </div>
                <div class="p_nav">
                  <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
                  <button>
                    <span v-text="pmes.postreplynum"></span><span> 条回复</span>
                  </button>
                  <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)" v-if="!pmes.postcollectstatus" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                  <svg class="Zi Zi--Star Button-zi" @click="colloectpost(pmes.postid)" v-if="pmes.postcollectstatus" fill="#FF8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                  <button  @click="colloectpost(pmes.postid)">
                    <span v-text="pmes.postcollectnum" :class="{on:pmes.postcollectstatus}"></span><span :class="{on:pmes.postcollectstatus}">收藏</span>
                  </button>
                  <svg class="Zi Zi--Heart Button-zi"  v-if="!pmes.postdianzanstatus" @click="danzanpost(pmes.postid)"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                  <svg class="Zi Zi--Heart Button-zi"  v-if="pmes.postdianzanstatus" @click="danzanpost(pmes.postid)"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                  <button  @click="danzanpost(pmes.postid)">
                    <span v-text="pmes.postdianzannum"  :class="{on:pmes.postdianzanstatus}"></span><span  :class="{on:pmes.postdianzanstatus}">点赞</span>
                  </button>
                  <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
                  <button>
                    <span>分享</span>
                  </button>
                  <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
                  <button>
                    <span>举报</span>
                  </button>
                  <div class="clear"></div>
                </div>
              </div>
              <div class="rich" v-if="!pmes.easyshow">
                <div class="big_img">
                  <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}">
                    <img v-bind:src="pmes.postImg" alt="">
                  </router-link>
                </div>
                <div class="p_rcontent" >
                  <router-link :to="{path:'/postdetail',query:{pid:pmes.postid}}" v-html="pmes.postdetailcon"></router-link>
                </div>
                <div class="p_nav">
                  <svg class="Zi Zi--Comment Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M10.241 19.313a.97.97 0 0 0-.77.2 7.908 7.908 0 0 1-3.772 1.482.409.409 0 0 1-.38-.637 5.825 5.825 0 0 0 1.11-2.237.605.605 0 0 0-.227-.59A7.935 7.935 0 0 1 3 11.25C3 6.7 7.03 3 12 3s9 3.7 9 8.25-4.373 9.108-10.759 8.063z" fill-rule="evenodd"></path></svg>
                  <button>
                    <span v-text="pmes.postreplynum"></span><span>条回复</span>
                  </button>
                  <svg class="Zi Zi--Star Button-zi"  v-if="!pmes.postcollectstatus" @click="colloectpost(pmes.postid)" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                  <svg class="Zi Zi--Star Button-zi"  v-if="pmes.postcollectstatus" @click="colloectpost(pmes.postid)" fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M5.515 19.64l.918-5.355-3.89-3.792c-.926-.902-.639-1.784.64-1.97L8.56 7.74l2.404-4.871c.572-1.16 1.5-1.16 2.072 0L15.44 7.74l5.377.782c1.28.186 1.566 1.068.64 1.97l-3.89 3.793.918 5.354c.219 1.274-.532 1.82-1.676 1.218L12 18.33l-4.808 2.528c-1.145.602-1.896.056-1.677-1.218z" fill-rule="evenodd"></path></svg>
                  <button  @click="colloectpost(pmes.postid)">
                    <span v-text="pmes.postcollectnum"  :class="{on:pmes.postcollectstatus}"></span><span :class="{on:pmes.postcollectstatus}">收藏</span>
                  </button>
                  <svg class="Zi Zi--Heart Button-zi"  @click="danzanpost(pmes.postid)" v-if="!pmes.postdianzanstatus"  fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                  <svg class="Zi Zi--Heart Button-zi"  @click="danzanpost(pmes.postid)" v-if="pmes.postdianzanstatus"  fill="#ff8000" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2 8.437C2 5.505 4.294 3.094 7.207 3 9.243 3 11.092 4.19 12 6c.823-1.758 2.649-3 4.651-3C19.545 3 22 5.507 22 8.432 22 16.24 13.842 21 12 21 10.158 21 2 16.24 2 8.437z" fill-rule="evenodd"></path></svg>
                  <button  @click="danzanpost(pmes.postid)">
                    <span v-text="pmes.postdianzannum"  :class="{on:pmes.postdianzanstatus}"></span><span :class="{on:pmes.postdianzanstatus}">点赞</span>
                  </button>
                  <svg class="Zi Zi--Share Button-zi" fill="#8590a6" viewBox="0 0 24 24" width="1.2em" height="1.2em"><path d="M2.931 7.89c-1.067.24-1.275 1.669-.318 2.207l5.277 2.908 8.168-4.776c.25-.127.477.198.273.39L9.05 14.66l.927 5.953c.18 1.084 1.593 1.376 2.182.456l9.644-15.242c.584-.892-.212-2.029-1.234-1.796L2.93 7.89z" fill-rule="evenodd"></path></svg>
                  <button>
                    <span>分享</span>
                  </button>
                  <svg viewBox="0 0 18 20" fill="#8590a6" class="Icon Icon--report Icon--left" width="11" height="16" aria-hidden="true" style="height: 16px; width: 11px;"><title></title><g><path d="M16.947 1.13c-.633.135-3.927.638-5.697.384-3.133-.45-4.776-2.54-9.95-.888C.305 1.04.025 1.664.025 2.646L0 18.807c0 .3.1.54.304.718.195.202.438.304.73.304.275 0 .52-.102.73-.304.202-.18.304-.418.304-.718v-6.58c4.533-1.235 8.047.668 8.562.864 2.343.893 5.542.008 6.774-.657.397-.178.596-.474.596-.887V1.964c0-.6-.42-.972-1.053-.835z"></path></g></svg>
                  <button>
                    <span>举报</span>
                  </button>
                  <button class="readeLess" @click.prevent="changepoststatus(pmes.postid)">
                    <span >收起细节</span>
                  </button>
                  <div class="clear"></div>
                </div>
              </div>

            </div>
          </li>

        </ul>
      </div>
    </div>
  </div>
</template>

<script>
    import axios from 'axios'
    export default {

        name: "PostLeft",
        // props:[user],
        data:function () {
          return{
              user:{
                userid:"1"
              },
              navType:"tj",
              page:1,
              postmeses:[
              {
                //帖子id
                postid:"1",
                //帖子标题
                posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
                //帖子标题图片
                postImg:"https://pic2.zhimg.com/50/v2-32c8c3ad2eb13b6c770d255a2a13bcb1_400x224.jpg",
                //帖子详细内容
                postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
                //帖子简略内容
                posteasycon:"毛圆： 其实根源在于游戏的设定。 moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。 比如你机器人空q了，那么这10几秒的cd里，他作…",
                //帖子回复数(int)
                postreplynum:223,
                //帖子收藏数(int)
                postcollectnum:334,
                //帖子是否已经收藏
                postcollectstatus:false,
                //帖子点赞数(int)
                postdianzannum:455,
                //帖子是否已经点赞
                postdianzanstatus:false,
                //帖子是否简易显示
                easyshow:true
              },
              {
                postid:"2",
                posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
                postImg:"https://pic2.zhimg.com/50/v2-32c8c3ad2eb13b6c770d255a2a13bcb1_400x224.jpg",
                postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
                posteasycon:"毛圆： 其实根源在于游戏的设定。 moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。 比如你机器人空q了，那么这10几秒的cd里，他作…",
                postreplynum:223,
                postcollectnum:232,
                postcollectstatus:false,
                postdianzannum:533,
                postdianzanstatus:false,
                easyshow:true
              },
              {
                postid:"3",
                posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
                postImg:"",
                postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
                posteasycon:"毛圆： 其实根源在于游戏的设定。 moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。 比如你机器人空q了，那么这10几秒的cd里，他作…",
                postreplynum:223,
                postcollectnum:334,
                postcollectstatus:false,
                postdianzannum:556,
                postdianzanstatus:false,
                easyshow:true
              },
              {
                postid:"4",
                posttitle:"为什么lol职业联赛很少看到石头木木之类史诗级别的团控？",
                postImg:"",
                postdetailcon:'<span class=\"RichText ztext CopyrightRichText-richText\" itemprop=\"text\"><p>其实根源在于游戏的设定。</p><p><br></p><p>moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。</p><p><br></p><p>比如你机器人空q了，那么这10几秒的cd里，他作用就大大减小。</p><p><br></p><p>而石头人和阿木木的大招这类技能，如果是裸放又非常好躲的。这缘于此类技能的设定太过于古老，是非常早期的英雄机制。</p><p><br></p><p>而如今新英雄的团控都不会像过去这些老英雄那样，简单且粗暴了。你看看加里奥，同样是大招击飞，他的配合性和互动性就高多了。</p><p><br></p><p>但这不是关键，关键在于要想提高此类大团控的命中，在如今的职业赛场，必须获得更多“信息量”。</p><p><br></p><p>比如知道adc的位置的躲草丛的石头人放R，威胁就远远比正面的石头人的R要强。</p><p><br></p><p>但问题在于：获得信息量的优先权，你得有足够的强势对线来支撑，然而大团控这些英雄因为大招太厉害，一般对线能力都不能太强，如果太强那就太bug了，因此为了这一个团控，bp里就必须为他们牺牲。</p><p><br></p><p>但牺牲换取的很可能是一个并不稳定的大招，（s3全明星若风的石头人，s5世界赛lgd的石头人上单都很好的说明了这点。）</p><p><br></p><p>那么性价比就很低了。</p><p><br></p><p>而职业赛场上的选手，也更偏向于技能组合来达到团控的“效果”。比如卡利斯塔牛头布隆，奥恩加里奥这些。</p><p><br></p><p>有这些高容错又不用牺牲队友的英雄，谁还会傻傻的去选个大团控呢？</p><p></p><p></p></span>',
                posteasycon:"毛圆： 其实根源在于游戏的设定。 moba类的游戏为了维持平衡，一直很强调一个叫“收益越大，付出越大”。 比如你机器人空q了，那么这10几秒的cd里，他作…",
                postreplynum:223,
                postcollectnum:334,
                postcollectstatus:false,
                postdianzannum:445,
                postdianzanstatus:false,
                easyshow:true
              }
            ]
          }
        },
        mounted:function(){
            var vm=this;
            //初始化帖子
            axios.post("http://47.106.124.242:8000/post/showpost/",{
              navtype:this.navType,
              pageindex:this.page,
              uid:this.user.userid
            })
              .then(function (response) {
                vm.postmeses=response.data
              })
              .catch(function (error) {
                console.log(error)
              })
        },
        methods:{
          //根据帖子类型加载帖子
          changenav:function (type) {
            var vm=this;
            this.navType=type;
            axios.post("http://47.106.124.242:8000/post/showpost/",{
              navtype:this.navType,
              pageindex:this.page,
              uid:this.user.userid
            })
              .then(function (response) {
                vm.postmeses=response.data
              })
              .catch(function (error) {
                console.log(error)
              })
          },
        //加载更多帖子
        //   axios.post("http://47.106.124.242:8000/post/showpost/",{
        //   navtype:this.navType,
        //   pageindex:this.page,
        //   uid:this.user.userid
        // })
        //   .then(function (response) {
        //     for (let i in response.data){
        //       vm.postmeses.push(i)
        //     }
        //   })
        //   .catch(function (error) {
        //     console.log(error)
        //   })

          //切换帖子展示状态
          changepoststatus:function (id) {
            for(let i=0;i<this.postmeses.length;i++){
              if(id==this.postmeses[i].postid){
                this.postmeses[i].easyshow=!this.postmeses[i].easyshow
              }
            }
          },

         //帖子收藏
          colloectpost:function (id) {
            let oldstatus=false;
            for(let post =0 ;post<this.postmeses.length;post++){
              if(this.postmeses[post].postid==id){
                //改变图标字体样式
                this.postmeses[post].postcollectstatus=!this.postmeses[post].postcollectstatus
                oldstatus=this.postmeses[post].postcollectstatus

                //改变收藏数
                if(this.postmeses[post].postcollectstatus==true){
                  this.postmeses[post].postcollectnum+=1
                }else{
                  this.postmeses[post].postcollectnum-=1
                }
              }
            }

            //写入数据库
            axios.post("http://47.106.124.242:8000/post/collectpost/",{
              userid:this.user.userid,
              postid:id,
              collectstatus:oldstatus
            })
              .then(function (response) {
                console.log(response.data["code"])
                alert("收藏成功")
              })
              .catch(function (error) {
                console.log(error)
              })
          },

          //帖子点赞
          danzanpost:function (id) {
            let oldstatus=false;
            for(let post =0 ;post<this.postmeses.length;post++){
              if(this.postmeses[post].postid==id){
                //改变图标字体样式
                this.postmeses[post].postdianzanstatus=!this.postmeses[post].postdianzanstatus
                oldstatus=this.postmeses[post].postdianzanstatus
                //改变收藏数
                if(this.postmeses[post].postdianzanstatus==true){
                  this.postmeses[post].postdianzannum+=1
                }else{
                  this.postmeses[post].postdianzannum-=1
                }
              }
            }

            //写入数据库
            axios.post("http://47.106.124.242:8000/post/dianzanpost/",{
              userid:this.user.userid,
              postid:id,
              dianzanstatus:oldstatus
            })
              .then(function (response) {
                console.log(response.data["code"])
                alert("收藏成功")
              })
              .catch(function (error) {
                console.log(error)
              })
          }
        }
    }
</script>

<style scoped>
html,body,ul,input,button{
  outline: 0;
  padding: 0;
  margin: 0;
}
a,button{
  /*color: #ff4000;*/
  text-decoration: none;
  cursor: pointer;
  color: #555555;
}
ul,li{
  list-style: none;
  margin: 0;
  outline: 0;
  padding: 0;
}
html,body{
  background-color: #f7f8f8!important;
}
.clear{
  clear: both;
}
/*帖子主体*/
.contain_left{
  min-height: 736px;
  width: 67%;
  background-color: white;
  float: left;
}

.contain_left .posts .posttype{
  width: 100%;
  height: 58px;
  border-bottom: solid 1px #dadada;
}
.contain_left .posts .posttype ul li{
  padding: 0 20px;
  height: 100%;
  display: inline-block;
}
.contain_left .posts .posttype ul li a{
  padding: 18px 0;
  font-size: 1.2em;
  display: inline-block;
  color: black;
  text-decoration: none;
  font-weight: 300;
  position: relative;
}
.contain_left .posts .posttype ul li .on{
  font-weight: 500;
}
.contain_left .posts .posttype ul li .on:after{
  position: absolute;
  right: 0;
  bottom: 2px;
  left: 0;
  height: 3px;
  background: #ff8000;
  content: "";
}
/*---------------------------------帖子--------------------------------------------*/
.contain_left .posts .postcontent ul {
  padding: 20px;
  box-sizing: border-box;
}
.contain_left .posts .postcontent ul li div{
  padding: 20px 10px;
  box-sizing: border-box;
}
.contain_left .posts .postcontent ul li .clear{
  padding: 0;
}
.contain_left .posts .postcontent ul li div .p_title{
  font-size: 1.2em;
  font-weight: 600;
  color:black;
  text-decoration: none;
  cursor: pointer;
}
.contain_left .posts .postcontent ul li .NoImg .simple{
  margin-top: 10px;
}
.contain_left .posts .postcontent ul li .NoImg .simple .p_content span{
  font-weight: 400;
  font-size: 1.1em;
}
.contain_left .posts .postcontent ul li .NoImg .simple .p_content span a{
  color: black;
}
.contain_left .posts .postcontent ul li div  button{
  display: inline-block;
  border:none;
  outline: none;
  background-color: white;
  font-size: 1.1em;
  line-height: 23px;
  margin-right: 20px;
  box-sizing: border-box;
  overflow: hidden;
}
.contain_left .posts .postcontent ul li div button:hover{
  color: #ff8000;
}
.contain_left .posts .postcontent ul li .NoImg .simple .p_content .readMore{
  font-weight: 400;
  color:#ff8000;
}
.contain_left .posts .postcontent ul li div .simple .p_nav{
  padding: 10px 0;
  height:43px;
  box-sizing: border-box;
}
.contain_left .posts .postcontent ul li div .simple .p_nav svg{
  float: left;
  margin-right: 5px;
  height: 23px;
}
.contain_left .posts .postcontent ul li div .simple .p_nav .on{
  color:#ff8000;
}
.contain_left .posts .postcontent ul li div .rich .p_nav .on{
  color:#ff8000;
}
.contain_left .posts .postcontent ul li div .simple .p_nav button{
  float: left;
}

.contain_left .posts .postcontent ul li div  .rich .p_nav{
  padding: 10px 0;
  height:43px;
  box-sizing: border-box;
}
.contain_left .posts .postcontent ul li div .rich .p_nav svg{
  float: left;
  margin-right: 5px;
  height: 23px;
}
.contain_left .posts .postcontent ul li div .rich .p_nav button{
  float: left;
}
.contain_left .posts .postcontent ul li div .rich .p_nav .readeLess{
  float: right;
}
/*.contain_left .posts .postcontent ul li  .Img .simple .content{*/
  /*margin: 10px 0;*/
/*}*/
.contain_left .posts .postcontent ul li  .Img .simple .content a .small_img{
  width: 190px;
  height: 105px;
  float: left;
  border-radius: 5px;
}

.contain_left .posts .postcontent ul li  .Img .simple .content .words{
  float: left;
  width: 390px;
  margin: 0 0 0 10px;
  padding: 0;
}
.contain_left .posts .postcontent ul li  .Img .simple .content .words .word{
  width: 390px;
  margin-left: 20px;
  font-size: 1.1em;
  font-weight:400;
}
.contain_left .posts .postcontent ul li .Img .simple .content .words .readMore{
  font-weight: 400;
  color:#ff8000;
}
.contain_left .posts .postcontent ul li .Img .rich .big_img{
  width: 100%;
  margin: 15px 0;
}
.contain_left .posts .postcontent ul li .Img .rich .big_img a img{
  width: 100%;
}
</style>
