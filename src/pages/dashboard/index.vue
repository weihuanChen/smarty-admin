<template>
  {{ t("hello") }}
  <h1>index page 1</h1>
  <card></card>
</template>
<script lang="ts" setup>
import { useI18n } from "vue-i18n";

const { t } = useI18n();
</script>
<route lang="yaml">
meta:
  layout: default
</route>
