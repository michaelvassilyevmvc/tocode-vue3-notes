<template>
  <div class="md-body">
    <Form @test="hangleTest" @onSubmit="handleSubmit"/>
  </div>
</template>
<script>
import Form from '@/components/Notes/Form.vue'

export default {
  components: {Form},
  methods: {
    handleSubmit(note) {
      console.log(note);
    },
    hangleTest({name, age}) {
      console.log('hello test');
      console.log(name);
      console.log(age);
    }
  }
}
</script>
