<template>
  <div>
    <EntitiesList entity="party" method="parties"/>
  </div>
</template>
<script>
import EntitiesList from "@/components/entities/EntitiesList";

export default {
  components: {
    EntitiesList
  },
}
</script>
