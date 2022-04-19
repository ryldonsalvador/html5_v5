(function (cjs, an) {

var p; // shortcut to reference prototypes
var lib={};var ss={};var img={};
lib.ssMetadata = [];


(lib.AnMovieClip = function(){
	this.actionFrames = [];
	this.ignorePause = false;
	this.gotoAndPlay = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndPlay.call(this,positionOrLabel);
	}
	this.play = function(){
		cjs.MovieClip.prototype.play.call(this);
	}
	this.gotoAndStop = function(positionOrLabel){
		cjs.MovieClip.prototype.gotoAndStop.call(this,positionOrLabel);
	}
	this.stop = function(){
		cjs.MovieClip.prototype.stop.call(this);
	}
}).prototype = p = new cjs.MovieClip();
// symbols:



(lib.arcade_fire_big = function() {
	this.initialize(img.arcade_fire_big);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fire_small = function() {
	this.initialize(img.arcade_fire_small);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,591,189);


(lib.arcade_fireandmore = function() {
	this.initialize(img.arcade_fireandmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,786,71);


(lib.ball = function() {
	this.initialize(img.ball);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,30,29);


(lib.block_logo = function() {
	this.initialize(img.block_logo);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,156,67);


(lib.copy1 = function() {
	this.initialize(img.copy1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,653,55);


(lib.cta_bg = function() {
	this.initialize(img.cta_bg);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,262,62);


(lib.date = function() {
	this.initialize(img.date);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,571,128);


(lib.image1 = function() {
	this.initialize(img.image1);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,105,205);


(lib.image2 = function() {
	this.initialize(img.image2);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,168,185);


(lib.image3 = function() {
	this.initialize(img.image3);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,130,236);


(lib.image4 = function() {
	this.initialize(img.image4);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,117,239);


(lib.image5 = function() {
	this.initialize(img.image5);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,161,217);


(lib.learnmore = function() {
	this.initialize(img.learnmore);
}).prototype = p = new cjs.Bitmap();
p.nominalBounds = new cjs.Rectangle(0,0,190,31);// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop, this.reversed));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.Symbol37 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image4();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol37, new cjs.Rectangle(0,0,117,239), null);


(lib.Symbol35 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("rgba(0,0,0,0.6)").s().p("EhzfAhSMAAAhCkMDm/AAAMAAABCkg");
	this.shape.setTransform(739.175,213.05);

	this.timeline.addTween(cjs.Tween.get(this.shape).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol35, new cjs.Rectangle(0,0,1478.4,426.1), null);


(lib.Symbol34 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fire_big();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol34, new cjs.Rectangle(0,0,591,189), null);


(lib.Symbol33 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.copy1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol33, new cjs.Rectangle(0,0,653,55), null);


(lib.Symbol31 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image5();
	this.instance.setTransform(400,21);

	this.instance_1 = new lib.image4();
	this.instance_1.setTransform(316,0);

	this.instance_2 = new lib.image3();
	this.instance_2.setTransform(198,3);

	this.instance_3 = new lib.image2();
	this.instance_3.setTransform(51,53);

	this.instance_4 = new lib.image1();
	this.instance_4.setTransform(0,33);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_4},{t:this.instance_3},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol31, new cjs.Rectangle(0,0,561,239), null);


(lib.Symbol29 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.learnmore();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol29, new cjs.Rectangle(0,0,95,15.5), null);


(lib.Symbol27 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.ball();
	this.instance.setTransform(0,0,0.5,0.5);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol27, new cjs.Rectangle(0,0,15,14.5), null);


(lib.Symbol26 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.block_logo();
	this.instance.setTransform(0,0,0.5128,0.5127);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol26, new cjs.Rectangle(0,0,80,34.4), null);


(lib.Symbol24 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fire_small();
	this.instance.setTransform(0,0,0.203,0.2026);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol24, new cjs.Rectangle(0,0,120,38.3), null);


(lib.Symbol23 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.date();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol23, new cjs.Rectangle(0,0,571,128), null);


(lib.Symbol22 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.arcade_fireandmore();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol22, new cjs.Rectangle(0,0,786,71), null);


(lib.Symbol16 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image2();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol16, new cjs.Rectangle(0,0,168,185), null);


(lib.Symbol15 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image1();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol15, new cjs.Rectangle(0,0,105,205), null);


(lib.Symbol14 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image3();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol14, new cjs.Rectangle(0,0,130,236), null);


(lib.Symbol10 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.image5();

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol10, new cjs.Rectangle(0,0,161,217), null);


(lib.Symbol25 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	// Layer_1
	this.instance = new lib.Symbol24();
	this.instance.setTransform(60,19.2,1,1,0,0,0,60,19.2);

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(1));

	this._renderFirstFrame();

}).prototype = getMCSymbolPrototype(lib.Symbol25, new cjs.Rectangle(0,0,120,38.3), null);


// stage content:
(lib._970x250 = function(mode,startPosition,loop,reversed) {
if (loop == null) { loop = true; }
if (reversed == null) { reversed = false; }
	var props = new Object();
	props.mode = mode;
	props.startPosition = startPosition;
	props.labels = {};
	props.loop = loop;
	props.reversed = reversed;
	cjs.MovieClip.apply(this,[props]);

	this.actionFrames = [128];
	// timeline functions:
	this.frame_128 = function() {
		this.stop();
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).wait(128).call(this.frame_128).wait(1));

	// intro_logo
	this.instance = new lib.Symbol34();
	this.instance.setTransform(584.85,173.3,0.5973,0.5971,0,0,0,296.1,94.9);
	this.instance.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance).to({x:485.35,alpha:1},14,cjs.Ease.quintIn).to({regX:296.4,regY:94.8,scaleX:0.714,scaleY:0.7134,x:485.65,y:161.05},33).to({x:1213.65},10,cjs.Ease.quadIn).wait(72));

	// intro_text
	this.instance_1 = new lib.Symbol33();
	this.instance_1.setTransform(317.75,63.4,0.7029,0.7018,0,0,0,326.9,27.9);
	this.instance_1.alpha = 0;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).to({x:485.25,alpha:1},14,cjs.Ease.quintIn).to({regX:327,regY:28.2,scaleX:0.8867,scaleY:0.8845,x:485.45,y:55.85},33).to({x:-297.05},10,cjs.Ease.quadIn).wait(72));

	// cover
	this.instance_2 = new lib.Symbol35();
	this.instance_2.setTransform(484.95,125.05,1,1,0,0,0,739.1,213.1);

	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(47).to({alpha:0},10,cjs.Ease.quadIn).wait(72));

	// intro
	this.instance_3 = new lib.Symbol31();
	this.instance_3.setTransform(484.8,202.75,2.3468,2.3458,0,0,0,280.4,119.5);

	this.timeline.addTween(cjs.Tween.get(this.instance_3).to({regX:280.5,scaleX:1.7861,scaleY:1.7853,x:485,y:208.65},47,cjs.Ease.quadOut).to({scaleX:3.0838,scaleY:3.0817,y:125,alpha:0},10,cjs.Ease.quadIn).wait(72));

	// Layer_18 (mask)
	var mask = new cjs.Shape();
	mask._off = true;
	var mask_graphics_104 = new cjs.Graphics().p("EAutAR9IAAkVIRPAAIAAEVg");

	this.timeline.addTween(cjs.Tween.get(mask).to({graphics:null,x:0,y:0}).wait(104).to({graphics:mask_graphics_104,x:409.25,y:114.95}).wait(25));

	// learnmore
	this.instance_4 = new lib.Symbol29();
	this.instance_4.setTransform(764.5,198.8,1,1,0,0,0,47.5,7.8);
	this.instance_4._off = true;

	var maskedShapeInstanceList = [this.instance_4];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(104).to({_off:false},0).to({y:220.8},9).wait(16));

	// Layer_15 (mask)
	var mask_1 = new cjs.Shape();
	mask_1._off = true;
	var mask_1_graphics_83 = new cjs.Graphics().p("EAweAQxIAAjIILGAAIAADIg");
	var mask_1_graphics_84 = new cjs.Graphics().p("EAw7AQ7IAAjVILFAAIAADVg");
	var mask_1_graphics_85 = new cjs.Graphics().p("EAxXARFIAAjiILGAAIAADig");
	var mask_1_graphics_86 = new cjs.Graphics().p("EAxyARPIAAjvILHAAIAADvg");
	var mask_1_graphics_87 = new cjs.Graphics().p("EAyOARZIAAj8ILGAAIAAD8g");
	var mask_1_graphics_88 = new cjs.Graphics().p("EAyqARjIAAkJILGAAIAAEJg");
	var mask_1_graphics_89 = new cjs.Graphics().p("EAzHARuIAAkWILGAAIAAEWg");
	var mask_1_graphics_90 = new cjs.Graphics().p("EAzjAR4IAAkjILGAAIAAEjg");
	var mask_1_graphics_91 = new cjs.Graphics().p("EAz+ASCIAAkwILGAAIAAEwg");
	var mask_1_graphics_92 = new cjs.Graphics().p("EA0aASMIAAk9ILGAAIAAE9g");
	var mask_1_graphics_93 = new cjs.Graphics().p("EA03ASXIAAlLILFAAIAAFLg");

	this.timeline.addTween(cjs.Tween.get(mask_1).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_1_graphics_83,x:381.25,y:107.275}).wait(1).to({graphics:mask_1_graphics_84,x:384.05,y:108.2884}).wait(1).to({graphics:mask_1_graphics_85,x:386.85,y:109.3017}).wait(1).to({graphics:mask_1_graphics_86,x:389.65,y:110.3151}).wait(1).to({graphics:mask_1_graphics_87,x:392.45,y:111.3285}).wait(1).to({graphics:mask_1_graphics_88,x:395.25,y:112.3418}).wait(1).to({graphics:mask_1_graphics_89,x:398.05,y:113.3552}).wait(1).to({graphics:mask_1_graphics_90,x:400.85,y:114.3686}).wait(1).to({graphics:mask_1_graphics_91,x:403.65,y:115.382}).wait(1).to({graphics:mask_1_graphics_92,x:406.45,y:116.3953}).wait(1).to({graphics:mask_1_graphics_93,x:409.25,y:117.4499}).wait(36));

	// Layer_13
	this.instance_5 = new lib.ball();
	this.instance_5.setTransform(750,205);
	this.instance_5._off = true;

	var maskedShapeInstanceList = [this.instance_5];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_1;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(83).to({_off:false},0).wait(46));

	// Layer_16_copy (mask)
	var mask_2 = new cjs.Shape();
	mask_2._off = true;
	var mask_2_graphics_83 = new cjs.Graphics().p("EA7OARGIAAjIIAoAAIAADIg");
	var mask_2_graphics_84 = new cjs.Graphics().p("EA5nARFIAAjIICvAAIAADIg");
	var mask_2_graphics_85 = new cjs.Graphics().p("EA4BAREIAAjIIE2AAIAADIg");
	var mask_2_graphics_86 = new cjs.Graphics().p("EA2aARDIAAjIIG9AAIAADIg");
	var mask_2_graphics_87 = new cjs.Graphics().p("EA00ARCIAAjIIJEAAIAADIg");
	var mask_2_graphics_88 = new cjs.Graphics().p("EAzNARBIAAjIILLAAIAADIg");
	var mask_2_graphics_89 = new cjs.Graphics().p("EAxnARAIAAjIINSAAIAADIg");
	var mask_2_graphics_90 = new cjs.Graphics().p("EAwAAQ/IAAjIIPZAAIAADIg");
	var mask_2_graphics_91 = new cjs.Graphics().p("EAuaAQ+IAAjIIRgAAIAADIg");
	var mask_2_graphics_92 = new cjs.Graphics().p("EAszAQ9IAAjIITnAAIAADIg");
	var mask_2_graphics_93 = new cjs.Graphics().p("EArfAQ8IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_2).to({graphics:null,x:0,y:0}).wait(83).to({graphics:mask_2_graphics_83,x:382.9999,y:109.425}).wait(1).to({graphics:mask_2_graphics_84,x:386.2487,y:109.325}).wait(1).to({graphics:mask_2_graphics_85,x:389.4975,y:109.225}).wait(1).to({graphics:mask_2_graphics_86,x:392.7464,y:109.125}).wait(1).to({graphics:mask_2_graphics_87,x:395.9952,y:109.025}).wait(1).to({graphics:mask_2_graphics_88,x:399.244,y:108.925}).wait(1).to({graphics:mask_2_graphics_89,x:402.4928,y:108.825}).wait(1).to({graphics:mask_2_graphics_90,x:405.7416,y:108.725}).wait(1).to({graphics:mask_2_graphics_91,x:408.9905,y:108.625}).wait(1).to({graphics:mask_2_graphics_92,x:412.2393,y:108.525}).wait(1).to({graphics:mask_2_graphics_93,x:417.2501,y:108.425}).wait(36));

	// Layer_14_copy
	this.instance_6 = new lib.cta_bg();
	this.instance_6.setTransform(698,204,0.5,0.5);
	this.instance_6._off = true;

	var maskedShapeInstanceList = [this.instance_6];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_2;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(83).to({_off:false},0).wait(46));

	// Layer_16_copy (mask)
	var mask_3 = new cjs.Shape();
	mask_3._off = true;
	var mask_3_graphics_88 = new cjs.Graphics().p("EA7OARdIAAjIIAoAAIAADIg");
	var mask_3_graphics_89 = new cjs.Graphics().p("EA5nARdIAAjIICvAAIAADIg");
	var mask_3_graphics_90 = new cjs.Graphics().p("EA4BARcIAAjIIE2AAIAADIg");
	var mask_3_graphics_91 = new cjs.Graphics().p("EA2aARbIAAjIIG9AAIAADIg");
	var mask_3_graphics_92 = new cjs.Graphics().p("EA00ARaIAAjIIJEAAIAADIg");
	var mask_3_graphics_93 = new cjs.Graphics().p("EAzNARZIAAjIILLAAIAADIg");
	var mask_3_graphics_94 = new cjs.Graphics().p("EAxnARYIAAjIINSAAIAADIg");
	var mask_3_graphics_95 = new cjs.Graphics().p("EAwAARXIAAjIIPZAAIAADIg");
	var mask_3_graphics_96 = new cjs.Graphics().p("EAuaARXIAAjIIRgAAIAADIg");
	var mask_3_graphics_97 = new cjs.Graphics().p("EAszARWIAAjIITnAAIAADIg");
	var mask_3_graphics_98 = new cjs.Graphics().p("EArfARVIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_3).to({graphics:null,x:0,y:0}).wait(88).to({graphics:mask_3_graphics_88,x:382.9999,y:111.75}).wait(1).to({graphics:mask_3_graphics_89,x:386.2487,y:111.6625}).wait(1).to({graphics:mask_3_graphics_90,x:389.4975,y:111.575}).wait(1).to({graphics:mask_3_graphics_91,x:392.7464,y:111.4875}).wait(1).to({graphics:mask_3_graphics_92,x:395.9952,y:111.4}).wait(1).to({graphics:mask_3_graphics_93,x:399.244,y:111.3125}).wait(1).to({graphics:mask_3_graphics_94,x:402.4928,y:111.225}).wait(1).to({graphics:mask_3_graphics_95,x:405.7416,y:111.1375}).wait(1).to({graphics:mask_3_graphics_96,x:408.9905,y:111.05}).wait(1).to({graphics:mask_3_graphics_97,x:412.2393,y:110.9625}).wait(1).to({graphics:mask_3_graphics_98,x:417.2501,y:110.875}).wait(31));

	// Layer_14_copy
	this.instance_7 = new lib.cta_bg();
	this.instance_7.setTransform(698,204,0.5,0.5);
	this.instance_7._off = true;

	var maskedShapeInstanceList = [this.instance_7];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_3;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(88).to({_off:false},0).wait(41));

	// Layer_16_copy (mask)
	var mask_4 = new cjs.Shape();
	mask_4._off = true;
	var mask_4_graphics_91 = new cjs.Graphics().p("EA7OARyIAAjIIAoAAIAADIg");
	var mask_4_graphics_92 = new cjs.Graphics().p("EA5nARxIAAjIICvAAIAADIg");
	var mask_4_graphics_93 = new cjs.Graphics().p("EA4BARwIAAjIIE2AAIAADIg");
	var mask_4_graphics_94 = new cjs.Graphics().p("EA2aARvIAAjIIG9AAIAADIg");
	var mask_4_graphics_95 = new cjs.Graphics().p("EA00ARuIAAjIIJEAAIAADIg");
	var mask_4_graphics_96 = new cjs.Graphics().p("EAzNARtIAAjIILLAAIAADIg");
	var mask_4_graphics_97 = new cjs.Graphics().p("EAxnARsIAAjIINSAAIAADIg");
	var mask_4_graphics_98 = new cjs.Graphics().p("EAwAARrIAAjIIPZAAIAADIg");
	var mask_4_graphics_99 = new cjs.Graphics().p("EAuaARqIAAjIIRgAAIAADIg");
	var mask_4_graphics_100 = new cjs.Graphics().p("EAszARqIAAjIITnAAIAADIg");
	var mask_4_graphics_101 = new cjs.Graphics().p("EArfARpIAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_4).to({graphics:null,x:0,y:0}).wait(91).to({graphics:mask_4_graphics_91,x:382.9999,y:113.75}).wait(1).to({graphics:mask_4_graphics_92,x:386.2487,y:113.6625}).wait(1).to({graphics:mask_4_graphics_93,x:389.4975,y:113.575}).wait(1).to({graphics:mask_4_graphics_94,x:392.7464,y:113.4875}).wait(1).to({graphics:mask_4_graphics_95,x:395.9952,y:113.4}).wait(1).to({graphics:mask_4_graphics_96,x:399.244,y:113.3125}).wait(1).to({graphics:mask_4_graphics_97,x:402.4928,y:113.225}).wait(1).to({graphics:mask_4_graphics_98,x:405.7416,y:113.1375}).wait(1).to({graphics:mask_4_graphics_99,x:408.9905,y:113.05}).wait(1).to({graphics:mask_4_graphics_100,x:412.2393,y:112.9625}).wait(1).to({graphics:mask_4_graphics_101,x:417.2501,y:112.875}).wait(28));

	// Layer_14_copy
	this.instance_8 = new lib.cta_bg();
	this.instance_8.setTransform(698,207,0.5,0.5);
	this.instance_8._off = true;

	var maskedShapeInstanceList = [this.instance_8];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_4;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(91).to({_off:false},0).wait(38));

	// Layer_16 (mask)
	var mask_5 = new cjs.Shape();
	mask_5._off = true;
	var mask_5_graphics_94 = new cjs.Graphics().p("EA7OAS8IAAjIIAoAAIAADIg");
	var mask_5_graphics_95 = new cjs.Graphics().p("EA5nAS8IAAjIICvAAIAADIg");
	var mask_5_graphics_96 = new cjs.Graphics().p("EA4BAS7IAAjIIE2AAIAADIg");
	var mask_5_graphics_97 = new cjs.Graphics().p("EA2aAS6IAAjIIG9AAIAADIg");
	var mask_5_graphics_98 = new cjs.Graphics().p("EA00AS5IAAjIIJEAAIAADIg");
	var mask_5_graphics_99 = new cjs.Graphics().p("EAzNAS4IAAjIILLAAIAADIg");
	var mask_5_graphics_100 = new cjs.Graphics().p("EAxnAS3IAAjIINSAAIAADIg");
	var mask_5_graphics_101 = new cjs.Graphics().p("EAwAAS2IAAjIIPZAAIAADIg");
	var mask_5_graphics_102 = new cjs.Graphics().p("EAuaAS2IAAjIIRgAAIAADIg");
	var mask_5_graphics_103 = new cjs.Graphics().p("EAszAS1IAAjIITnAAIAADIg");
	var mask_5_graphics_104 = new cjs.Graphics().p("EArfAS0IAAjIIVtAAIAADIg");

	this.timeline.addTween(cjs.Tween.get(mask_5).to({graphics:null,x:0,y:0}).wait(94).to({graphics:mask_5_graphics_94,x:382.9999,y:121.25}).wait(1).to({graphics:mask_5_graphics_95,x:386.2487,y:121.1625}).wait(1).to({graphics:mask_5_graphics_96,x:389.4975,y:121.075}).wait(1).to({graphics:mask_5_graphics_97,x:392.7464,y:120.9875}).wait(1).to({graphics:mask_5_graphics_98,x:395.9952,y:120.9}).wait(1).to({graphics:mask_5_graphics_99,x:399.244,y:120.8125}).wait(1).to({graphics:mask_5_graphics_100,x:402.4928,y:120.725}).wait(1).to({graphics:mask_5_graphics_101,x:405.7416,y:120.6375}).wait(1).to({graphics:mask_5_graphics_102,x:408.9905,y:120.55}).wait(1).to({graphics:mask_5_graphics_103,x:412.2393,y:120.4625}).wait(1).to({graphics:mask_5_graphics_104,x:417.2501,y:120.375}).wait(25));

	// Layer_14
	this.instance_9 = new lib.cta_bg();
	this.instance_9.setTransform(698,207,0.5,0.5);
	this.instance_9._off = true;

	var maskedShapeInstanceList = [this.instance_9];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_5;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(94).to({_off:false},0).wait(35));

	// ball
	this.instance_10 = new lib.Symbol27();
	this.instance_10.setTransform(778.9,23.95,1,1,0,0,0,7.5,7.2);
	this.instance_10._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(75).to({_off:false},0).wait(1).to({x:791.3,y:28.6},0).wait(1).to({x:800.6,y:31.55},0).wait(1).to({x:808.4,y:33.6},0).wait(1).to({x:815.25,y:35.15},0).wait(1).to({x:821.3,y:36.25},0).wait(1).to({x:826.7,y:37.05},0).wait(1).to({x:831.65,y:37.65},0).wait(1).to({x:836.15,y:37.95},0).wait(1).to({x:840.35,y:38.1},0).wait(1).to({x:844.35,y:38},0).wait(1).to({x:848.3,y:37.7},0).wait(1).to({x:852.4,y:37.15},0).wait(1).to({x:857,y:36.2},0).wait(41));

	// Layer_9_copy (mask)
	var mask_6 = new cjs.Shape();
	mask_6._off = true;
	var mask_6_graphics_75 = new cjs.Graphics().p("EA2PAFWIAAj0INcAAIAAD0g");
	var mask_6_graphics_88 = new cjs.Graphics().p("AmtB6IAAjzINbAAIAADzg");

	this.timeline.addTween(cjs.Tween.get(mask_6).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_6_graphics_75,x:433.075,y:34.25}).wait(13).to({graphics:mask_6_graphics_88,x:823.15,y:56.25}).wait(41));

	// block_logo_copy
	this.instance_11 = new lib.Symbol26();
	this.instance_11.setTransform(825,-0.8,1,1,0,0,0,40,17.2);
	this.instance_11._off = true;

	var maskedShapeInstanceList = [this.instance_11];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_6;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(75).to({_off:false},0).to({y:41.2},13).wait(41));

	// Layer_9 (mask)
	var mask_7 = new cjs.Shape();
	mask_7._off = true;
	var mask_7_graphics_75 = new cjs.Graphics().p("EA3AADYIAAj0IL4AAIAAD0g");
	var mask_7_graphics_88 = new cjs.Graphics().p("Al7B7IAAj1IL3AAIAAD1g");

	this.timeline.addTween(cjs.Tween.get(mask_7).to({graphics:null,x:0,y:0}).wait(75).to({graphics:mask_7_graphics_75,x:428.049,y:21.625}).wait(13).to({graphics:mask_7_graphics_88,x:818.075,y:31}).wait(41));

	// block_logo
	this.instance_12 = new lib.Symbol26();
	this.instance_12.setTransform(825,61.2,1,1,0,0,0,40,17.2);
	this.instance_12._off = true;

	var maskedShapeInstanceList = [this.instance_12];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_7;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(75).to({_off:false},0).to({y:41.2},13).wait(41));

	// Layer_7_copy (mask)
	var mask_8 = new cjs.Shape();
	mask_8._off = true;
	var mask_8_graphics_70 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_8).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_8_graphics_70,x:705.65,y:29}).wait(59));

	// small_arcade_logo_copy
	this.instance_13 = new lib.Symbol25();
	this.instance_13.setTransform(707,65.2,1,1,0,0,0,60,19.2);
	this.instance_13._off = true;

	var maskedShapeInstanceList = [this.instance_13];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_8;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(70).to({_off:false},0).to({y:41.2},12).wait(47));

	// Layer_7 (mask)
	var mask_9 = new cjs.Shape();
	mask_9._off = true;
	var mask_9_graphics_70 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");
	var mask_9_graphics_82 = new cjs.Graphics().p("AqRB6IAAj0IUiAAIAAD0g");

	this.timeline.addTween(cjs.Tween.get(mask_9).to({graphics:null,x:0,y:0}).wait(70).to({graphics:mask_9_graphics_70,x:705.65,y:50.25}).wait(12).to({graphics:mask_9_graphics_82,x:705.65,y:50.25}).wait(47));

	// small_arcade_logo
	this.instance_14 = new lib.Symbol25();
	this.instance_14.setTransform(707,-1.8,1,1,0,0,0,60,19.2);
	this.instance_14._off = true;

	var maskedShapeInstanceList = [this.instance_14];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_9;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(70).to({_off:false},0).to({y:41.2},12).wait(47));

	// date
	this.instance_15 = new lib.Symbol23();
	this.instance_15.setTransform(766.15,145.9,0.4991,0.4988,0,0,0,285.5,64);
	this.instance_15.alpha = 0;
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(65).to({_off:false},0).to({y:158.9,alpha:1},14,cjs.Ease.quadOut).wait(50));

	// arcade_fireandmore
	this.instance_16 = new lib.Symbol22();
	this.instance_16.setTransform(811.8,76.9,1,1,0,0,0,393,35.5);
	this.instance_16.alpha = 0;
	this.instance_16._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(58).to({_off:false},0).to({scaleX:0.5,scaleY:0.5,x:759.45,y:93.85,alpha:1},21,cjs.Ease.quadOut).wait(50));

	// band_3
	this.instance_17 = new lib.Symbol14();
	this.instance_17.setTransform(263.05,133.05,1.2713,1.2713,0,0,0,65,118);
	this.instance_17.alpha = 0;
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(53).to({_off:false},0).to({scaleX:1,scaleY:1,x:263,y:133,alpha:1},8).to({x:261},47).to({_off:true},16).wait(5));

	// Layer_8 (mask)
	var mask_10 = new cjs.Shape();
	mask_10._off = true;
	var mask_10_graphics_61 = new cjs.Graphics().p("AzhTnIAA/sMAnDAAAIAAfsg");

	this.timeline.addTween(cjs.Tween.get(mask_10).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_10_graphics_61,x:125.0113,y:125.475}).wait(68));

	// Layer_11
	this.instance_18 = new lib.Symbol15();
	this.instance_18.setTransform(273.5,148.5,1,1,0,0,0,52.5,102.5);
	this.instance_18._off = true;

	var maskedShapeInstanceList = [this.instance_18];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(61).to({_off:false},0).to({x:52.5},7,cjs.Ease.quintOut).to({x:48.5},40).to({_off:true},16).wait(5));

	// band_2
	this.instance_19 = new lib.Symbol16();
	this.instance_19.setTransform(305,158.5,1,1,0,0,0,84,92.5);
	this.instance_19._off = true;

	var maskedShapeInstanceList = [this.instance_19];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_10;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(61).to({_off:false},0).to({x:135},7,cjs.Ease.quintOut).to({x:131},40).to({_off:true},16).wait(5));

	// Layer_17 (mask)
	var mask_11 = new cjs.Shape();
	mask_11._off = true;
	var mask_11_graphics_61 = new cjs.Graphics().p("AiiUZMAAAgoxMAvpAAAMAAAAoxg");

	this.timeline.addTween(cjs.Tween.get(mask_11).to({graphics:null,x:0,y:0}).wait(61).to({graphics:mask_11_graphics_61,x:288.6829,y:130.525}).wait(68));

	// band_5
	this.instance_20 = new lib.Symbol10();
	this.instance_20.setTransform(288.5,142.5,1,1,0,0,0,80.5,108.5);
	this.instance_20._off = true;

	var maskedShapeInstanceList = [this.instance_20];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(61).to({_off:false},0).to({x:472.5},7,cjs.Ease.quintOut).to({x:476.5},40).to({_off:true},16).wait(5));

	// band_4
	this.instance_21 = new lib.Symbol37();
	this.instance_21.setTransform(266.5,131.5,1,1,0,0,0,58.5,119.5);
	this.instance_21._off = true;

	var maskedShapeInstanceList = [this.instance_21];

	for(var shapedInstanceItr = 0; shapedInstanceItr < maskedShapeInstanceList.length; shapedInstanceItr++) {
		maskedShapeInstanceList[shapedInstanceItr].mask = mask_11;
	}

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(61).to({_off:false},0).to({x:369.5},7,cjs.Ease.quintOut).to({x:373.5},40).to({_off:true},16).wait(5));

	this._renderFirstFrame();

}).prototype = p = new lib.AnMovieClip();
p.nominalBounds = new cjs.Rectangle(-102,-118.2,1526,611.5);
// library properties:
lib.properties = {
	id: '912F7F30324E4BBA984A1933665BE2EE',
	width: 970,
	height: 250,
	fps: 24,
	color: "#000000",
	opacity: 1.00,
	manifest: [
		{src:"arcade_fire_big.png?1650399555281", id:"arcade_fire_big"},
		{src:"arcade_fire_small.png?1650399555281", id:"arcade_fire_small"},
		{src:"arcade_fireandmore.png?1650399555281", id:"arcade_fireandmore"},
		{src:"ball.png?1650399555281", id:"ball"},
		{src:"block_logo.png?1650399555281", id:"block_logo"},
		{src:"copy1.png?1650399555281", id:"copy1"},
		{src:"cta_bg.png?1650399555281", id:"cta_bg"},
		{src:"date.png?1650399555281", id:"date"},
		{src:"image1.png?1650399555281", id:"image1"},
		{src:"image2.png?1650399555281", id:"image2"},
		{src:"image3.png?1650399555281", id:"image3"},
		{src:"image4.png?1650399555281", id:"image4"},
		{src:"image5.png?1650399555281", id:"image5"},
		{src:"learnmore.png?1650399555281", id:"learnmore"}
	],
	preloads: []
};



// bootstrap callback support:

(lib.Stage = function(canvas) {
	createjs.Stage.call(this, canvas);
}).prototype = p = new createjs.Stage();

p.setAutoPlay = function(autoPlay) {
	this.tickEnabled = autoPlay;
}
p.play = function() { this.tickEnabled = true; this.getChildAt(0).gotoAndPlay(this.getTimelinePosition()) }
p.stop = function(ms) { if(ms) this.seek(ms); this.tickEnabled = false; }
p.seek = function(ms) { this.tickEnabled = true; this.getChildAt(0).gotoAndStop(lib.properties.fps * ms / 1000); }
p.getDuration = function() { return this.getChildAt(0).totalFrames / lib.properties.fps * 1000; }

p.getTimelinePosition = function() { return this.getChildAt(0).currentFrame / lib.properties.fps * 1000; }

an.bootcompsLoaded = an.bootcompsLoaded || [];
if(!an.bootstrapListeners) {
	an.bootstrapListeners=[];
}

an.bootstrapCallback=function(fnCallback) {
	an.bootstrapListeners.push(fnCallback);
	if(an.bootcompsLoaded.length > 0) {
		for(var i=0; i<an.bootcompsLoaded.length; ++i) {
			fnCallback(an.bootcompsLoaded[i]);
		}
	}
};

an.compositions = an.compositions || {};
an.compositions['912F7F30324E4BBA984A1933665BE2EE'] = {
	getStage: function() { return exportRoot.stage; },
	getLibrary: function() { return lib; },
	getSpriteSheet: function() { return ss; },
	getImages: function() { return img; }
};

an.compositionLoaded = function(id) {
	an.bootcompsLoaded.push(id);
	for(var j=0; j<an.bootstrapListeners.length; j++) {
		an.bootstrapListeners[j](id);
	}
}

an.getComposition = function(id) {
	return an.compositions[id];
}


an.makeResponsive = function(isResp, respDim, isScale, scaleType, domContainers) {		
	var lastW, lastH, lastS=1;		
	window.addEventListener('resize', resizeCanvas);		
	resizeCanvas();		
	function resizeCanvas() {			
		var w = lib.properties.width, h = lib.properties.height;			
		var iw = window.innerWidth, ih=window.innerHeight;			
		var pRatio = window.devicePixelRatio || 1, xRatio=iw/w, yRatio=ih/h, sRatio=1;			
		if(isResp) {                
			if((respDim=='width'&&lastW==iw) || (respDim=='height'&&lastH==ih)) {                    
				sRatio = lastS;                
			}				
			else if(!isScale) {					
				if(iw<w || ih<h)						
					sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==1) {					
				sRatio = Math.min(xRatio, yRatio);				
			}				
			else if(scaleType==2) {					
				sRatio = Math.max(xRatio, yRatio);				
			}			
		}
		domContainers[0].width = w * pRatio * sRatio;			
		domContainers[0].height = h * pRatio * sRatio;
		domContainers.forEach(function(container) {				
			container.style.width = w * sRatio + 'px';				
			container.style.height = h * sRatio + 'px';			
		});
		stage.scaleX = pRatio*sRatio;			
		stage.scaleY = pRatio*sRatio;
		lastW = iw; lastH = ih; lastS = sRatio;            
		stage.tickOnUpdate = false;            
		stage.update();            
		stage.tickOnUpdate = true;		
	}
}
an.handleSoundStreamOnTick = function(event) {
	if(!event.paused){
		var stageChild = stage.getChildAt(0);
		if(!stageChild.paused || stageChild.ignorePause){
			stageChild.syncStreamSounds();
		}
	}
}
an.handleFilterCache = function(event) {
	if(!event.paused){
		var target = event.target;
		if(target){
			if(target.filterCacheList){
				for(var index = 0; index < target.filterCacheList.length ; index++){
					var cacheInst = target.filterCacheList[index];
					if((cacheInst.startFrame <= target.currentFrame) && (target.currentFrame <= cacheInst.endFrame)){
						cacheInst.instance.cache(cacheInst.x, cacheInst.y, cacheInst.w, cacheInst.h);
					}
				}
			}
		}
	}
}


})(createjs = createjs||{}, AdobeAn = AdobeAn||{});
var createjs, AdobeAn;