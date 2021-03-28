  


var app = new Vue ({
  el: '#vue',
  
  data: {
    images:['images/4.jpg','images/1.jpg','images/3.jpg','images/2.jpg','images/4.jpg','images/1.jpg'],  
  
    inputData: null , 
 
},
  methods: {
    imagesPush: function(){
      this.images.push(this.inputData)
    },
    deleteImage:function(images){
      this.images.splice(this.images.indexOf(images),1)
    },
    
  }
})
