var app = new Vue({

  el: "#root",
  data: {
    indexImages: 0,
    images: ["https://images.pexels.com/photos/1450082/pexels-photo-1450082.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260", "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/2440021/pexels-photo-2440021.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", "https://images.pexels.com/photos/210307/pexels-photo-210307.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"],
    indexMessages: 0,
    messages: ["Naviga le acque", "La Thailandia come non l'hai mai vista", "La culla dell'uomo", "I deserti del mondo"]
  },
  methods: {
    nextImage: function() {
      this.indexImages++;
      this.indexMessages++;

      if(this.indexImages == this.images.length) {
        this.indexImages = 0;
        this.indexMessages = 0;
      }
    },
    prevImage: function() {
      this.indexImages--;
      this.indexMessages--;

      if(this.indexImages == -1) {
        this.indexImages = this.images.length - 1;
        this.indexMessages = this.images.length - 1;
      }
    },
    chooseImage: function(index) {
      this.indexImages = index;
      this.indexMessages = index;
    },
  }
});
