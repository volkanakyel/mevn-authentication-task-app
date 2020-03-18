<template>
<div>
  <task-list />
</div>
</template>
<script>
import TaskList from '@/components/tasks/TaskList'
export default {
  name: 'tasks',
  components: {
    TaskList,
  }
}
</script>