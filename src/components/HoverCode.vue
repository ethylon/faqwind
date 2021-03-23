<template>
  <code class="relative whitespace-nowrap group cursor-help">
    <span>{{ code }}</span>
    <div
      class="absolute left-0 z-10 hidden p-2 bg-white border rounded shadow-md group-hover:block border-neutral-200"
    >
      <!-- 
        TODO: Find a better way to store the classes definition 
        Maybe use <slot></slot> instead? Do we really need them static?
      -->
      <div v-if="code == '.mt-2'">
        <class>.mt-2</class>&nbsp;{<br />
        &nbsp;&nbsp;<keyword>margin-top: 0.5</keyword
        ><symbol>rem</symbol>;<br />
        }
      </div>
      <div v-else-if="code == '.px-3'">
        <class>.px-3</class>&nbsp;{<br />&nbsp;&nbsp;<keyword
          >padding-left: 0.75</keyword
        ><symbol>rem</symbol>;<br />&nbsp;&nbsp;<keyword
          >padding-right: 0.75</keyword
        ><symbol>rem</symbol>;<br />}
      </div>
      <div v-else-if="code == '.btn'">
        <class>.btn</class>&nbsp;{<br />&nbsp;&nbsp;<keyword
          >display: inline-block</keyword
        >;<br />
        &nbsp;&nbsp;<keyword>font-weight: 400</keyword>;<br />
        &nbsp;&nbsp;<keyword
          ><div class="inline-flex items-center space-x-1">
            color:
            <div class="h-3 w-3 ml-3 bg-[#212529] border border-black"></div>
            <span>#212529</span>
          </div></keyword
        >;<br />
        &nbsp;&nbsp;<keyword>text-align: center</keyword>;<br />
        &nbsp;&nbsp;<keyword>vertical-align: middle</keyword>;<br />
        &nbsp;&nbsp;<keyword>-webkit-user-select: none</keyword>;<br />
        &nbsp;&nbsp;<keyword>-moz-user-select: none</keyword>;<br />
        &nbsp;&nbsp;<keyword>-ms-user-select: none</keyword>;<br />
        &nbsp;&nbsp;<keyword>user-selec-: none</keyword>;<br />
        &nbsp;&nbsp;<keyword>background-color: transparent</keyword>;<br />
        &nbsp;&nbsp;<keyword
          >border: 1<symbol>px</symbol> solid transparent</keyword
        >;<br />
        &nbsp;&nbsp;<keyword>padding: 0.375</keyword><symbol>rem</symbol>
        <keyword>0.75</keyword><symbol>rem</symbol>;<br />
        &nbsp;&nbsp;<keyword>font-size: 1</keyword><symbol>rem</symbol>;<br />
        &nbsp;&nbsp;<keyword>line-height: 1.5</keyword>;<br />
        &nbsp;&nbsp;<keyword>border-radius: 0.25</keyword
        ><symbol>rem</symbol>;<br />}
      </div>
    </div>
  </code>
</template>

<script setup>
import { defineProps } from "vue";

defineProps({
  code: String,
  description: String,
});
</script>
