class stone{
	constructor(x,y,r)
	{
    var options={
        'restituition':0.8,
        'friction':0.9,
        'density':12
    }
		this.x=x;
		this.y=y;
		this.r=r
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options)
		World.add(world, this.body);

	}
	display()
	{
			var rupos=this.body.position;		
			push()
			translate(rupos.x, rupos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("blue");
			fill("blue");
			//draw the ellipse here to display the rubber ball
            ellipse(0,0,this.r,this.r);
			pop()
	}

}