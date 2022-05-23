<template>
  <div id="app" class="text-semantic-positive-500 font-sato">
    <span>test view</span>
    <div>
      <Avatar large />
      <AvatarStack />
      <Btn> tewt</Btn>
    </div>
  </div>
</template>

<style lang="scss"></style>

<script>
import Avatar from "@/components/lundi-uiKit/avatar/Avatar";
import AvatarStack from "@/components/lundi-uiKit/avatar/AvatarStack";
import Btn from "@/components/lundi-uiKit/Button";
export default {
  components: {
    Avatar,
    AvatarStack,
    Btn,
  },
};
</script>
