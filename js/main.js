var app = new Vue({

  el: "#root",
  data: {
    indexImages: 0,
    images: ["https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"]
  },
  methods: {
    nextImage: function() {
      this.indexImages++;

      if(this.indexImages == this.images.length) {
        this.indexImages = 0;
      }
    },
    prevImage: function() {
      this.indexImages--;

      if(this.indexImages == -1) {
        this.indexImages = this.images.length - 1;
      }
    }
  }
});
