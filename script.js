window.onload=function()
{
	function Slider(slides,elem)
	{
		this.slides=slides||[];
		this.elem=elem;
		this.currentSlide=0;
		this.timer;
	}
	Slider.prototype.createSlider=function()
	{
		var div=document.createElement("div");
		div.classList.add("slider");//додає в div клас slider(remove, toggle)
		this.elem.appendChild(div);
		for(var i=0; i<this.slides.length; i++)
		{
			var img=document.createElement("img");
			img.setAttribute("src",this.slides[i]);
			img.classList.add("slide");
			if(i==0)
				img.classList.add("active");
			div.appendChild(img);
		}
		var self=this;
		this.timer=setInterval(function()
		{
			self._showSlide(self.currentSlide+1)
		},1500);
	}
	Slider.prototype._showSlide=function(n)
	{
		var slides=document.querySelectorAll('.slide');
		slides[this.currentSlide].classList.remove("active");
		if(n<slides.length)
			this.currentSlide=n;
		else
			this.currentSlide=0;
		slides[this.currentSlide].classList.add("active");
	}
	var mas=["img1.jpg","img2.jpg","img3.jpg"];
	var sl=new Slider(mas,document.body);
	sl.createSlider();
}