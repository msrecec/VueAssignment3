const assignment = Vue.createApp({
  data() {
    return {
      counter: 0,
    };
  },
  watch: {
    result() {
      that = this;
      setTimeout(() => {
        console.log('Running watcher and resetting the counter...');
        that.counter = 0;
      }, 5000);
    },
  },
  computed: {
    result() {
      if (this.counter < 37) {
        console.log('Rendering 1st computed condition');
        return 'Not there yet';
      } else if (this.counter === 37) {
        console.log('Rendering 2nd computed condition');
        return 'Done';
      } else {
        console.log('Rendering 3rd computed condition');
        return 'Too much!';
      }
    },
  },
  methods: {
    add(value) {
      this.counter += value;
    },
  },
});

assignment.mount('#assignment');
