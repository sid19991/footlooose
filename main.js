var game = new Phaser.Game(800,600,Phaser.CANVAS,'gameDiv');
var background;
var player;
var nav;
var key0;
var key1;
var key2;
var key3;
var key4;
var key5;
var key6;
var key7;
var key8;
var key9;
var number=[];
var gamepad = [];
var man;
var text;
var times =0;
var mainState={
	preload:function(){
		game.load.image("0","images/numbers/number-0.svg");
		game.load.image("1","images/numbers/number-1.svg");
		game.load.image("2","images/numbers/number-2.svg");
		game.load.image("3","images/numbers/number-3.svg");
		game.load.image("4","images/numbers/number-4.svg");
		game.load.image("5","images/numbers/number-5.svg");
		game.load.image("6","images/numbers/number-6.svg");
		game.load.image("7","images/numbers/number-7.svg");
		game.load.image("8","images/numbers/number-8.svg");
		game.load.image("9","images/numbers/number-9.svg");
		game.load.image("green","images/pads/ballgreen.svg");
		game.load.image("red","images/pads/ballred.svg");
		game.load.image('back',"images/background.svg");
		game.load.image("nav","images/nav.svg");
		game.load.image("walk","images/positions/walk.svg");
		game.load.image("jump","images/positions/jump.svg");
	},
	create:function(){
		background = game.add.tileSprite(0,0,800,600,"back");
		 nav = game.add.sprite(0,500,"nav");
		 var x = 200;
		 var y=550;
		 gamepad[0]=game.add.sprite(x-5,y-5,"green");
		 number[0]=game.add.sprite(x,y,"0");
		 x+=50
		for(var i =1;i<10;i++){
			gamepad[i]=game.add.sprite(x-5,y-5,"green");
			gamepad[i].inputEnabled = true;
			number[i]=game.add.sprite(x,y,i);
			x+=50;
		}
		key0=game.input.keyboard.addKey(Phaser.Keyboard.ZERO);
		key0.onDown.add(function(){verify(0)}, this);
		key1=game.input.keyboard.addKey(Phaser.Keyboard.ONE);
		key1.onDown.add(function(){verify(1)}, this);
		
		key2=game.input.keyboard.addKey(Phaser.Keyboard.TWO);
		key2.onDown.add(function(){verify(2)}, this);

		key3=game.input.keyboard.addKey(Phaser.Keyboard.THREE);
		key3.onDown.add(function(){verify(3)}, this);
		
		key4=game.input.keyboard.addKey(Phaser.Keyboard.FOUR);
		key4.onDown.add(function(){verify(4)}, this);
		
		key5=game.input.keyboard.addKey(Phaser.Keyboard.FIVE);
		key5.onDown.add(function(){verify(5)}, this);
		
		key6=game.input.keyboard.addKey(Phaser.Keyboard.SIX);
		key6.onDown.add(function(){verify(6)}, this);
		
		key7=game.input.keyboard.addKey(Phaser.Keyboard.SEVEN);
		key7.onDown.add(function(){verify(7)}, this);
		
		key8=game.input.keyboard.addKey(Phaser.Keyboard.EIGHT);
		key8.onDown.add(function(){verify(8)}, this);
		
		key9=game.input.keyboard.addKey(Phaser.Keyboard.NINE);
		key9.onDown.add(function(){verify(9)}, this);
		man = game.add.sprite(320,225,"walk");
		text = game.add.text(0,0,"Points:"+times,{fill:"white",fontSize:20+"px"});
		game.time.events.repeat(Phaser.Timer.SECOND*2,Infinity,code,this);
	},
	update:function(){
		// var ra = Math.floor(Math.random()*(10));
		// gamepad[ra].loadTexture('red')
		// setTimeout(function(){
		// 	gamepad[ra].loadTexture('green');
		// },3000);
	}
}
function code(){
	if(man.key=="jump"){
		man.loadTexture('walk');
	}
	else if(man.key="walk"){
		man.loadTexture('jump');
	}
	gamepad.forEach(function(item,index,arr){
		if(item.key=="red"){
			console.log("loading texture")
			item.loadTexture('green');
		}
	})
		 var ra = Math.floor(Math.random()*(10));
		gamepad[ra].loadTexture('red')

}
function verify(t){
	if(gamepad[t].key=="red"){
		gamepad[t].loadTexture('green')
		times++;
		text.text = "Points:"+times;
	}
}
game.state.add('mainState',mainState);
game.state.start('mainState');