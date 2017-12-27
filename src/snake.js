const Snake=function(head,body) {
  this.head=head;
  this.body=body;
};

Snake.prototype={
  getBody:function() {
    return this.body;
  },
  getHead:function() {
    return this.head;
  },
  move:function() {
    this.body.push(this.head);
    this.head=this.head.next();
    return this.body.shift();
  },
  grow:function() {
    this.body.unshift(new Position(Infinity,Infinity,this.direction));
  },
  turnLeft:function() {
    this.head=this.head.turnLeft();
  },
  turnRight:function() {
    this.head=this.head.turnRight();
  },
  didEatItself : function(){
    return this.body.some(this.head.isSameCoordAs,this.head);
  },
  didItHitViewportEdge : function(length,breadth){
    return this.head.x>= breadth-1 || this.head.y >=length-1
    || this.head.x <= 0 || this.head.y <= 0;
  }
};
