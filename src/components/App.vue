<!--
    Root app template
-->

<template>
    <div id="app">
        <router-view />
    </div>
</template>

<!--
    Root app component
-->

<script>
export default {
    name: "App"
};
</script>

<!--
    Root app styles
-->

<style lang="scss">
@import "../scss/_common.scss";

body,
html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
</style>
