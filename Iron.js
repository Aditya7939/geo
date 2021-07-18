class Iron{
	constructor(x,y,width,height)
	{
	// assign options to the rubber ball
	var options={
        'restituition':0.3,
        'friction':5,
        'density':1
    }
		this.x=x;
		this.y=y;
		this.width=width;
        this.height=height;
		this.body=Bodies.rectangle(this.x, this.y,this.width,this.height, options)
		World.add(world, this.body);

	}
	display()
	{
			var rpos=this.body.position;		
			push()
			translate(rpos.x, rpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("silver");
			fill("darkblue");
			//draw the ellipse here to display the rubber ball
           rect(0,0,this.width,this.height);
			pop()
	}

}